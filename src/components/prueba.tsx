import React from "react";
import { faSortDown, faSortUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface TableHeaderProps {
  label: string; // Nombre del encabezado de la tabla
}

const TablePrueba: React.FC<TableHeaderProps> = ({ label }) => {
  return (
    <thead>
      <tr>
        <th className="table-header">
          {label}
          <div className="container-arrows">
            <FontAwesomeIcon icon={faSortUp} id="up-arrow" />
            <FontAwesomeIcon icon={faSortDown} id="down-arrow" />
          </div>
        </th>
      </tr>
    </thead>
  );
};

export default TablePrueba;
