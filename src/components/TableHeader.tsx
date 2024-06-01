import { faSortDown, faSortUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function TableHeader() {
  return (
    <thead>
      <tr>
        {/* <th className="table-header">
          <div className="container-arrows">
            <FontAwesomeIcon icon={faSortUp} id="up-arrow" />
            <FontAwesomeIcon icon={faSortDown} id="down-arrow" />
          </div>
        </th> */}

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
  );
}
