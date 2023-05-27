import "./NumpadBtn.scss";
import { NumpadButton } from "./Numpad";

const NumpadBtn = ({
  button,
  onClick,
}: {
  button: NumpadButton;
  onClick: (button: NumpadButton) => void;
}) => {
  return (
    <button className="numpad-btn" onClick={() => onClick(button)}>
      {button}
    </button>
  );
};

export default NumpadBtn;
