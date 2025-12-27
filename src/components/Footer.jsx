// src/components/Footer.jsx
import React from 'react';
import '../index.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        
        {/* Left Corner: Branding Only (Logo Image Removed) */}
        <div className="footer-left">
          <div className="logo">Anime<span>Hub</span></div>
          <p>Your ultimate anime sanctuary.</p>
        </div>

        {/* Right Corner: Social Icons */}
        <div className="footer-right">
          <h3>Stay Connected</h3>
          <div className="social-icons">
            <a href="https://github.com/mixin07" target="_blank" rel="noreferrer" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/j-mirudhula" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2025 AnimeHub. Built with ❤️ by Mirudhula. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;