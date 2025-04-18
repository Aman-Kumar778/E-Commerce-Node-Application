import React from "react";
import "./Footer.css";
import footer_logo from "../assets/logo_big.png";
import instagram from "../assets/instagram_icon.png";
import pintester from "../assets/pintester_icon.png";
import whatsup from "../assets/whatsapp_icon.png";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>SHOPPER</p>
      </div>

      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icons-container">
          <img src={instagram} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={pintester} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsup} alt="" />
        </div>
      </div>

      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2025 - All Rights Reserved.</p>
      </div>
    </div>
  );
};
