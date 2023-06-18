import "./TableRow.scss";
import { Attendee } from "../../../../common/types/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useCallback } from "react";
import { deleteAttendeeById } from "../../../../common/api/attendee";

const TableRow = ({ row }: { row: Attendee }) => {
  const deleteAttendee = useCallback(() => {
    deleteAttendeeById({ id: row.national_id });
  }, []);

  return (
    <div className="table-row">
      <div>{row.last_name}</div>
      <div>{row.first_name}</div>
      <div>{row.national_id}</div>
      <div>{row.institute}</div>
      <div className="isArrived">
        {row.arrived && <FontAwesomeIcon icon={faCircleCheck} />}
      </div>
      <div className="actions">
        <FontAwesomeIcon icon={faTrash} onClick={deleteAttendee} />
      </div>
    </div>
  );
};

export default TableRow;
