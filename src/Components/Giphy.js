import React, { useEffect, useState } from "react";
import axios from "axios";

const Giphy = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const results = await axios("https://api.giphy.com/v1/gifs/trending", {
        params: {
          api_key: "xShr94N7vteaLhkPtg2Kv4e9ZEmkQV8F",
        },
      });

      console.log(results);
      setData(results.data.data);
    };

    fetchData();
  }, []); 

  const renderGifs = () => {
    return data.map((elements) => {
      return (
        <div key={elements.id} className="gif">
          <img src={elements.images.fixed_height.url} />
        </div>
      );
    });
  };

  return <div className="container gifs">{renderGifs()}</div>;
};

export default Giphy;
