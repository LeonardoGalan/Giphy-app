import React, { useState } from "react";
import "./App.css";
import SearchField from "./Components/SearchField";
import GifCard from "./Components/GifCard";

export default function App() {
  const [searchType, setSearchType] = useState("search");
  const [inputValue, setInputValue] = useState("");
  const [wasClicked, setWasClicked] = useState(false);

  return (
    <div>
      <header>GIF Generator</header>
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
}