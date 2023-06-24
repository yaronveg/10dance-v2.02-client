import "./PrintTable.scss";

import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Attendee } from "../../common/types/types";

const PrintTable = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.onafterprint = () => {
      navigate(location.state.postPrintURL);
    };
    setTimeout(() => {
      window.print();
    }, 500);
  }, []);

  return (
    <>
      <section className="table-print-page">
        <table>
          <tr>
            <th>ת.ז.</th>
            <th>שם</th>
            <th>מוסד לימודי</th>
          </tr>
          {location.state.rows.map((row: Attendee) => (
            <tr key={row.national_id}>
              <td>{row.national_id}</td>
              <td>
                {row.first_name} {row.last_name}
              </td>
              <td>{row.institute}</td>
            </tr>
          ))}
        </table>
      </section>
    </>
  );
};

export default PrintTable;
