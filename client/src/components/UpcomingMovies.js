import React from 'react';

const UpcomingMovies = ({ movies }) => {
  return (
    <div>
      <h2>Popular Movies</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingMovies;