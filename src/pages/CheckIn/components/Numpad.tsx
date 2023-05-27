import "./Numpad.scss"
import NumpadBtn from "./NumpadBtn";

const NumpadButtons = [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "BACKSPACE", "0", "CLEAR" ] as const;
export type NumpadButton = typeof NumpadButtons[number];

const Numpad = ({ onChange }: { onChange: ( ({button}: {button: NumpadButton}) => void )}) => {

    const clickHandler = (button: NumpadButton) => {
        onChange({button});
    }
  return (
    <div className="numpad">
        {NumpadButtons.map((btn:NumpadButton) => {
            return  <NumpadBtn key={btn} button={btn} onClick={()=>clickHandler(btn)}/>
        })}
     
    </div>
  )
}

export default Numpad
