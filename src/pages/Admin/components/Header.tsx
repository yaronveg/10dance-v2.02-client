import "./Header.scss";
import logo10Dance from "../../../common/assets/10dance_logo.svg";
import logoHuji from "../../../common/assets/huji_logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="actions">
          <div className="btn">אודות</div>
          <div className="btn">קבלת פנים</div>
        </div>
        <div className="logos">
          <img className="huji-logo" src={logoHuji} width="52px" alt="" />
          <img src={logo10Dance} width="160px" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
