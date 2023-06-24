import "./ModalActions.scss";
import ModalAction from "./ModalAction";
import { ReactNode } from "react";

const ModalActions = ({
  cancelLabel = <>ביטול</>,
  submitLabel = <>אישור</>,
  onClose,
  onSubmit,
}: {
  cancelLabel?: ReactNode;
  submitLabel?: ReactNode;
  onClose: () => void;
  onSubmit?: () => void;
}) => {
  return (
    <div className="modal-actions-wrapper">
      <div className="modal-actions">
        <ModalAction label={cancelLabel} onClick={onClose} />
        {submitLabel && (
          <ModalAction
            variant="submit"
            label={submitLabel}
            onClick={onSubmit}
          />
        )}
      </div>
    </div>
  );
};

export default ModalActions;
