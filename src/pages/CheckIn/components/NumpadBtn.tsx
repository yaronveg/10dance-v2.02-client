import "./NumpadBtn.scss";
import { NumpadButton } from "./Numpad";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const NumpadBtn = ({
  button,
  onClick,
}: {
  button: NumpadButton;
  onClick: (button: NumpadButton) => void;
}) => {
  const [buttonLabel, setButtonLabel] = useState<NumpadButton | JSX.Element>(
    button
  );
  const [classList, setClassList] = useState("numpad-btn");

  useEffect(() => {
    if (button === "CLEAR") {
      setButtonLabel(<FontAwesomeIcon icon={faTrash} />);
      setClassList(`${classList} icon-size`);
    }
    if (button === "BACKSPACE") {
      setButtonLabel(<FontAwesomeIcon icon={faChevronLeft} />);
      setClassList(`${classList} icon-size`);
    }
  }, []);

  return (
    <button className={classList} onClick={() => onClick(button)}>
      {buttonLabel}
    </button>
  );
};

export default NumpadBtn;
