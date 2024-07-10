import "./App.css";
import Navbar from "./Components/Navbar/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";
import men_banner from "./Components/Assets/banner_mens.png";
import women_banner from "./Components/Assets/banner_women.png";
// import Profile from "./Components/Profile/Profile";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import { useState } from "react";
import Verify from "./Pages/Verify/Verify";
import MyOrders from "./Pages/Myorders/MyOrders";
import { ToastContainer } from "react-toastify";

function App() {

  const [showLogin, setShowLogin] = useState(false)

  return (
    <div>
        <ToastContainer />
      {showLogin? <LoginSignup setShowLogin={setShowLogin} />: <></>}
      <BrowserRouter>
        <Navbar setShowLogin={setShowLogin} />

        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/anime-products"
            element={
              <ShopCategory  banner={men_banner} category="All" />
            }
          />
          <Route
            path="/anime-shirts"
            element={
              <ShopCategory banner={women_banner} category="anime-shirts" />
            }
          />
         <Route path="product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
         
         
          <Route path="/product/:productId" element={<Product />} />

          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/myorders" element={<MyOrders />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
