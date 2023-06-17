import "./TableRow.scss";
import { Attendee } from "../../../../common/types/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const TableRow = ({ row }: { row: Attendee }) => {
  return (
    <div className="table-row">
      <div>{row.last_name}</div>
      <div>{row.first_name}</div>
      <div>{row.national_id}</div>
      <div>{row.institute}</div>
      <div className="isArrived">
        {row.arrived && <FontAwesomeIcon icon={faCircleCheck} />}
      </div>
      <div className="actions"></div>
    </div>
  );
};

export default TableRow;
