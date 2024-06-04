import { createContext, useEffect, useState } from "react";
import { IProvider } from "../types/IProvider";
import { IData } from "../types/IData";
import { IApiContext } from "../types/IApiContext";
import { getData } from "../services/http/api";

export const ApiContext = createContext<IApiContext>({
  filteredData: [],
  filterForInstanceName: async () => {},
  filterForCloudProvider: async () => {},
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

  const filterForCloudProvider = async (cloudProviders: string[]) => {
    if (cloudProviders.length !== 0) {
      const filteredData = originalData.filter((x) =>
        cloudProviders.includes(x.CloudProvider)
      );
      setFilteredData(filteredData);
    } else {
      setFilteredData(originalData);
    }
  };

  const filterForInstanceName = async (filter: string) => {
    if (filter.length !== 0) {
      const filteredData = originalData.filter((x) =>
        x.InstanceName.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
      );
      setFilteredData(filteredData);
    }

    // else {
    //   setFilteredData(originalData);
    // }
  };

  //   const applyFilters = async (cloudProviders: string[], instanceName: string) => {
  //     let filteredData = originalData;

  //     if (cloudProviders.length !== 0) {
  //       filteredData = filteredData.filter((x) =>
  //         cloudProviders.includes(x.CloudProvider)
  //       );
  //     }

  //     if (instanceName.length !== 0) {
  //       filteredData = filteredData.filter((x) =>
  //         x.InstanceName.toLocaleLowerCase().includes(instanceName.toLocaleLowerCase())
  //       );
  //     }

  //     setFilteredData(filteredData);
  //   };

  return (
    <ApiContext.Provider
      value={{
        filteredData,
        filterForCloudProvider,
        filterForInstanceName,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
}
