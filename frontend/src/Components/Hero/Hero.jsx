import React from 'react'
import'./Hero.css'
import hand_icon from '../images/hand_icon.png'
import arrow from '../images/arrow.png'
import hero_image from'../images/hero_image.png'

const Hero = () => {
  return (
    <div className='hero'>
<div className="hero-left">
    <h2>New Arrivals Only</h2>
    <div>
        <div className="hero-hand-icon">
            <p>New</p>
            <img src={hand_icon} alt="" />
        </div>
        <p>Collections</p>
        <p>For Everyone</p>
    </div>
    <div className="hero-btn">
        <div>Latest Collenction </div>
        <img src={arrow} alt="" />

    </div>
</div>
<div className="hero-right">
    <img src={hero_image} alt="" />
</div>
    </div>
  )
}

export default Hero