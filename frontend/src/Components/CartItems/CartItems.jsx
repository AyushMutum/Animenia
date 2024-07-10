// // import React, { useContext } from "react";
// // import { ShopContext } from "../../Context/ShopContext";
// // import "./CartItems.css";

// // import remove_icon from "../Assets/cart_cross_icon.png";

// // const CartItems = () => {
// //   const { all_product, cartItems, removeFromCart } = useContext(ShopContext);

// //   return (
// //     <div className="cartitems">
// //       <div className="cartitems-format-main">
// //         <p>Products</p>
// //         <p>Title</p>
// //         <p>Price</p>
// //         <p>Quantity</p>
// //         <p>Total</p>
// //         <p>Remove</p>
// //       </div>

// //       <hr />

// //       {all_product.map((e) => {
// //         if (cartItems[e.id] > 0) {
// //          return (
// //             <div>
// //             <div className="cartitems-format">
// //               <img src={e.image} className="carticon-product-icon" alt="" />
// //               <p>{e.name}</p>
// //               <p>₹{e.new_price}</p>
// //               <button className="cartitems-quantity">{cartItems[e.id]}</button>
// //               <p>₹{e.new_price * cartItems[e.id]}</p>
// //               <img
// //               className="cartitems-remove-icon"
// //                 src={remove_icon}
// //                 onClick={() => {
// //                   removeFromCart(e.id);
// //                 }}
// //                 alt=""
// //               />
// //             </div>
// //             <hr />
// //           </div>;
// //          )
// //         }
// //         return null
// //       })}
// //       <div className="cartitems-down">
// //         <div className="cartitems-total">
// //             <h1>Cart Totals</h1>
// //             <div>
// //                 <div className="cartitems-total-item">
// //                     <p>Subtotal</p>
// //                     <p>₹{0}</p>
// //                 </div>
// //                 <hr />
// //                 <div className="cartitems-total-item">
// //                     <p>Shipping Fee</p>
// //                     <p>Free</p>
// //                 </div>
// //                 <hr />
// //                 <div className="cartitems-total-item">
// //                     <h3>Total</h3>
// //                     <h3>₹{0}</h3>
// //                 </div>
// //             </div>
// //             <button>PROCEED TO CHECKOUT</button>
// //         </div>
// //         <div className="cartitems-promocode">
// //             <p>If you have a promo code, Enter it here</p>
// //             <div className="cartitems-promobox">
// //                 <input type="text" placeholder="promo code" />
// //                 <button>Submit</button>
// //             </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CartItems;


// import React, { useContext } from "react";
// import { ShopContext } from "../../Context/ShopContext";
// import "./CartItems.css";
// import remove_icon from "../Assets/cart_cross_icon.png";
// import { useNavigate } from 'react-router-dom';

// const CartItems = () => {
//   const { getTotalCartAmount, all_product, cartItems, removeFromCart, url } = useContext(ShopContext);

//   const navigate = useNavigate()

//   return (
//     <div className="cartitems">
//       <div className="cartitems-format-main">
//         <p>Products</p>
//         <p>Title</p>
//         <p>Price</p>
//         <p>Quantity</p>
//         <p>Total</p>
//         <p>Remove</p>
//       </div>

//       <hr />
//       {all_product.map((item,index) => {
//         if (cartItems[item._id] > 0) {
//           return (
//             <div >
//               <div className="cartitems-format cartitems-format-main">
//                 <img className="carticon-product-icon" src={url+"/images/"+item.image} alt="" />
//                 <p>{item.name}</p>
//                 <p>₹{item.price}</p>
//                 <button className="cartitems-quantity">{cartItems[item._id]}</button>
//                 <p>₹{item.price * cartItems[item._id]}</p>
//                 <img
//                 className="cartitems-remove-icon"
//                   src={remove_icon}
//                   onClick={() => removeFromCart(item._id)}
//                   alt="Remove"
//                 />
//               </div>
//               <hr />
//             </div>
//           );
//         }
//         return null; 
//       })}
//         <div className="cartitems-down">
//         <div className="cartitems-total">
//             <h1>Cart Totals</h1>
//             <div>
//                 <div className="cartitems-total-item">
//                     <p>Subtotal</p>
//                     <p>₹{getTotalCartAmount()}</p>
//                 </div>
//                 <hr />
//                 <div className="cartitems-total-item">
//                     <p>Shipping Fee</p>
//                     <p>Free</p>
//                 </div>
//                 <hr />
//                 <div className="cartitems-total-item">
//                     <h3>Total</h3>
//                     <h3>₹{getTotalCartAmount()}</h3>
//                 </div>
//             </div>
//             <button onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
//         </div>

//         <div className="cartitems-promocode">
//             <p>If you have a promo code, Enter it here</p>

//             <div className="cartitems-promobox">
//                 <input type="text" placeholder="promo code" />
//                 <button>Submit</button>
//             </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartItems;



import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import "./CartItems.css";
import remove_icon from "../Assets/cart_cross_icon.png";
import { useNavigate } from 'react-router-dom';

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart, url } = useContext(ShopContext);
  const navigate = useNavigate();

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>

      <hr />

      {all_product.map((item) => {
        if (cartItems[item._id] > 0) {
          return (
            <div key={item._id}>
              <div className="cartitems-format cartitems-format-main">
                <img className="carticon-product-icon" src={url + "/images/" + item.image} alt={item.name} />
                <p>{item.name}</p>
                <p>₹{item.price}</p>
                <button className="cartitems-quantity">{cartItems[item._id]}</button>
                <p>₹{item.price * cartItems[item._id]}</p>
                <img
                  className="cartitems-remove-icon"
                  src={remove_icon}
                  onClick={() => removeFromCart(item._id)}
                  alt="Remove"
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}

      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>₹{getTotalCartAmount()}</h3>
            </div>
          </div>
          <button onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>

        <div className="cartitems-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;

