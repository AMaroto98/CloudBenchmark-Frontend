export function AuxiliarTable() {
  return (
    <div className="auxiliar-table-container">
      <div className="auxiliar-table-inputs">
        <label htmlFor="CloudProvider">Cloud Provider: </label>
        <input type="text" /> <br />

        <label htmlFor="InstanceName">Instance Name: </label>
        <input type="text" /> <br />

        <label htmlFor="CPUCores">CPU Cores: </label>
        <input type="number" /> <br />
        
        <label htmlFor="CPUMark">CPU Mark: </label>
        <input type="number" /> <br />

        <label htmlFor="MEMSize">MEM Size: </label>
        <input type="number" /> <br />


        <button>Filter</button>
      </div>
    </div>
  );
}
