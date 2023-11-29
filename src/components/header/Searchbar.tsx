import React, { ChangeEvent } from "react";
import "./SearchBar.css";
import { DebounceFunction } from "../type/CommonType";
import { useGenreStore } from "../store/GenreStore";
export const SearchBar = () => {
  const debounce: DebounceFunction<any> = (func, timeout = 300) => {
    let timer: NodeJS.Timeout;

    return (...args: Parameters<any>) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  };
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    useGenreStore.setState({ searchValue: e.target.value });
  };
  return (
    <div className="search-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Movies..."
          onChange={debounce(onChangeHandler)}
        />
      </div>
    </div>
  );
};
