import React from 'react'
import './Footer.css'
import Footer_logo from '../images/logo_big.png'
import instagram_icon from '../images/instagram_icon.png'
import pintester_icon from '../images/pintester_icon.png'
import whatsapp_icon from '../images/whatsapp_icon.png'


const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={Footer_logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className="footer-links">
            <li>Companies</li>
            <li>About</li>
            <li>Contacts</li>
            <li>Offices</li>
            <li>Products</li>
        </ul>
        <div className="footer-icons">
            <div className="icon-container">
                <img src={instagram_icon} alt="" />
            </div>
            <div className="icon-container">
            <img src={pintester_icon}/>
            </div>
            <div className="icon-container">
                <img src={whatsapp_icon} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
        
            <p>CopyRight @ 20203 All Right Reserved.</p>
        </div>

    </div>
  )
}

export default Footer