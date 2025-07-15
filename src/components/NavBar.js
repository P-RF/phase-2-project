// NavBar.js
import { Link } from "react-router-dom";

function NavBar() {

  return (
    <nav className="navbar">
      <h1 className="header">CalCheck</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/calendar">Calendar</Link>
        <Link to="/tasks">Tasks</Link>
      </div>
    </nav>
  )
}

export default NavBar;