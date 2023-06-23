import { addAttendee } from "../../../../common/api/attendee";
import Modal from "../Modal";

const AddAttendeeModal = ({ onClose }: { onClose: () => void }) => {
  const handleAddAttendee = () => {
    addAttendee({
      first_name: "yaron",
      last_name: "veg",
      institute: "school of rock",
      national_id: "987654321",
      arrived: true,
    });
    onClose();
  };
  return (
    <Modal
      onClose={onClose}
      onSubmit={handleAddAttendee}
      header={<div>הוספת שורה</div>}
      submitLabel="הוספה"
    />
  );
};

export default AddAttendeeModal;
