import "./Table.scss";
import { Attendee } from "../../../../common/types/types";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const Table = ({ rows }: { rows: Attendee[] }) => {
  console.log({ rows });

  return (
    <div className="table">
      <TableHeader />
      <div className="rows">
        {rows.map((row) => (
          <TableRow key={row.national_id} row={row} />
        ))}
      </div>
    </div>
  );
};

export default Table;
