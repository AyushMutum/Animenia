import React, { useContext, useRef, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/Logo.png";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import nav_dropdown from "../Assets/nav_dropdown.png";
import { IoPersonOutline } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";
import { CiLogout } from "react-icons/ci";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("shop");

  const { getTotalCartItems, token, setToken } = useContext(ShopContext);

  const navigate = useNavigate()

  const logout = () => {
   
      localStorage.removeItem("token")
    setToken("");
    navigate("/")

    
  }

  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };

  return (
    <div className="navbar">
      <Link to="/" style={{ textDecoration: "none" }} className="nav-logo">
        <img src={logo} alt="" />
        <p>Animenia</p>
      </Link>

      <img
        className="nav-dropdown"
        onClick={dropdown_toggle}
        src={nav_dropdown}
        alt=""
      />
      <ul ref={menuRef} className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          {" "}
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>{" "}
          {menu === "shop" ? <hr /> : <></>}{" "}
        </li>
        <li
          onClick={() => {
            setMenu("anime products");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/anime-products">
            Anime products{" "}
          </Link>
          {menu === "anime products" ? <hr /> : <></>}{" "}
        </li>
     
      </ul>

      <div className="nav-login-cart">
        <Link style={{ textDecoration: "none" }} to="/cart">
          <MdOutlineAddShoppingCart size={32} color="rgb(132, 84, 183)" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      

      {!token ?  <button onClick={() => setShowLogin(true)}>Sign in</button>
      : <div className="navbar-profile">
          <IoPersonOutline size={30} color="rgb(132, 84, 183)"/>
          <ul className="nav-profile-dropdown">
            <li onClick={()=> navigate('/myorders')}><FiShoppingBag size={30} color="rgb(132, 84, 183)" className="bag icon"/>
              <p>Orders</p>
            </li>

            <hr />
            <li onClick={logout}>
              <CiLogout
                size={30}
                color="rgb(132, 84, 183)"
                className="logout-icon icon"
              />
              Logout
            </li>
          </ul>
        </div>}
        </div>
    </div>
  );
};

export default Navbar;



   {/* <li
          onClick={() => {
            setMenu("anime shirts");
          }}
        >
          {" "}
          <Link style={{ textDecoration: "none" }} to="/anime-shirts">
            Anime shirts{" "}
          </Link>
          {menu === "anime shirts" ? <hr /> : <></>}{" "}
        </li> */}