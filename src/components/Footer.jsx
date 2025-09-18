import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./css.css"
const Footer = () => {
  return (
    <footer className="footer">
      <div id = "about" className="footer-container">
        <p>&copy; 2025 My Website. All rights reserved.</p>
        <div className="footer-icons">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedinIn /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
