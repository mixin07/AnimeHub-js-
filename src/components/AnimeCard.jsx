import React from 'react';

const AnimeCard = ({ anime, toggleFavorite, isFavorite, onCardClick }) => {
  return (
    <div className="anime-card" onClick={() => onCardClick(anime)}>
      <div className="image-container">
        <img 
          src={anime.images.jpg.large_image_url} 
          alt={anime.title} 
          loading="lazy" 
        />
        
        {/* Rating Badge at Bottom Left */}
        <div className="rating-badge">★ {anime.score || 'N/A'}</div>
        
        {/* Heart Button at Top Right */}
        <button 
          className="fav-btn" 
          onClick={(e) => {
            e.stopPropagation(); // Stops the modal from opening when clicking heart
            toggleFavorite(anime);
          }}
          title={isFavorite ? "Remove from List" : "Add to List"}
        >
          {isFavorite ? '❤️' : '🤍'}
        </button>
      </div>
      
      <div style={{ padding: '15px', textAlign: 'left' }}>
        <h3 style={{ 
          fontSize: '1rem', 
          margin: '0 0 5px 0',
          whiteSpace: 'nowrap', 
          overflow: 'hidden', 
          textOverflow: 'ellipsis' 
        }}>
          {anime.title}
        </h3>
        <span style={{ 
          fontSize: '0.75rem', 
          color: 'var(--accent-blue)', 
          fontWeight: '700',
          textTransform: 'uppercase'
        }}>
          {anime.status}
        </span>
      </div>
    </div>
  );
};

export default AnimeCard;