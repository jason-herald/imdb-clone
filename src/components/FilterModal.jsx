import React from "react";
import "./FilterModal.css";

const FilterModal = ({ show, handleFilterChange }) => {
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
          id="ratingFilter"
          className="filter-select"
          onChange={handleFilterChange}
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
      </div>
    </div>
  );
};

export default FilterModal;
