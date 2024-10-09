import React from 'react'
import './CSS/loginSignup.css'
const LoginSignup = () => {
  return (
    <div className='loginSignup'>
      <div className="loginSignup-container">
        <h1>Sign Up</h1>
        <div className="login-fields">
          <input type="text" placeholder='Your name' />
          <input type="email" placeholder='Type your Email'/>
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Already hace an account? <span>login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p> By continuing , i agree to the terms to use policies</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup