import React from "react";
import MovieCard from "./MovieCard";
import "./DisplaySearch.css";

export default function DisplaySearch(props) {
  console.log(1, props.results);
  return (
    <div className="resultBox">
      {props.results.map((item) => (
        <div key={item.id}>
          <MovieCard
            name={item.title}
            year={item.release_date}
            imgUrl={item.poster_path}
          />
        </div>
      ))}
    </div>
  );
}
