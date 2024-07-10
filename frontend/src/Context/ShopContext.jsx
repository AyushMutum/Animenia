
// import axios from "axios";
// import React, { createContext, useState, useEffect } from "react";

// export const ShopContext = createContext(null);


// const ShopContextProvider = (props) => {
//   // const [animeList, setAnimeList] = useState([]);
//   const [all_product, setAll_Product] = useState([]);
//   const [cartItems, setCartItems] = useState({});
//   const url = "http://localhost:8000";
//   const [token, setToken] = useState("");

//   const addToCart = async (itemId) => {
//     if (!cartItems[itemId]) {
//       setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
//     } else {
//       setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
//     }
//     if(token){
//       await axios.post(url+"/api/cart/add", {itemId}, {headers: {token}})
//     }
//   };



//   const removeFromCart = async (itemId) => {
//     setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));

//     if(token){
//       await axios.post(url+"/api/cart/remove", {itemId}, {headers:{}})
//     }
//   };

  
//   const getTotalCartAmount = () => {
//     let totalAmount = 0;

//     for (const itemId in cartItems) {
//       if (cartItems[itemId] > 0) {
//         const item = all_product.find((product) => product._id === itemId);
//         if (item) {
//           totalAmount += item.price * cartItems[itemId];
//         }
//       }
//     }

//     return totalAmount;
//   };
  


//   const getTotalCartItems = () => {
//     let totalItem = 0;
//     for (const item in cartItems) {
//       if (cartItems[item] > 0) {
//         totalItem += cartItems[item];
//       }
//     }
//     return totalItem;
//   };

//   const fetchProductList = async () => {
//     const response = await axios.get(url + "/api/anime/list");
//     setAll_Product(response.data.data);
//   };

//   const loadCartData = async(token) => {
//     const response = await axios.post(url+"/api/cart/get",{} ,{headers: {token}})
//     setCartItems(response.data.cartData);
//   }

//   // Retrieve token from local storage when the component mounts
//   useEffect(() => {
//     async function loadData() {
//       await fetchProductList();
     
//       if ( localStorage.getItem("token")) {
//         setToken( localStorage.getItem("token"));
//         await loadCartData(localStorage.getItem("token"))
//       }
//     }

//     loadData();
//   }, []);

//   const contextValue = {
//     all_product,
//     cartItems,
//     setCartItems,
//     addToCart,
//     removeFromCart,
//     getTotalCartAmount,
//     getTotalCartItems,
//     url,
//     token,
//     setToken,
  
//   };

//   return (
//     <ShopContext.Provider value={contextValue}>
//       {props.children}
//     </ShopContext.Provider>
//   );
// };

// export default ShopContextProvider;


import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [all_product, setAll_Product] = useState([]);
  const [cartItems, setCartItems] = useState({});
  // const url = "http://localhost:8000";
  const url = "https://animenia-backend.onrender.com";
  const [token, setToken] = useState("");

  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if (token) {
      await axios.post(`${url}/api/cart/add`, { itemId }, { headers: { token } });
    }
  };

  const removeFromCart = async (itemId) => {
    setCartItems((prev) => {
      const updatedCartItems = { ...prev };
      if (updatedCartItems[itemId] > 1) {
        updatedCartItems[itemId] -= 1;
      } else {
        delete updatedCartItems[itemId];
      }
      return updatedCartItems;
    });

    if (token) {
      await axios.post(`${url}/api/cart/remove`, { itemId }, { headers: { token } });
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        const item = all_product.find((product) => product._id === itemId);
        if (item) {
          totalAmount += item.price * cartItems[itemId];
        }
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  useEffect(() => {
    console.log("all_product:", all_product);
    console.log("cartItems:", cartItems);
  }, [all_product, cartItems]);
  

  const fetchProductList = async () => {
    const response = await axios.get(`${url}/api/anime/list`);
    setAll_Product(response.data.data);
  };

  const loadCartData = async (token) => {
    const response = await axios.post(`${url}/api/cart/get`, {}, { headers: { token } });
    setCartItems(response.data.cartData);
  };

  useEffect(() => {
    async function loadData() {
      await fetchProductList();
      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        setToken(storedToken);
        await loadCartData(storedToken);
      }
    }
    loadData();
  }, []);

  const contextValue = {
    all_product,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
    url,
    token,
    setToken,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;

