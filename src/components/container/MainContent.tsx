import React, { useEffect, useState } from "react";
import { useGenreStore } from "../store/GenreStore";
import "./MainContent.css";
import { fetchMovieData } from "../api/FetchMovieList";
import { Movie } from "../type/CommonType";
import MovieCard from "../card/MovieCard";
import Loader from "../loader/Loader";
import InfiniteScroll from "react-infinite-scroll-component";

export const MainContent = () => {
  const default_year = 2012;
  const selectedGenre = useGenreStore((state) => state.genre);
  const [movies, setMovies] = useState<Array<Movie>>([]);
  const [year, setYear] = useState<number>(default_year);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const fetchMoreData = async () => {
    try {
      setYear((prev) => prev + 1);
      const results = await fetchMovieData(year + 1, selectedGenre.join());
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
      setYear(default_year);
      const results = await fetchMovieData(initialYear, selectedGenre.join());
      if (results.length === 0) {
        setHasMore(false);
      }
      setMovies(results);
    } catch (error) {
      console.error("Error loading movies:", error);
    }
  };

  useEffect(() => {
    loadMovies(default_year);
  }, [selectedGenre]);

  return (
    <div className="main-content">
      <InfiniteScroll
        dataLength={movies.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<Loader />}
        endMessage={
          <p className="no-more-data">
            <b>No more data to load for the selected filters...</b>
          </p>
        }
      >
        <div className="movie-container">
          {movies.map((movie, index, arr) => (
            <MovieCard
              movie={movie}
              key={movie.id}
              displayHeader={
                index > 0
                  ? movie.release_date.split("-")[0] !==
                    arr[index - 1].release_date.split("-")[0]
                  : true
              }
            />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};
