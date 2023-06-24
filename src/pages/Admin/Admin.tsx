import "./Admin.scss";
import { Attendee } from "../../common/types/types";
import Header from "./components/Header";
import TableControl from "./components/Table/TableControl";
import Table from "./components/Table/Table";
import { useState, useCallback, useEffect, useRef } from "react";
import { getAllAttendees } from "../../common/api/attendee";
import Fuse from "fuse.js";

const visibleToggleMap: Record<string, (row: Attendee) => boolean> = {
  all: (row: Attendee) => !!row,
  arrived: (row: Attendee) => row.arrived,
  not_arrived: (row: Attendee) => !row.arrived,
};

function Admin() {
  const [allAttendees, setAllAttendees] = useState<Attendee[]>([]);
  const [visibleRows, setVisibleRows] = useState<Attendee[]>([]);
  const searchTerm = useRef("");
  // const [searchTerm, setSearchTerm] = useState("");
  const toggleVisible = useRef("all");
  // const [toggleVisible, setToggleVisible] = useState("all");

  const getRows = useCallback(async () => {
    const resJson = await getAllAttendees();
    return await resJson.json();
  }, []);

  const searchRows = useCallback(
    (rows: Attendee[]) => {
      const fuse = new Fuse(rows, {
        keys: ["first_name", "last_name", "national_id", "institute"],
      });
      const results = fuse.search(searchTerm.current);
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
    searchTerm.current = e.target.value;
    updateVisibleRows();
  };

  const handleToggleChange = (value: string) => {
    toggleVisible.current = value;
    updateVisibleRows();
  };

  const updateVisibleRows = () => {
    if (!searchTerm.current && toggleVisible.current === "all") {
      setVisibleRows(allAttendees);
      return;
    }

    !searchTerm.current
      ? setVisibleRows(
          allAttendees.filter(visibleToggleMap[toggleVisible.current])
        )
      : setVisibleRows(
          searchRows(
            allAttendees.filter(visibleToggleMap[toggleVisible.current])
          )
        );
  };

  return (
    <div className="admin-wrapper">
      <div className="flex-none admin-header">
        <Header />
      </div>
      <div className="flex-1 main width-container">
        {/* table control - missing prop: onAddedAttendee } */}
        <div className="flex-none table-control-wrapper">
          <TableControl
            rows={visibleRows}
            onSearchChange={handleSearchTermChange}
            onToggleChange={handleToggleChange}
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
