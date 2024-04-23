import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getActors } from "../../film-api";

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
    <div>
      <hr />
      <ul>
        {castFilm &&
          castFilm.map((cast) => {
            return (
              <li key={cast.cast_id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
                  alt="photo actor"
                ></img>
                <p>{cast.original_name}</p>
                <p>Character: {cast.character}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default MovieCast;
