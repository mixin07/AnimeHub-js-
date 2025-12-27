import React from 'react';

const AnimeCard = ({ anime, isFavorite, toggleFavorite, onCardClick, onGenreClick }) => {
  return (
    <div className="anime-card" onClick={() => onCardClick(anime)}>
      <div className="image-container">
        <img src={anime.images.jpg.large_image_url} alt={anime.title} />
        
        {/* Rating Badge */}
        {anime.score && (
          <div className="rating-badge">
            ⭐ {anime.score}
          </div>
        )}

        {/* Favorite Button */}
        <button 
          className="fav-btn" 
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(anime);
          }}
        >
          {isFavorite ? '❤️' : '🤍'}
        </button>
      </div>

      <div className="anime-info">
        <h3>{anime.title}</h3>
        
        {/* Genre Tags - Now Clickable */}
        <div className="genre-container">
          {anime.genres?.slice(0, 3).map(genre => (
            <span 
              key={genre.mal_id} 
              className="genre-tag clickable"
              onClick={(e) => {
                e.stopPropagation(); // Prevents opening the modal
                onGenreClick(genre.mal_id, genre.name);
              }}
            >
              {genre.name}
            </span>
          ))}
        </div>
        
        <p className="status-text">{anime.status}</p>
      </div>
    </div>
  );
};

export default AnimeCard;