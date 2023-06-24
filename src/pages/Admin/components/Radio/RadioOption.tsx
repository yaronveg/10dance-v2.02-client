import "./RadioOption.scss";
import SeletedIcon from "./radio-selected.svg";
import UnselectedIcon from "./radio-unselected.svg";

const RadioOption = ({
  value,
  isSelected,
  label,
  onClick,
}: {
  value: string;
  isSelected: boolean;
  label: string;
  onClick: (value: string) => void;
}) => {
  return (
    <div className="radio-option" onClick={() => onClick(value)}>
      <div className="radio-button">
        <img src={isSelected ? SeletedIcon : UnselectedIcon} />
      </div>
      <div className="radio-label">{label}</div>
    </div>
  );
};

export default RadioOption;
