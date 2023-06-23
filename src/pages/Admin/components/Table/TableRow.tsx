import "./TableRow.scss";
import { Attendee } from "../../../../common/types/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPrint,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useCallback, useState } from "react";
import { deleteAttendeeById } from "../../../../common/api/attendee";
import { useNavigate } from "react-router-dom";
import Modal from "../Modal";

const TableRow = ({ row }: { row: Attendee }) => {
  const navigate = useNavigate();
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const deleteAttendee = useCallback(() => {
    deleteAttendeeById({ id: row.national_id });
  }, []);

  const modalDeleteHandler = useCallback(() => {
    deleteAttendee();
    setShowDeleteModal(false);
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
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => setShowDeleteModal(true)}
        />
      </div>

      {showDeleteModal && (
        <Modal
          onClose={() => setShowDeleteModal(false)}
          onSubmit={modalDeleteHandler}
          header={<div>מחיקת שורה</div>}
          content={
            <div>
              <div>
                האם למחוק את "{row.first_name} {row.last_name}"?
              </div>
              <b>פעולה זו אינה ניתנת לביטול.</b>
            </div>
          }
          submitLabel="מחיקה"
        />
      )}
    </div>
  );
};

export default TableRow;
