import Modal from "../Modal";
import { Attendee } from "../../../../common/types/types";
import { deleteAttendeeById } from "../../../../common/api/attendee";
import { useCallback } from "react";

const DeleteAttendeeModal = ({
  row,
  onClose,
}: {
  row: Attendee;
  onClose: () => void;
}) => {
  const deleteAttendee = useCallback(() => {
    deleteAttendeeById({ id: row.national_id });
  }, []);

  const modalDeleteHandler = useCallback(() => {
    deleteAttendee();
    onClose();
  }, []);
  return (
    <Modal
      onClose={onClose}
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
  );
};

export default DeleteAttendeeModal;
