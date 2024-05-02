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
      if (!query) {
        return;
      }
      const movies = await searchMovies(query);
      setSearchFilm(movies.results);
    }
    getMovie();
  }, [query]);
  const handleSubmit = (event) => {
    event.preventdefault();
    setSearchParams({ query: event.target.elements.movie.value });
    event.target.reset();
  };
  return (
    <form onSubmit={handleSubmit} className={css.conteiner}>
      <input type="text" name="movie" className={css.input} />
      <button type="submit" className={css.btnSearch}>
        Search
      </button>
      <MovieList top={searchFilm} />
    </form>
  );
};

export default MoviesPage;
