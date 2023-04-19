import React from 'react'
import './footer.css'
import footer1 from '../img/footer1.png'
import footer2 from '../img/footer2.png'
import footer3 from '../img/footer3.png'
import footer4 from '../img/footer4.png'
import logo from '../img/logo.png'

const Footer = () => {
  return (
    <>
        <div className="footer-container">
            <hr />
            <div className="footer">
            <div className="footer-logo">
                <img src={footer1} alt="" />
                <img src={footer2} alt="" />
                <img src={footer3} alt="" />
                <img src={footer4} alt="" />
            </div>
            <div className="gym-logo">
            <img src={logo} alt="" />
            </div>
            
            </div>
        </div>
    </>
  )
}

export default Footer