//трендові фільми getTopMovies
//детальна інфо про фільм getDescriptionMovie
//актори getActors
//відгуки користувачів getRewiews
// пошук фільмів searchMovies
import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org/3";

const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNmM1YWJhOTNmMDEyOGI0NGFhZDNhMzIxNGFmZTY5OCIsInN1YiI6IjY2MjRmYzRkYjI2ODFmMDE3YzcyZGQzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Gbuc4Dkrtlziy2orPYyiOfN2eXOO93rhK3yB9Nsc8U0";
export async function getTopMovies() {
  const endPoint = "/trending";
  const params = {
    time_window: "week",
  };
  const headers = {
    Authorization: `Bearer ${API_TOKEN}`,
  };

  const response = await axios.get(endPoint, { params, headers });

  return response.data;
}

export async function searchMovies(query) {
  const endPoint = "/search/movie";
  const params = {
    query: query,
  };
  const headers = {
    Authorization: `Bearer ${API_TOKEN}`,
  };

  const response = await axios.get(endPoint, { params, headers });

  return response.data;
}
