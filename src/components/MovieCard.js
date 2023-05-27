import React, { useState } from "react";
import "./MovieCard.css";

export default function MovieCard(props) {
  const [wishlistBtnTxt, setWishlistBtnTxt] = useState("Add to Watchlist");

  const wishlistHandler = () => {
    if (wishlistBtnTxt == "Add to Watchlist") {
      setWishlistBtnTxt("Added");
    } else {
      setWishlistBtnTxt("Add to Watchlist");
    }
  };
  return (
    <div className="mainCard">
      <section>
        {props.imgUrl == null && (
          <img
            className="moviePoster"
            src={`https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg`}
          ></img>
        )}
        {props.imgUrl != null && (
          <img
            className="moviePoster"
            src={`https://image.tmdb.org/t/p/w500/${props.imgUrl}`}
          ></img>
        )}
      </section>
      <section className="movieInfo">
        <div className="movieName__section">
          <h1 className="movieName">{props.name}</h1>
        </div>
        <div className="movieYear__section">
          <h3 className="movieYear">
            {props.year == "" ? "Unavailable" : props.year.slice(0, 4)}
          </h3>
        </div>
        <div className="movieRating__section">
          <h3 className="movieRating">{props.rating.toFixed(2)}/10</h3>
        </div>
        <div className="wishlist">
          <button
            onClick={wishlistHandler}
            className="btn btn-dark wishlistBtn"
          >
            {wishlistBtnTxt}
          </button>
        </div>
      </section>
    </div>
  );
}
