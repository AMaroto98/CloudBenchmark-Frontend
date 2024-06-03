import { useEffect, useState } from "react";
import { TableHeader } from "./TableHeader";
import { getData } from "../services/http/api";
import { IData } from "../types/IData";

export function MainTable() {
  const [data, setData] = useState<IData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      setData(result);
    };
    fetchData();
    console.log(data);
  }, []);

  return (
    <div className="main-table-container">
      <table>
        <TableHeader />
        <tbody>
          {data.map((instance, index) => (
            <tr key={index}>
              <td>{instance.CloudProvider} </td>
              <td>{instance.InstanceName}</td>
              <td>{instance.CPUCores}</td>
              <td>{instance.CPUMark} </td>
              <td>{instance.MEMSize}</td>
              <td>{instance.MemoryMark}</td>
              <td>{instance.USDHour}</td>
              <td><a href={instance.URLtest} target="_blank">Link</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
