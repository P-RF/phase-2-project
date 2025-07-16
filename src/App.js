import React, { useState, useEffect, createContext } from 'react';

import NavBar from "./components/NavBar";
import AppRoutes from "./components/AppRoutes";
import '../src/Calendar.css';

export const TasksContext = createContext();

function App() {
  const [days, setDays] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const addTask = ({ text, date }) => {
    const newTask = {
      id: Date.now(),
      text,
      date,
      completed: false,
    };
    setTasks([...tasks, newTask])
  };
  
  const toggleTask = (id) => {
    setTasks(prevTasks =>
      prevTasks.map(task => task.id === id ? {...task, completed: !task.completed} : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

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
      <AppRoutes days={days} tasks={tasks} addTask={addTask} toggleTask={toggleTask} deleteTask={deleteTask} />
    </>
  );
}

export default App;
