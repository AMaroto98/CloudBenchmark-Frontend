output "s3_bucket_name" {
  value       = aws_s3_bucket.website_bucket.bucket
  description = "El nombre del bucket S3."
}

output "cloudfront_distribution_id" {
  value       = aws_cloudfront_distribution.cloudfront_distribution.id
  description = "El ID de la distribución de CloudFront."
}

output "route53_record_name" {
  value       = aws_route53_record.cloudfront_dns.name
  description = "El nombre del registro DNS en Route 53."
}
