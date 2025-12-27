import React from 'react';
import AnimeCard from './AnimeCard';

const AnimeList = ({ animeList, favorites, toggleFavorite, onCardClick, onGenreClick }) => {
  return (
    <div className="anime-grid">
      {animeList.map((anime) => (
        <AnimeCard 
          key={anime.mal_id} 
          anime={anime} 
          toggleFavorite={toggleFavorite}
          isFavorite={favorites.some(f => f.mal_id === anime.mal_id)}
          onCardClick={onCardClick}
          onGenreClick={onGenreClick} /* Added this line */
        />
      ))}
    </div>
  );
};

export default AnimeList;