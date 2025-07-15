// Tasks.js
import { useParams } from "react-router-dom";
import "../../../src/Tasks.css"

function Tasks() {
  const { date } = useParams;

  return (
    <div className="tasks">Tasks for {date}: </div>
  )
}

export default Tasks;