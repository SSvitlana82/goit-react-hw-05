import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import MovieDetailsPage from "../../pages/MovieDetailsPage";

const MovieList = ({ top }) => {
  const location = useLocation();
  return (
    <div>
      <ul>
        {top.map((film) => {
          return (
            <li key={film.id}>
              <NavLink to={`/movies/${film.id}`} state={location}>
                {film.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieList;
