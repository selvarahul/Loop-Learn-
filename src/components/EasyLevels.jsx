import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./EasyLevels.css";

const EasyLevels = () => {
  const { type, topic } = useParams(); 
  const navigate = useNavigate();
  const totalLevels = 60;

  const topicSlug = topic;
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const userId = storedUser?.id || "guest";
  const [completed, setCompleted] = useState(
    JSON.parse(localStorage.getItem(`completed-${userId}-${type}-${topicSlug}`)) || []
  );
  const [unlocked, setUnlocked] = useState(
    JSON.parse(localStorage.getItem(`unlocked-${userId}-${type}-${topicSlug}`)) ||
      (completed.length > 0 ? [Math.max(...completed) + 1] : [1])
  );
  const handleUnlock = (levelId) => {
    const storedPasskey = localStorage.getItem(
      `passkey-${type}-${topicSlug}-${levelId}`
    );
    if (!storedPasskey) {
      alert("🔒 Complete the previous level first!");
      return;
    }

    const entered = prompt(`🔑 Enter 4-digit passkey to unlock Easy ${levelId}`);
    if (entered === storedPasskey) {
      const newUnlocked = [...new Set([...unlocked, levelId])];
      setUnlocked(newUnlocked);
      localStorage.setItem(
        `unlocked-${userId}-${type}-${topicSlug}`,
        JSON.stringify(newUnlocked)
      );
      alert(`🎉 Easy ${levelId} Unlocked!`);
    } else {
      alert("❌ Wrong Passkey!");
    }
  };
  useEffect(() => {
    localStorage.setItem(
      `unlocked-${userId}-${type}-${topicSlug}`,
      JSON.stringify(unlocked)
    );
  }, [unlocked, userId, type, topicSlug]);
  const handleClick = (levelId) => {
    if (unlocked.includes(levelId)) {
      navigate(`/easy/${type}/${topic}/${levelId}`);
    } else {
      handleUnlock(levelId);
    }
  };

  return (
    <div className="levels-container">
      <div className="levels-header">
        <h2>🟢 Easy Levels for {topic.toUpperCase()}</h2>
        <div className="levels-header-right">
          <span className="username">👤 {storedUser?.name || "Guest"}</span>
          <button className="profile-btn" onClick={() => navigate("/dashboard")}>
            📊 Profile
          </button>
          {/* ✅ New Buttons */}
          <button className="profile-btn" onClick={() => navigate("/main")}>
            🏠 Main Page
          </button>
          <button className="profile-btn" onClick={() => navigate(`/${type}`)}>
            📚 Topics Page
          </button>
        </div>
      </div>

      <div className="levels-grid">
        {Array.from({ length: totalLevels }, (_, i) => i + 1).map((levelId) => {
          const isUnlocked = unlocked.includes(levelId);
          return (
            <button
              key={levelId}
              className={`level-btn ${isUnlocked ? "" : "locked"}`}
              onClick={() => handleClick(levelId)}
            >
              {isUnlocked ? `📝 Easy ${levelId}` : `🔒 Easy ${levelId}`}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default EasyLevels;
