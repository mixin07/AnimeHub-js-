import React from 'react';

const AnimeModal = ({ anime, closeModal, onGenreClick }) => {
  if (!anime) return null;

  return (
    <div className="modal-backdrop" onClick={closeModal}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-left">
          <img src={anime.images.jpg.large_image_url} alt={anime.title} />
        </div>
        
        <div className="modal-right">
          <button className="close-btn" onClick={closeModal}>&times;</button>
          
          <span className="status-tag">{anime.type} • {anime.status}</span>
          <h2>{anime.title}</h2>
          
          <div className="modal-meta">
            <span>⭐ {anime.score || 'N/A'}</span>
            <span>📅 {anime.year || 'N/A'}</span>
            <span>🎬 {anime.episodes || '?'} Eps</span>
          </div>

          <h3>Synopsis</h3>
          <p className="modal-description">
            {anime.synopsis || "No description available for this title."}
          </p>

          <div className="genre-container">
            {anime.genres?.map(genre => (
              <span 
                key={genre.mal_id} 
                className="genre-tag clickable"
                onClick={() => {
                  onGenreClick(genre.mal_id, genre.name); // Filter by genre
                  closeModal(); // Close modal to show results
                }}
              >
                {genre.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeModal;