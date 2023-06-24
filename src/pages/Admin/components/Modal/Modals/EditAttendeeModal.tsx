import "../../../../../common/scss/modal-forms.scss";
import { editAttendee } from "../../../../../common/api/attendee";
import { Attendee } from "../../../../../common/types/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "../Modal";
import ModalActions from "../ModalActions";
import { useForm } from "react-hook-form";
import { faCheckCircle, faPrint } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type FormData = {
  firstName: string;
  lastName: string;
  nationalId: string;
  institute?: string;
  arrived: boolean;
};

const EditAttendeeModal = ({
  onClose,
  row,
}: {
  onClose: () => void;
  row: Attendee;
}) => {
  const navigate = useNavigate();

  const { register, handleSubmit, setValue } = useForm<FormData>({
    defaultValues: {
      firstName: row.first_name,
      lastName: row.last_name,
      nationalId: row.national_id,
      institute: row.institute,
      arrived: row.arrived,
    },
  });

  const [isArrived, setIsArrived] = useState(false);
  const [shouldPrint, setShouldPrint] = useState(true);

  const handleEditAttendee = (formData: FormData) => {
    editAttendee({
      national_id: row.national_id,
      attendee: {
        first_name: formData.firstName,
        last_name: formData.lastName,
        national_id: formData.nationalId,
        institute: formData.institute ?? "",
        arrived: formData.arrived,
      },
    });

    onClose();

    if (shouldPrint) {
      navigate("/print-nametag", {
        state: {
          name: formData.firstName + " " + formData.lastName,
          institute: formData.institute ?? "",
          postPrintURL: "/admin",
        },
      });
    }
  };

  return (
    <Modal
      showDefaultActions={false}
      onClose={onClose}
      header={<div>עריכת שורה</div>}
      contentPadding={false}
      content={
        <form onSubmit={handleSubmit(handleEditAttendee)}>
          <div className="edit-attendee-form form-column form-padding">
            <input
              {...register("firstName")}
              className="form-field"
              type="text"
              placeholder="שם פרטי"
              required
            />

            <input
              {...register("lastName")}
              className="form-field"
              type="text"
              placeholder="שם משפחה"
              required
            />

            <input
              {...register("nationalId")}
              className="form-field"
              type="text"
              placeholder="תעודת זהות"
              required
              maxLength={9}
            />

            <input
              {...register("institute")}
              className="form-field"
              type="text"
              placeholder="מוסד לימודי"
            />

            <div className="form-toggles">
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
              <FontAwesomeIcon
                type="text"
                icon={faPrint}
                className={
                  shouldPrint
                    ? "form-icon form-icon-active"
                    : "form-icon form-icon-inactive"
                }
                onClick={() => {
                  setShouldPrint(!shouldPrint);
                }}
              />
            </div>
          </div>
          <ModalActions submitLabel="שמירה" onClose={onClose} />
        </form>
      }
    />
  );
};

export default EditAttendeeModal;
