import React, { useContext } from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = ({ product }) => {
  const { addToCart, url } = useContext(ShopContext);

  if (!product) {
    return null; // Handle case when product is not available yet
  }

  const { name, image, price, description } = product;

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          {/* Ensure product.image exists before rendering */}
          {image && (
            <>
              <img src={`${url}/images/${image}`} alt={name} />
              <img src={`${url}/images/${image}`} alt={name} />
              <img src={`${url}/images/${image}`} alt={name} />
              <img src={`${url}/images/${image}`} alt={name} />
            </>
          )}
        </div>
        <div className="productdisplay-img">
          {/* Ensure product.image exists before rendering */}
          {image && (
            <img className="productdisplay-main-img" src={`${url}/images/${image}`} alt={name} />
          )}
        </div>
      </div>

      <div className="productdisplay-right">
        <h1>{name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_dull_icon} alt="star" />
          <p>122</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-new">₹{price}</div>
        
        </div>

        <div className="productdisplay-right-description">
          {description}
        </div>
        <div className="productdisplay-right-size">
       
          <button onClick={() => { addToCart(product.id) }}>ADD TO CART</button>
          <p className="productdisplay-right-category"> <span>Category:</span> Anime products</p>
    
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;



// import React, { useContext } from "react";
// import "./ProductDisplay.css";
// import star_icon from "../Assets/star_icon.png";
// import star_dull_icon from "../Assets/star_dull_icon.png";
// import { ShopContext } from "../../Context/ShopContext";

// const ProductDisplay = ({ product }) => {
//   const { addToCart, url } = useContext(ShopContext);

//   // Function to construct full image URL
//   const getImageUrl = (imageName) => `${url}/images/${imageName}`;

//   console.log("Product:", product)
//   if (!product) {
//     return <div>Loading...</div>; // or handle null product scenario
//   }

//   return (
//     <div className="productdisplay">
//       <div className="productdisplay-left">
//         <div className="productdisplay-img-list">
//           {/* Ensure product.images exists before mapping */}
//           {product.images && product.images.map((image, index) => (
//             <img key={index} src={`${url}/images/${image}`} alt="" />
//           ))}
//         </div>
//         <div className="productdisplay-img">
//           {/* Display main image */}
//           {product.images && <img className="productdisplay-main-img" src={getImageUrl(product.images[0])} alt="" />}
//         </div>
//       </div>

//       <div className="productdisplay-right">
//         <h1>{product.name}</h1>
//         <div className="productdisplay-right-stars">
//           {/* Display star ratings */}
//           {[...Array(5)].map((_, index) => (
//             <img key={index} src={index < product.rating ? star_icon : star_dull_icon} alt="" />
//           ))}
//           <p> Reviews</p>
//         </div>
//         <div className="productdisplay-right-prices">
//           <div className="productdisplay-right-price-old">₹{product.price}</div>
         
//         </div>

//         <div className="productdisplay-right-description">
//           {/* Display product description */}
//           <p>{product.description}</p>
//         </div>
//         <div className="productdisplay-right-size">
         
//           <button onClick={() => addToCart(product._id)}>ADD TO CART</button>
//           <p className="productdisplay-right-category">
//             <span>Category:</span> {product.category}
//           </p>
         
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDisplay;

