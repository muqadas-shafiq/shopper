import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='Newsletter'>
       <h1> Get Exclusive Offers On Your Email</h1>
       <p>Subscribe To Our NewsLetter And stay Updated</p>
       <div>
        <input type="email"  placeholder='Type Your Email id'/>
        <button>SUBSCRIBE</button>
       </div>
    </div>
  )
}

export default NewsLetter