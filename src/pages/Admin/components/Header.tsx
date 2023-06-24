import "./Header.scss";
import logo10Dance from "../../../common/assets/10dance_logo.svg";
import logoHuji from "../../../common/assets/huji_logo.png";
import { Link } from "react-router-dom";
import Modal from "./Modal/Modal";
import { useState } from "react";

const Header = () => {
  const [showAboutModal, setShowAboutModal] = useState(false);
  return (
    <div className="header">
      <div className="container">
        <div className="actions">
          <div className="btn" onClick={() => setShowAboutModal(true)}>
            אודות
          </div>
          <Link to="/">
            <div className="btn">קבלת פנים</div>
          </Link>
        </div>
        <div className="logos">
          <img className="huji-logo" src={logoHuji} width="52px" alt="" />
          <img src={logo10Dance} width="160px" alt="" />
        </div>
      </div>
      {showAboutModal && (
        <Modal
          onClose={() => setShowAboutModal(false)}
          showDefaultActions={false}
          header={<>אודות</>}
          content={
            <div>
              <div className="about-text">
                <div>
                  <b>גרסא: </b> <span>2.0.0</span>
                </div>
                <br />
                <div>
                  <b>מפתחים: </b> <span>ינון בר וירון וג</span>
                </div>
                <br />
                <div>
                  אפליקצייה זו פותחה במקור עבור
                  <br />
                  ובסיוע האוניברסיטה העברית בירושלים.
                </div>
              </div>
              <div className="snap-left">
                <button
                  className="about-close-btn"
                  type="button"
                  onClick={() => setShowAboutModal(false)}
                >
                  סגירה
                </button>
              </div>
            </div>
          }
        />
      )}
    </div>
  );
};

export default Header;
