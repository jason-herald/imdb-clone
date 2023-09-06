import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { fetchPopularMovies } from "../helpers/api";

const ProductListingPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedMovies = await fetchPopularMovies();
      setMovies(fetchedMovies);
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <h2 className="heading">Popular Movies</h2>
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default ProductListingPage;
