import React from 'react';
import './Login.css';
import { useState } from 'react';
import { asset } from '../../assets/frontend_assets/asset';
import { useContext } from 'react';
import axios from 'axios';
import { StoreContext } from '../../context/StoreContext';

const Login = ({setShowLogin}) => {

  const {url, setToken} = useContext(StoreContext)

    const [curr, setCurr] = useState("Sign Up")
    const [data, setData] = useState({
      name:"",
      email:"",
      password:""
    })

    const onchangeHandler = (e) => {
      const {name,value} = e.target;
      setData((data) => ({...data,[name]:value}))
    }

    const onLogin = async(e) => {
      e.preventDefault();
      let newurl = url;
      if(curr == "Login"){
        newurl += '/api/user/login';
      }else{
        newurl += '/api/user/register';
      }

      const response = await axios.post(newurl,data);

      if(response.data.success){
         setToken(response.data.token)
         localStorage.setItem("token",response.data.token)
         setShowLogin(false)
      }else{
        alert(response.data.message)
      }
    }

  return (
    <div className='login-popup'>
         <form onSubmit={onLogin} className="login-popup-container">
            <div className="login-popup-title">
                <h2>{curr}</h2>
                <img onClick={() => setShowLogin(false)} src={asset.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {curr === "Sign Up"?<input type="text" name="name" onChange={onchangeHandler} value={data.name} placeholder='Enter your name' required/>:<></>}
                
                <input type="email" name='email' onChange={onchangeHandler} value={data.email} placeholder='Enter email' required/>
                <input type="password" name='password' onChange={onchangeHandler} value={data.password} placeholder='Enter password' required/>
            </div>
            <button type='submit'>{curr === "Sign Up"? "Create an account": "Login"}</button>
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