import "./CheckIn.scss";
import { useState } from "react";
import Numpad, { NumpadButton } from "./components/Numpad";
import IdDisplay from "./components/IdDisplay";
const CheckIn = () => {
  const [idNum, setIdNum] = useState<string>("");

  const numpadChangeHandler = ({ button }: { button: NumpadButton }) => {
    if (button === "CLEAR") {
      setIdNum("");
      return;
    }
    if (button === "BACKSPACE") {
      setIdNum(idNum.slice(0, idNum.length - 1));
      return;
    }
    if (idNum.length < 9) setIdNum(idNum + button);
  };

  return (
    <div className="check-in">
      <div className="floating-logos">
        <div className="logo-left"></div>
        <div className="logo-right"></div>
      </div>
      <div className="title container weight-700">
        <div className="title-introducing">
          ברוכים הבאים ליום עיון שנתי ומפגש בוגרים
        </div>
        <div className="title-main color-text-secondary">
          המחלקה לגיאוגרפיה 2022
        </div>
      </div>
      <div className="numpad-wrapper container">
        <div className="id-info weight-700">
          <span>נא הכנס ת.ז. מלאה </span>
          <span className="color-red">כולל </span>
          <span>ספרת ביקורת</span>
        </div>
        <div className="id-display-wrapper">
          <IdDisplay id={idNum} />
        </div>
        <Numpad onChange={numpadChangeHandler} />
        <div className="submit-button"></div>
      </div>
    </div>
  );
};

export default CheckIn;
