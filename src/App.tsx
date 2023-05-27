import "./App.scss";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { CheckIn, Admin } from "./pages";

function App() {
  const routes = (
    <>
      <Route path="/" element={<CheckIn />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </>
  );

  return (
    <div className="App">
      <Router>
        <main>
          <Routes>{routes}</Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
