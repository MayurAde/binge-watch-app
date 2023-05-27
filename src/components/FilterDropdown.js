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
      <span>Sort by </span>
      <select value={selected} defaultValue={""} onChange={changeHandler}>
        <option value={""} disabled hidden>
          Recommended
        </option>
        <option value="popularity">Popularity</option>
        <option value="releaseOldToNew">Release Year: Old to New</option>
        <option value="releaseNewToOld">Release Year: New to Old</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  );
}
