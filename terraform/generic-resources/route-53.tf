resource "aws_route53_zone" "cloudbenchmarkzone" {
  name = var.domain_name
  tags = {
    Proyecto = var.project_name
    Entorno  = var.environment-prd
  }
}
