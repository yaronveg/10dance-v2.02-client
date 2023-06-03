import { useParams } from "react-router";
import "./Print.scss";
import { useEffect } from "react";

const PrintPage = () => {
  const { id, postPrintURL } = useParams();

  useEffect(
    ({ location: { state } }) => {
      console.log("print page state: ", { state });
    },
    [id, postPrintURL]
  );

  return (
    <section className="print-page">
      <div className="container">
        <h1 id="name"></h1>
        <h2 id="institute"></h2>
        <img src="./assets/logo_agi_nametag.png" width="400px" alt="" />
      </div>
      <script src="../Print/print.ts" type="module"></script>
    </section>
  );
};

export default PrintPage;
