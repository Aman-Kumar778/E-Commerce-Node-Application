import React from "react";
import "./Hero.css";
import hero_hand from "../assets/hand_icon.png";
import latest_button from "../assets/arrow.png";
import hero_image from "../assets/hero_image.png";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>New Arrivals Only</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            <img src={hero_hand} alt="" />
          </div>
          <p>Collections</p>
          <p>For EveryOne</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={latest_button} alt="" />
        </div>
      </div>

      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
};
