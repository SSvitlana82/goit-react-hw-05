import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getActors } from "../../film-api";
import css from "./MovieCast.module.css";

const MovieCast = ({}) => {
  const { movieId } = useParams();
  const [castFilm, setCastFilm] = useState([]);
  useEffect(() => {
    async function getCastFilm() {
      const data = await getActors(movieId);
      setCastFilm(data.cast);
    }
    getCastFilm();
  }, []);

  return (
    <div className={css.conteiner}>
      <hr />
      <ul className={css.list}>
        {castFilm &&
          castFilm.map((cast) => {
            return (
              <li key={cast.cast_id} className={css.listItem}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
                  alt="photo actor"
                  width={75}
                ></img>
                <p className={css.info}>{cast.original_name}</p>
                <p className={css.info}>Character: {cast.character}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default MovieCast;
