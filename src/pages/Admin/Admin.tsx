import "./Admin.scss";
import { Attendee } from "../../common/types/types";
import Header from "./components/Header";
import TableControl from "./components/Table/TableControl";
import Table from "./components/Table/Table";
import { useState, useCallback, useEffect } from "react";
import { getAllAttendees } from "../../common/api/attendee";
import Fuse from "fuse.js";

function Admin() {
  const [allAttendees, setAllAttendees] = useState<Attendee[]>([]);
  const [visibleRows, setVisibleRows] = useState<Attendee[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getRows = useCallback(async () => {
    const resJson = await getAllAttendees();
    return await resJson.json();
  }, []);

  const searchRows = useCallback(
    (rows: Attendee[]) => {
      const fuse = new Fuse(rows, {
        keys: ["first_name", "last_name", "national_id", "institute"],
      });
      const results = fuse.search(searchTerm);
      return results.map((match) => ({ ...match.item }));
    },
    [searchTerm]
  );

  useEffect(() => {
    const initRows = async () => {
      const rows = await getRows();
      setAllAttendees(rows);
      setVisibleRows(rows);
    };
    initRows();
  }, []);

  const handleSearchTermChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    if (!e.target.value) {
      setVisibleRows(allAttendees);
      return;
    }
    setSearchTerm(e.target.value);
    setVisibleRows(searchRows(allAttendees));
  };

  return (
    <div className="admin-wrapper">
      <div className="flex-none">
        <Header />
      </div>
      <div className="flex-1 main width-container">
        {/* table control - missing prop: onAddedAtendee } */}
        <div className="flex-none table-control-wrapper">
          <TableControl
            rows={visibleRows}
            onSearchChange={handleSearchTermChange}
          />
        </div>
        {visibleRows.length > 0 && (
          <div className="flex-1">
            <Table rows={visibleRows} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Admin;
