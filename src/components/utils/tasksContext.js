import { createContext } from "react";

// new context object passed from parent component to children (global state)
export const TasksContext = createContext({ 
  tasks: [],
  setTasks: () => {},
  addTask: () => {},
  toggleTask: () => {},
  deleteTask: () => {},
});