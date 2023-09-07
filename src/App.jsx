import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProductListingPage from "./pages/MoviesListingPage";

import ProductListingPageTvShows from "./pages/TvShowsListingPage";
import "./App.css";
import MovieDetailsPage from "./pages/MovieDetailsPage";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<ProductListingPage />} />
          <Route path="/tv-shows" element={<ProductListingPageTvShows />} />
          <Route path="/movie/:id" element={<MovieDetailsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
