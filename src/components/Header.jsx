// src/components/Header.jsx
import React from 'react';

const Header = ({ search, setSearch, view, setView }) => {
  return (
    <nav className="navbar">
      <div className="container nav-content">
        {/* Logo: Triggers home reset and clears search */}
        <div className="logo" onClick={() => setView("home")}>
          <img src="/download.jpg" alt="Logo" className="nav-logo-img" />
          Anime<span>Hub</span>
        </div>

        <div className="nav-links">
          {/* Home Button: Calls handleNavigation("home") */}
          <button 
            className={`nav-btn ${view === "home" ? 'active' : ''}`}
            onClick={() => setView("home")}
          >
            Home
          </button>
          
          <div className="search-box">
            <span>🔍</span>
            <input 
              type="text" 
              placeholder="Search anime..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* My List Button: Calls handleNavigation("favorites") */}
          <button 
            className={`nav-btn ${view === "favorites" ? 'active' : ''}`}
            onClick={() => setView("favorites")}
          >
            My List
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;