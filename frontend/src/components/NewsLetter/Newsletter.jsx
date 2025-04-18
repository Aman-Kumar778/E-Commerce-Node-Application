import React from "react";
import "./Newsletter.css";

export const Newsletter = () => {
  return (
    <div className="newsletter">
      <h1>Get Exclusive Offerss on Your Email</h1>
      <p>Subscribe to our newletter and stay updated</p>
      <div>
        <input type="email" placeholder="Your email id " />
        <button>Subscribe</button>
      </div>
    </div>
  );
};
