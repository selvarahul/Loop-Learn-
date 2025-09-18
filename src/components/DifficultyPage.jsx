import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./DifficultyPage.css";

const DifficultyPage = () => {
  const { topic, type } = useParams(); // type: numerical/verbal/logical, topic: sub-topic
  const navigate = useNavigate();

  const goToQuiz = (difficulty) => {
    if (difficulty === "easy") {
      // Navigate to EasySets page for the current type and topic
      navigate(`/easy/${type}/${topic}`);
    }
    // For future use
    else if (difficulty === "medium") {
      alert("⚡ Medium levels coming soon!");
    } else if (difficulty === "hard") {
      alert("🔥 Hard levels coming soon!");
    }
  };

  return (
    <div className="difficulty-container">
      <h1 className="difficulty-title">Select Difficulty for {topic.replace("-", " ").toUpperCase()}</h1>
      <p className="difficulty-subtitle">
        Choose how challenging you want your <strong>{topic.replace("-", " ")}</strong> questions to be
      </p>

      <div className="difficulty-buttons">
        <button className="easy-btn" onClick={() => goToQuiz("easy")}>
          🟢 Easy
        </button>
        <button className="medium-btn" onClick={() => goToQuiz("medium")}>
          🟡 Medium
        </button>
        <button className="hard-btn" onClick={() => goToQuiz("hard")}>
          🔴 Hard
        </button>
      </div>
    </div>
  );
};

export default DifficultyPage;
