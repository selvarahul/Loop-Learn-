// App.jsx
import { Routes, Route, useLocation } from "react-router-dom";

// Common Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";

// Auth
import Login from "./components/Login";
import Signup from "./components/Signup";
  
// Main & Topics
import MainPage from "./components/MainPage";
import NumericalTopics from "./components/NumericalTopics";
import VerbalTopics from "./components/VerbalTopics";
import LogicalTopics from "./components/LogicalTopics";

// Difficulty + Quiz Levels
import DifficultyPage from "./components/DifficultyPage";
import EasyLevels from "./components/EasyLevels";
import EasyQuiz from "./components/EasyQuiz";

// Dashboard
import Dashboard from "./components/Dashboard";

function App() {
  const location = useLocation();
  const hideLayoutPaths = ["/login", "/signup", "/dashboard","/main"];
  const hideLayoutPrefixes = [
    "/difficulty",
    "/numerical",
    "/verbal",
    "/logical",
    "/easy",
  ];

  const shouldHideLayout =
    hideLayoutPaths.includes(location.pathname) ||
    hideLayoutPrefixes.some((prefix) => location.pathname.startsWith(prefix));

  return (
    <div className="font-sans">
      {!shouldHideLayout && <Navbar />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Features />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/numerical" element={<NumericalTopics />} />
        <Route path="/verbal" element={<VerbalTopics />} />
        <Route path="/logical" element={<LogicalTopics />} />
        <Route path="/difficulty/:type/:topic" element={<DifficultyPage />} />
        <Route path="/easy/:type/:topic" element={<EasyLevels />} />
        <Route path="/easy/:type/:topic/:levelId" element={<EasyQuiz />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<h2 className="text-center mt-10">404 - Page Not Found</h2>} />
      </Routes>
      {!shouldHideLayout && <Footer />}
    </div>
  );
}

export default App;
