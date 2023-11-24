import React, { useEffect, useState } from "react";
import { useGenreStore } from "../store/GenreStore";
import "./MainContent.css";
import { fetchMovieData } from "../api/FetchMovieList";
import { Movie, MovieApiData } from "../type/CommonType";
import MovieCard from "../card/MovieCard";
import Loader from "../loader/Loader";
import InfiniteScroll from "react-infinite-scroll-component";

const default_year = 2012;

export const MainContent = () => {
  const selectedGenre = useGenreStore((state) => state.genre);
  const [movies, setMovies] = useState<Array<Movie>>([]);
  const [year, setYear] = useState<number>(2012);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const fetchMoreData = async () => {
    try {
      setYear((prev) => prev + 1);
      const results = await fetchMovieData(year + 1, selectedGenre);
      if (results.length === 0) {
        setHasMore(false);
      }
      setMovies((state) => [...state, ...results]);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const loadMovies = async (initialYear: number) => {
    try {
      setHasMore(true);
      setYear(2012);
      const results = await fetchMovieData(initialYear, selectedGenre);
      if (results.length === 0) {
        setHasMore(false);
      }
      setMovies(results);
    } catch (error) {
      console.error("Error loading movies:", error);
    }
  };

  useEffect(() => {
    (async () => {
      await loadMovies(default_year);
    })();
  }, [selectedGenre]);

  return (
    <div className="main-content">
      <InfiniteScroll
        dataLength={movies.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<Loader />}
        endMessage={
          <p className="no-more-data" style={{ textAlign: "center" }}>
            <b>No more data to load...</b>
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
