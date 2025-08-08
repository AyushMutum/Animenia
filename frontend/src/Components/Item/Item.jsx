


// import React, { useContext, useState } from "react";
// import { ShopContext } from "../../Context/ShopContext";
// import "./Item.css";
// import star_icon from "../Assets/star_icon.png";
// import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";
// import { Link } from "react-router-dom";

// const Item = ({ id, name, price, description, image }) => {

//   const { url, cartItems, addToCart, removeFromCart, } = useContext(ShopContext);

//   // const[itemCount,setItemCount] = useState(0)

//   const handleAddToCart = () => {
//     addToCart(id);
//   };

//   const handleRemoveFromCart = () => {
//     removeFromCart(id);
//   };
 
//   return (
//     <div className="anime-item">
//       <div className="anime-item-image-container">
//         <Link to={`/product/${id}`}>
//         <img onClick={window.scrollTo(0,0)} className="anime-item-image" src={`${url}/images/${image}`} alt={name} />
        
//         </Link>
        
//         {!cartItems[id] ? (
//           <IoAddCircleOutline size={30} className="add" onClick={handleAddToCart} />
//         ) : (
//           <div className="anime-item-counter">
//             <IoRemoveCircleOutline size={25} color="red"  className="counter-tag" onClick={handleRemoveFromCart} />
//             <p>{cartItems[id]}</p>
//             <IoAddCircleOutline size={25} color="green" className="counter-tag" onClick={handleAddToCart} />
//           </div>
//         )}
//       </div>
//       <div className="anime-item-info">
//         <div className="anime-item-name-rating">
//           <p>{name}</p>
//           <img src={star_icon} alt="star" />
//           <img src={star_icon} alt="star" />
//           <img src={star_icon} alt="star" />
//           <img src={star_icon} alt="star" />
//         </div>
//         {/* <p className="anime-item-desc">{description}</p> */}
//         <p className="anime-item-price">₹{price}</p>
//       </div>
//     </div>
//   );
// };

// export default Item;






import React, { useContext, useState } from "react";
import { ShopContext } from "../../Context/ShopContext";
import "./Item.css";
import star_icon from "../Assets/star_icon.png";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Item = ({ id, name, price, description, image }) => {

  const { url, cartItems, addToCart, removeFromCart, } = useContext(ShopContext);

  // const[itemCount,setItemCount] = useState(0)

  const handleAddToCart = () => {
    addToCart(id);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(id);
  };
 
  return (
    <div className="anime-item">
      <div className="anime-item-image-container">
        <Link to={`/product/${id}`}>
        <img onClick={window.scrollTo(0,0)} className="anime-item-image" src={`${url}/images/${image}`} alt={name} />
        
        </Link>
        
        {!cartItems[id] ? (
          <IoAddCircleOutline size={30} className="add" onClick={handleAddToCart} />
        ) : (
          <div className="anime-item-counter">
            <IoRemoveCircleOutline size={25} color="red"  className="counter-tag" onClick={handleRemoveFromCart} />
            <p>{cartItems[id]}</p>
            <IoAddCircleOutline size={25} color="green" className="counter-tag" onClick={handleAddToCart} />
          </div>
        )}
      </div>
      <div className="anime-item-info">
        <div className="anime-item-name-rating">
          <p>{name}</p>
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
        </div>
        {/* <p className="anime-item-desc">{description}</p> */}
        <p className="anime-item-price">₹{price}</p>
      </div>
    </div>
  );
};

export default Item;

