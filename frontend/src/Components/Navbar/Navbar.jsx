import React, { useState } from 'react'
import './Navbar.css'
import logo from '../images/logo.png'
import cart_icon from '../images/cart_icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [menu,setMenu]=useState("shop")
  return (
    <div className='Navbar'>
        <div className="nav-log">
            <img src={logo} alt="" />
           <Link to={"/"} className='shopper Links'>SHOPPER</Link>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}> <  Link to='/' className='Links'>Shop</Link> {menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("men")}}> <Link to='/men' className='Links'>Mens</Link>{menu==="men"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("women")}}> <Link to='/womens' className='Links'>Womens</Link> {menu==="women"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}> <Link to='/kids' className='Links'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className="cart">
           <Link to='/login'> <button>LogIn</button></Link>
            <Link to='/cart'> <img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">0</div>
           
        </div>
    </div>
  )
}

export default Navbar