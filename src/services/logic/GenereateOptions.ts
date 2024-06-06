import { IOptionNumberSelect } from "../../types/IOptionNumberSelect";

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
