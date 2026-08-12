import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { products as localProducts } from "../assets/assets";
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "₱ ";
  const delivery_fee = 10;

  // backendUrl is imported from the admin app
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  // for searching state
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  // for products state
  const [cartItems, setCartItems] = useState({});

  const [products, setProducts] = useState(localProducts);

  const navigate = useNavigate();

  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Please select a size");
      return;
    }

    let cartData = structuredClone(cartItems);
    // check if the item already exists in the cart
    // if it does, increment the quantity
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);
    toast.success("Product added to cart successfully");
  };

  // add to card counter
  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (error) {
          console.error("Error calculating cart count:", error);
        }
      }
    }
    return totalCount;
  };

  // update quantity of the cart item
  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);

    cartData[itemId][size] = quantity;

    setCartItems(cartData);
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      const itemInfo = products.find((product) => product._id === itemId);
      if (!itemInfo) continue;
      for (const size in cartItems[itemId]) {
        try {
          const quantity = cartItems[itemId][size];
          if (quantity > 0) {
            totalAmount += itemInfo.price * quantity;
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    return totalAmount;
  };



  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    setCartItems,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
    backendUrl,
  };

  ShopContextProvider.propTypes = {
    children: PropTypes.node.isRequired, // Validates that 'children' is a React node and required
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
