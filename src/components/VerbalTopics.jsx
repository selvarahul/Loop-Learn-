import React from "react";
import { useNavigate } from "react-router-dom";
import "./Topics.css";

const VerbalTopics = () => {
  const navigate = useNavigate();

  const topics = [
    { name: "Reading Comprehension", emoji: "📖", path: "readingcomprehension" },
    { name: "Synonyms", emoji: "🔤", path: "synonyms" },
    { name: "Antonyms", emoji: "❌", path: "antonyms" },
    { name: "Correct the Statement", emoji: "✍️", path: "correctstatement" },
    { name: "Articles", emoji: "📝", path: "articles" },
    { name: "Data Interpretation", emoji: "📊", path: "datainterpretation" },
    { name: "Syllogism", emoji: "🧩", path: "syllogism" },
    { name: "Preposition", emoji: "📍", path: "preposition" },
  ];

  return (
    <div className="topics-container">
      <h1 className="topics-title">Verbal Topics</h1>
      <div className="topics-grid">
        {topics.map((topic) => (
          <div
            key={topic.path}
            className="topic-card"
            onClick={() => navigate(`/difficulty/verbal/${topic.path}`)}
          >
            <span className="emoji">{topic.emoji}</span>
            <span className="topic-name">{topic.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerbalTopics;
