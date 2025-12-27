import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="logo" style={{fontSize: '1.2rem'}}>
          Anime<span>Hub</span>
        </div>
        
        <p style={{color: 'var(--text-dim)', fontSize: '0.9rem'}}>
          &copy; {new Date().getFullYear()} AnimeHub. All rights reserved.
        </p>

        <button 
          className="nav-btn" 
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          style={{fontSize: '0.8rem'}}
        >
          Top ↑
        </button>
      </div>
    </footer>
  );
};

export default Footer;