import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import './FoodDisplay.css'
import FoodItem from './FoodItem';

function FoodDisplay({category}) {
    const {food_list} = useContext(StoreContext);

  return (
    <div className='food-display' id='food-display'>
     <h2>Top dishes near you</h2>
     <div className="food-display-list">
        {food_list.map((item,idx)=>{
            if(category=== "All" || category === item.category)
            return <FoodItem key={idx} name={item.name} id={item._id} description={item.description} price={item.price} image={item.image}/>
        })}
     </div>
    </div>
  )
}

export default FoodDisplay