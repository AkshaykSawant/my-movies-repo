import React from "react";
import { useGenreStore } from "../store/GenreStore";

export const MainContent = () => {
  const selectedGenre = useGenreStore((state) => state.genre);
  console.log(selectedGenre);
  return <>MainContent</>;
};
