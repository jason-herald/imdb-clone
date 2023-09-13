import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { fetchPopularMovies } from "../helpers/api";
import FilterModal from "../components/FilterModal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faTimes } from "@fortawesome/free-solid-svg-icons";

const ProductListingPage = () => {
  const [movies, setMovies] = useState([]);
  const [filterRating, setFilterRating] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedMovies = await fetchPopularMovies();
      setMovies(fetchedMovies);
    };

    fetchData();
  }, []);
  const handleFilterChange = (e) => {
    setFilterRating(e.target.value);
  };

  const filteredMovies = movies.filter((movie) => {
    return movie.vote_average / 2 >= filterRating;
  });
  return (
    <div className="container">
      <div className="heading-row">
        <h2 className="heading">Popular Movies</h2>
        <div className="filter-button-container">
          <FontAwesomeIcon
            icon={showModal ? faTimes : faFilter}
            onClick={() => setShowModal(!showModal)}
            className="filter-icon"
          />

          <FilterModal
            show={showModal}
            handleFilterChange={handleFilterChange}
          />
        </div>
      </div>
      <div className="movie-list">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default ProductListingPage;
