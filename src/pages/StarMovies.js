import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

export const StarMovies = () => {
  const { starMovies, cards } = useContext(MovieContext);
  return (
    <div>
      <div className="movie-list">
        {starMovies.map((card) => {
          return (
            <div key={card.id} className="movie-card">
              <div className="card">
                <img src={card.imageURL} alt="card" className="card-image" />
                <p className="card-title">{card.title}</p>
                <p className="card-summary">{card.summary}</p>
                <div className="buttons">
                  <button className="wishlist-button">Add to Wishlist</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
