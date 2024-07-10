// import React, { useContext } from "react";
// import { ShopContext } from "../Context/ShopContext";
// import "./CSS/ShopCategory.css";
// import dropdown_icon from "../Components/Assets/dropdown_icon.png";
// import Item from "../Components/Item/Item";

// const ShopCategory = (props) => {
//   const { all_product } = useContext(ShopContext);

//   return (
//     <div className="shop-category">
//       <img className="shopcategory-banner" src={props.banner} alt="" />

//       <div className="shopcategory-indexSort">
//         <p>
//           <span>Showing 1-12 </span> out of 36 products
//         </p>

//         <div className="shopcategory-sort">
//           Sort by <img src={dropdown_icon} alt="" />
//         </div>
//       </div>
//       <div className="shopcategory-products">
//       {all_product.map((item,index) => {
          
//           if(category==="All" || category===item.category){
//             return  <Item
//             key={index}
//             id={item._id}
//             name={item.name}
//             description={item.description}
//             price={item.price}
//             image={item.image}
//           />
    
//           } else {
//             return null;
//           }
//         })}
//       </div>

//       <div className="shopcategory-loadmore">Explore More</div>
//     </div>
//   );
// };

// export default ShopCategory;

import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import "./CSS/ShopCategory.css";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";
import banner_img from '../Components/Assets/Itachi_figurine-removebg-preview.png'

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const { category, banner } = props;

  return (
    <div className="shop-category">

      <div className="shopcategory-banner">

<div className="banner">
<div className="banner-text">
        
        <h2>Find Your Favorite Anime Products Here!</h2>
      <p>AND GET YOURS FAVOURITE</p>

      </div>
 <img  src={banner_img} alt="" />

</div>
      

      </div>
     

      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12 </span> out of {all_product.length} products
        </p>

        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="Sort Dropdown" />
        </div>
      </div>
      
      <div className="shopcategory-products">
        {all_product.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <Item
                key={item._id} // Assuming _id is unique
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
          return null;
        })}
      </div>

      <div className="shopcategory-loadmore">Explore More</div>
    </div>
  );
};

export default ShopCategory;

