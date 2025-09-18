import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

const Signup = () => {
  const [username, setUsername] = useState("");//For handling it locally within the component 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault(); //Stop page refresh && lose react states 
                        //Stop page navigation 
    try {
      const response = await fetch("http://localhost:8080/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });

      if (response.ok) {
        const user = await response.json();
        alert("Signup successful! Welcome " + user.username);
        const normalizedUser = {
          id: user.id,
          name: user.username || user.name || username,
          email: user.email,
        };

        localStorage.setItem("user", JSON.stringify(normalizedUser));
        navigate("/main");
      } else {
        const err = await response.text();
        alert("Signup failed: " + err);
      }
    } catch (err) {
      console.error(err);
      alert(" Cannot connect to backend. Ensure Spring Boot is running on port 8080.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            required
            onChange={(e) => setUsername(e.target.value)}
          />
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
          <button type="submit">Sign Up</button>
        </form>
        <div className="auth-links">
          <span>Already have an account? </span>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
