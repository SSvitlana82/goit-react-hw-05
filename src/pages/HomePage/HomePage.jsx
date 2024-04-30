import { useState, useEffect } from "react";
import { getTopMovies } from "../../film-api.js";
import MovieList from "../../components/MovieList/MovieList.jsx";
import css from "./HomePage.module.css";
const HomePage = () => {
  const [topsFilm, setTopsFilm] = useState([]);
  useEffect(() => {
    async function getTopFilm() {
      const topFilm = await getTopMovies();
      setTopsFilm(topFilm.results);
    }
    getTopFilm();
  }, []);
  return (
    <div className={css.container}>
      <h1 className={css.title}>Trending today </h1>
      <MovieList top={topsFilm} className={css.list} />
    </div>
  );
};

export default HomePage;
