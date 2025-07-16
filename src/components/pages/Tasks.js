// Tasks.js
import React, { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { formatDateString } from "../../utils/dateUtils";
import "../../../src/Tasks.css"

function Tasks({ tasks, addTask, toggleTask, deleteTask }) {
  const { date } = useParams();
  const [newTask, setNewTask] = useState("");

  // redirect if no date is provided
  if (!date) {
    const today = new Date();
    const todayString = formatDateString(today.getFullYear(), today.getMonth(), today.getDate());
    return (<Navigate to={`/tasks/${todayString}`} replace />)
  };

  const filteredTasks = tasks.filter(task => task.date === date);

  const handleTask = () => {
    if (!newTask.trim()) return;
    addTask({ text: newTask, date, completed: false });
    setNewTask("");
  };

  const renderedTasks = filteredTasks.length === 0
    ? <li>No tasks.</li>
    : filteredTasks.map(task => (
      <li key={task.id}>
        <input className="task-checkbox" type="checkbox" checked={task.completed} onChange={() => toggleTask(task.id)} />
        {task.text}
        <button
          className="task-delete"
          onClick={() => deleteTask(task.id)}
        >x</button>
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