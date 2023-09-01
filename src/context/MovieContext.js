import { createContext, useState, useEffect } from "react";
import { movies } from "../movies";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [data, setData] = useState(movies);
  const [cards, setCards] = useState(data);
  const [selectedGenre, setSelectedGenre] = useState("allGenre");
  const [starMovies, setStarMovies] = useState([]);
  const [WishListMovie, setWishListMovie] = useState([]);
  const [movieToWatched, setMovieToWatched] = useState([]);

  const handelSearch = (input) => {
    console.log(input);
    const filterBySearch = data.filter((card) =>
      card.title.toUpperCase().includes(input.toUpperCase())
    );

    if (filterBySearch) {
      setCards(filterBySearch);
    } else {
      setCards(cards);
    }
  };

  const handleGenre = (selectedGenre) => {
    if (selectedGenre === "allGenre") {
      setCards(data);
    } else {
      const filteredMovies = data.filter((card) =>
        card.genre.includes(selectedGenre)
      );
      console.log(filteredMovies);
      setCards(filteredMovies);
    }
  };

  const handleYear = (selectedYear) => {
    if (selectedYear === "releaseYear") {
      setCards(data);
    } else {
      const filterData = data.filter((card) => card.year < selectedYear);
      setCards(filterData);
    }
  };

  const handleByRating = (selectedRating) => {
    if (selectedGenre === "ratings") {
      setCards(data);
    } else {
      const filterRating = data.filter((card) => card.rating >= selectedRating);
      setCards(filterRating);
    }
  };

  useEffect(() => {
    handleGenre(selectedGenre);
  }, [selectedGenre]);

  const handleStarMovies = (star) => {
    toast.success("Added To Favourite", {
      autoClose: 500
    });
    const filterByStar = data.find((card) => card.id === star);

    if (filterByStar && !starMovies.some((movie) => movie.id === star)) {
      setStarMovies([...starMovies, filterByStar]);
    }
  };

  const handleWatchListMovie = (star) => {
    toast.success("Added To Watch List", {
      autoClose: 500
    });
    const filterByStar = data.find((card) => card.id === star);

    if (filterByStar && !starMovies.some((movie) => movie.id === star)) {
      setWishListMovie([...WishListMovie, filterByStar]);
    }
  };

  const selectMovies = (selectedMovie) => {
    const choosedMovie = data.find((card) => card.id === selectedMovie);
    setMovieToWatched(choosedMovie);
  };

  return (
    <MovieContext.Provider
      value={{
        data,
        cards,
        selectedGenre,
        setSelectedGenre,
        handleGenre,
        handleYear,
        handleByRating,
        handleStarMovies,
        starMovies,
        handelSearch,
        selectMovies,
        setCards,
        setWishListMovie,
        WishListMovie,
        setWishListMovie,
        handleWatchListMovie
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
