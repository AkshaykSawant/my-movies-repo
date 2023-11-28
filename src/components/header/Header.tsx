import React, { useEffect, useState } from "react";
import "./Header.css";
import { AppTitle } from "./AppTitle";
import { useGenreStore } from "../store/GenreStore";
import { fetchGenre } from "../api/FetchMovieList";
import { Genre } from "../type/CommonType";

export const Header = () => {
  const selectedMenuItem = useGenreStore((state) => state.genre);
  const [genreList, setGenreUpdateList] = useState<Array<Genre>>([]);

  useEffect(() => {
    (async () => {
      const response: Genre[] = await fetchGenre();
      setGenreUpdateList(response);
    })();
  }, []);

  const onClickHandler = (genru_filter: number) => {
    if (genru_filter) {
      useGenreStore.setState({
        genre: selectedMenuItem.includes(genru_filter)
          ? selectedMenuItem.filter((val) => val !== genru_filter)
          : [...selectedMenuItem, genru_filter],
      });
    } else {
      useGenreStore.setState({
        genre: [],
      });
    }
  };

  return (
    <>
      <AppTitle />
      <div className="header">
        <div className="menu">
          <button
            key="0000000"
            className={`line-clamp-item menu-item ${
              selectedMenuItem.join() === "" ? "active" : ""
            }`}
            onClick={() => onClickHandler(0)}
          >
            All
          </button>
          {genreList.map((genre) => (
            <button
              key={genre.id}
              className={`line-clamp-item menu-item ${
                selectedMenuItem.includes(genre.id) ? "active" : ""
              }`}
              onClick={() => onClickHandler(genre.id)}
            >
              {genre.name}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};
