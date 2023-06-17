import "./Admin.scss";
import Header from "./components/Header";

function Admin() {
  return (
    <div className="admin-wrapper">
      <div className="flex-none">
        <Header />
      </div>
      <div className="flex-1 admin-page">
        <div className="width-container">page</div>
      </div>
    </div>
  );
}

export default Admin;
