import React from "react";
import { Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import Calendar from "./pages/Calendar";
import Tasks from "./pages/Tasks";
import Layout from "./Layout";

 function AppRoutes() {

  return (    /* routes in a shared layout component. 
  Respective URLs for Main, Calendar, and Tasks. 
  Tasks requires date (replacing id). 
  ReactRouter figured out which page to render according to URL.
  */ 
      <Routes> 
        <Route element={<Layout />}> 
          <Route path="/" element={<Main />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/tasks/:date?" element={<Tasks />} />
        </Route>
      </Routes>
  );
}

export default AppRoutes;