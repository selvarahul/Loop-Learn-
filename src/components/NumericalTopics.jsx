import React from "react";
import { useNavigate } from "react-router-dom";
import "./Topics.css";

const NumericalTopics = () => {
  const navigate = useNavigate();

  const topics = [
    { name: "Time and Work", emoji: "⏰", path: "timeandwork" },
    { name: "Percentage", emoji: "%", path: "percentage" },
    { name: "SI & CI", emoji: "💰", path: "siAndci" },
    { name: "Ratio & Proportion", emoji: "⚖️", path: "ratioandpropotion" },
    { name: "Speed & Distance", emoji: "🚗", path: "speedanddistance" },
    { name: "Profit & Loss", emoji: "💹", path: "profitandloss" },
    { name: "Averages & Ages", emoji: "📊", path: "ages" },
    { name: "Clocks", emoji: "🕰️", path: "clocks" },
  ];

  return (
    <div className="topics-container">
      <h1 className="topics-title">Numerical Topics</h1>
      <div className="topics-grid">
        {topics.map((topic) => (
          <div
            key={topic.path}
            className="topic-card"
            onClick={() => navigate(`/difficulty/numerical/${topic.path}`)}
          >
            <span className="emoji">{topic.emoji}</span>
            <span className="topic-name">{topic.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NumericalTopics;
