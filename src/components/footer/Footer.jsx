import React from 'react';
import './Footer.css';
import { asset } from '../../assets/frontend_assets/asset';

function Footer() {
  return (
    <div className='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                {/* <img src={asset.logo} alt="" id='logo' /> */}
                <h2>The Golden Spoon</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, ducimus consequuntur. Et temporibus facere illo eum quidem, modi doloribus velit ratione ex culpa soluta adipisci tempore dolores? Necessitatibus, distinctio impedit!</p>
                <div className="footer-social-icons">
                    <img src={asset.facebook_icon} alt="Facebook link" />
                    <img src={asset.linkedin_icon} alt="LinkedIn Link" />
                    <img src={asset.twitter_icon} alt="Twitter Link" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Get In Touch</h2>
                <ul>
                    <li>+1-212-345-6789</li>
                    <li>contact@thegoldenspoon.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <div className="footer-copyright">
            Copyright 2025 &copy; TheGoldenSpoon.com - All Rights Reserved
        </div>
    </div>
  )
}

export default Footer