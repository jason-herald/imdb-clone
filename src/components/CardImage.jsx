import React from "react";
import "../App.css";

const CardImage = ({ src, altText }) => {
  return <img className="movie-poster" src={src} alt={altText} />;
};

export default CardImage;
