terraform {
  backend "s3" {
    bucket = "prd.terraformstatecloudbenchmark"
    key    = "terraform/prd/cloudbenchmark.tfstate"
    region = "eu-west-1"
  }
}
