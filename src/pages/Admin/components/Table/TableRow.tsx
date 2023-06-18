import "./TableRow.scss";
import { Attendee } from "../../../../common/types/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPrint,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useCallback } from "react";
import { deleteAttendeeById } from "../../../../common/api/attendee";
import { useNavigate } from "react-router-dom";

const TableRow = ({ row }: { row: Attendee }) => {
  const navigate = useNavigate();

  const deleteAttendee = useCallback(() => {
    deleteAttendeeById({ id: row.national_id });
  }, []);

  const printAttendeeTag = () => {
    navigate("/print", {
      state: {
        name: row.first_name + " " + row.last_name,
        institute: row.institute,
        postPrintURL: "/admin",
      },
    });
  };

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
        <FontAwesomeIcon icon={faPrint} onClick={printAttendeeTag} />
        <FontAwesomeIcon icon={faTrash} onClick={deleteAttendee} />
      </div>
    </div>
  );
};

export default TableRow;
