import { createContext, useEffect } from "react";
import { food_list } from '../assets/frontend_assets/asset'
import { useState } from "react";


export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

  const [cartItems, setCartItems] = useState({});
  const [token,setToken] = useState("");
  const url = 'http://localhost:4000'

  const addtocart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((pre) => ({ ...pre, [itemId]: 1 }))
    } else {
      setCartItems((pre) => ({ ...pre, [itemId]: pre[itemId] + 1 }))
    }
  }

  const removeFromCart = (itemId) => {
    setCartItems((pre) => {
      if (pre[itemId] > 1) {
        return { ...pre, [itemId]: pre[itemId] - 1 };
      } else {
        const updatedCart = { ...pre };
        delete updatedCart[itemId];
        return updatedCart;
      }
    });
  };

  const getTotalCartamount = () => {
    let totalamt = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let iteminfo = food_list.find((product) => product._id === item);
        totalamt += iteminfo.price * cartItems[item];
      }
    }
    return totalamt
  }


  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addtocart,
    removeFromCart,
    getTotalCartamount,
    url,
    token,
    setToken
  }



  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider;