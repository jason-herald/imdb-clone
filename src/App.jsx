import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import MovieCard from "./components/MovieCard";
import "./App.css";

const API_KEY = import.meta.env.VITE_API_KEY;

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="app">
      <Navbar />
      <div className="container">
        <h2 className="heading">Popular Movies</h2>
        <div className="movie-list">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
