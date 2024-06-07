terraform {
  backend "s3" {
    bucket = "prd.terraformstatecloudbenchmark"
    key    = "terraform/cloudbenchmark-front.tfstate"
    region = "eu-west-1"
  }
}
