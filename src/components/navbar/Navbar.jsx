import React, { Profiler, useContext, useState } from 'react';
import './Navbar.css';
import { asset } from '../../assets/frontend_assets/asset';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';



function Navbar({ setShowLogin }) {

  const [menu, setMenu] = useState("Home");
  const { getTotalCartamount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
      localStorage.removeItem("token");
      setToken("");
      navigate("/")
  }

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
          <div className={getTotalCartamount() ? "dot" : ""}></div>
        </div>
        {!token ? <button onClick={() => setShowLogin(true)}>Sign In</button> :
          <div className='navbar-profile'>
             <img src={asset.profile_icon} alt="profile" />
             <ul className="navprofile-dropdown">
              <li onClick={() => navigate('/myorders')}><img src={asset.bag_icon} alt="order" /><p>Orders</p></li>
              <hr />
              <li onClick={() => logout()}><img src={asset.logout_icon} alt="Logout" /><p>Logout</p></li>
             </ul>
          </div>}

      </div>
    </div>
  );
}

export default Navbar;
