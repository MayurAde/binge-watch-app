import React, { useState } from "react";
import MovieCard from "./MovieCard";
import FilterDropdown from "./FilterDropdown";
import "./DisplaySearch.css";

export default function DisplaySearch(props) {
  const [vals, setVals] = useState(props.results);
  console.log(vals);

  const sortByReleaseDateNewToOld = (a, b) => {
    const a_year = a.release_date == "" ? 0 : a.release_date.slice(0, 4);
    const b_year = b.release_date == "" ? 0 : b.release_date.slice(0, 4);

    if (a_year > b_year) {
      return -1;
    } else {
      return 1;
    }
  };
  const sortByReleaseDateOldToNew = (a, b) => {
    const a_year = a.release_date == "" ? 0 : a.release_date.slice(0, 4);
    const b_year = b.release_date == "" ? 0 : b.release_date.slice(0, 4);

    if (a_year > b_year) {
      return 1;
    } else {
      return -1;
    }
  };
  const sortByPopularity = (a, b) => {
    return b.popularity - a.popularity;
  };
  const sortByRating = (a, b) => {
    return b.vote_average - a.vote_average;
  };

  const sortHandler = (val) => {
    console.log(val);
    if (val === "popularity") {
      const updatedVals = [...vals].sort(sortByPopularity);
      setVals(updatedVals);
    } else if (val === "releaseOldToNew") {
      const updatedVals = [...vals].sort(sortByReleaseDateOldToNew);
      setVals(updatedVals);
    } else if (val === "releaseNewToOld") {
      const updatedVals = [...vals].sort(sortByReleaseDateNewToOld);
      setVals(updatedVals);
    } else if (val === "rating") {
      const updatedVals = [...vals].sort(sortByRating);
      setVals(updatedVals);
    }
  };
  const onAddWatchlistHandler = (val) => {
    props.onHandleWatchList(val);
    // console.log(val);
  };
  return (
    <div className="resultBox">
      <FilterDropdown className="sortBy" sorter={sortHandler} />
      {vals.map((item) => (
        <div key={item.id}>
          <MovieCard
            name={item.title}
            year={item.release_date}
            imgUrl={item.poster_path}
            rating={item.vote_average}
            onAddWatchlist={onAddWatchlistHandler}
          />
        </div>
      ))}
    </div>
  );
}
