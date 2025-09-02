import { createContext, useEffect } from "react";
import {food_list} from '../assets/frontend_assets/asset'
import { useState } from "react";


export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    
    const [cartItems, setCartItems] = useState({});
    const addtocart = (itemId) => {
      if(!cartItems[itemId]){
        setCartItems((pre) => ({...pre,[itemId]:1}))
      }else{
        setCartItems((pre) => ({...pre,[itemId]:pre[itemId]+1}))
      }
    }

  const removeFromCart = (itemId) => {
  setCartItems((pre) => {
    if (pre[itemId] > 1) {
      // decrease count
      return { ...pre, [itemId]: pre[itemId] - 1 };
    } else {
      // remove item completely if it’s 1 or 0
      const updatedCart = { ...pre };
      delete updatedCart[itemId];
      return updatedCart;
    }
  });
};
     useEffect(() => {
     console.log(cartItems)
    },[cartItems])

    const contextValue = {
          food_list,
          cartItems,
          setCartItems,
          addtocart,
          removeFromCart
    }

   

    return(
        <StoreContext.Provider value={contextValue}>
          {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;