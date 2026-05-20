import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Footer from "../components/Dashborad/Footer/Footer";
import Navbar from "../components/Dashborad/Navbar/Navbar";
import Sidebar from "../components/Dashborad/Sidebar/Sidebar";
import StatusPage from "./StatusPage";
import Users from "./Users";
import Projects from "./Projects";
import Developers from "./Developers";
import TableDashboard from "../Ui/TableDashboard/TableDashboard";
import FormDashboard from "../Ui/FormDashboard/FormDashboard";
import TableDashboardProjects from "../Ui/TableDashboardProjects/TableDashboardProjects";
import TableDashboardDevelopers from "../Ui/TableDashboardDevelopers/TableDashboardDevelopers";


function Dashboard() {
  const [hasDraft, setHasDraft] = useState(false);
  return (
    <>
      <Navbar adminName="wesam" />
      <div className="d-flex">
         <Sidebar hasDraft={hasDraft} />
        {/* <Sidebar /> */}
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<StatusPage />} />

            <Route path="/users" element={<Users />}>
              {/* First child */}
              <Route index element={<TableDashboard />} />
              <Route path="add" element={<FormDashboard setHasDraft={setHasDraft} />} />
              {/* Second child */}
              <Route path="add" element={<FormDashboard />} />
            </Route>

            <Route path="/projects" element={<Projects />}>
              {/* First child */}
              <Route index element={<TableDashboardProjects />} />
              {/* Second child */}
              <Route path="add" element={<FormDashboard />} />
            </Route>

            <Route path="/developers" element={<Developers />}>
              {/* First child */}
              <Route index element={<TableDashboardDevelopers title="developer" name="add new develper "/>} />
              {/* Second child */}
              <Route path="add" element={<FormDashboard />} />
            </Route>

          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
