import React from "react";
import "./TVShowCard.css";

const TVShowCard = ({ show }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w200${show.poster_path}`;
  const rating = show.vote_average / 2;
  return (
    <div className="tvshow-card">
      <img className="tvshow-poster" src={posterUrl} alt={show.name} />
      <h2 className="tvshow-title">{show.name}</h2>
      <div className="tvshow-info">
        <div className="tvshow-rating">
          {Array.from({ length: 5 }).map((_, index) => (
            <span key={index} className="star">
              {index < rating ? "★" : "☆"}
            </span>
          ))}
          <span className="rating-value">{`(${show.vote_average})`}</span>
        </div>
        <div className="tvshow-first-air-date">
          {`First Aired On: ${show.first_air_date}`}
        </div>
      </div>
    </div>
  );
};

export default TVShowCard;
