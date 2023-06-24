import "./Modal.scss";
import { ReactNode } from "react";
import { createPortal } from "react-dom";
import ModalActions from "./ModalActions";

const Modal = ({
  onClose,
  header,
  content,
  bottom,
  showDefaultActions = true,
  cancelLabel,
  submitLabel,
  onSubmit,
  contentPadding = true,
}: {
  onClose: () => void;
  header: ReactNode;
  content?: ReactNode;
  bottom?: ReactNode;
  showDefaultActions?: boolean;
  cancelLabel?: ReactNode;
  submitLabel?: ReactNode;
  onSubmit?: () => void;
  contentPadding?: boolean;
}) => {
  return createPortal(
    <>
      <div className="modal-backdrop" onClick={() => onClose()}></div>
      <div className="modal">
        <div className="modal-header">{header}</div>

        <div className="modal-main">
          {content && (
            <div
              className={
                contentPadding
                  ? "modal-content modal-content-padding"
                  : "modal-content"
              }
            >
              {content}
            </div>
          )}
          {showDefaultActions && (
            <ModalActions
              cancelLabel={cancelLabel}
              onClose={onClose}
              submitLabel={submitLabel}
              onSubmit={onSubmit}
            />
          )}
          {bottom && <div className="modal-bottom">{bottom}</div>}
        </div>
      </div>
    </>,
    document.body
  );
};

export default Modal;
