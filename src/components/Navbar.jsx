import React from "react";
import { Link } from "react-scroll";
import "./css.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Loop Learn</div>
      <ul className="nav-links">
        {/* ✅ react-scroll Links */}
        <li>
          <Link to="hero" smooth={true} duration={800}>Home</Link>
        </li>
        <li>
          <Link to="features" smooth={true} duration={800}>Features</Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={800}>About</Link>
        </li>
        <li>
          <Link to="get" smooth={true} duration={800} className="cta">
            Get Started
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
