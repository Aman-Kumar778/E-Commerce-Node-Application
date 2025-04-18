import React from "react";
import "./Descriptionbox.css";
export const Descriptionbox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Welcome to our advanced e-commerce platform, where technology meets
          convenience! Powered by cutting-edge tools like Node.js, React,
          MongoDB, and Express, our application is designed to offer a fast,
          secure, and user-friendly shopping experience. Explore a wide variety
          of products with dynamic search and filtering options, enjoy real-time
          product updates, and check out with ease through secure payment
          gateways integrated via APIs. Whether you’re shopping from a desktop
          or mobile device, our responsive design ensures a smooth experience
          every time. Join us to discover a modern, efficient, and hassle-free
          way to shop online!
        </p>
        <p>
          Built with a robust tech stack including Node.js, React, and MongoDB,
          our e-commerce platform delivers speed, reliability, and scalability.
          From real-time product updates to API-powered payment gateways, every
          feature is optimized for performance. Experience the future of online
          shopping—powered by technology.
        </p>
      </div>
    </div>
  );
};
