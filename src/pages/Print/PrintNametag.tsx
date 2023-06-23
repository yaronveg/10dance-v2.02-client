import { useLocation, useNavigate } from "react-router-dom";
import "./PrintNametag.scss";
import { useEffect } from "react";
import NametagBottom from "./assets/logo_agi_nametag.png";
const PrintNametag = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.onafterprint = () => {
      navigate(location.state.postPrintURL);
    };
    setTimeout(() => {
      window.print();
    }, 200);
  }, []);

  return (
    <>
      <section className="print-page">
        <div className="container">
          <h1 id="name">{location.state.name}</h1>
          <h2 id="institute">{location.state.institute}</h2>
          <img src={NametagBottom} width="400px" alt="" />
        </div>
      </section>
    </>
  );
};

export default PrintNametag;
