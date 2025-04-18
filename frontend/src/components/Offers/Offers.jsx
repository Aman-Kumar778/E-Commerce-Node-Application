import React from "react";
import "./Offers.css";
import exclusive_image from "../assets/exclusive_image.png";

const Offers = () => {
  return (
    <div className="offers">
      <div className="offer-left">
        <h1>EXCLUSIVE</h1>
        <h1>ONLY FOR YOU</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className="offer-right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
};

export default Offers;
