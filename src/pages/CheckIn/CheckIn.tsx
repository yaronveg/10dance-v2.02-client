import { useState } from "react"
import Numpad, { NumpadButton } from "./components/Numpad"
import "./CheckIn.scss"
import IdDisplay from "./components/IdDisplay"

const CheckIn = () => {
const [idNum, setIdNum] = useState<string>("")

const numpadChangeHandler = ({button}: {button: NumpadButton}) => {
      if (button === "CLEAR") {
        setIdNum("");
        return;
      }
      if (button === "BACKSPACE") {
        setIdNum(idNum.slice(0, idNum.length - 1));
        return;
      }
      if (idNum.length < 9) setIdNum(idNum + button);
}

  return (
    <div className="check-in">
      check-in page
      <div className="floating-logos">
        <div className="logo-left"></div>
        <div className="logo-right"></div>
      </div>
      <div className="title container">
        <div className="title-introducing"></div>
        <div className="title-main"></div>
      </div>
      <div className="numpad-wrapper container">
        <div className="id-info"></div>
        <div className="id-display-wrapper">
          <IdDisplay id={idNum} />
        </div>
        <Numpad onChange={numpadChangeHandler} />
        <div className="submit-button"></div>
      </div>
    </div>
  )
}

export default CheckIn