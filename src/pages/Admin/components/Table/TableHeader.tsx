import "./TableHeader.scss";
const HEADERS = ["שם משפחה", "שם פרטי", "ת.ז.", "מוסד לימודי", "נוכחות", ""];

const TableHeader = () => {
  return (
    <div className="table-header">
      {HEADERS.map((header) => (
        <div key={header}>{header}</div>
      ))}
    </div>
  );
};

export default TableHeader;
