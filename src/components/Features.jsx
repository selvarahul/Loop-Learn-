import React from "react";
import "./css.css";

const featuresData = [
  {
    title: "Numerical",
    description: "Sharpen your numerical reasoning with topic-wise tests.",
    emoji: "🔢",
  },
  {
    title: "Verbal",
    description: "Improve vocabulary, grammar, and comprehension skills.",
    emoji: "📝",
  },
  {
    title: "Logical",
    description: "Enhance problem-solving and pattern recognition skills.",
    emoji: "🧠",
  },
  {
    title: "Time Management",
    description: "Practice timed tests to improve speed and accuracy.",
    emoji: "⏱️",
  },
];

const Features = () => {
  return (
    // ✅ Added id="features" so navbar link scrolls here
    <section id="features" className="features">
      <h2 className="features-title">Our Features</h2>

      <div className="features-grid">
        {featuresData.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-emoji">
              <span>{feature.emoji}</span> {/* emoji wrapped in span for animation */}
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
