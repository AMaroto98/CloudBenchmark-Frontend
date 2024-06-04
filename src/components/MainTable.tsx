import { useContext } from "react";
import { TableHeader } from "./TableHeader";
import { ApiContext } from "../provider/ApiProvider";

export function MainTable() {
  const { filteredData } = useContext(ApiContext);

  return (
    <div className="main-table-container">
      {filteredData.length !== 0 ? (
        <table>
          <TableHeader />
          <tbody>
            {filteredData.map((instance, index) => (
              <tr key={index}>
                <td>{instance.CloudProvider} </td>
                <td>{instance.InstanceName}</td>
                <td>{instance.CPUCores}</td>
                <td>{instance.CPUMark} </td>
                <td>{instance.MEMSize}</td>
                <td>{instance.MemoryMark}</td>
                <td>{instance.USDHour}</td>
                <td>
                  <a href={instance.URLtest} target="_blank">
                    Link
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h2>No data</h2>
      )}
    </div>
  );
}
