import React from 'react'
import './Newcollection.css'
import new_collections from '../images/new_collections'
import Items from '../Items/Items'

const Newcollection = () => {
  return (
    <div className='new-collection'>
        <h1>NEW COLLECTIONS</h1>
        <div className="collectins">
         {new_collections.map((item,i)=>{
            return <Items key={i} id={item.id} name={item.name} image={item.image} newPrice={item.new_price} oldPrice={item.old_price}/>
         })}
        </div>
    </div>
  )
}

export default Newcollection