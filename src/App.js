import React, { useState } from "react";
import "./App.css";
import SearchField from "./Components/SearchField";
import GifCard from "./Components/GifCard";

const App = () => {
  const [searchType, setSearchType] = useState("search");
  const [inputValue, setInputValue] = useState("");
  const [wasClicked, setWasClicked] = useState(false);

  return (
    <div>
      <SearchField
        inputValue = {inputValue}
        setInputValue = {setInputValue}
        setSearchType = {setSearchType}
        setWasClicked = {setWasClicked}
      />

      <GifCard
          searchType = {searchType}
          inputValue = {inputValue}
          wasClicked = {wasClicked}
      />
    </div>
  );
};

export default App;
