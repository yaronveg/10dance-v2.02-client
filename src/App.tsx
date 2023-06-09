import "./App.scss";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { CheckIn, Admin, PrintNametag, PrintTable } from "./pages";

function App() {
  const routes = (
    <>
      <Route path="/" element={<CheckIn />} />
      <Route path="/print-nametag" element={<PrintNametag />} />
      <Route path="/admin/print-table" element={<PrintTable />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </>
  );

  return (
    <div className="App">
      <Router>
        <main className="color-text-primary">
          <Routes>{routes}</Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
