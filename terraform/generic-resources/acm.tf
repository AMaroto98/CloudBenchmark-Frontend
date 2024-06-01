# Crear certificado ACM en Irlanda
resource "aws_acm_certificate" "cloudbenchmarkzone_cert_ireland" {
  provider                = aws.ireland
  domain_name             = "cloudbenchmarkzone.com"
  validation_method       = "DNS"
  subject_alternative_names = ["*.cloudbenchmarkzone.com", "www.cloudbenchmarkzone.com"]

  tags = {
    Proyecto = var.project_name
    Entorno  = var.environment-prd
  }
}

# Crear registros de validación DNS en Route 53 para Irlanda
resource "aws_route53_record" "cert_validation_ireland" {
  provider = aws.ireland
  for_each = {
    for dvo in aws_acm_certificate.cloudbenchmarkzone_cert_ireland.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      type   = dvo.resource_record_type
      record = dvo.resource_record_value
    }
  }

  zone_id = aws_route53_zone.cloudbenchmarkzone.zone_id
  name    = each.value.name
  type    = each.value.type
  ttl     = 300
  records = [each.value.record]
}

# Crear certificado ACM en Virginia
resource "aws_acm_certificate" "cloudbenchmarkzone_cert_virginia" {
  provider                = aws.virginia
  domain_name             = "cloudbenchmarkzone.com"
  validation_method       = "DNS"
  subject_alternative_names = ["*.cloudbenchmarkzone.com", "www.cloudbenchmarkzone.com"]

  tags = {
    Proyecto = var.project_name
    Entorno  = var.environment-prd
  }
}

# Crear registros de validación DNS en Route 53 para Virginia
resource "aws_route53_record" "cert_validation_virginia" {
  provider = aws.virginia
  for_each = {
    for dvo in aws_acm_certificate.cloudbenchmarkzone_cert_virginia.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      type   = dvo.resource_record_type
      record = dvo.resource_record_value
    }
  }

  zone_id = aws_route53_zone.cloudbenchmarkzone.zone_id
  name    = each.value.name
  type    = each.value.type
  ttl     = 300
  records = [each.value.record]
}


