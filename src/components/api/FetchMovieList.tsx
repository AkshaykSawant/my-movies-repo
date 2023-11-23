import axios from "axios";
export const fetchMovieData = async (year: number, page: number) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=2dca580c2a14b55200e784d157207b4d&sort_by=popularity.desc&primary_release_year=${year}&page=${page}&vote_count.gte=100`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
};
