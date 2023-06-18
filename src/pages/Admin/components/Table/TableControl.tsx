import "./TableControl.scss";
import { Attendee } from "../../../../common/types/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const TableControl = ({
  rows,
  onSearchChange,
}: {
  rows: Attendee[];
  onSearchChange: React.ChangeEventHandler<HTMLInputElement>;
}) => {
  return (
    <div className="table-control">
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
    </div>
  );
};

export default TableControl;
