import React, { useState, useEffect } from "react";

export default function FilterDropdown(props) {
  const [selected, setSelected] = useState("");

  const changeHandler = (event) => {
    setSelected(event.target.value);
  };

  useEffect(() => {
    props.sorter(selected);
  }, [selected]);

  return (
    <div>
      <h3>Sort by</h3>
      <select value={selected} onChange={changeHandler}>
        <option value="popularity">Popularity</option>
        <option value="releaseOldToNew">Release Date: Old to New</option>
        <option value="releaseNewToOld">Release Year: New to Old</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  );
}
