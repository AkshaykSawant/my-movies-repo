import axios from "axios";
import { MovieApiResponse } from "../type/CommonType";

const API_KEY = "2dca580c2a14b55200e784d157207b4d";
const BASE_URL = "https://api.themoviedb.org/3/discover/movie";

export const fetchMovieData = async (year: number, genre: string) => {
  try {
    const response: MovieApiResponse =
      await axios.get(`${BASE_URL}?api_key=${API_KEY}&sort_by=popularity.desc
      &primary_release_year=${year}&page=${1}&vote_count.gte=100&with_genres=${genre}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
};