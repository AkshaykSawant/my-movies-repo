import React from "react";
import "./Header.css";
import { AppTitle } from "./AppTitle";
import { useGenreStore } from "../store/GenreStore";
export const Header = () => {
  const selectedMenuItem = useGenreStore((state) => state.genre);
  const onClickHandler = (genru_filter: string) => {
    useGenreStore.setState({ genre: genru_filter });
  };
  return (
    <>
      <AppTitle />
      <div className="header">
        <div className="menu">
          <button
            className={`menu-item ${selectedMenuItem === "" ? "active" : ""}`}
            onClick={() => onClickHandler("")}
          >
            All
          </button>
          <button
            className={`menu-item ${
              selectedMenuItem === "878,28,53" ? "active" : ""
            }`}
            onClick={() => onClickHandler("878,28,53")}
          >
            Action
          </button>
          <button
            className={`menu-item ${
              selectedMenuItem === "16,10751" ? "active" : ""
            }`}
            onClick={() => onClickHandler("16,10751")}
          >
            Comedy
          </button>
          <button
            className={`menu-item ${selectedMenuItem === "27" ? "active" : ""}`}
            onClick={() => onClickHandler("27")}
          >
            Horror
          </button>
        </div>
      </div>
    </>
  );
};
