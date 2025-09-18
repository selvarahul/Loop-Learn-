import React from "react";
import { useNavigate } from "react-router-dom";
import "./css.css";

const Hero = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/login");
  };

  return (
    <section id="hero" className="hero">
      <h1>Welcome to My Loop Learn</h1>
      <p>
        Loop Learn is a free learning hub designed to help students and job seekers 
        strengthen their Numerical, Verbal, and Logical reasoning skills through topic-wise tests, 
        performance tracking, and personalized analysis.
      </p>
      <button  id ="get"className="cta-btn" onClick={handleGetStarted}>Get Started</button>
    </section>
  );
};

export default Hero;
