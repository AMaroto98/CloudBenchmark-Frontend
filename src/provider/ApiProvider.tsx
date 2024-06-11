import { createContext, useEffect, useState } from "react";
import { IProvider } from "../types/IProvider";
import { IData } from "../types/IData";
import { IApiContext } from "../types/IApiContext";
import { getData } from "../services/http/api";

export const ApiContext = createContext<IApiContext>({
  filteredData: [],
  applyFilters: async () => {},
  resetFilters: () => {},
});

export function ApiProvider({ children }: IProvider) {
  const [originalData, setOriginalData] = useState<IData[]>([]);
  const [filteredData, setFilteredData] = useState<IData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const newData = await getData();
      setOriginalData(newData);
      setFilteredData(newData);
    };
    fetchData();
  }, []);

  const applyFilters = async (
    cloudProviders: string[],
    instanceName: string,
    cpuCores: number | null,
    cpuMark: number | null,
    memSize: number | null,
    memoryMark: number | null
  ) => {
    let filteredData = originalData;

    if (cloudProviders.length !== 0) {
      filteredData = filteredData.filter((x) =>
        cloudProviders.includes(x.CloudProvider)
      );
    }

    if (instanceName.length !== 0) {
      filteredData = filteredData.filter((x) =>
        x.InstanceName.toLowerCase().includes(instanceName.toLowerCase())
      );
    }

    if (cpuCores !== null) {
      
      filteredData = filteredData.filter((x) => x.CPUCores >= cpuCores);
    }
    
    if (cpuMark !== null) {
      filteredData = filteredData.filter((x) => x.CPUMark >= cpuMark);
    }

    if (memSize !== null) {
      filteredData = filteredData.filter((x) => x.MEMSize >= memSize);
    }

    if (memoryMark !== null) {
      filteredData = filteredData.filter((x) => x.MemoryMark >= memoryMark);
    }

    setFilteredData(filteredData);
  };

  const resetFilters = () => {
    setFilteredData(originalData);
  };

  return (
    <ApiContext.Provider
      value={{
        filteredData,
        applyFilters,
        resetFilters,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
}
