terraform {
  backend "s3" {
    bucket = "prd.terraformstatecloudbenchmark"
    key    = "terraform/prd/generic-resourcestfstate"
    region = "eu-west-1"
  }
}
