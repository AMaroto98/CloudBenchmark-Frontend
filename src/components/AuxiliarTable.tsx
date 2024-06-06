import { ChangeEvent, useContext, useState } from "react";
import Select, { MultiValue, SingleValue } from "react-select";
import { ApiContext } from "../provider/ApiProvider";
import { IOptionStringSelect } from "../types/IOptionStringSelect";
import { IOptionNumberSelect } from "../types/IOptionNumberSelect";
import { cloudProviderOptions } from "../data/Options";
import {
  generateBase2Options,
  generateCustomStepOptions,
} from "../services/logic/GenereateOptions";

export function AuxiliarTable() {
  const { applyFilters, resetFilters } = useContext(ApiContext);

  const [instanceName, setInstanceName] = useState<string>("");
  const [filters, setFilters] = useState({
    cloudProviders: [] as MultiValue<IOptionStringSelect>,
    cpuCores: null as SingleValue<IOptionNumberSelect> | null,
    cpuMark: null as SingleValue<IOptionNumberSelect> | null,
    memSize: null as SingleValue<IOptionNumberSelect> | null,
    memoryMark: null as SingleValue<IOptionNumberSelect> | null,
  });

  function handleCloudProviderChange(
    selectedOptions: MultiValue<IOptionStringSelect>
  ) {
    setFilters((prev) => ({ ...prev, cloudProviders: selectedOptions }));
  }

  function handleInstanceNameChange(
    event: ChangeEvent<HTMLInputElement>
  ): void {
    setInstanceName(event.target.value);
  }

  function handleSelectChange(
    selectedOption: SingleValue<IOptionNumberSelect>,
    field: keyof typeof filters
  ) {
    setFilters((prev) => ({ ...prev, [field]: selectedOption }));
  }

  function handleSearch() {
    const selectedProviders = filters.cloudProviders.map(
      (provider) => provider.value
    );
    const selectedCpuCores = filters.cpuCores ? filters.cpuCores.value : null;
    const selectedCpuMark = filters.cpuMark ? filters.cpuMark.value : null;
    const selectedMemSize = filters.memSize ? filters.memSize.value : null;
    const selectedMemoryMark = filters.memoryMark
      ? filters.memoryMark.value
      : null;

    applyFilters(
      selectedProviders,
      instanceName,
      selectedCpuCores,
      selectedCpuMark,
      selectedMemSize,
      selectedMemoryMark
    );
  }

  function clearFilters() {
    setFilters({
      cloudProviders: [],
      cpuCores: null,
      cpuMark: null,
      memSize: null,
      memoryMark: null,
    });
    setInstanceName("");
    resetFilters();
  }

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
          value={filters.cloudProviders}
          onChange={handleCloudProviderChange}
        />
        <br />

        <label htmlFor="InstanceName">Instance Name: </label>
        <input
          type="search"
          value={instanceName}
          onChange={handleInstanceNameChange}
        />

        <label htmlFor="CPUCores">CPU Cores: </label>
        <Select
          name="CPUCores"
          options={generateBase2Options(8)}
          className="basic-select"
          classNamePrefix="select"
          value={filters.cpuCores}
          onChange={(option) => handleSelectChange(option, "cpuCores")}
        />
        <br />

        <label htmlFor="CPUMark">CPU Mark: </label>
        <Select
          name="cpuMark"
          options={generateCustomStepOptions(25000, 1000)}
          className="basic-select"
          classNamePrefix="select"
          value={filters.cpuMark}
          onChange={(option) => handleSelectChange(option, "cpuMark")}
        />
        <br />

        <label htmlFor="MEMSize">MEM Size: </label>
        <Select
          name="memorySize"
          options={generateBase2Options(10)}
          className="basic-select"
          classNamePrefix="select"
          value={filters.memSize}
          onChange={(option) => handleSelectChange(option, "memSize")}
        />
        <br />

        <label htmlFor="MemoryMark">Memory Mark: </label>
        <Select
          name="memoryMark"
          options={generateCustomStepOptions(5000, 250)}
          className="basic-select"
          classNamePrefix="select"
          value={filters.memoryMark}
          onChange={(option) => handleSelectChange(option, "memoryMark")}
        />
        <br />

        <button onClick={handleSearch}>Filter</button>
        <button onClick={clearFilters} id="clear-filters">
          Clear Filters
        </button>
      </div>
    </div>
  );
}
