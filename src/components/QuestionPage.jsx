import React, { useState, useEffect } from "react";
import "./QuestionPage.css";

const QuestionPage = ({ questions, onComplete }) => {
  const [currentAnswers, setCurrentAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 min
  const [completed, setCompleted] = useState(false);

  // Timer countdown
  useEffect(() => {
    if (timeLeft > 0 && !completed) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
    if (timeLeft === 0) {
      handleSubmit();
    }
  }, [timeLeft, completed]);

  const handleOptionSelect = (qid, option) => {
    setCurrentAnswers({ ...currentAnswers, [qid]: option });
  };

  const handleSubmit = () => {
    let score = 0;
    questions.forEach((q) => {
      if (currentAnswers[q.id] === q.correct) score++;
    });
    setCompleted(true);
    onComplete(score, currentAnswers, questions);
  };

  return (
    <div className="quiz-container">
      <h2 className="quiz-title">📝 Quiz in Progress</h2>
      <div className="quiz-timer">⏳ Time Left: {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2,"0")}</div>

      <div className="quiz-questions">
        {questions.map((q) => (
          <div key={q.id} className="quiz-question">
            <p>❓ {q.question}</p>
            {q.options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleOptionSelect(q.id, opt)}
                className={`option-btn ${
                  currentAnswers[q.id] === opt ? "selected" : ""
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        ))}
      </div>

      {!completed && (
        <button className="submit-btn" onClick={handleSubmit}>
          ✅ Submit
        </button>
      )}
    </div>
  );
};

export default QuestionPage;
