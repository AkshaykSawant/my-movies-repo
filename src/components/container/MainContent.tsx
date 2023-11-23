import React, { useEffect, useState } from "react";
import { useGenreStore } from "../store/GenreStore";
import "./MainContent.css";
import axios from "axios";
import { Movie, MovieApiResponse } from "../type/CommonType";
import MovieCard from "../card/MovieCard";
import Loader from "../loader/Loader";
import InfiniteScroll from "react-infinite-scroll-component";

export const MainContent = () => {
  const selectedGenre = useGenreStore((state) => state.genre);
  const [movies, setMovies] = useState<Array<Movie>>([]);
  const [year, setYear] = useState<number>(2012);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const fetchMovieData = async () => {
    try {
      setYear((prev) => prev + 1);
      const response: MovieApiResponse = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=2dca580c2a14b55200e784d157207b4d&sort_by=popularity.desc
        &primary_release_year=${
          year + 1
        }&page=${1}&vote_count.gte=100&with_genres=${selectedGenre}`
      );
      if (response.data.results.length === 0) {
        setHasMore(false);
      }
      setMovies((state) => [...state, ...response.data.results]);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        setHasMore(true);
        setYear(2012);
        const response: MovieApiResponse = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=2dca580c2a14b55200e784d157207b4d&sort_by=popularity.desc
          &primary_release_year=${2012}&page=${1}&vote_count.gte=100&with_genres=${selectedGenre}`
        );
        if (response.data.results.length === 0) {
          setHasMore(false);
        }
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    })();
  }, [selectedGenre]);

  return (
    <div className="main-content">
      <InfiniteScroll
        dataLength={movies.length}
        next={fetchMovieData}
        hasMore={hasMore}
        loader={<Loader />}
        endMessage={
          <p className="no-more-data" style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className="movie-container">
          {movies.map((movie, index) => (
            <MovieCard movie={movie} index={index} key={movie.id} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};
