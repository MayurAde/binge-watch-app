import React from "react";
import "./MovieCard.css";

export default function MovieCard(props) {
  console.log(props);
  return (
    <div className="mainCard">
      <section>
        <img
          className="moviePoster"
          src={`https://image.tmdb.org/t/p/w500/${props.imgUrl}`}
        ></img>
      </section>
      <section>
        <div className="movieName__section">
          <h1 className="movieName">{props.name}</h1>
        </div>
        <div className="movieYear__section">
          <h3 className="movieYear">{props.year.slice(0, 4)}</h3>
        </div>
      </section>
    </div>
  );
}
