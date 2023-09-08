import React from "react";
import { Link } from "react-router-dom";
import "./TVShowCard.css";

const TVShowCard = ({ show }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w200${show.poster_path}`;
  const rating = Math.round(show.vote_average / 2);
  return (
    <div className="tvshow-card">
      <Link to={`/tv/${show.id}`}>
        <img className="tvshow-poster" src={posterUrl} alt={show.name} />
        <h2 className="tvshow-title">{show.name}</h2>
        <div className="tvshow-info">
          <div className="tvshow-rating">
            {Array.from({ length: 5 }).map((_, index) => (
              <span key={index} className="star">
                {index < rating ? "★" : "☆"}
              </span>
            ))}
            <span className="rating-value">{`(${show.vote_average / 2})`}</span>
          </div>
          <div className="tvshow-first-air-date">
            {`First Aired On: ${show.first_air_date}`}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TVShowCard;
