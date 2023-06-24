import "./TableControl.scss";
import { Attendee } from "../../../../common/types/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPrint, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import TableControlBtn from "./TableControlBtn";
import { useState } from "react";
import AddAttendeeModal from "../Modal/Modals/AddAttendeeModal";
import RadioGroup from "../Radio/RadioGroup";

const TableControl = ({
  rows,
  onSearchChange,
  onToggleChange,
}: {
  rows: Attendee[];
  onSearchChange: React.ChangeEventHandler<HTMLInputElement>;
  onToggleChange: (value: string) => void;
}) => {
  const navigate = useNavigate();
  const [showAddAttendeeModal, setShowAddAttendeeModal] = useState(false);

  const printRows = () => {
    navigate("/admin/print-table", {
      state: {
        rows,
        postPrintURL: "/admin",
      },
    });
  };

  const visibleToggleOptions: { value: string; label: string }[] = [
    { value: "all", label: "כולם" },
    { value: "arrived", label: "נוכחים" },
    { value: "not_arrived", label: "לא נוכחים" },
  ];

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
        <TableControlBtn
          icon={faPlus}
          onClick={() => setShowAddAttendeeModal(true)}
        />
        <TableControlBtn icon={faPrint} onClick={printRows} />
      </div>

      <div className="right">
        <RadioGroup options={visibleToggleOptions} onChange={onToggleChange} />
      </div>

      {showAddAttendeeModal && (
        <AddAttendeeModal onClose={() => setShowAddAttendeeModal(false)} />
      )}
    </div>
  );
};

export default TableControl;
