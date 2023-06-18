import "./TableControl.scss";
import { Attendee } from "../../../../common/types/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import TableControlBtn from "./TableControlBtn";

const TableControl = ({
  rows,
  onSearchChange,
}: {
  rows: Attendee[];
  onSearchChange: React.ChangeEventHandler<HTMLInputElement>;
}) => {
  const navigate = useNavigate();

  const printRows = () => {
    navigate("/admin/print-table", {
      state: {
        rows,
        postPrintURL: "/admin",
      },
    });
  };

  return (
    <div className="table-control">
      <div className="left">
        <div className="search-wrapper">
          <input
            type="text"
            onChange={onSearchChange}
            placeholder="חיפוש ברשימה..."
          />
          <div className="icon">
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </div>
        <TableControlBtn icon={faPrint} onClick={printRows} />
      </div>
    </div>
  );
};

export default TableControl;
