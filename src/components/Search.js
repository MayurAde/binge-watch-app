import { React, useState } from "react";
import MovieCard from "./MovieCard";
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
        // const imgSrc = `https://image.tmdb.org/t/p/w500/${data.results[0].poster_path}`;
        // document.querySelector(".poster").src = imgSrc;
        // document.querySelector(".title").textContent =
        //   data.results[0].original_title;
        // document.querySelector(".overview").textContent =
        //   data.results[0].overview;
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
  };

  const searchChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <div className="searchSection">
      <form onSubmit={searchHandler}>
        <input
          type="search"
          onChange={searchChangeHandler}
          value={searchTerm}
        ></input>
      </form>
      {console.log(results)}
      {results.length > 0 && (
        <MovieCard
          name={results[0].title}
          year={results[0].release_date}
          imgUrl={results[0].poster_path}
        />
      )}
      {/* <img className="poster" src=""></img>
      <h1 className="title"></h1>
      <p className="overview"></p> */}
    </div>
  );
};

export default Search;
