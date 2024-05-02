import { useState, useEffect } from "react";
import { getRewiews } from "../../film-api";
import { useParams } from "react-router-dom";
import css from "./MovieReviews.module.css";

const Moviereviews = ({}) => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    async function getRewiewsFilm() {
      const data = await getRewiews(movieId);

      setReviews(data.results);
    }
    getRewiewsFilm();
  }, [movieId]);
  if (reviews.length === 0) {
    return <p>We don't have any rewiews for this movie.</p>;
  }
  return (
    <div className={css.box}>
      <ul className={css.list}>
        {reviews.map((item) => {
          return (
            <li key={item.id} className={css.listItem}>
              <div className={css.conteiner}>
                <h3 className={css.author}>Author: {item.author}</h3>
                <p className={css.reviews}>{item.content}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Moviereviews;
