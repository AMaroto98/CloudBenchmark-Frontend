variable "bucket_names" {
  type = map(string)
  default = {
    "cloudbenchmark-front-dev" = "dev.webcloudbenchmark"
    "cloudbenchmark-front-prd" = "prd.webcloudbenchmark"
  }
}

variable "aliases" {
  type = map(list(string))
  default = {
    "cloudbenchmark-front-dev" = ["dev.cloudbenchmarkzone.com"]
    "cloudbenchmark-front-prd" = ["cloudbenchmarkzone.com"]
  }
}

variable "comentario" {
  type = map(string)
  default = {
    "cloudbenchmark-front-dev" = "CloudFront for dev environment"
    "cloudbenchmark-front-prd" = "CloudFront for production environment"
  }
}

variable "tag_entorno" {
  type = map(string)
  default = {
    "cloudbenchmark-front-dev" = "dev"
    "cloudbenchmark-front-prd" = "prd"
  }
}

variable "tag_proyecto" {
  type = map(string)
  default = {
    "cloudbenchmark-front-dev" = "CloudBenchmark"
    "cloudbenchmark-front-prd" = "CloudBenchmark"
  }
}

variable "certificate" {
  type = map(string)
  default = {
    "cloudbenchmark-front-dev" = "arn:aws:acm:us-east-1:812519637987:certificate/5b945152-1d30-4c9f-82d3-4c172b3e0587"
    "cloudbenchmark-front-prd" = "arn:aws:acm:us-east-1:812519637987:certificate/5b945152-1d30-4c9f-82d3-4c172b3e0587"
  }
}


locals {
  bucket_name        = lookup(var.bucket_names, terraform.workspace, "")
  aliases            = lookup(var.aliases, terraform.workspace, [])
  comentario         = lookup(var.comentario, terraform.workspace, "")
  tag_entorno        = lookup(var.tag_entorno, terraform.workspace, "")
  tag_proyecto       = lookup(var.tag_proyecto, terraform.workspace, "")
  certificate        = lookup(var.certificate, terraform.workspace, "")
}
