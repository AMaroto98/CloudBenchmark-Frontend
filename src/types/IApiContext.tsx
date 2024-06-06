import { IData } from "./IData";

export interface IApiContext {
  filteredData: IData[];
  applyFilters: (
    cloudProviders: string[],
    instanceName: string,
    cpuCores: number | null,
    cpuMark: number | null,
    memSize: number | null,
    memoryMark: number | null
  ) => Promise<void>;
  resetFilters: () => void;
}
