import "./Admin.scss";
import Header from "./components/Header";

function Admin() {
  return (
    <div className="admin-wrapper">
      <div className="flex-none">
        <Header />
      </div>
      <div className="flex-1 main width-container"></div>
    </div>
  );
}

export default Admin;
