import "./TableRow.scss";
import { Attendee } from "../../../../common/types/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPencil,
  faPrint,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import DeleteAttendeeModal from "../Modal/Modals/DeleteAttendeeModal";
import PrintAttendeeNametagModal from "../Modal/Modals/PrintAttendeeNametagModal";
import EditAttendeeModal from "../Modal/Modals/EditAttendeeModal";

const TableRow = ({ row }: { row: Attendee }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showPrintModal, setShowPrintModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  return (
    <div className="table-row">
      <div className="text-cell">{row.last_name}</div>
      <div className="text-cell">{row.first_name}</div>
      <div className="text-cell">{row.national_id}</div>
      <div className="text-cell">{row.institute}</div>
      <div className="isArrived">
        {row.arrived && <FontAwesomeIcon icon={faCircleCheck} />}
      </div>
      <div className="actions">
        <FontAwesomeIcon
          icon={faPrint}
          onClick={() => setShowPrintModal(true)}
        />
        <FontAwesomeIcon
          icon={faPencil}
          onClick={() => setShowEditModal(true)}
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

      {showEditModal && (
        <EditAttendeeModal row={row} onClose={() => setShowEditModal(false)} />
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
