import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProductListingPage from "./pages/ProductListingPage";

import ProductListingPageTvShows from "./pages/ProductListingPageTvShows";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<ProductListingPage />} />
          <Route path="/tv-shows" element={<ProductListingPageTvShows />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
