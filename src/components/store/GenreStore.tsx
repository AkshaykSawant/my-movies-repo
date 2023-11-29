import { create } from "zustand";

export const useGenreStore = create(() => {
  return {
    genre: [],
    searchValue: "",
  };
});
