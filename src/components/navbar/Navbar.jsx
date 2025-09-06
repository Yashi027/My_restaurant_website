import React, { useContext, useState } from 'react';
import './Navbar.css';
import { asset } from '../../assets/frontend_assets/asset';
import { assets } from '../../assets/admin_assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';



function Navbar({ setShowLogin }) {

  const [menu, setMenu] = useState("Home");
  const {getTotalCartamount} = useContext(StoreContext);

  return (
    <div className='navbar'>
      <Link to='/'><img src={asset.logo} alt="The Golden Spoon" className="logo" /></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={() => setMenu("Home")} className={menu === "Home" ? 'active' : ''}>Home</Link>
        <a href='#explore-menu' onClick={() => setMenu("Menu")} className={menu === "Menu" ? 'active' : ''}>Menu</a>
        <a href='#app-download' onClick={() => setMenu("App")} className={menu === "App" ? 'active' : ''}>App</a>
        <a href='#footer' onClick={() => setMenu("Contact-us")} className={menu === "Contact-us" ? 'active' : ''}>Contact Us</a>
      </ul>
      <div className="navbar-right">
        <img src={asset.search_icon} alt="Search Icon" />
        <div className="navbar-search-icon">
          <Link to='/cart'><img src={asset.basket_icon} alt="" /></Link>
          <div className={getTotalCartamount()?"dot":""}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  );
}

export default Navbar;
