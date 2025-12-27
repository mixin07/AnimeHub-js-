import React from 'react';
import AnimeCard from './AnimeCard';

const AnimeList = ({ animeList, favorites, toggleFavorite, onCardClick }) => {
  return (
    <div className="anime-grid">
      {animeList.map((anime) => (
        <AnimeCard 
          key={anime.mal_id} 
          anime={anime} 
          toggleFavorite={toggleFavorite}
          isFavorite={favorites.some(f => f.mal_id === anime.mal_id)}
          onCardClick={onCardClick}
        />
      ))}
    </div>
  );
};

export default AnimeList;