import React from 'react'
import './login.scss'

export default function Login() {
  
  return (
    <div className="login">
      <div className='top'>
           {<h1>Emotunes</h1>}
      </div>
        <div className="container">
          <form className='form'>
          
          <h1>Sign In</h1>
          <input type={'email'}  placeholder='Email Address or Phone number' />
          <input type={'password'}  placeholder='Enter Password'/>
          <button className="loginButton">Sign In</button>
          <span>New to EmoTunes? <b>Sign up Now!</b></span>
          <small>This page is protected by blah blah </small>
          </form>
        </div>
       </div>
  )
}
