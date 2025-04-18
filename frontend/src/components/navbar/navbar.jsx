import React, { useContext, useRef, useState } from "react";
import "./navbar.css";

import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import nav_dropdown from "../assets/nav_dropdown.png";

const Navbar = () => {
  //using the usestate to define the change in highlight function for the navbars
  const [menu, setmenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);

  const menuRef = useRef();
  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    //this will on  click add a classs or remove
    e.target.classList.toggle("open");
  };

  return (
    <>
      <div className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="" />
          <p>Shopper</p>
        </div>
        <img
          className="nav-dropdown"
          onClick={dropdown_toggle}
          src={nav_dropdown}
          alt=""
        />
        <ul ref={menuRef} className="nav-menu">
          <li
            onClick={() => {
              setmenu("shop");
            }}
          >
            <Link style={{ textDecoration: "none" }} to="/">
              Shop
            </Link>
            {menu === "shop" ? <hr /> : <></>}{" "}
            {/*using the link tag to link thepath with the elements */}
          </li>
          {/* //using the ternary operator for the rendering of hr tag */}
          <li
            onClick={() => {
              setmenu("mens");
            }}
          >
            <Link style={{ textDecoration: "none" }} to="/mens">
              Men
            </Link>
            {menu === "mens" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setmenu("womens");
            }}
          >
            <Link style={{ textDecoration: "none" }} to="/womens">
              Women
            </Link>
            {menu === "womens" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setmenu("kids");
            }}
          >
            <Link style={{ textDecoration: "none" }} to="/kids">
              Kids
            </Link>
            {menu === "kids" ? <hr /> : <></>}
          </li>
        </ul>
        <div className="nav-login-cart">
          {localStorage.getItem("auth-token") ? (
            <button
              onClick={() => {
                localStorage.removeItem("auth-token");
                window.location.replace("/");
              }}
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button>Login</button>
            </Link>
          )}

          <Link to="/cart">
            <img src={cart_icon} alt="" />
          </Link>
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
