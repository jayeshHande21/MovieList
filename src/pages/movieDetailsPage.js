import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import { useParams } from "react-router-dom";

export const MovieDetailsPage = () => {
  const { data, handleStarMovies, handleWatchListMovie } = useContext(
    MovieContext
  );
  const { id } = useParams();

  const movieId = parseInt(id);

  const movie = data.find((movie) => movie.id === movieId);

  return (
    <div className="movie-details-container">
      <div className="movie-details-image">
        <img src={movie.imageURL} alt="imageMovie" />
      </div>
      <div className="movie-details-info">
        <p className="movie-title">{movie.title}</p>
        <p className="movie-summary">{movie.summary}</p>
        <div className="movie-details-meta">
          <p>Year: {movie.year}</p>
          <p>Genre: {movie.genre.join(", ")}</p>
          <p>Rating: {movie.rating}</p>
          <p>Director: {movie.director}</p>
          <p>Writer: {movie.writer}</p>
          <p>Cast: {movie.cast.join(", ")}</p>
        </div>
        <div className="movie-details-buttons">
          <button
            className="star-button"
            onClick={() => handleStarMovies(movie.id)}
          >
            Star
          </button>
          <button
            className="wishlist-button"
            style={{ backgroundColor: "green" }}
            onClick={() => handleWatchListMovie(movie.id)}
          >
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};
