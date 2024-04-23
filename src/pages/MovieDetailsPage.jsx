import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDescriptionMovie } from "../film-api";
import { NavLink } from "react-router-dom";
import MovieCast from "../components/MovieCast/MovieCast";
import { Outlet, useLocation } from "react-router-dom";

const MovieDetailsPage = ({}) => {
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
    <div>
      <hr />
      <NavLink to={backLink}>go Back</NavLink>
      <img
        src={`https://image.tmdb.org/t/p/w500/${detailFilm.poster_path}`}
        alt="poster"
      ></img>
      <h1>{detailFilm.title}</h1>
      <p>{detailFilm.vote_average}</p>
      <h2>Owerview</h2>
      <p>{detailFilm.overview}</p>
      <p>{detailFilm?.genres?.map((item) => item.name).join(", ")}</p>
      <hr />
      <h3>Additional information</h3>

      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <hr />
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
