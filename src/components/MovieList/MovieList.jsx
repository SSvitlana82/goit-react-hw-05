import { NavLink, useLocation } from "react-router-dom";
/* import MovieDetailsPage from "../../pages/MovieDetailsPage/MovieDetailsPage"; */
import css from "./MovieList.module.css";
const MovieList = ({ top }) => {
  const location = useLocation();
  return (
    <div className={css.container}>
      <ul className={css.list}>
        {top.map((film) => {
          return (
            <li key={film.id} className={css.listItem}>
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
