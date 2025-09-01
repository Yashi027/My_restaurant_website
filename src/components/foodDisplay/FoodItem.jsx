import React from 'react';
import './FoodItem.css'
import { asset } from '../../assets/frontend_assets/asset';

function FoodItem({name, id, description, price, image}) {
  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img src={image} alt="" className='food-item-img'/>
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
