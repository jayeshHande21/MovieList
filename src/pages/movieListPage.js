import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import { MovieDetailsPage } from "./movieDetailsPage";
import { NavLink } from "react-router-dom";
import { AddNewMovie } from "./AddNewMovie";

export const MovieListPage = () => {
  const {
    cards,
    selectedGenre,
    setSelectedGenre,
    handleGenre,
    handleYear,
    handleByRating,
    handleStarMovies,
    selectMovies,
    handleWatchListMovie
  } = useContext(MovieContext);
  return (
    <div>
      <div className="movieHeader">
        <div className="headerItem">MOVIES</div>
        <div className="headerItem">
          <select
            id="genreSelect"
            className="selectBox"
            onChange={(e) => {
              handleGenre(e.target.value);
            }}
          >
            <option className="optionItem" value="allGenre">
              All Genre
            </option>
            <option className="optionItem" value="Action">
              Actions
            </option>
            <option className="optionItem" value="Crime">
              Crime
            </option>
            <option className="optionItem" value="Drama">
              Drama
            </option>
            <option className="optionItem" value="Sci-Fi">
              Sci-Fi
            </option>
            <option className="optionItem" value="Biography">
              Biography
            </option>
          </select>
        </div>
        <div className="headerItem">
          <select
            id="yearSelect"
            className="selectBox"
            onChange={(e) => handleYear(e.target.value)}
          >
            <option className="optionItem" value="releaseYear">
              Release Year
            </option>
            <option className="optionItem" value="1999">
              before 1999
            </option>
            <option className="optionItem" value="2005">
              before 2005
            </option>
            <option className="optionItem" value="2010">
              before 2010
            </option>
          </select>
        </div>
        <div className="headerItem">
          <select
            id="ratingSelect"
            className="selectBox"
            onChange={(e) => handleByRating(e.target.value)}
          >
            <option className="optionItem" value="ratings">
              Ratings
            </option>
            <option className="optionItem" value="9">
              9 +
            </option>
            <option className="optionItem" value="8">
              8 +
            </option>
            <option className="optionItem" value="5">
              5 +
            </option>
          </select>
        </div>

        <NavLink to="/AddNewMovie">
          {" "}
          <button>Add Movie</button>
        </NavLink>
      </div>

      <div className="movie-list">
        {cards.map((card) => {
          return (
            <div key={card.id} className="movie-card">
              <div className="card">
                {/* <NavLink to={`/MovieDetailsPage/${card.id}`}> */}
                <NavLink to={`/MovieDetailsPage/${card.id}`}>
                  {" "}
                  <img src={card.imageURL} alt="card" className="card-image" />
                </NavLink>
                <p className="card-title">{card.title}</p>
                <p className="card-summary">{card.summary}</p>
                <div className="buttons">
                  <button
                    className="star-button"
                    onClick={() => handleStarMovies(card.id)}
                  >
                    Star
                  </button>
                  <button
                    onClick={() => handleWatchListMovie(card.id)}
                    className="wishlist-button"
                  >
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
