import React, { useContext } from 'react';
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext';
import { useState } from 'react';
import axios from 'axios';
function PlaceOrder() {
  const {getTotalCartamount,token, food_list, cartItems,url} = useContext(StoreContext)
  const [data, setData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""
  })

  const onChangehandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData(data => ({...data,[name]:value}))
  }

  const placeOrder = async (e) => {
    e.preventDefault();
    let orderItems = []
    food_list.map((item) => {
      if(cartItems[item._id]>0){
        let iteminfo = item
        iteminfo["quantity"] = cartItems[item._id]
        orderItems.push(iteminfo)
      }
    })
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartamount()+2
    }
    let response = await axios.post(url+'/api/order/place',orderData,{headers:{token}});
    if(response.data.success){
      const {session_url} = response.data
      window.location.replace(session_url)
    }else{
      alert("Error")
    }
  }

  return (
    <form onSubmit={placeOrder} className='placeorder'>
      <div className="place-order-left">
        <p className="title">
          Delivery Information
        </p>
        <div className="multi-fields">
          <input name='firstName' onChange={onChangehandler} value={data.firstName} type="text" placeholder='Enter first name' required />
          <input name='lastName' onChange={onChangehandler} value={data.lastName} type="text" placeholder='Enter last name' required />
        </div>
        <input name='email' onChange={onChangehandler} value={data.email} type="email" placeholder='Enter Email address' required />
        <div className="multi-fields">
          <input name='street' onChange={onChangehandler} value={data.street} type="text" placeholder='Street' required/>
          <input name='city' onChange={onChangehandler} value={data.city} type="text" placeholder='City' required/>
          <input name='state' onChange={onChangehandler} value={data.state} type="text" placeholder='State' required />
        </div>
        <div className="multi-fields">
          <input name='zipcode' onChange={onChangehandler} value={data.zipcode} type="text" placeholder='Zip-Code' required/>
          <input name='country' onChange={onChangehandler} value={data.country} type="text" placeholder='Country' required/>
        </div>
        <input name='phone' onChange={onChangehandler} value={data.phone} type="tel" placeholder='Phone Number' required/>
      </div>


      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-deatails">
              <p>SubTotal</p>
              <p>${getTotalCartamount()}</p>
            </div>
            <hr />
            <div className="cart-total-deatails">
                <p>Delivery Fee</p>
                <p>${getTotalCartamount()==0?0:8}</p>
              </div>
              <hr />
              <div className="cart-total-deatails">
                <b>Total </b>
                <b>${getTotalCartamount() == 0? 0: getTotalCartamount()+8}</b>
              </div>
          </div>
          <button type='Submit'>Proceed to Pay</button>
        </div>
      </div>
    </form>
  );
}

export default PlaceOrder;
