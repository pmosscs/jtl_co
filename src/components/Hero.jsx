import React from "react";
import homeImage from "../assets/homeImage.png";
import "./Hero.css";

function Hero() {
  return (
    <div
      className="home-screen"
      style={{
        background: `url(${homeImage})`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
      }}
    ></div>
  );
}

export default Hero;
