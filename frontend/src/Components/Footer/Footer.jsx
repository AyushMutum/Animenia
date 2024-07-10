import React from "react";
import "./Footer.css";
import footer_logo from "../Assets/Logo.png";
import instagram_icon from "../Assets/instagram_icon.png";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>Animenia-Manipur</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Address</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className="footer-social-icon">

        <Link to='https://www.instagram.com/animenia_manipur/' >
        <div className="footer-icons-container">
          <img src={instagram_icon} alt="" />
        </div>
        </Link>
        

        <div className="footer-icons-container">
          <FaWhatsapp className="whatsapp" size={33} />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ animenia - All Right Reserved. </p>
      </div>
    </div>
  );
};

export default Footer;
