// import React from 'react';
// import './Popular.css';
// import data_product from '../images/Data';

// const PopularItem = ({ id, name, image, new_price,   old_price }) => {
//   return (
//     <div className="popular-item" key={id}>
//       <img src={image} alt={name} />
//       <h3>{name}</h3>
//       <p>New Price: {new_price}</p>
//       <p>Old Price: {  old_price}</p>
//     </div>
//   );
// };

// const Popular = () => {
//   return (
//     <div className="popular">
//       <h1>POPULAR IN WOMEN</h1>
    
//       <div className="popular-items">
//         {data_product.map((item) => {
//           return (
//             <PopularItem
//               key={item.id}
//               id={item.id}
//               name={item.name}
//               image={item.image}
//               newPrices={item.new_price}
//               oldPrices={  old_price}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Popular;



import React from 'react'
import './popular.css'
import data_product from '../images/Data'
import Items from '../Items/Items'
  


{data_product.map((item, i) => {
  return (
    <Items 
      key={i} 
      id={item.id} 
      name={item.name} 
      image={item.image} 
      new_price={item.new_price}  // Change this line
      old_price={item.old_price}  // Change this line
    />
  );
})}




const Popular = () => {
  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <div className="popular-items">
        {data_product.map((item ,i)=>{

          return <Items key={i} id={item.id} name={item.name} image={item.image} newPrice={item.new_price} oldPrice={item.old_price}/>
         
        })}
      </div>
    </div>
  )
}

export default Popular