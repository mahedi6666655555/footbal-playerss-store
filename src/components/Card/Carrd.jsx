import React from "react";
import "./card.css";

const Carrd = (props) => {
  let { img, name, price, quantity, ratings, seller } = props.messi;

  return (
    <div className="w-[300px] h-[500px]  border1mll mt-5 ml-2 relative">
      <div>
        <img className="w-full h-[200px]" src={img} alt="" />
      </div>
      <div className="pl-5 pt-5 text-2xl">
        <h1 className="text-gray-700">name: {name}</h1>
        <h1 className="text-gray-700">Price: {price}</h1>
        <h1 className="text-gray-700">quantity: {quantity}</h1>
        <h1 className="text-gray-700">ratings: {ratings}</h1>
        <h1 className="text-gray-700">seller: {seller}</h1>
      </div>
      <div>
        <button className="bg-gray-600 w-full py-3 absolute bottom-0 text-white">Transfer</button>
      </div>
    </div>
  );
};

export default Carrd;
