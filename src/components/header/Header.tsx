import React, { useEffect, useState } from "react";
import "./Header.css";
import { AppTitle } from "./AppTitle";
import { useGenreStore } from "../store/GenreStore";
import { fetchGenre } from "../api/FetchMovieList";
import { Genre } from "../type/CommonType";

export const Header = () => {
  const selectedMenuItem = useGenreStore((state) => state.genre);
  const [genreList, setGenreUpdateList] = useState([]);

  useEffect(() => {
    (async () => {
      const response: Genre[] = await fetchGenre();
      setGenreUpdateList(response.slice(0, 6));
    })();
  }, []);

  const onClickHandler = (genru_filter: string) => {
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
            className={`menu-item ${
              selectedMenuItem.join() === "" ? "active" : ""
            }`}
            onClick={() => onClickHandler("")}
          >
            All
          </button>
          {genreList.map((genre) => (
            <button
              key={genre.id}
              className={`menu-item ${
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
