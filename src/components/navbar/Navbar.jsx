import React, { useState } from 'react';
import './Navbar.css';
import {asset} from '../../assets/frontend_assets/asset';
import {assets} from '../../assets/admin_assets/assets'



function Navbar() {

  const [menu, setMenu] = useState("Home");

  return (
    <div className='navbar'>
      <img src={asset.logo} alt="The Golden Spoon" className="logo" />
      <ul className="navbar-menu">
        <li onClick={()=>setMenu("Home")} className={menu==="Home"?'active':''}>Home</li>
        <li onClick={() => setMenu("Menu")} className={menu==="Menu"?'active':''}>Menu</li>
        <li onClick={() => setMenu("App")} className={menu==="App"?'active':''}>App</li>
        <li onClick={() => setMenu("Contact-us")} className={menu==="Contact-us"?'active':''}>Contact Us</li>
      </ul>
      <div className="navbar-right">
        <img src={asset.search_icon} alt="Search Icon" />
        <div className="navbar-search-icon">
          <img src={asset.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button>Sign In</button>
      </div>
    </div>
  );
}

export default Navbar;
