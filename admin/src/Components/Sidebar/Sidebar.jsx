import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import add_product from "../../assets/Product_Cart.svg";
import list_product from "../../assets/Product_list_icon.svg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <NavLink to="/add" style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <img src={add_product} alt="" />
          <p>Add Product</p>
        </div>
      </NavLink>

      <NavLink to="/list" style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <img src={list_product} alt="" />
          <p> Product List</p>
        </div>
      </NavLink>

      <NavLink to="/orders" style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <img src={list_product} alt="" />
          <p> Orders</p>
        </div>
      </NavLink>
    </div>
  );
};

export default Sidebar;
