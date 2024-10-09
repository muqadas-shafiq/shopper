import React from 'react'
import './Offers.css'
import exclusive_image from '../images/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offer'>
        <div className="Offers-left">
            <h1>EXCLUSIVE</h1>
           <h1>OFFERS FOR YOU</h1>
            <p>only on best sellers product</p>
            <button>CHECK NOW</button>
        </div>
        <div className="offers-right">
        <img src={exclusive_image} />
        </div>
    </div>
  )
}

export default Offers