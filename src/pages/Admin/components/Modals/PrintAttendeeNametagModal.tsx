import Modal from "../Modal";
import { useNavigate } from "react-router-dom";
import { Attendee } from "../../../../common/types/types";
import { useCallback } from "react";

const PrintAttendeeNametagModal = ({
  row,
  onClose,
}: {
  row: Attendee;
  onClose: () => void;
}) => {
  const navigate = useNavigate();

  const printAttendeeTag = () => {
    navigate("/print-nametag", {
      state: {
        name: row.first_name + " " + row.last_name,
        institute: row.institute,
        postPrintURL: "/admin",
      },
    });
  };

  const modalPrintHandler = useCallback(() => {
    printAttendeeTag();
    onClose();
  }, []);

  return (
    <Modal
      onClose={onClose}
      onSubmit={modalPrintHandler}
      header={<div>הדפסת שורה</div>}
      content={
        <div>
          <div>
            האם להדפיס תג-שם עבור "{row.first_name} {row.last_name}"?
          </div>
        </div>
      }
      submitLabel="הדפס"
    />
  );
};

export default PrintAttendeeNametagModal;
