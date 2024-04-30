import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDescriptionMovie } from "../../film-api";
import { NavLink } from "react-router-dom";
import { Outlet, useLocation } from "react-router-dom";
import css from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [detailFilm, setDetailFilm] = useState({});
  useEffect(() => {
    async function detailFilm() {
      const detailFilm = await getDescriptionMovie(movieId);

      setDetailFilm(detailFilm);
    }
    detailFilm();
  }, []);

  const location = useLocation();
  const backLink = location.state ?? "/";
  return (
    <div className={css.conteiner}>
      <hr />
      <NavLink to={backLink} className={css.link}>
        <button className={css.btn}>go Back</button>
      </NavLink>
      <div className={css.box}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${detailFilm.poster_path}`}
          alt="poster"
          width={250}
        ></img>
        <div className={css.decription}>
          <h1 className={css.title}>{detailFilm.title}</h1>
          <p className={css.average}>User Score: {detailFilm.vote_average}</p>
          <h2 className={css.titleOwerview}>Owerview</h2>
          <p className={css.owerview}>{detailFilm.overview}</p>
          <p className={css.genres}>
            {detailFilm?.genres?.map((item) => item.name).join(", ")}
          </p>
        </div>
      </div>
      <hr />
      <h3 className={css.titleList}>Additional information</h3>

      <ul className={css.list}>
        <li className={css.listItem}>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li className={css.listItem}>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <hr />
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
