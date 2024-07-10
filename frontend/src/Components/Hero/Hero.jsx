import React from "react";
import "./Hero.css";
import hero_img from '../Assets/Itachi_figurine-removebg-preview.png'
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdWavingHand } from "react-icons/md";
import { Link,  } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">

      <div className="hero-left">
      <h2>  NEW ARRIVALS ONLY</h2>
        <div className="hero-hand-icon">
          <p>new</p>
          <MdWavingHand className="hand-img" color="orange" size={45}/>
        </div>
        <p>collections</p>
        <p>for every oktaku</p>
   

      <div className="hero-latest-btn">
        <Link to="/anime-products" style={{ textDecoration: "none" }} >
        <div className="latest-btn">
          Latest Collection
          <FaLongArrowAltRight  size={30} />
        </div>
        </Link>
        
      </div>

      </div>
      <div className="hero-right">
        <img src={hero_img} alt="" />
      </div>

    </div>
  );
};

export default Hero;
