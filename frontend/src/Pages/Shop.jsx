import React from 'react'
import Hero from '../Components/Hero/Hero'
import Offers from '../Components/Offers/Offers'
import Newcollection from '../Components/NewCollections/Newcollection'
import Popular from '../Components/Popular/Popular'
import NewsLetter from '../Components/NewsLetter/NewsLetter'


const Shop = () => {
  return (
    <div>
      <Hero/>
        <Popular/>
      <Offers/>
      <Newcollection/>
      <NewsLetter/>
    
    </div>
  )
}

export default Shop