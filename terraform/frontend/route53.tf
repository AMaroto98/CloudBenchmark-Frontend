resource "aws_route53_record" "cloudfront_dns" {
  zone_id = var.dns_zone_id
  name    = local.aliases[0]  # Asumimos que el alias principal es el primero en la lista
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.cloudfront_distribution.domain_name
    zone_id                = aws_cloudfront_distribution.cloudfront_distribution.hosted_zone_id
    evaluate_target_health = false
  }
}
