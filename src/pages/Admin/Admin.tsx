import "./Admin.scss";
import { Attendee } from "../../common/types/types";
import Header from "./components/Header";
import Table from "./components/Table/Table";
import { useState, useCallback, useEffect } from "react";
import { getAllAttendees } from "../../common/api/attendee";

function Admin() {
  const [allAttendees, setAllAttendees] = useState<Attendee[]>([]);
  const [visibleRows, setVisibleRows] = useState<Attendee[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getRows = useCallback(async () => {
    const resJson = await getAllAttendees();
    const res = await resJson.json();
    setAllAttendees(res);
  }, []);

  const searchRows = useCallback(
    (rows: Attendee[]) => {
      return rows.filter(
        (row) =>
          row.first_name.includes(searchTerm) ||
          row.last_name.includes(searchTerm) ||
          row.national_id.includes(searchTerm) ||
          row.institute.includes(searchTerm)
      );
    },
    [searchTerm]
  );

  useEffect(() => {
    const initRows = async () => {
      await getRows();
      setVisibleRows(allAttendees);
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
        <Table rows={visibleRows} />
      </div>
    </div>
  );
}

export default Admin;
