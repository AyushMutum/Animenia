// import React, { useContext } from 'react'
// import { ShopContext } from '../../Context/ShopContext'
// import Item from '../Item/Item'
// import './AnimeDisplay.css'


// const AnimeDisplay = ({category}) => {

//     const {all_product} = useContext(ShopContext)

//   return (
//     <div className='anime-display' id='anime-display'>
//         <h2>Anime Products</h2>
//         <div className='food-display-list'>
//             {
//                 all_product.map((item,index) => {
//                     return <Item 
//                     key={index}
//                     id={item._id}
//                     name={item.name}
//                     description={item.description}
//                     price={item.price}
//                     image={item.image}
//                     />
//                 })
//             }
//         </div>
//     </div>
//   )
// }

// export default AnimeDisplay

import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import Item from '../Item/Item';
import './AnimeDisplay.css';

const AnimeDisplay = ({ category }) => {

  const { all_product } = useContext(ShopContext);
  // console.log(all_product);

  return (
    <div className='anime-display' id='anime-display'>
      <h2>ALL PRODUCTS</h2>
      <div className='anime-display-list'>
        {all_product.map((item,index) => {
          
          if(category==="All" || category===item.category){
            return  <Item
            key={index}
            id={item._id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
          }
    
        })}
      </div>
    </div>
  );
};

export default AnimeDisplay;
