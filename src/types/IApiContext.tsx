import { IData } from "./IData";

export interface IApiContext {
  filteredData: IData[];
  applyFilters: (
    cloudProviders: string[],
    instanceName: string
  ) => Promise<void>;
}
