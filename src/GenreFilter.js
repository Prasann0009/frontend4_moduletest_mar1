import React from 'react';

function GenreFilter({ genres, onGenreSelect }) {
  return (
    <div className='genre-container'>
      <h2>Filter by Genre</h2>
      <div className='genre-button'>
      {genres.map((genre, index) => (
        <button key={index} onClick={() => onGenreSelect(genre)}>{genre}</button>
      ))}
      </div>
      
    </div>
  );
}

export default GenreFilter;
