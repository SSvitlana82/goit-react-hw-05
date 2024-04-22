import { useState } from "react";
import { NavLink } from "react-router-dom";
import MovieDetailsPage from "../../pages/MovieDetailsPage";

const MovieList = ({ top }) => {
  return (
    <div>
      <ul>
        {top.map((film) => {
          console.log(film);
          return (
            <li key={film.id}>
              <NavLink to={`/movies/${film.id}`}>{film.title}</NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieList;
