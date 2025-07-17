// Tasks.js
import React, { useState, useContext } from "react";
import { Navigate, useParams } from "react-router-dom";
import { TasksContext } from "../utils/tasksContext";
import { formatDateString } from "../utils/dateUtils";
import "../../../src/Tasks.css"

function Tasks() {
  const {tasks = [], addTask, toggleTask, deleteTask} = useContext(TasksContext); // useContext hook allows access to TasksContent component with values

  const { date } = useParams(); // extracts the URL parameter (date)
  const [newTask, setNewTask] = useState(""); // sets up a state variable 'newTask' to hold the input value of a new task that is typed

  // checks if no date is in URL. If not, user is redirected to the 'tasks' page.
  if (!date) {
    const today = new Date();
    const todayString = formatDateString(today.getFullYear(), today.getMonth(), today.getDate());
    return (<Navigate to={`/tasks/${todayString}`} replace />)
  };

  const filteredTasks = tasks.filter(task => task.date === date); // filters tasks for chosen day

  const handleTask = () => {    // adds a new task to current day. Once it's added, the input is cleared
    if (!newTask.trim()) return;
    addTask({ text: newTask, date });
    setNewTask("");
  };

  // render task list with checkboxes to toggle completion. Renders delete button for each task or shows no tasks if empty.
  const renderedTasks = filteredTasks.length === 0
    ? <li>No tasks.</li>
    : filteredTasks.map(task => (
      <li key={task.id} className={task.completed ? "complete" : ""}>
        <input className="task-checkbox" type="checkbox" checked={task.completed} onChange={() => toggleTask(task.id)} />
        {task.text}
        <button
          className="task-delete"
          onClick={() => deleteTask(task.id)}
          >x
        </button>
      </li>
    ));

  return (
    <div className="tasks-glass-container">
      <div className="tasks">
        <h2 className="task-header">Tasks for {date}</h2>
        <div className="task-input-wrapper">
          <input
            className="task-input"
            type="text"
            placeholder="Add task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleTask()}
          />
          <button className="task-add" onClick={handleTask}>Add</button>
        </div>
        <ul className="rendered-tasks">
          {renderedTasks}
        </ul>
      </div>
    </div>
  )
}

export default Tasks;