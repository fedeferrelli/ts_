import { Movies } from "../types";

const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchData = {
  fetch: async (page: number): Promise<Movies> => {
    const request = await fetch(
      `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=${page}`
    );

    const response = await request.json();

    return response;
  },
};
