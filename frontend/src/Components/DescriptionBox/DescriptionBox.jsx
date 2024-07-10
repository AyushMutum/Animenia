// import React from 'react'
// import './DescriptionBox.css';



// const DescriptionBox = ({product}) => {

//   // const { addToCart, url } = useContext(ShopContext);
//   const { description } = product;

//   return (
//     <div className='descriptionbox'>
//         <div className="descriptionbox-navigator">
//             <div className='descriptionbox-nav-box'>
//                 Description
//             </div>
//             <div className='descriptionbox-nav-box fade'>
//                 Reviews (122)
//             </div>

//         </div>

//         <div className="descriptionbox-description"><p>{description}</p></div>
//     </div>
//   )
// }

// export default DescriptionBox


import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = ({ product }) => {
  // Handle case where product is not available yet
  if (!product) {
    return <div className='descriptionbox'>Loading...</div>; // Placeholder or loading state
  }

  // Destructure product properties safely
  const { description } = product;

  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className='descriptionbox-nav-box'>
          Description
        </div>
        <div className='descriptionbox-nav-box fade'>
          Reviews (122)
        </div>
      </div>
      <div className="descriptionbox-description">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default DescriptionBox;
