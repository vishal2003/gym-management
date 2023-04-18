import React from 'react'
import './register.css'

const Register = () => {
  return (
    <div className="register">
        <div className="reg-left">
          <div>
          <span className='stroke-text'>READY TO </span>
          <span>LEVEL UP</span>
          </div>
          <div>
          <span>YOUR BODY </span>
          <span className='stroke-text'>WITH US.</span>
          </div>
        </div>
        <div className="reg-right">
            <form className='email-container'> 
             <input type="email" placeholder='Enter Your Email' />
             <button className='btn-reg'>Register</button>
            </form>
        </div>
    </div>
  )
}

export default Register