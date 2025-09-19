import { createContext, useEffect } from "react";
import { useState } from "react";
import axios from "axios";


export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

  const [cartItems, setCartItems] = useState({});
  const [token,setToken] = useState("");
  const [food_list, setFoodList] = useState([]);
  const url = 'http://localhost:4000'
  

  const addtocart = async(itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((pre) => ({ ...pre, [itemId]: 1 }))
    } else {
      setCartItems((pre) => ({ ...pre, [itemId]: pre[itemId] + 1 }))
    }
    if(token){
      await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
    }
  }

  const removeFromCart = async(itemId) => {
    setCartItems((pre) => {
      if (pre[itemId] > 1) {
        return { ...pre, [itemId]: pre[itemId] - 1 };
      } else {
        const updatedCart = { ...pre };
        delete updatedCart[itemId];
        return updatedCart;
      }
    });
    if(token){
      await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
    }
  };

  const fetch_food_list = async() => {
    const response = await axios.get(`${url}/api/food/list`);
    setFoodList(response.data.data);
  }

  const loadCartData = async(token) => {
    const response = await axios.post(url+"/api/cart/get",{},{headers:{token}});
    setCartItems(response.data.cartData);
  }

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

  useEffect(() => {
     
     async function loadData() {
      await fetch_food_list();
      if(localStorage.getItem("token")){
      setToken(localStorage.getItem("token"))
      await loadCartData(localStorage.getItem("token"))
      }
     }
     loadData()
  },[])


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