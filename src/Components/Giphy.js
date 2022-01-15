import React, { useEffect, useState } from "react";
import axios from "axios";

const Giphy = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState ("")
  useEffect(() => {
    const fetchData = async () => {
      const results = await axios("https://api.giphy.com/v1/gifs/trending", {
        params: {
          api_key: "xShr94N7vteaLhkPtg2Kv4e9ZEmkQV8F",
          limit: 20
        }
      });

      console.log(results);
        setData(results.data.data);
    };

    fetchData();
  }, []);


  const handleSubmit = async event => {
    event.preventDefault();
      const results = await axios ("https://api.giphy.com/v1/gifs/search", {
        params: {
          api_key: "xShr94N7vteaLhkPtg2Kv4e9ZEmkQV8F",
          q : search ,
          limit: 25
        }
      })
      setData(results.data.data)
  }

  const renderGifs = () => {
    return data.map((elements) => {
      return (
        <div key = {elements.id} className="gif">
          <img src = {elements.images.fixed_height.url} />
        <div key={elements.id} className="gif">
          <img src={elements.images.fixed_height.url} />
        </div>
      );
    });
  };


  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }


  return (
  <div className = "m-5">
    <form className = "form-inline justify-content-center mx-5">
      <input
        value = {search} 
        onChange = {handleSearchChange}
        type = "text" placeholder = "Search for Gifs!"
        className = "form-control"/>
      <button onClick = {handleSubmit} type ="submit" className = "btn btn-primary mx-2"> Search </button>
    </form>
    <h1> CURRENTLY TRENDING GIFS! </h1>
      <div className = "container gifs">
     { renderGifs() }
     </div>

   </div>
  );
};

export default Giphy;
