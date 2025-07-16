import { Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import Calendar from "./pages/Calendar";
import Tasks from "./pages/Tasks";
import Layout from "./Layout";

 function AppRoutes({ days, tasks, addTask, toggleTask, deleteTask }) {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Main />} />
        <Route path="/calendar" element={<Calendar days={days} tasks={tasks} />} />
        <Route 
          path="/tasks/:date?" 
          element={
            <Tasks 
              days={days} 
              tasks={tasks}
              addTask={addTask}
              toggleTask={toggleTask}
              deleteTask={deleteTask} 
            />
          } 
        />
      </Route>
    </Routes>
  );
}

export default AppRoutes;