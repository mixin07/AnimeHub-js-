import React from 'react';

const AnimeModal = ({ anime, closeModal, onGenreClick }) => {
  if (!anime) return null;

  // Function to handle link sharing
  const handleShare = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    alert("Link copied to clipboard!");
  };

  return (
    <div className="modal-backdrop" onClick={closeModal}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        
        {/* NEW: TOP RIGHT ACTIONS CONTAINER */}
        <div className="modal-actions">
          <button className="action-btn share-btn" onClick={handleShare} title="Share Link">
             🔗
          </button>
          <button className="action-btn close-btn" onClick={closeModal} title="Close">
            &times;
          </button>
        </div>

        <div className="modal-left">
          <img src={anime.images.jpg.large_image_url} alt={anime.title} />
        </div>
        
        <div className="modal-right">
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
                  onGenreClick(genre.mal_id, genre.name); 
                  closeModal(); 
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