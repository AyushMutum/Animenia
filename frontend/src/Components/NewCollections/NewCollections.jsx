import React, { useContext, useEffect, useState } from "react";
import "./NewCollections.css";
// import new_collection from "../Assets/new_collections";
import Item from "../Item/Item";
import { ShopContext } from "../../Context/ShopContext";

const NewCollections = () => {

  const [new_collection,setNew_collection] = useState([])

  const { all_product } = useContext(ShopContext);
  // useEffect(() => {
  //   fetch('http://localhost:4000/newcollections')
  //   .then((response) => response.json())
  //   .then((data)=> setNew_collection(data))
  // }, [])

  return (
    <div className="new-collections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {all_product.map((item, index) => {
          return (
            <Item
            key={index}
            id={item._id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewCollections;
