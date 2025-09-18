import React, { useState } from "react";
import "./ResultPage.css";

const ResultPage = ({ result, onRetake, onNext, isLast }) => {
  const [showAnswers, setShowAnswers] = useState(false);

  return (
    <div className="result-container">
      <h2>📊 Quiz Result</h2>
      <p>🎯 Your Score: {result.score} / {result.questions.length}</p>

      {!showAnswers ? (
        <div className="result-buttons">
          <button onClick={onRetake}>🔄 Retake</button>
          <button onClick={() => setShowAnswers(true)}>📖 Show Answers</button>
          {!isLast && <button onClick={onNext}>➡ Next Set</button>}
        </div>
      ) : (
        <div className="answers-container">
          {result.questions.map((q) => (
            <p key={q.id}>
              ❓ {q.question} <br />
              Your Answer:{" "}
              {result.answers[q.id] === q.correct ? (
                <span className="correct">✅ {result.answers[q.id]}</span>
              ) : (
                <span className="wrong">❌ {result.answers[q.id] || "Not Answered"}</span>
              )}
              <br />
              Correct: <span className="correct">✅ {q.correct}</span>
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default ResultPage;
