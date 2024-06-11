import { useContext, useState } from "react";
import { ApiContext } from "../provider/ApiProvider";

export function MainTable() {
  const { filteredData } = useContext(ApiContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(15);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const handleClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="main-table-container">
      {filteredData.length !== 0 ? (
        <>
          <table>
            <thead>
              <tr>
                <th>Cloud Provider</th>
                <th>Instance Name</th>
                <th>CPU Cores</th>
                <th>CPU Mark</th>
                <th>MEM Size</th>
                <th>Memory Mark</th>
                <th>USD Hour</th>
                <th>URL test</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((instance, index) => (
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
          <div>
            <div className="pagination">
              {[...Array(totalPages).keys()].map((number) => (
                <button
                  key={number + 1}
                  onClick={() => handleClick(number + 1)}
                  style={{
                    background:
                      currentPage === number + 1 ? "lightblue" : "white",
                  }}
                >
                  {number + 1}
                </button>
              ))}
            </div>
          </div>
        </>
      ) : (
        <h2>No data</h2>
      )}
    </div>
  );
}
