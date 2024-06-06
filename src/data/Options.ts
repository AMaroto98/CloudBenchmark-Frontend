// src/data/options.ts
import { IOptionStringSelect } from "../types/IOptionStringSelect";

export const cloudProviderOptions: IOptionStringSelect[] = [
  { value: "AWS", label: "AWS" },
  { value: "Azure", label: "Azure" },
  { value: "GCP", label: "GCP" },
];
