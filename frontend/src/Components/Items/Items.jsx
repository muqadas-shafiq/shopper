
import React from 'react';
import './Items.css';

const Items = (props) => {
  return (
    <div className='items'>
      <img src={props.image} alt={props.name} />
      <p>{props.name}</p>
      <div className="items-prices">
        <div className="new-prices">
          New Price: ${props.newPrice}
        </div>
        <div className="old-prices">
          Old Price: ${props.oldPrice}
        </div>
      </div>
    </div>
  );
}

export default Items;
