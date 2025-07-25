// NavBar.js
import { Link } from "react-router-dom";
import "../../src/NavBar.css"
import { formatDateString } from "./utils/dateUtils";

function NavBar() {
  const today = new Date(); // creates js object for date

  // Destructure parts of 'today'
  const day = today.getDate();
  const month = today.getMonth();
  const year = today.getFullYear();

  const dateString = formatDateString(year, month, day) // combines year, month, and day into a string

  return (   // renders navigation bar with buttons. One for Calendar page and the other for Tasks page
    <div>
      <nav className="navbar">
        <div className="nav-links">
          <Link className="calendar-link" to="/calendar">Calendar</Link>
          <Link className="tasks-link" to={`/tasks/${dateString}`}>Tasks</Link>
        </div>
      </nav>
    </div>
  )
}

export default NavBar;