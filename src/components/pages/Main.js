// Main.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../src/Main.css";

function Main() {
  const [username, setUsername] = useState(""); // initializes state variable with and empty string (username)
  const [password, setPassword] = useState("") // initializes state variable with and empty string (password)
  const navigate = useNavigate(); // initializes the navigate function to allow user to change the URL

  const handleSignIn = (e) => {   // 
    e.preventDefault();   // stops page from reloading after form submission
    if (username.trim()) {  // ensures username doe snot have empty spaces. If so, spaces are removed
      localStorage.setItem("username", username); // saves username in local storage, even if page reloads
      navigate("/calendar");  // once user is logged in, user is redirected to the calendar page
    }
  };

  return (
      <div className="glass-container">
        <div className="login-box">
          <h2 className="login-header">Login</h2>
        </div>
        <form className="login-form" action="#" method="POST" onSubmit={handleSignIn}>
          <input 
            className="login-username-input"
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input 
            className="login-password-input"
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br/>
          <div className="options">
            <input type="checkbox" id="remember" name="remember" />
            <label htmlFor="remember">Remember me</label> 
            <br/>
            <span className="disabled-forgot-password-link">Forgot Password?</span>
          </div>
          <button type="submit">Login</button>
          <p className="main-q">Don't have an account?</p> 
          <span className="disabled-register-link">Register</span>
        </form>
      </div>
  )
}

export default Main;