import "./TableRow.scss";
import { Attendee } from "../../../../common/types/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPrint,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import DeleteAttendeeModal from "../Modals/DeleteAttendeeModal";
import PrintAttendeeNametagModal from "../Modals/PrintAttendeeNametagModal";

const TableRow = ({ row }: { row: Attendee }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showPrintModal, setShowPrintModal] = useState(false);

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
        <FontAwesomeIcon
          icon={faPrint}
          onClick={() => setShowPrintModal(true)}
        />
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => setShowDeleteModal(true)}
        />
      </div>

      {showDeleteModal && (
        <DeleteAttendeeModal
          row={row}
          onClose={() => setShowDeleteModal(false)}
        />
      )}

      {showPrintModal && (
        <PrintAttendeeNametagModal
          row={row}
          onClose={() => setShowPrintModal(false)}
        />
      )}
    </div>
  );
};

export default TableRow;
