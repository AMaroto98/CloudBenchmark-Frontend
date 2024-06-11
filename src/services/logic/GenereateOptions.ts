// src/data/options.ts
import { IData } from "../../types/IData";
import { IOptionNumberSelect } from "../../types/IOptionNumberSelect";
import { IOptionStringSelect } from "../../types/IOptionStringSelect";
import { getData } from "../http/api";

let cloudProviderOptions: IOptionStringSelect[] = [];

async function fetchAndGenerateOptions() {
  try {
    const data: IData[] = await getData();

    const cloudProviders = new Set<string>();

    data.forEach((element: IData) => {
      if (element.CloudProvider) {
        cloudProviders.add(element.CloudProvider);
      }
    });

    cloudProviderOptions = Array.from(cloudProviders).map((provider) => ({
      value: provider,
      label: provider,
    }));
  } catch (error) {
    console.error("Error fetching data:", error);
    cloudProviderOptions = [];
  }
}

fetchAndGenerateOptions();

export { cloudProviderOptions };

export const generateBase2Options = (
  maxPower: number
): IOptionNumberSelect[] => {
  const options: IOptionNumberSelect[] = [];
  for (let i = 0; i <= maxPower; i++) {
    const value = Math.pow(2, i);
    options.push({ value: value, label: value.toString() });
  }
  return options;
};

export const generateCustomStepOptions = (
  maxValue: number,
  step: number
): IOptionNumberSelect[] => {
  const options: IOptionNumberSelect[] = [];
  for (let value = step; value <= maxValue; value += step) {
    options.push({ value: value, label: value.toString() });
  }
  return options;
};