import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { fetchPopularTVShows } from "../helpers/api";

const ProductListingPageTvShows = () => {
  const [tvShows, setTVShows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedTVShows = await fetchPopularTVShows();
      setTVShows(fetchedTVShows);
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <h2 className="heading">Popular TV Shows</h2>
      <div className="movie-list">
        {tvShows.map((show) => (
          <MovieCard key={show.id} movie={show} />
        ))}
      </div>
    </div>
  );
};

export default ProductListingPageTvShows;
