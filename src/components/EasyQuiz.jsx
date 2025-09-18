import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import questionBank from "../questions"; 
import "./EasyQuiz.css";
const EasyQuiz = () => {
  const { type, topic, levelId } = useParams();
  const navigate = useNavigate();

  const [started, setStarted] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);
  const questions = questionBank[type]?.[topic]?.[levelId] || [];
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const userId = storedUser?.id || "guest";
  useEffect(() => {
    const completedKey = `completed-${userId}-${type}-${topic}`;
    const completed = JSON.parse(localStorage.getItem(completedKey)) || [];

    if (completed.includes(parseInt(levelId))) {
      setShowResult(true);
      setShowAnswers(true);
      setStarted(false);
    }
  }, [userId, type, topic, levelId]);

  const handleOptionClick = (qIndex, option) => {
    setSelectedOptions({ ...selectedOptions, [qIndex]: option });
  };

  const handleSubmit = async () => {
    let newScore = 0;
    questions.forEach((q, index) => {
      if (selectedOptions[index] === q.answer) newScore++;
    });
    setScore(newScore);
    setShowResult(true);
        try {
      if (storedUser?.id) {
        await fetch(`http://localhost:8080/api/progress/${storedUser.id}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            quizCategory: type,
            topic: topic,
            completedSets: parseInt(levelId),
            completedAt: new Date().toISOString(),
          }),
        });
        localStorage.setItem(
          "unlockNextLevel",
          (parseInt(levelId) + 1).toString()
        );
      }
    } catch (error) {
      console.error("❌ Error saving progress:", error);
    }
  };
  const handleExit = () => {
    const currentLevel = parseInt(levelId) || 1;
    const nextLevel = currentLevel + 1;
    if (nextLevel <= 100) {
      const passkey = Math.floor(1000 + Math.random() * 9000).toString();
      localStorage.setItem(`passkey-${type}-${topic}-${nextLevel}`, passkey);
      alert(`🔑 Save this passkey to unlock Easy ${nextLevel}: ${passkey}`);
    }
    const completedKey = `completed-${userId}-${type}-${topic}`;
    const completed = JSON.parse(localStorage.getItem(completedKey)) || [];
    const updatedCompleted = completed.includes(currentLevel)
      ? completed
      : [...completed, currentLevel];
    localStorage.setItem(completedKey, JSON.stringify(updatedCompleted));
    const highestCompleted = Math.max(...updatedCompleted);
    const progressKey = `progress-${userId}-${type.toLowerCase()}-${topic}`;
    localStorage.setItem(progressKey, highestCompleted);
    console.log("✅ Saving progress (Exit)", { progressKey, value: highestCompleted });
    localStorage.setItem("dashboardRefresh", Date.now());
    navigate(`/easy/${type}/${topic}`);
  };

  return (
    <div className="easy-quiz-container no-select">
      {!started && !showResult && (
        <div className="ready-box">
          <h2>🚀 Ready for Easy Set {levelId}?</h2>
          <p>Once you start, you cannot exit until submission ⏳</p>
          <button className="start-btn" onClick={() => setStarted(true)}>
            Start Test
          </button>
        </div>
      )}

      {started && !showResult && (
        <div>
          <div className="quiz-header">
            <h2>
              📝 Easy Set {levelId}: {topic.replace(/([A-Z])/g, " $1").trim()}
            </h2>
            <p>⏰ Duration: 15 min</p>
          </div>
          {questions.map((q, index) => (
            <div key={index} className="question-box">
              <p>
                <strong>Q{index + 1}:</strong> {q.question}
              </p>
              <div className="options">
                {q.options.map((opt, i) => (
                  <button
                    key={i}
                    className={`option-btn ${
                      selectedOptions[index] === opt ? "selected" : ""
                    }`}
                    onClick={() => handleOptionClick(index, opt)}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ))}
          <button className="submit-btn" onClick={handleSubmit}>
            ✅ Submit
          </button>
        </div>
      )}

      {showResult && (
        <div className="result-box">
          <h2>🎉 Test Completed!</h2>
          <p>
            You scored <strong>{score}</strong> / {questions.length}
          </p>
          <p className="grade">
            Grade: {((score / questions.length) * 100).toFixed(0)}%
          </p>

          <div className="result-actions">
            {!showAnswers && (
              <>
                <button
                  className="answers-btn"
                  onClick={() => setShowAnswers(true)}
                >
                  📖 Show Answers
                </button>
              </>
            )}

            {showAnswers && (
              <>
                <button className="exit-btn" onClick={handleExit}>
                  🚪 Exit (Get Passkey)
                </button>
                <button className="start-btn" onClick={() => navigate(`/easy/${type}/${topic}`)}>
                  🔙 Back to Levels
                  </button>
              </>
            )}
          </div>

          {showAnswers && (
            <div className="answers-section">
              <h3>📌 Correct Answers:</h3>
              {questions.map((q, index) => (
                <p key={index}>
                  {q.question} <br />
                  ✅ <span className="correct">{q.answer}</span>
                </p>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default EasyQuiz;
