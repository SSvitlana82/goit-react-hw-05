//трендові фільми getTopMovies
//детальна інфо про фільм getDescriptionMovie
//актори getActors
//відгуки користувачів getRewiews
// пошук фільмів searchMovies
import axios from "axios";
const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNmM1YWJhOTNmMDEyOGI0NGFhZDNhMzIxNGFmZTY5OCIsInN1YiI6IjY2MjRmYzRkYjI2ODFmMDE3YzcyZGQzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Gbuc4Dkrtlziy2orPYyiOfN2eXOO93rhK3yB9Nsc8U0";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common["Authorization"] = `Bearer ${API_TOKEN}`;
export async function getTopMovies() {
  const endPoint = "/trending/movie/week";

  const response = await axios.get(endPoint);

  return response.data;
}

export async function searchMovies(query) {
  const endPoint = "/search/movie";
  const params = {
    query: query,
  };

  const response = await axios.get(endPoint, { params });

  return response.data;
}

export async function getDescriptionMovie(movie_id) {
  const endPoint = `/movie/${movie_id}`;

  const response = await axios.get(endPoint);
  return response.data;
}

export async function getRewiews(movie_id) {
  const endPoint = `/movie/${movie_id}/reviews`;

  const response = await axios.get(endPoint);
  return response.data;
}
export async function getActors(movie_id) {
  const endPoint = `/movie/${movie_id}/credits`;

  const response = await axios.get(endPoint);
  return response.data;
}
