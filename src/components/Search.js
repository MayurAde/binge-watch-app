import { React, useState } from "react";

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
      console.log(data.results);
    });
};

const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const searchHandler = (event) => {
    event.preventDefault();
    searchMovie(searchTerm);
  };

  const searchChangeHandler = (event) => {
    setSearchTerm(event.target.value);
    console.log(event.target.value);
  };
  return (
    <form onSubmit={searchHandler}>
      <input
        type="search"
        onChange={searchChangeHandler}
        value={searchTerm}
      ></input>
    </form>
  );
};

export default Search;
