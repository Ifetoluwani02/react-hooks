import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';
import moviesData from './moviesData';

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [filteredMovies, setFilteredMovies] = useState(moviesData);

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
    setFilteredMovies([...movies, newMovie]);
  };

  const handleFilter = (title, rating) => {
    const filtered = movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(title.toLowerCase()) &&
        movie.rating >= rating
    );
    setFilteredMovies(filtered);
  };

  return (
    <div className="App" style={{ padding: '2rem' }}>
      <h1 style={{ textAlign: 'center' }}>My Movie App</h1>
      <Filter onFilter={handleFilter} />
      <MovieList movies={filteredMovies} />
      <button
        onClick={() =>
          handleAddMovie({
            title: "New Movie",
            description: "This is a new movie.",
            posterURL: "https://via.placeholder.com/150",
            rating: 3,
          })
        }
        style={{
          display: 'block',
          margin: '20px auto',
          padding: '10px 20px',
          fontSize: '16px',
        }}
      >
        Add Movie
      </button>
    </div>
  );
}

export default App;
