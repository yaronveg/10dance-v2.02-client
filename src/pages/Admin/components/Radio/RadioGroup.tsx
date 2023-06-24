import "./RadioGroup.scss";
import { useState } from "react";
import RadioOption from "./RadioOption";

const RadioGroup = ({
  options,
  onChange,
}: {
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
}) => {
  const [selected, setSelected] = useState<null | string>("all");

  const handleOptionChange = (value: string) => {
    setSelected(value);
    onChange(value);
  };
  return (
    <div className="radio-group">
      {options.map((option) => {
        return (
          <RadioOption
            isSelected={selected === option.value}
            key={option.value}
            value={option.value}
            label={option.label}
            onClick={handleOptionChange}
          />
        );
      })}
    </div>
  );
};

export default RadioGroup;
