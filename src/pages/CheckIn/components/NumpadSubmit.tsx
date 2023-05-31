import "./NumpadSubmit.scss";

import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NumpadSubmit = ({ onSubmit }: { onSubmit: () => void }) => {
  return (
    <button className="numpad-submit" onClick={onSubmit}>
      <FontAwesomeIcon icon={faCheck} />
    </button>
  );
};

export default NumpadSubmit;
