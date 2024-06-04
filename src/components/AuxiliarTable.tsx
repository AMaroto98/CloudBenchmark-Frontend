import { ChangeEvent, useContext, useRef, useState } from "react";
import Select, { MultiValue } from "react-select";
import { ApiContext } from "../provider/ApiProvider";
import { IOptionSelect } from "../types/IOptionSelect";

export function AuxiliarTable() {
  const { filterForInstanceName, filterForCloudProvider } =
    useContext(ApiContext);

  const instanceNameRef = useRef<string>("");
  const [cloudProviders, setCloudProviders] = useState<
    MultiValue<IOptionSelect>
  >([]);

  // Filter by Cloud Provider
  function handleCloudProviderChange(
    selectedOptions: MultiValue<IOptionSelect>
  ) {
    console.log(selectedOptions);

    setCloudProviders(selectedOptions);
  }

  // Filter by Instance Name
  function handleInstanceNameChange(
    event: ChangeEvent<HTMLInputElement>
  ): void {
    instanceNameRef.current = event.target.value;
  }

  async function handleSearch() {
    // Mapeado de las array para tener el nombre de los cloud providers
    const selectedProviders = cloudProviders.map((provider) => provider.value);

    await filterForCloudProvider(selectedProviders);
    await filterForInstanceName(instanceNameRef.current);
  }

  const cloudProviderOptions: IOptionSelect[] = [
    { value: "AWS", label: "AWS" },
    { value: "Azure", label: "Azure" },
    { value: "GCP", label: "GCP" },
  ];

  return (
    <div className="auxiliar-table-container">
      <div className="auxiliar-table-inputs">
        <label htmlFor="CloudProvider">Cloud Provider: </label>
        <Select
          isMulti
          name="cloudProvider"
          options={cloudProviderOptions}
          className="basic-multi-select"
          classNamePrefix="select"
          onChange={handleCloudProviderChange}
        />
        <br />
        <label htmlFor="InstanceName">Instance Name: </label>
        <input type="search" onChange={handleInstanceNameChange} /> <br />
        <label htmlFor="CPUCores">CPU Cores: </label>
        <input type="number" /> <br />
        <label htmlFor="CPUMark">CPU Mark: </label>
        <input type="number" /> <br />
        <label htmlFor="MEMSize">MEM Size: </label>
        <input type="number" /> <br />
        <button onClick={handleSearch}>Filter</button>
      </div>
    </div>
  );
}
