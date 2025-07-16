import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/components/App';
import { BrowserRouter } from 'react-router-dom';
import { TasksContext } from './utils/TasksContext';

function Root() {
  const [tasks, setTasks] = useState([])

  const addTask = ({ text, date }) => {   // adds a new task to the currect list of tasks
    const newTask = {
      id: Date.now(),
      text,
      date,
      completed: false,
    };
    setTasks(prev => [...prev, newTask]);
  };

  const toggleTask = (id) => { // find task id, toggle completed state, replace in list of tasks, update state with new list.
    setTasks(prevTasks =>
      prevTasks.map(task => task.id === id ? {...task, completed: !task.completed} : task));
  };

  const deleteTask = (id) => {    // deletes a task in the current list of tasks
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  return (    // pass props to child components via useContext(TaskContent) -- Global state & client-side routing
    <TasksContext.Provider value={{tasks, setTasks, addTask, toggleTask, deleteTask}}>
      <BrowserRouter>
        <App />
      </BrowserRouter>   
    </TasksContext.Provider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Root />)