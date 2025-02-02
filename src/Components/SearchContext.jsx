import { createContext, useState } from "react";

export const SearchContext = createContext();

 export const SearchProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SearchContext.Provider value={{ movies, setMovies, searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
};
