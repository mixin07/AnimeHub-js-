import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import AnimeList from './components/AnimeList';
import AnimeCard from './components/AnimeCard';
import AnimeModal from './components/AnimeModal';
import LoadingSpinner from './components/LoadingSpinner';
import Footer from './components/Footer';

function App() {
  const [animeList, setAnimeList] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState("home");
  const [selectedAnime, setSelectedAnime] = useState(null);
  const [genreLabel, setGenreLabel] = useState("");

  // Load favorites from local storage on initial mount
  useEffect(() => {
    const saved = localStorage.getItem('animehub-favs');
    if (saved) setFavorites(JSON.parse(saved));
  }, []);

  // Save favorites to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('animehub-favs', JSON.stringify(favorites));
  }, [favorites]);

  // Main fetching logic for Top Trending, Search, and Genres
  const fetchData = useCallback(async (query, genreId = null) => {
    setLoading(true);
    let url = `https://api.jikan.moe/v4/top/anime?limit=20`;

    if (query) {
      url = `https://api.jikan.moe/v4/anime?q=${query}&limit=20`;
      setGenreLabel(""); 
    } else if (genreId) {
      url = `https://api.jikan.moe/v4/anime?genres=${genreId}&order_by=score&sort=desc&limit=20`;
    }

    try {
      const res = await fetch(url);
      const data = await res.json();
      setAnimeList(data.data || []);
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  // Handle search with debounce to prevent excessive API calls
  useEffect(() => {
    const debounce = setTimeout(() => {
      if (view === "home") {
        fetchData(search);
      }
    }, 600);
    return () => clearTimeout(debounce);
  }, [search, fetchData, view]);

  // Unified navigation handler for Logo, Home, and My List buttons
  const handleNavigation = (targetView) => {
    if (targetView === "home") {
      setSearch("");       
      setGenreLabel("");   
      setView("home");     
      fetchData("");       
    } else {
      setView(targetView); // Sets view to "favorites"
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handler for clicking genre tags
  const handleGenreClick = (genreId, name) => {
    setSearch(""); 
    setGenreLabel(name);
    setView("home");
    fetchData(null, genreId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Add or remove anime from the favorites list
  const toggleFavorite = (anime) => {
    if (favorites.some(f => f.mal_id === anime.mal_id)) {
      setFavorites(favorites.filter(f => f.mal_id !== anime.mal_id));
    } else {
      setFavorites([...favorites, anime]);
    }
  };

  return (
    <div className="app-wrapper">
      <Header 
        search={search} 
        setSearch={setSearch} 
        view={view} 
        setView={handleNavigation} 
      />
      
      <main className="container">
        {view === "home" ? (
          <>
            <div className="section-header" style={{ marginTop: '50px' }}>
              <h1>
                {search 
                  ? `Results for "${search}"` 
                  : genreLabel 
                  ? `Genre: ${genreLabel}` 
                  : "Top Trending"}
              </h1>
              <p>Explore the most popular series and movies right now.</p>
              {genreLabel && (
                <button 
                  className="nav-btn" 
                  style={{marginTop: '10px', padding: '5px 15px', fontSize: '0.8rem'}}
                  onClick={() => handleNavigation("home")} 
                >
                  Clear Filter ×
                </button>
              )}
            </div>

            {loading ? <LoadingSpinner /> : (
              <AnimeList 
                animeList={animeList} 
                favorites={favorites} 
                toggleFavorite={toggleFavorite} 
                onCardClick={setSelectedAnime}
                onGenreClick={handleGenreClick}
              />
            )}
          </>
        ) : (
          <div style={{ marginTop: '50px' }}>
            <div className="section-header">
              <h1>My Favorites</h1>
              <p>Your personal collection of saved titles.</p>
            </div>
            
            {favorites.length > 0 ? (
              <div className="anime-grid">
                {favorites.map(anime => (
                  <AnimeCard 
                    key={anime.mal_id} 
                    anime={anime} 
                    isFavorite={true} 
                    toggleFavorite={toggleFavorite} 
                    onCardClick={setSelectedAnime} 
                    onGenreClick={handleGenreClick}
                  />
                ))}
              </div>
            ) : (
              <div className="empty-card" style={{textAlign:'center', padding:'100px 0'}}>
                <h2>Your list is empty</h2>
                <button className="nav-btn active" onClick={() => handleNavigation("home")}>
                  Browse Trending Anime
                </button>
              </div>
            )}
          </div>
        )}
      </main>

      {selectedAnime && (
        <AnimeModal 
          anime={selectedAnime} 
          closeModal={() => setSelectedAnime(null)} 
          onGenreClick={handleGenreClick}
          toggleFavorite={toggleFavorite}
          isFavorite={favorites.some(f => f.mal_id === selectedAnime.mal_id)}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;