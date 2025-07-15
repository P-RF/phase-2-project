// NavBar.js
import { Link } from "react-router-dom";
import "../../src/NavBar.css"

function NavBar() {

  return (
    <div>
      <nav className="navbar">
        <div className="nav-links">
          <Link className="calendar-link" to="/calendar">Calendar</Link>
          <Link className="tasks-link" to="/tasks">Tasks</Link>
        </div>
      </nav>
    </div>
  )
}

export default NavBar;