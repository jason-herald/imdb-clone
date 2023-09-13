import React, { useEffect, useState } from "react";
import { fetchPopularTVShows } from "../helpers/api";
import MovieCard from "../components/MovieCard";
import FilterModal from "../components/FilterModal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faTimes } from "@fortawesome/free-solid-svg-icons";

const ProductListingPageTvShows = () => {
  const [tvShows, setTVShows] = useState([]);
  const [filterRating, setFilterRating] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedTVShows = await fetchPopularTVShows();
      setTVShows(fetchedTVShows);
    };

    fetchData();
  }, []);
  const handleFilterChange = (e) => {
    setFilterRating(e.target.value);
  };

  const filteredTVShows = tvShows.filter((show) => {
    return show.vote_average / 2 >=  filterRating;
  });
  return (
    <div className="container">
      <div className="heading-row">
        <h2 className="heading">Popular TV Shows</h2>
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

      <div className="tvshow-list">
        {filteredTVShows.map((show) => (
          <MovieCard key={show.id} movie={show} isMovie={false} />
        ))}
      </div>
    </div>
  );
};

export default ProductListingPageTvShows;
