import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDescriptionMovie } from "../film-api";

const MovieDetailsPage = ({}) => {
  const { movieId } = useParams();
  const [detailFilm, setDetailFilm] = useState({});
  useEffect(() => {
    async function detailFilm() {
      const detailFilm = await getDescriptionMovie(movieId);
      console.log(detailFilm);
      setDetailFilm(detailFilm);
    }
    detailFilm();
  }, []);

  return (
    <div>
      <h1>{detailFilm.title}</h1>
      <p>{detailFilm.vote_average}</p>
      <h2>Owerview</h2>
      <p>{detailFilm.overview}</p>
      <p>{detailFilm?.genres?.map((item) => item.name).join(", ")}</p>
      
    </div>
  );
};

export default MovieDetailsPage;
