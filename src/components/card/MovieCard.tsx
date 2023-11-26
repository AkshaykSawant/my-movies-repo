import React from "react";
import { Movie } from "../type/CommonType";
import "./MovieCard.css";

interface Props {
  movie: Movie;
  displayHeader: boolean;
}

const MovieCard: React.FC<Props> = ({ movie, displayHeader }) => {
  return (
    <>
      {displayHeader && (
        <h1 className="movie-year">{movie.release_date.split("-")[0]}</h1>
      )}
      <div className="movie-card">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-card-content">
          <div className="row row-title">{movie.title}</div>
          <div className="row row-rating">{Math.round(movie.popularity)}</div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
