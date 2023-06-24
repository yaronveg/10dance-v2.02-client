import "../../../../../common/scss/modal-forms.scss";
import { addAttendee } from "../../../../../common/api/attendee";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "../Modal";
import ModalActions from "../ModalActions";
import { useForm } from "react-hook-form";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

type FormData = {
  firstName: string;
  lastName: string;
  nationalId: string;
  institute?: string;
  arrived: boolean;
};

const AddAttendeeModal = ({ onClose }: { onClose: () => void }) => {
  const { register, handleSubmit, setValue } = useForm<FormData>({
    defaultValues: { arrived: false },
  });

  const [isArrived, setIsArrived] = useState(false);
  const handleAddAttendee = (formData: FormData) => {
    addAttendee({
      first_name: formData.firstName,
      last_name: formData.lastName,
      national_id: formData.nationalId,
      institute: formData.institute ?? "",
      arrived: formData.arrived,
    });

    onClose();
  };

  return (
    <Modal
      showDefaultActions={false}
      onClose={onClose}
      header={<div>הוספת שורה</div>}
      contentPadding={false}
      content={
        <form onSubmit={handleSubmit(handleAddAttendee)}>
          <div className="add-attendee-form form-padding">
            <input
              {...register("firstName")}
              type="text"
              placeholder="שם פרטי"
              required
            />

            <input
              {...register("lastName")}
              type="text"
              placeholder="שם משפחה"
              required
            />

            <input
              {...register("nationalId")}
              type="text"
              placeholder="תעודת זהות"
              required
              maxLength={9}
            />

            <input
              {...register("institute")}
              type="text"
              placeholder="מוסד לימודי"
            />

            <FontAwesomeIcon
              type="text"
              icon={faCheckCircle}
              className={
                isArrived
                  ? "form-icon form-icon-active"
                  : "form-icon form-icon-inactive"
              }
              onClick={() => {
                setValue("arrived", !isArrived);
                setIsArrived(!isArrived);
              }}
            />
          </div>
          <ModalActions submitLabel="הוספה" onClose={onClose} />
        </form>
      }
      submitLabel="הוספה"
    />
  );
};

export default AddAttendeeModal;
