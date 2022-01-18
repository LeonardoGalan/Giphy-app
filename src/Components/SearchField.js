import React from "react";

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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={inputValue}
          onChange={handleSearchChange}
          type="text"
          placeholder="Search for GIFs!"
          className="form-control"
        />
        <button type="button" onClick={handleClick} name="trending">Trending</button>
      </form>
    </div>
  );
}
