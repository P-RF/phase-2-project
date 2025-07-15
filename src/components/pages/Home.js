// Home.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("")
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    if (username.trim()) {
      localStorage.setItem("username", username);
      navigate("/calendar");
    }
  };

  return (
    <div className="glass-container">
      <div className="login-box">
        <h2>Login</h2>
      </div>
      <form className="login-form" action="#" method="POST" onSubmit={handleSignIn}>
        <input 
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br/>
        <input 
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
        <p>Don't have an account?</p> 
        <span className="disabled-register-link">Register</span>
      </form>
    </div>
  )
}

export default Home;