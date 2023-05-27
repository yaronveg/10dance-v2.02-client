import { useState } from "react"
import Numpad, { NumpadButton } from "./components/Numpad"

const CheckIn = () => {
const [idNum, setIdNum] = useState<string>("")

const numpadChangeHandler = ({button}:{button: NumpadButton}) => {
  setIdNum(button)
  console.log("checkin: ", { button })
}

  return (
    <div className="check-in">
      check-in page
      <div className="floating-logos">
        <div className="logo-left"></div>
        <div className="logo-right"></div>
      </div>
      <div className="title">
        <div className="title-introducing"></div>
        <div className="title-main"></div>
      </div>
      <div className="numpad-wrapper">
        <div className="id-info"></div>
        <div className="id-display">{idNum}</div>
        <Numpad onChange={numpadChangeHandler} />
        <div className="submit-button"></div>
      </div>
    </div>
  )
}

export default CheckIn