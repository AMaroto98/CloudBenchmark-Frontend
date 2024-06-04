import { IData } from "./IData";

export interface IApiContext {
  filteredData: IData[];
  filterForInstanceName: (name: string) => Promise<void>;
  filterForCloudProvider: (cloudProviders: string[]) => Promise<void>;
}
