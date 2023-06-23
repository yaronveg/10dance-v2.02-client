import "./Modal.scss";
import React from "react";
import { createPortal } from "react-dom";

const Modal = ({
  onClose,
  header,
  content,
  bottom,
  showActions = true,
  cancelLabel = "ביטול",
  submitLabel = "אישור",
  onSubmit,
}: {
  onClose: () => void;
  header: React.ReactNode;
  content?: React.ReactNode;
  bottom?: React.ReactNode;
  showActions?: boolean;
  cancelLabel?: string;
  submitLabel?: string;
  onSubmit?: () => void;
}) => {
  return createPortal(
    <>
      <div className="modal-backdrop" onClick={() => onClose()}></div>
      <div className="modal">
        <div className="modal-header">{header}</div>

        <div className="modal-main">
          {content && <div className="modal-content">{content}</div>}
          {showActions && (
            <div className="modal-actions-wrapper">
              <div className="modal-actions">
                <div className="modal-actions__cancel" onClick={onClose}>
                  {cancelLabel}
                </div>
                <div className="modal-actions__submit" onClick={onSubmit}>
                  {submitLabel}
                </div>
              </div>
            </div>
          )}
          {bottom && <div className="modal-bottom">{bottom}</div>}
        </div>
      </div>
    </>,
    document.body
  );
};

export default Modal;
