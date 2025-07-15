import { Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import Calendar from "./pages/Calendar";
import Tasks from "./pages/Tasks";
import Layout from "./Layout";

 function AppRoutes({ days, tasks }) {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Main />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/tasks/:date" element={<Tasks />} />
      </Route>

    </Routes>
  );
}

export default AppRoutes;