output "zone_id" {
  description = "The ID of the Route 53 Hosted Zone"
  value       = aws_route53_zone.cloudbenchmarkzone.zone_id
}

output "zone_name" {
  description = "The name of the Route 53 Hosted Zone"
  value       = aws_route53_zone.cloudbenchmarkzone.name
}

output "certificate_arn_ireland" {
  description = "The ARN of the ACM certificate in Ireland"
  value       = aws_acm_certificate.cloudbenchmarkzone_cert_ireland.arn
}

output "certificate_arn_virginia" {
  description = "The ARN of the ACM certificate in Virginia"
  value       = aws_acm_certificate.cloudbenchmarkzone_cert_virginia.arn
}

output "validation_records_ireland" {
  description = "DNS records for validating the ACM certificate in Ireland"
  value       = [for record in aws_route53_record.cert_validation_ireland : record.name]
}

output "validation_records_virginia" {
  description = "DNS records for validating the ACM certificate in Virginia"
  value       = [for record in aws_route53_record.cert_validation_virginia : record.name]
}
