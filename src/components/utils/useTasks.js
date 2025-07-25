import { useState, useEffect } from 'react';

export default function useTasks() { // all logic related to fetching 
  const [tasks, setTasks] = useState([])
  const [isLoading, setIsLoading] = useState(true); // local state variable to track if task is loading from API

  useEffect(() => {   // initial data loading
    fetch(`${process.env.REACT_APP_API_URL}/tasks`)    // http GET request to fetch data from backend (db.json)
    .then(r => r.json())    // convert from JSON format into JS object
    .then(data => {
      setTasks(data);   // calls setTasks to update the global tasks state with fetched tasks
      setIsLoading(false);   // indicates loading is done and UI displays content
    })
    .catch(error => {
      console.error("Error fetching tasks", error);
      setIsLoading(false);
    });
  }, []);


  const addTask = (newTask) => {   // adds a new task to the currect list of tasks
    // const newTask = {
    //   // id: Date.now(),
    //   text,
    //   date,
    //   completed: false,
    // };
    const addedTask = {...newTask, completed: false}
    fetch('http://localhost:3000/tasks', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(addedTask)
    })
    .then(r => r.json())
    .then(savedTask => {
      setTasks(tasks => [...tasks, savedTask]);
    })
    .catch(error => console.error("Error adding task", error))
  };

  const toggleTask = (id) => { // find task id, toggle completed state, replace in list of tasks, update state with new list.
    const taskToUpdate = tasks.find(task => task.id === id);
    const updatedTask = {...taskToUpdate, completed: !taskToUpdate.completed}
    fetch(`http://localhost:3000/tasks/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({completed: updatedTask.completed})
    })
    .then(r => r.json())
    .then((updatedFromServer) => {
      setTasks(prevTasks =>
        prevTasks.map((task) => task.id === id ? updatedFromServer : task)
      );
    })
    .catch(error => console.error("Error toggling task", error)
    );
  };

  const deleteTask = (id) => {    // deletes a task in the current list of tasks
    fetch(`http://localhost:3000/tasks/${id}`, {
      method: 'DELETE'
    })
    .then(() => {
      setTasks(prev => prev.filter(task => task.id !== id));
    })
    .catch(error => console.error('Error deleting task', error));
  };

  return { tasks, isLoading, addTask, toggleTask, deleteTask };
}