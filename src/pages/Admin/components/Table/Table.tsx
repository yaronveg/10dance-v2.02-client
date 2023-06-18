import "./Table.scss";
import { Attendee } from "../../../../common/types/types";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const Table = ({ rows }: { rows: Attendee[] }) => {
  return (
    <div className="table">
      <TableHeader />
      <div className="rows">
        {rows.map((row, i) => (
          <div key={row.national_id}>
            <TableRow row={row} />
            {i < rows.length - 1 && <div className="separator"></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
