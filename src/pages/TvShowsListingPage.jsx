import React, { useEffect, useState } from "react";
import { fetchPopularTVShows } from "../helpers/api";
import TVShowCard from "../components/TVShowCard";

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
      <div className="tvshow-list">
        {tvShows.map((show) => (
          <TVShowCard key={show.id} show={show} />
        ))}
      </div>
    </div>
  );
};

export default ProductListingPageTvShows;
