import React from "react";
import { useNavigate } from "react-router-dom";
import "./Topics.css";

const LogicalTopics = () => {
  const navigate = useNavigate();

  const topics = [
    { name: "Seating Arrangement", emoji: "🪑", path: "seating-arrangement" },
    { name: "Blood Relations", emoji: "🩸", path: "blood-relations" },
    { name: "Letter Coding", emoji: "🔡", path: "letter-coding" },
    { name: "Find Shortest Distance", emoji: "📏", path: "shortest-distance" },
    { name: "Analogy", emoji: "🔗", path: "analogy" },
    { name: "Turns and Facing", emoji: "🔄", path: "turns-facing" },
    { name: "Venn Diagram", emoji: "⭕", path: "venn-diagram" },
    { name: "Puzzle/Analogy", emoji: "🧠", path: "puzzle-analogy" },
  ];

  return (
    <div className="topics-container">
      <h1 className="topics-title">Logical Topics</h1>
      <div className="topics-grid">
        {topics.map((topic) => (
          <div
            key={topic.path}
            className="topic-card"
            onClick={() => navigate(`/difficulty/logical/${topic.path}`)}
          >
            <span className="emoji">{topic.emoji}</span>
            <span className="topic-name">{topic.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogicalTopics;
