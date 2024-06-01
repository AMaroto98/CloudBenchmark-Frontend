variable "domain_name" {
  description = "The domain name for the Route 53 Hosted Zone"
  default     = "cloudbenchmarkzone.com"
}

variable "project_name" {
  description = "The name of the project"
  default     = "CloudBenchmark"
}


variable "environment-prd" {
  description = "The environment"
  default     = "PRD"
}

variable "environment-dev" {
  description = "The environment"
  default     = "DEV"
}

variable "region" {
  default     = "eu-west-1"
}
