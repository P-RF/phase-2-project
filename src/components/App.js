import React, { useState, useEffect, useContext } from "react";
import { TasksContext } from "../utils/TasksContext";

import NavBar from "./NavBar";
import AppRoutes from "./AppRoutes";
import '../Calendar.css';


function App() {
  const { setTasks } = useContext(TasksContext); // useContext hook allows access to TasksContent component with values

  const [isLoading, setIsLoading] = useState(true); // local state variable to track if task is loading from API

  useEffect(() => {
    fetch("http://localhost:3000/calendar") // http GET request to fetch data from backend (db.json)
    .then(r => r.json())  // convert from JSON format into JS object
    .then((data) => {
      setTasks(data.tasks);   // calls setTasks to update the global tasks state with fetched tasks
      setIsLoading(false)   // indicates loading is done and UI displays content
    })
    .catch((error) => {
      console.error("Error fetching calendar", error);  // if fetch fails, error is logged
      setIsLoading(false);    // UI can stop showing a loading indicator despite error
    });
  }, [setTasks]); // runs task when component mounts and if it changes; shows tasks in calendar page.

  if (isLoading) return <p>Loading...</p> // conditional. If it is loading, it immediately displays "Loading..." to user

  return (  // renders NavBar and AppRoutes togetherwithout extra wrappers
    <>
      <NavBar />
      <AppRoutes />
    </>
  );
}

export default App;
