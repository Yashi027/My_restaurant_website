import React from 'react';
import './Navbar.css';
import {asset} from '../../assets/frontend_assets/asset';
import {assets} from '../../assets/admin_assets/assets'



function Navbar() {
  return (
    <div>
      <img src={asset.logo} alt="" className="logo" />
      <ul className="nav-menu">
        <li>Home</li>
        <li>Menu</li>
        <li>App</li>
        <li>Contact Us</li>
      </ul>
      <div className="navbar-right">
        <img src={asset.search_icon} alt="Search Icon" />
      </div>
    </div>
  );
}

export default Navbar;
