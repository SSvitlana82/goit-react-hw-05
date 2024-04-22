import { useState, useEffect } from "react";
import { getTopMovies } from "../film-api.js";
import MovieList from "../components/MovieList/MovieList.jsx";
const HomePage = ({}) => {
  const [topsFilm, setTopsFilm] = useState([]);
  useEffect(() => {
    async function getTopFilm() {
      const topFilm = await getTopMovies();
      setTopsFilm(topFilm.results);
    }
    getTopFilm();
  }, []);
  return (
    <div>
      <h1>Trending today</h1>
      <MovieList top={topsFilm} />
    </div>
  );
};

export default HomePage;
