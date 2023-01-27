import React from "react";
import homeImage from "../assets/homeImage.png";
import "./Hero.css";
import opac80 from "../assets/opac80.png";

function Hero() {
  return (
    <div
      className="home-screen"
      style={{
        background: `url(${homeImage})`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
      }}
    >
      <div className="img-btns">
        <div className="img-div">
          <img src={opac80} alt="" />
        </div>
        <button className="hero-btn">Get a Quote</button>
        <button className="hero-btn">Contact Us</button>
      </div>
      <div className="work-info-div">
        <p className="work-info">Decks, Roofs, Pergolas, Remodeling, & More</p>
      </div>
    </div>
  );
}

export default Hero;
