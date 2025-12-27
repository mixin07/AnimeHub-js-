import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    const saved = localStorage.getItem('animehub-favs');
    if (saved) setFavorites(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('animehub-favs', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const url = search 
        ? `https://api.jikan.moe/v4/anime?q=${search}&limit=20`
        : `https://api.jikan.moe/v4/top/anime?limit=20`;
      try {
        const res = await fetch(url);
        const data = await res.json();
        setAnimeList(data.data || []);
      } catch (err) { console.error(err); }
      finally { setLoading(false); }
    };
    const debounce = setTimeout(fetchData, 600);
    return () => clearTimeout(debounce);
  }, [search]);

  const toggleFavorite = (anime) => {
    if (favorites.some(f => f.mal_id === anime.mal_id)) {
      setFavorites(favorites.filter(f => f.mal_id !== anime.mal_id));
    } else {
      setFavorites([...favorites, anime]);
    }
  };

  return (
    <div className="app-wrapper">
      <Header search={search} setSearch={setSearch} view={view} setView={setView} />
      
      <main className="container">
        {view === "home" ? (
          <>
            <div className="section-header" style={{ marginTop: '50px' }}>
              <h1>{search ? `Results for "${search}"` : "Top Trending"}</h1>
              <p>Explore the most popular series and movies right now.</p>
            </div>

            {loading ? <LoadingSpinner /> : (
              <AnimeList 
                animeList={animeList} 
                favorites={favorites} 
                toggleFavorite={toggleFavorite} 
                onCardClick={setSelectedAnime}
              />
            )}
          </>
        ) : (
          <div style={{ marginTop: '50px' }}>
            <div className="section-header">
              <h1>My Favorites</h1>
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
                  />
                ))}
              </div>
            ) : (
              <div className="empty-card" style={{textAlign:'center', padding:'100px 0'}}>
                <h2>Your list is empty</h2>
                <button className="nav-btn active" onClick={() => setView("home")}>Browse Anime</button>
              </div>
            )}
          </div>
        )}
      </main>

      {selectedAnime && (
        <AnimeModal 
          anime={selectedAnime} 
          closeModal={() => setSelectedAnime(null)} 
        />
      )}
      <Footer />
    </div>
  );
}

export default App;