import "./Admin.scss";
import { Attendee } from "../../common/types/types";
import Header from "./components/Header";
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

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
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
        {/* table control - props: {visibleRows: attendee[]} onSearch, onAddedAtendee } */}
        <input type="text" onChange={handleInputChange} />
        {visibleRows.length > 0 && <Table rows={visibleRows} />}
      </div>
    </div>
  );
}

export default Admin;
