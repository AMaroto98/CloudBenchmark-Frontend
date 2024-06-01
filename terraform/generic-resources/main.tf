provider "aws" {
  region = var.region
}

provider "aws" {
  alias  = "ireland"
  region = "eu-west-1"
}

provider "aws" {
  alias  = "virginia"
  region = "us-east-1"
}
