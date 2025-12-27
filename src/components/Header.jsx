import React from 'react';

const Header = ({ search, setSearch, view, setView }) => {
  return (
    <nav className="navbar">
      <div className="container nav-content">
        <div className="logo" onClick={() => { setView("home"); setSearch(""); }}>
          Anime<span>Hub</span>
        </div>
        
        <div className="nav-links">
          <button 
            className={`nav-btn ${view === "home" ? 'active' : ''}`} 
            onClick={() => { setView("home"); setSearch(""); }}
          >
            Home
          </button>
          
          <div className="search-box">
            <span>🔍</span>
            <input 
              type="text" 
              placeholder="Search anime..." 
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setView("home");
              }}
            />
          </div>

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