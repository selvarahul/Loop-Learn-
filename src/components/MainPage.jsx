// MainPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./MainPage.css";

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div className="main-container">
      {/* Profile Button on Top-Right */}
      <div className="profile-container">
        <button 
          className="profile-button" 
          onClick={() => navigate("/dashboard")}
        >
          👤 Profile
        </button>
      </div>

      <h1 className="main-title">Choose Your Category</h1>
      <div className="main-cards">
        {/* Verbal Card */}
        <div className="card verbal" onClick={() => navigate("/verbal")}>
          <span className="emoji">🗣️</span>
          <span>Verbal</span>
        </div>

        {/* Numerical Card */}
        <div className="card numerical" onClick={() => navigate("/numerical")}>
          <span className="emoji">🔢</span>
          <span>Numerical</span>
        </div>

        {/* Logical Card */}
        <div className="card logical" onClick={() => navigate("/logical")}>
          <span className="emoji">🧠</span>
          <span>Logical</span>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
