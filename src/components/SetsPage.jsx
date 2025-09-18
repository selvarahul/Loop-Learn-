import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./SetsPage.css";

const SetsPage = () => {
  const { type, topic, difficulty } = useParams(); // e.g., numerical/time-and-work/easy
  const navigate = useNavigate();
  const [completedSets, setCompletedSets] = useState([]);

  const TOTAL_SETS = 50; // total sets per difficulty
  const UNLOCK_THRESHOLD = difficulty === "medium" ? 10 : difficulty === "hard" ? 10 : 0; 
  // 10 easy sets must be completed to unlock medium
  // 10 medium sets must be completed to unlock hard

  useEffect(() => {
    const progress = JSON.parse(localStorage.getItem(`${type}-${topic}-${difficulty}`)) || [];
    setCompletedSets(progress);
  }, [type, topic, difficulty]);

  // Check if previous difficulty completed enough to unlock this difficulty
  const canAccessDifficulty = () => {
    if (difficulty === "easy") return true;
    if (difficulty === "medium") {
      const easyProgress = JSON.parse(localStorage.getItem(`${type}-${topic}-easy`)) || [];
      return easyProgress.length >= UNLOCK_THRESHOLD;
    }
    if (difficulty === "hard") {
      const mediumProgress = JSON.parse(localStorage.getItem(`${type}-${topic}-medium`)) || [];
      return mediumProgress.length >= UNLOCK_THRESHOLD;
    }
    return false;
  };

  const handleSetClick = (setNumber) => {
    if (!canAccessDifficulty()) {
      alert(`Complete ${UNLOCK_THRESHOLD} ${difficulty === "medium" ? "Easy" : "Medium"} sets first! 🔒`);
      return;
    }
    if (setNumber === 1 || completedSets.includes(setNumber - 1)) {
      navigate(`/quiz/${type}/${topic}/${difficulty}/${setNumber}`);
    } else {
      alert("Complete the previous set first! 🔒");
    }
  };

  const sets = Array.from({ length: TOTAL_SETS }, (_, i) => i + 1);

  return (
    <div className="sets-container">
      <h1>{difficulty.toUpperCase()} Sets for {topic.replace(/-/g, " ")}</h1>
      <div className="sets-grid">
        {sets.map((num) => {
          const unlocked = num === 1 || completedSets.includes(num - 1);
          const completed = completedSets.includes(num);
          return (
            <div
              key={num}
              className={`set-card ${unlocked ? "" : "locked"} ${completed ? "completed" : ""}`}
              onClick={() => unlocked && handleSetClick(num)}
            >
              {completed ? "✅" : unlocked ? "🟢" : "🔒"} {difficulty} {num}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SetsPage;
