import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import Tasks from "./pages/Tasks";

 function AppRoutes({ days, tasks }) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/tasks" element={<Tasks />} />
    </Routes>
  );
}

export default AppRoutes;