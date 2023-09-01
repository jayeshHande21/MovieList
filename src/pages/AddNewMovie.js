import React, { useCallback, useContext, useState } from "react";
import { MovieContext } from "../context/MovieContext";

export const AddNewMovie = () => {
  const { cards, setCards } = useContext(MovieContext);

  const [newMovie, setNewMovie] = useState({
    title: "",
    summary: "",
    year: "",
    cast: "",
    genre: "",
    rating: "",
    director: "",
    writer: "",
    imageURL: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMovie((prevMovie) => ({
      ...prevMovie,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCards([newMovie, ...cards]);
  };

  return (
    <div className="add-new-movie-container">
      <h1>Add New Movie Here</h1>
      <form className="add-new-movie-form" onSubmit={handleSubmit}>
        <label>Movie Title</label>
        <input
          type="text"
          name="title"
          value={newMovie.title}
          onChange={handleInputChange}
        />
        <label>Movie Summary</label>
        <input
          type="text"
          name="summary"
          value={newMovie.summary}
          onChange={handleInputChange}
        />
        <label>Movie Year</label>
        <input
          type="text"
          name="year"
          value={newMovie.year}
          onChange={handleInputChange}
        />
        <label>Movie Cast</label>
        <input
          type="text"
          name="cast"
          value={newMovie.cast}
          onChange={handleInputChange}
        />
        <label>Movie Genre</label>
        <input
          type="text"
          name="genre"
          value={newMovie.genre}
          onChange={handleInputChange}
        />
        <label>Movie Rating</label>
        <input
          type="text"
          name="rating"
          value={newMovie.rating}
          onChange={handleInputChange}
        />
        <label>Movie Director</label>
        <input
          type="text"
          name="director"
          value={newMovie.director}
          onChange={handleInputChange}
        />
        <label>Movie Writer</label>
        <input
          type="text"
          name="writer"
          value={newMovie.writer}
          onChange={handleInputChange}
        />
        <label>Movie ImageURL</label>
        <input
          type="text"
          name="imageURL"
          value={newMovie.imageURL}
          onChange={handleInputChange}
        />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};
