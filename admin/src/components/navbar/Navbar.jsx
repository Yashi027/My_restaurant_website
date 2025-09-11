import React from 'react';
import './Navbar.css';
import {assets} from '../../assets/admin_assets/assets.js'

function Navbar() {
  return (
    <div className='navbar'>
      <span>
        <img className='logo' src={assets.logo} />
        <h3>The Golden Spoon</h3>
      </span>
      <img className='profile' src={assets.profile_image}/>
    </div>
  )
}

export default Navbar