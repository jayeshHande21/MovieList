import "./styles.css";

import { Routes, Route, NavLink } from "react-router-dom";
import { MovieListPage } from "./pages/movieListPage";
import { MovieDetailsPage } from "./pages/movieDetailsPage";
import { StarMovies } from "./pages/StarMovies";
import { MovieContext } from "./context/MovieContext";
import { useContext } from "react";
import { AddNewMovie } from "./pages/AddNewMovie";
import { WishListMovie } from "./pages/WishListMovie";

export default function App() {
  const { handelSearch } = useContext(MovieContext);
  return (
    <div className="App">
      <div className="header">
        <div>IMBD</div>
        <input
          type="text"
          placeholder="  Search"
          onChange={(e) => handelSearch(e.target.value)}
        />
        <NavLink className="link" to="/MovieListPage">
          {" "}
          <div>Movies</div>{" "}
        </NavLink>
        <NavLink className="link" to="/WishListMovie">
          {" "}
          <div>WatchList</div>{" "}
        </NavLink>

        <NavLink className="link" to="/StarMovies">
          {" "}
          <div>Stared</div>
        </NavLink>
      </div>

      <Routes>
        <Route path="/StarMovies" element={<StarMovies />} />
        <Route path="/MovieDetailsPage/:id" element={<MovieDetailsPage />} />
        <Route path="/MovieListPage" element={<MovieListPage />} />
        <Route path="/AddNewMovie" element={<AddNewMovie />} />
        <Route path="/WishListMovie" element={<WishListMovie />} />
      </Routes>
    </div>
  );
}
