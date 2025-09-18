import React, { useState } from "react";
import QuestionPage from "./QuestionPage";
import ResultPage from "./ResultPage";

const QuizSet = ({ sets }) => {
  const [currentSet, setCurrentSet] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [lastResult, setLastResult] = useState(null);

  const handleComplete = (score, answers, questions) => {
    setLastResult({ score, answers, questions });
    setShowResult(true);
  };

  const handleRetake = () => {
    setShowResult(false);
  };

  const handleNext = () => {
    setShowResult(false);
    setCurrentSet((prev) => prev + 1);
  };

  return (
    <div>
      {!showResult ? (
        <QuestionPage
          questions={sets[currentSet]}
          onComplete={handleComplete}
        />
      ) : (
        <ResultPage
          result={lastResult}
          onRetake={handleRetake}
          onNext={handleNext}
          isLast={currentSet === sets.length - 1}
        />
      )}
    </div>
  );
};

export default QuizSet;
