import React from "react";
import { Movie } from "../type/CommonType";
import "./MovieCard.css";
interface Props {
  movie: Movie;
  index: number;
}

const MovieCard: React.FC<Props> = ({ movie, index }) => {
  return (
    <>
      {index % 20 === 0 && (
        <h1 className="movie-year">{movie.release_date.split("-")[0]}</h1>
      )}
      <div className="movie-card">
        <div className="movie-card-title">
          <h2>{movie.title}</h2>
        </div>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-card-content">
          <div className="row">
            <div className="col col-left">Genre</div>
            <div className="col col-right">{movie.genre_ids}</div>
          </div>
          <div className="row">
            <div className="col col-left">Rating</div>
            <div className="col col-right">{movie.vote_average}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
