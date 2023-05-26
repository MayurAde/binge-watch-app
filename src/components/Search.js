import { React, useState } from "react";
import MovieCard from "./MovieCard";
import DisplaySearch from "./DisplaySearch";
import "./Search.css";

const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const searchMovie = (movie) => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzJiZTBmNzJlODRiMWQ3NmQyMjFlMTM4YmY5OWM1MiIsInN1YiI6IjY0Njc5ZmFkZDE4NTcyMDE4MDJjNDA5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LQneI6ZCAcszM5kQqwAou8w8vMgri04wuMxrxRHDkzk",
      },
    };

    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      options
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setResults([...data.results]);
        return data.results;
      })
      .then((res) => {
        console.log(results, 0);
      });
  };

  const searchHandler = (event) => {
    event.preventDefault();
    searchMovie(searchTerm);
    setResults([]);
  };

  const searchChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <div className="searchSection">
      <form onSubmit={searchHandler}>
        <input
          className="form-control mr-sm-2"
          type="search"
          onChange={searchChangeHandler}
          value={searchTerm}
          placeholder="Search"
          aria-label="Search"
        ></input>
      </form>

      {results.length > 0 && <DisplaySearch results={results} />}
    </div>
  );
};

export default Search;
