import React from "react";
import { Link } from "react-router-dom";
// import "../App.css";
import StarRating from "./StarRating";
import CardImage from "./CardImage";

const MovieCard = ({ movie, isMovie = true }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w200${movie.poster_path}`;

  if (isMovie) {
    return (
      <div className="movie-card">
        <Link to={`/movie/${movie.id}`}>
          <CardImage src={posterUrl} alt={movie.title} />

          <h2 className="movie-title">{movie.title}</h2>
          <div className="movie-info">
            <div className="movie-rating">
              <StarRating vote_average={movie.vote_average} />
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
          <CardImage src={posterUrl} alt={movie.title} />
          <h2 className="movie-title">{movie.name}</h2>
          <div className="movie-info">
            <div className="movie-rating">
              <StarRating vote_average={movie.vote_average} />
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
