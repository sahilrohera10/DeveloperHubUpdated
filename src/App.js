import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import SideBar from "./Components/SideBar";
import DashboardPage from "./Pages/DashboardPage";
import Courses from "./Pages/Courses";
import Profile from "./Pages/Profile";
import Lectures from "./Pages/Lecture";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <SideBar />
      <div style={{ width: "80%", marginLeft: "300px" }}>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/lectures" element={<Lectures />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
