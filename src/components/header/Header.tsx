import React from "react";
import "./Header.css";
import { AppTitle } from "./AppTitle";
import { useGenreStore } from "../store/GenreStore";
export const Header = () => {
  const selectedMenuItem = useGenreStore((state) => state.genre);
  const onClickHandler = (genru_filter: number) => {
    useGenreStore.setState({ genre: genru_filter });
  };
  return (
    <>
      <AppTitle />
      <div className="header">
        <div className="menu">
          <button
            className={`menu-item ${selectedMenuItem === 0 ? "active" : ""}`}
            onClick={() => onClickHandler(0)}
          >
            All
          </button>
          <button
            className={`menu-item ${selectedMenuItem === 1 ? "active" : ""}`}
            onClick={() => onClickHandler(1)}
          >
            Action
          </button>
          <button
            className={`menu-item ${selectedMenuItem === 2 ? "active" : ""}`}
            onClick={() => onClickHandler(2)}
          >
            Comedy
          </button>
          <button
            className={`menu-item ${selectedMenuItem === 3 ? "active" : ""}`}
            onClick={() => onClickHandler(3)}
          >
            Horror
          </button>
        </div>
      </div>
    </>
  );
};
