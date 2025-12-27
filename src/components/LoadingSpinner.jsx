import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="loader-container">
      <div className="spinner"></div>
      <p>Fetching Anime...</p>
    </div>
  );
};

export default LoadingSpinner;