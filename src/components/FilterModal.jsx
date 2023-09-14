import React from "react";
import "../App.css";

const FilterModal = ({ show, handleFilterChange, clearFilters, filters }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h2 className="filter-heading">Filters</h2>
        <label htmlFor="ratingFilter" className="filter-label">
          Filter by Rating:
        </label>
        <select
          id="rating"
          className="filter-select"
          onChange={handleFilterChange}
          value={filters.rating}
        >
          <option value={0}>All</option>
          <option value={1}>
            1<span className="star">★ </span>and above
          </option>
          <option value={2}>
            2<span className="star">★ </span>and above
          </option>
          <option value={3}>
            3<span className="star">★ </span>and above
          </option>
          <option value={4}>
            4<span className="star">★ </span>and above
          </option>
        </select>
        <label htmlFor="originalLanguage" className="filter-label">
          Original Language:
        </label>
        <select
          id="originalLanguage"
          className="filter-select"
          onChange={handleFilterChange}
          value={filters.originalLanguage}
        >
          <option value="all">All</option>
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="cn">Chinese</option>
          <option value="es">Spanish</option>
        </select>

        <label htmlFor="popularity" className="filter-label">
          Popularity:
        </label>
        <select
          id="popularity"
          className="filter-select"
          onChange={handleFilterChange}
          value={filters.popularity}
        >
          <option value={0}>All</option>
          <option value={1000}>1000+</option>
          <option value={2000}>2000+</option>
        </select>
        <button className="clear-filters-button" onClick={clearFilters}>
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default FilterModal;
