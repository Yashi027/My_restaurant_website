import React from 'react';
import './FoodItem.css'
import { asset } from '../../assets/frontend_assets/asset';
import { useState } from 'react';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';

function FoodItem({name, id, description, price, image}) {

  
  const {cartItems,addtocart, removeFromCart} = useContext(StoreContext);

  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img src={image} alt="" className='food-item-img'/>
            <div className="food-item-counter">
              <img src={asset.remove_icon_red} onClick={() => removeFromCart(id)} alt="" />
              <p>{cartItems[id]? cartItems[id]: 0}</p>
              <img src={asset.add_icon_green} onClick={() => addtocart(id)} alt="" />
            </div>
        </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={asset.rating_starts} alt="" />
        </div>
        <p className="food-item-price">
            ${price}
        </p>
        <p className="food-item-description">
            {description}
        </p>
        
      </div>
    </div>
  );
}

export default FoodItem;
