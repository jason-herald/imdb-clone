import React from "react";
import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w200${movie.poster_path}`;
  return (
    <div className="movie-card">
      <img className="movie-poster" src={posterUrl} alt={movie.title} />
      <h2 className="movie-title">{movie.title}</h2>
    </div>
  );
};

export default MovieCard;
