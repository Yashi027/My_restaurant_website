import React, { useContext } from 'react';
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext';
function PlaceOrder() {
  const {getTotalCartamount} = useContext(StoreContext)
  return (
    <form className='placeorder'>
      <div className="place-order-left">
        <p className="title">
          Delivery Information
        </p>
        <div className="multi-fields">
          <input type="text" placeholder='Enter first name' />
          <input type="text" placeholder='Enter last name' />
        </div>
        <input type="email" placeholder='Enter Email address' />
        <div className="multi-fields">
          <input type="text" placeholder='Street' />
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip-Code' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="tel" placeholder='Phone Number' />
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
          <button >Proceed to Pay</button>
        </div>
      </div>
    </form>
  );
}

export default PlaceOrder;
