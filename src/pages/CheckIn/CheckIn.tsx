import "./CheckIn.scss";
import { useState } from "react";
import Numpad, { NumpadButton } from "./components/Numpad";
import IdDisplay from "./components/IdDisplay";
import logo10Dance from "../../common/assets/10dance_logo.svg";
import logoHuji from "../../common/assets/huji_logo.png";
import NumpadSubmit from "./components/NumpadSubmit";
import { checkInAttendee } from "./api/check-in";
import { validateId } from "./utils";
import { Backdrop } from "../../common/components";
import FullscreenMessage, {
  IFullscreenMessage,
} from "./components/FullscreenMessage";
import {
  faCheckToSlot,
  faHeartCrack,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";

const CheckIn = () => {
  const [idNum, setIdNum] = useState<string>("");
  const [showBackdrop, setShowBackdrop] = useState(false);
  const [fullscreenMessage, setFullscreenMessage] =
    useState<null | IFullscreenMessage>(null);

  const navigate = useNavigate();

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

  const submitHandler = async () => {
    setShowBackdrop(true);

    if (!idNum) {
      setFullscreenMessage({
        title: "אנא הזינו ת.ז.",
      });
      return;
    }
    setFullscreenMessage({
      title: "רק רגע...",
      icon: faSpinner,
    });
    try {
      const validId = await validateId(idNum);
      const res = await checkInAttendee(validId);
      if (!res.ok) throw new Error(res.statusText);
      navigate("/print", { state: { id: idNum, postPrintURL: "/" } });
      setFullscreenMessage({
        title: "נרשמת בהצלחה",
        icon: faCheckToSlot,
        subtitle: "תג ועליו שמך נשלח להדפסה",
      });
    } catch (e) {
      setFullscreenMessage({
        title: "אינך מופיע במערכת",
        icon: faHeartCrack,
        subtitle: "אנא פנה לעמדת השירות",
      });
    }
  };

  const closeBackdrop = () => {
    setIdNum("");
    setFullscreenMessage(null);
    setShowBackdrop(false);
  };

  return (
    <>
      {fullscreenMessage && (
        <FullscreenMessage
          message={fullscreenMessage}
          onClick={closeBackdrop}
        />
      )}
      <Backdrop show={showBackdrop} onClick={closeBackdrop}>
        <div className="check-in">
          <div className="floating-logos">
            <img src={logo10Dance} className="logo-10dance" alt="10Dance" />
            <img src={logoHuji} className="logo-huji" alt="10Dance" />
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
            <NumpadSubmit onSubmit={submitHandler}></NumpadSubmit>
          </div>
        </div>
      </Backdrop>
    </>
  );
};

export default CheckIn;
