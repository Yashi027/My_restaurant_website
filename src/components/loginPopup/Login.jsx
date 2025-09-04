import React from 'react';
import './Login.css';
import { useState } from 'react';
import { asset } from '../../assets/frontend_assets/asset';

const Login = ({setShowLogin}) => {

    const [curr, setCurr] = useState("Sign Up")
  return (
    <div className='login-popup'>
         <form action="" className="login-popup-container">
            <div className="login-popup-title">
                <h2>{curr}</h2>
                <img onClick={() => setShowLogin(false)} src={asset.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {curr === "Sign Up"?<input type="text" placeholder='Enter your name' required/>:<></>}
                
                <input type="email" placeholder='Enter email' required/>
                <input type="password" placeholder='Enter password' required/>
            </div>
            <button>{curr === "Sign Up"? "Create an account": "Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox"  required/>
                <p>By continuing, I agree to the terms of use and privacy policy. </p>
            </div>
            {curr == "Login" ?<p>Create a new account? <span onClick={() => setCurr("Sign Up")}>Click here</span></p>:
            <p>Already have an account? <span onClick={() => setCurr("Login")}>Login here</span></p>}
         </form>
    </div>
  )
}

export default Login