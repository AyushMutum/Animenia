// import React , { useState,useEffect } from 'react'
// import './RelatedProducts.css';

// import Item from '../Item/Item';

// const RelatedProducts = () => {

//   const { all_product } = useContext(ShopContext);
//   const [relatedProducts, setrelatedProducts] = useState([])

//   return (
//     <div className='relatedproducts'>
//         <h1>Related Products</h1>
//         <hr />
//         <div className='relatedproducts-items'>
//             {relatedProducts.map((item,i) => {
//                 return <Item 
//                 key={i}
//                 id={item.id}
//                 name={item.name}
//                 image={item.image}
//                 price={item.price}
//                />
//             })}
//         </div>
//     </div>
//   )
// }

// export default RelatedProducts

      
import React, { useContext } from 'react';
import './RelatedProducts.css';

import Item from '../Item/Item';
import { ShopContext } from '../../Context/ShopContext';

const RelatedProducts = ({ category }) => {
  const { all_product } = useContext(ShopContext);

  // Limit the number of items to display
  const numberOfItemsToShow = 4;
  const itemsToDisplay = all_product.slice(0, numberOfItemsToShow);

  return (
    <div className='relatedproducts'>
      <h1>Related Products</h1>
      <hr />
      <div className='relatedproducts-items'>
        {itemsToDisplay.map((item, index) => (
          <Item 
            key={index} // Ensure key is unique, consider using item._id if possible
            id={item._id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
