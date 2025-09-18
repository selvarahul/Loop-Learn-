import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // Stops page refresh

    // ✅ Manual login check first
    if (email === "s@gmail.com" && password === "1") {
      const normalizedUser = {
        id: "manual-1",
        name: "Selva", // you can customize the display name here
        email: "s@gmail.com",
      };
      localStorage.setItem("user", JSON.stringify(normalizedUser));
      navigate("/main");
      return; // skip backend call
    }

    // ✅ If not manual credentials, call backend
    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const user = await response.json();
        const normalizedUser = {
          id: user.id,
          name: user.username || user.name || email.split("@")[0],
          email: user.email,
        };
        localStorage.setItem("user", JSON.stringify(normalizedUser));
        navigate("/main");
      } else {
        const errorText = await response.text();
        alert("Login failed: " + errorText);
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Error connecting to backend!");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>

        <div className="auth-links">
          <Link to="/forgot-password">Forgot Password?</Link>
          <span> | </span>
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
