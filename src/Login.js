import React, { useState } from "react";
import "./Login.css";
import DeviceComponent from "./DeviceComponent";
import { useHistory } from "react-router-dom";
import reactRouterDom from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);

  const history = useHistory();
  const handleLogin = () => {
    // Here, you can implement your login logic.
    // For simplicity, I'm just checking if the username and password are both "admin".
    if (username === "admin" && password === "admin") {
      history.push("/devices");
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="container">
      <div>
        <h2>Login Page</h2>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
