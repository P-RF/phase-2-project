import React, { useState, useEffect } from 'react';

import NavBar from "./components/NavBar";
import AppRoutes from "./components/AppRoutes";
import '../src/Calendar.css';

function App() {
  const [days, setDays] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/calendar")
    .then(r => r.json())
    .then((data) => {
      setDays(data.days);
      setTasks(data.tasks);
      setIsLoading(false)
    })
    .catch((error) => {
      console.error("Error fetching calendar", error);
    });
  }, []);

  if (isLoading) return <p>Loading...</p>

  return (
    <>
      <NavBar />
      <AppRoutes days={days} tasks={tasks} />
    </>
  );
}

export default App;
