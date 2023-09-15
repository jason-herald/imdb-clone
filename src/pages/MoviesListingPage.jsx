import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { fetchPopularMovies } from "../helpers/api";
import FilterModal from "../components/FilterModal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faTimes } from "@fortawesome/free-solid-svg-icons";

const ProductListingPage = () => {
  const [movies, setMovies] = useState([]);

  const [filter, setFilter] = useState({
    rating: 0,
    originalLanguage: "all",
    popularity: 0,
  });
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedMovies = await fetchPopularMovies();

      let filteredMovies = fetchedMovies;
      if (filter.rating > 0) {
        filteredMovies = filteredMovies.filter(
          (movie) => movie.vote_average / 2 >= filter.rating
        );
      }
      if (filter.originalLanguage !== "all") {
        filteredMovies = filteredMovies.filter(
          (movie) => movie.original_language === filter.originalLanguage
        );
      }
      if (filter.popularity !== "all") {
        filteredMovies = filteredMovies.filter((movie) => {
          const popularity = parseFloat(movie.popularity);
          return popularity >= parseFloat(filter.popularity);
        });
      }
      setMovies(filteredMovies);
    };

    fetchData();
  }, [filter]);

  const handleFilterChange = (e) => {
    const { id, value } = e.target;
    setFilter({
      ...filter,
      [id]: value,
    });
  };

  const closeFilterModal = () => {
    setShowModal(false);
  };

  const clearFilters = () => {
    setFilter({
      rating: 0,
      originalLanguage: "all",
      popularity: 0,
    });
  };

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
            clearFilters={clearFilters}
            filters={filter}
            closeFilterModal={closeFilterModal}
          />
        </div>
      </div>
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default ProductListingPage;
