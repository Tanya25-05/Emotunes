import React from 'react'
import './register.scss'
// import pic from "../../components/navbar/Chalchitra.png"
import { useState,useRef } from 'react'
export default function Register() {
  const [email,setEmail] = useState("")
  const [password , setPassword] = useState();

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleStart = () =>{
    setEmail(emailRef.current.value);

  }

  const handleFinish = () =>{
    setPassword(passwordRef.current.value);

  }

  return (
    <div className="register">
      <div className='top'>
        <div className="wrapper">

        {/* <img className="logo" src={pic} alt='' /> */}
        <button className='loginButton'>Sign In</button>
        </div>
        </div>
        <div className="container">
          <h1>Get To know your emotions</h1>
          <h2>Ready to roll?</h2>
          <p>
             Enter your email to create or register
          </p>
          { !email ? (
          <div className="inputs">
            <input type={'email'}  placeholder='Email Address' ref={emailRef}/>
            <button className="registerButton" onClick={handleStart}>Get Started</button>
            </div>
          ) : (
            <form className="inputs">
            <input type={'password'}  placeholder='Enter Password' ref={passwordRef}/>
            <button className="registerButton" onClick={handleFinish}>Start</button>
            </form>

          ) }
        </div>
    </div>
  )
}
