import "./ModalAction.scss";

type ActionVariant = "cancel" | "submit";
type ButtonType = "submit" | "button" | "reset" | undefined;

const classesMap: Record<ActionVariant, string> = {
  cancel: "modal-action modal-action__cancel",
  submit: "modal-action modal-action__submit",
};
const buttonTypeMap: Record<ActionVariant, ButtonType> = {
  cancel: "button",
  submit: "submit",
};

const ModalAction = ({
  label,
  variant = "cancel",
  onClick,
}: {
  label: React.ReactNode;
  variant?: ActionVariant;
  onClick?: () => void;
}) => {
  return (
    <button
      type={buttonTypeMap[variant]}
      className={classesMap[variant]}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default ModalAction;
