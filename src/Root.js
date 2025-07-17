import React from 'react';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { TasksContext } from './components/utils/tasksContext';
import useTasks from '../src/components/utils/useTasks';

export default function Root() { // useTasks handles Fetch CRUD - Fetch requests for GET, POST, PATCH, and DELETE
  const { tasks, isLoading, addTask, toggleTask, deleteTask } = useTasks();

  if (isLoading) return <p>Loading...</p> // shows 'loading' message to the user while the data is being fetched


  return (    // pass props to child components via useContext(TaskContent) -- Global state & client-side routing
    <TasksContext.Provider value={{tasks, addTask, toggleTask, deleteTask}}>
      <BrowserRouter>
        <App />
      </BrowserRouter>   
    </TasksContext.Provider>
  );
}