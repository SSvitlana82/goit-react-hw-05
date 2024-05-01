import { useState, useEffect } from "react";
import { searchMovies } from "../../film-api";
import { useSearchParams } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";
import css from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [searchFilm, setSearchFilm] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {
    async function getMovie() {
      const movies = await searchMovies(query);
      console.log(movies);
      setSearchFilm(movies.results);
    }
    getMovie();
  }, [query]);
  const handleChange = (event) => {
    setSearchParams({ query: event.target.value });
  };
  return (
    <div className={css.conteiner}>
      <input
        type="text"
        value={query || ""}
        onChange={handleChange}
        className={css.input}
      />
      <button type="submit" className={css.btnSearch}>
        Search
      </button>
      <MovieList top={searchFilm} />
    </div>
  );
};

export default MoviesPage;
