import React, { useState } from "react";
import axios from "axios";

export default function SearchField(props) {
  const { inputValue, setInputValue, setSearchType, setWasClicked } = props;

  const handleClick = (event) => {
    setSearchType(event.target.name);
    setWasClicked((prevWasClicked) => !prevWasClicked);
  };

  const handleSubmit = (event) => {
      event.preventDefault();
      setSearchType("search");
  }

  const handleSearchChange = (event) => {
    setSearchType("search");
    setInputValue(event.target.value);
  };

  return (
    <div className="m-5">
      <form onSubmit={handleSubmit} className="form-inline justify-content-center mx-5">
        <input
          value={inputValue}
          onChange={handleSearchChange}
          type="text"
          placeholder="Search for Gifs!"
          className="form-control"
        />
        <button type="button" onClick={handleClick} name="trending">Trending</button>
        {/* <button type="button" onClick={handleClick} name="random">Random</button> */}
      </form>
    </div>
  );
}
