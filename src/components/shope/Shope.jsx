import React, { useEffect, useState } from "react";
import Carrd from "../Card/Carrd";
import "./shope.css";
const Shope = () => {
  let [api, setApi] = useState([]);

  useEffect(() => {
    let url = `products.json`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setApi(data));
  }, []);

  return (
    <div className="container">
      <div className=" grid grid-cols-3 gap-3 h-20">
        {api.map((res) => (
          <Carrd key={res.id} messi={res}></Carrd>
        ))}
      </div>
      <div className="bordermm">
        <h1 className="text-center text-2xl font-bold pt-2" >pricing here </h1>
      </div>
    </div>
  );
};

export default Shope;
