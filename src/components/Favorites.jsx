import React from 'react';
import AnimeCard from './AnimeCard';

const Favorites = ({ favorites, toggleFavorite }) => {
  if (favorites.length === 0) return null;

  return (
    <section style={{marginTop: '40px'}}>
      <h2 style={{color: 'var(--accent-blue)'}}>My Favorites</h2>
      <div className="anime-grid">
        {favorites.map((anime) => (
          <AnimeCard 
            key={anime.mal_id} 
            anime={anime} 
            toggleFavorite={toggleFavorite}
            isFavorite={true}
          />
        ))}
      </div>
      <hr style={{opacity: 0.1, margin: '40px 0'}} />
    </section>
  );
};

export default Favorites;