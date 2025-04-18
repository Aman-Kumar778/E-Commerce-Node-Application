import React from "react";
import "./Navbar.css";
import navLogo from "../../assets/nav-logo.svg";
import navProfiel from "../../assets/nav-profile.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={navLogo} alt="" className="nav-logo" />
      <img src={navProfiel} className="nav-profile" alt="" />
    </div>
  );
};

export default Navbar;
