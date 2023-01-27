import React from "react";
import Carousel from "../components/Carousel";
import Hero from "../components/Hero";
import ReviewBox from "../components/ReviewBox";

function HomeScreen() {
  return (
    <div>
      <Hero />
      <ReviewBox />
      <Carousel />
    </div>
  );
}

export default HomeScreen;
