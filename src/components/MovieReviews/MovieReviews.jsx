import { useState, useEffect } from "react";
import { getRewiews } from "../../film-api";
import { useParams } from "react-router-dom";

const Moviereviews = ({}) => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    async function getRewiewsFilm() {
      const data = await getRewiews(movieId);

      setReviews(data.results);
    }
    getRewiewsFilm();
  }, []);
  if (reviews.length === 0) {
    return <p>We don't have any rewiews for this movie.</p>;
  }
  return (
    <div>
      <ul>
        {reviews.map((item) => {
          return (
            <li key={item.id}>
              <h3>Author: {item.author}</h3>
              <p>{item.content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Moviereviews;
