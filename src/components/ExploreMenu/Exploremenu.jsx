import React from 'react';
import './Exploremenu.css';
import {menu_list} from '../../assets/frontend_assets/asset'

function Exploremenu({category, setCategory}) {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h2>Explore our Menu</h2>
        <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients. Our mission is to satisfy your cravings and elevate your dining experience.</p>
        <div className="explore-menu-list">
            {
                menu_list.map((item,idx) => {
                    return(
                        <div onClick={() => setCategory(prev => prev===item.menu_name ? "All" : item.menu_name)} key={idx} className="explore-menu-list-item">
                             <img className={category===item.menu_name?"active":""} src={item.menu_image}  />
                             <p>{item.menu_name}</p>
                        </div>
                    )
                })
            }
        </div>
        <hr />
      
    </div>
  );
}

export default Exploremenu;
