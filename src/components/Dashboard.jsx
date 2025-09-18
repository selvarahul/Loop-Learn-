import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import "./Dashboard.css";

const Dashboard = () => {
  const categories = {
    Numerical: [
      { name: "Time and Work", path: "timeandwork" },
      { name: "Percentage", path: "percentage" },
      { name: "SI & CI", path: "siAndci" },
      { name: "Ratio & Proportion", path: "ratioandpropotion" },
      { name: "Speed & Distance", path: "speedanddistance" },
      { name: "Profit & Loss", path: "profitandloss" },
      { name: "Averages & Ages", path: "ages" },
      { name: "Clocks", path: "clocks" },
    ],
    Verbal: [
      { name: "Reading Comprehension", path: "readingcomprehension" },
      { name: "Synonyms", path: "synonyms" },
      { name: "Antonyms", path: "antonyms" },
      { name: "Correct the Statement", path: "correctstatement" },
      { name: "Articles", path: "articles" },
      { name: "Data Interpretation", path: "datainterpretation" },
      { name: "Syllogism", path: "syllogism" },
      { name: "Preposition", path: "preposition" },
    ],
    Logical: [
      { name: "Seating Arrangement", path: "seating-arrangement" },
      { name: "Blood Relations", path: "blood-relations" },
      { name: "Letter Coding", path: "letter-coding" },
      { name: "Find Shortest Distance", path: "shortest-distance" },
      { name: "Analogy", path: "analogy" },
      { name: "Turns and Facing", path: "turns-facing" },
      { name: "Venn Diagram", path: "venn-diagram" },
      { name: "Puzzle/Analogy", path: "puzzle-analogy" },
    ],
  };

  const storedUser = JSON.parse(localStorage.getItem("user"));
  const userId = storedUser?.id || "guest";
  const totalLevels = 100;

  const [progressData, setProgressData] = useState({});
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchProgress = () => {
      const data = {};
      Object.keys(categories).forEach((cat) => {
        categories[cat].forEach((topic) => {
          const key = `progress-${userId}-${cat.toLowerCase()}-${topic.path}`;
          let lastCompleted = parseInt(localStorage.getItem(key)) || 0;

          if (lastCompleted === 0) lastCompleted = 1;

          console.log("📊 Reading progress", { key, value: lastCompleted });

          const percent = ((lastCompleted / totalLevels) * 100).toFixed(1);
          data[`${cat}-${topic.path}`] = { percent, lastCompleted };
        });
      });
      setProgressData(data);
    };

    fetchProgress(); // initial load

    const handleStorage = (e) => {
      if (e.key === "dashboardRefresh") {
        fetchProgress();
      }
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, [userId]);

  return (
    <div className="dashboard-container">
      <h1>👤 {storedUser?.name || "Guest"}'s Performance Dashboard</h1>
      <button className="back-btn" onClick={() => navigate("/main")}>
        ⬅ Back to Main Page
      </button>

      {Object.keys(categories).map((category) => (
        <div key={category} className="dashboard-category">
          <h2>{category}</h2>
          <div className="dashboard-topics-grid">
            {categories[category].map((topic) => {
              const prog = progressData[`${category}-${topic.path}`] || {
                percent: "1.0",
                lastCompleted: 1,
              };
              return (
                <div key={topic.path} className="dashboard-topic-card">
                  <span className="dashboard-topic-name">{topic.name}</span>
                  <div className="dashboard-progress-bar">
                    <div
                      className="dashboard-progress-fill"
                      style={{
                        width: `${prog.percent}%`,
                        transition: "width 0.6s ease-in-out",
                      }}
                    ></div>
                  </div>
                  <span className="dashboard-progress-text">
                    {prog.percent}% (Last Set: {prog.lastCompleted})
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
