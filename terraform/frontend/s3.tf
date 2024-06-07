resource "aws_s3_bucket" "website_bucket" {
  bucket = local.bucket_name

  tags = {
    Name        = local.bucket_name
    Environment = terraform.workspace
  }
}