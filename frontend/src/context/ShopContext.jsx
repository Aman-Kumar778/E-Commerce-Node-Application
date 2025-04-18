import React, { createContext, useEffect, useState } from "react";

//now we used the below to fetch item for the fronted part,now we will use the state and backend method to add the products . so we will not use the below import option
// import all_products from "../components/assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  // for (let index = 0; index < all_products.length + 1; index++) {
  //   cart[index] = 0;
  // }
  for (let index = 0; index < 300 + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [all_products, setAll_Product] = useState([]);

  const [cartItem, setCartItems] = useState(getDefaultCart);

  useEffect(() => {
    fetch("http://localhost:4000/allproducts")
      .then((response) => response.json())
      .then((data) => setAll_Product(data));

    if (localStorage.getItem("auth-token")) {
      fetch("http://localhost:4000/getcart", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "auth-token": `${localStorage.getItem("auth-token")}`,
          "Content-Type": "application/json",
        },
        body: "",
      })
        .then((response) => response.json())
        .then((data) => setCartItems(data));
    }
  }, []);

  const addtocart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    if (localStorage.getItem("auth-token")) {
      fetch("http://localhost:4000/addtocart", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "auth-token": `${localStorage.getItem("auth-token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemId: itemId }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
  };
  const removeFromcart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (localStorage.getItem("auth-token")) {
      fetch("http://localhost:4000/removefromcart", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "auth-token": `${localStorage.getItem("auth-token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemId: itemId }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
  };

  // const getTotalCartAmount = () => {
  //   let totalAmount = 0;
  //   for (const item in cartItem) {
  //     if (cartItem[item] > 0) {
  //       let itemInfo = all_products.find(
  //         (product) => product.id === Number(item)
  //       );
  //       totalAmount += itemInfo.new_price * cartItem[item];
  //     }
  //     return totalAmount;
  //   }
  // };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = all_products.find(
          (product) => product.id === Number(item)
        );
        if (itemInfo) {
          totalAmount += itemInfo.new_price * cartItem[item];
        }
      }
    }
    return totalAmount;
  };

  // function for the totalcartitems
  const getTotalCartItems = () => {
    let totalitem = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        totalitem += cartItem[item];
      }
    }
    return totalitem;
  };
  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    all_products,
    cartItem,
    addtocart,
    removeFromcart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
