import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.css";

const MovieCard = ({ movie, isMovie = true }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w200${movie.poster_path}`;
  const rating = Math.round(movie.vote_average / 2);
  if (isMovie) {
    return (
      <div className="movie-card">
        <Link to={`/movie/${movie.id}`}>
          <img className="movie-poster" src={posterUrl} alt={movie.title} />
          <h2 className="movie-title">{movie.title}</h2>
          <div className="movie-info">
            <div className="movie-rating">
              {Array.from({ length: 5 }).map((_, index) => (
                <span key={index} className="star">
                  {index < rating ? "★" : "☆"}
                </span>
              ))}
              <span className="rating-value">{`(${
                movie.vote_average / 2
              })`}</span>
            </div>
            <div className="movie-release-date">
              {`Release Date: ${movie.release_date}`}
            </div>
          </div>
        </Link>
      </div>
    );
  } else {
    return (
      <div className="movie-card">
        <Link to={`/tv/${movie.id}`}>
          <img className="movie-poster" src={posterUrl} alt={movie.name} />
          <h2 className="movie-title">{movie.name}</h2>
          <div className="movie-info">
            <div className="movie-rating">
              {Array.from({ length: 5 }).map((_, index) => (
                <span key={index} className="star">
                  {index < rating ? "★" : "☆"}
                </span>
              ))}
              <span className="rating-value">{`(${
                movie.vote_average / 2
              })`}</span>
            </div>
            <div className="movie-release-date">
              {`First Aired On: ${movie.first_air_date}`}
            </div>
          </div>
        </Link>
      </div>
    );
  }
};

export default MovieCard;
