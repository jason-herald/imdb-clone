import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchPopularMovies = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}`
    );
    return response.data.results;
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    return [];
  }
};
export const fetchPopularTVShows = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/tv/popular?api_key=${API_KEY}`
    );
    return response.data.results;
  } catch (error) {
    console.error("Error fetching popular TV shows:", error);
    return [];
  }
};

export const fetchMovieDetails = async (id) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return {};
  }
};

export const fetchMovieCredits = async (id) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching movie credits:", error);
    return {};
  }
};

export const fetchMovieImages = async (id) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}/images?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching movie images:", error);
    return {};
  }
};
export const fetchTVShowDetails = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/tv/${id}?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching TV Show details:", error);
    return {};
  }
};
export const fetchTVShowCredits = async (id) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/tv/${id}/credits?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching TV show credits:", error);
    return {};
  }
};

export const fetchTVShowImages = async (id) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/tv/${id}/images?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching TV show images:", error);
    return {};
  }
};
