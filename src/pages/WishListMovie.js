import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

export const WishListMovie = () => {
  const { WishListMovie, cards, handleStarMovies } = useContext(MovieContext);
  return (
    <div>
      <div className="movie-list">
        {WishListMovie.map((card) => {
          return (
            <div key={card.id} className="movie-card">
              <div className="card">
                <img src={card.imageURL} alt="card" className="card-image" />
                <p className="card-title">{card.title}</p>
                <p className="card-summary">{card.summary}</p>
                <button
                  className="star-button"
                  onClick={() => handleStarMovies(card.id)}
                >
                  Star
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
