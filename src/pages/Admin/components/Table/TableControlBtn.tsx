import "./TableControlBtn.scss";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TableControlBtn = ({
  icon,
  onClick,
}: {
  icon: IconProp;
  onClick: () => void;
}) => {
  return (
    <div className="table-control-btn">
      <FontAwesomeIcon icon={icon} onClick={onClick} />
    </div>
  );
};

export default TableControlBtn;
