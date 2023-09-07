import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  fetchMovieDetails,
  fetchMovieCredits,
  fetchMovieImages,
} from "../helpers/api";
import "../App.css";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [credits, setCredits] = useState({});
  const [images, setImages] = useState({});

  const [isModalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  useEffect(() => {
    const fetchDetails = async () => {
      const fetchedMovie = await fetchMovieDetails(id);
      const fetchedCredits = await fetchMovieCredits(id);
      const fetchedImages = await fetchMovieImages(id);
      setMovie(fetchedMovie);
      setCredits(fetchedCredits);
      setImages(fetchedImages);
    };

    fetchDetails();
  }, [id]);

  const openModal = (imagePath) => {
    setModalImage(imagePath);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);
  return (
    <div className="movie-details">
      <div className="section">
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.title}
        />
        <h1>{movie.title}</h1>
        <div>{movie.vote_average} / 10</div>
        <div>{movie.release_date}</div>
        <div>{movie.genres?.map((g) => g.name).join(", ")}</div>
        <p>{movie.overview}</p>
        <h2>Featured Crew</h2>
        <ul>
          {credits.crew?.slice(0, 3).map((crewMember) => (
            <li
              key={crewMember.id}
            >{`${crewMember.name} (${crewMember.job})`}</li>
          ))}
        </ul>
      </div>
      <div className="section">
        <h2>Cast</h2>
        <div>
          {credits.cast?.slice(0, 5).map((actor) => (
            <div key={actor.id}>
              <img
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                alt={actor.name}
              />
              <div>{actor.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="section">
        <h2>Images</h2>
        <div>
          {images.backdrops?.slice(0, 5).map((image, index) => (
            <img
              key={index}
              src={`https://image.tmdb.org/t/p/w300${image.file_path}`}
              alt="Movie backdrop"
              onClick={() =>
                openModal(`https://image.tmdb.org/t/p/w500${image.file_path}`)
              }
            />
          ))}
        </div>
        {isModalOpen && (
          <div className="modal" onClick={closeModal}>
            <img
              className="modal-image"
              src={modalImage}
              alt="Movie backdrop in larger view"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieDetailsPage;
