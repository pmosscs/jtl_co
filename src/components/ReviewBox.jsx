import React from "react";
import "./ReviewBox.css";

function ReviewBox() {
  return (
    <div className="rb-wrapper">
      <div className="rb-box">
        <div className="box-1"></div>
        <div className="box-2"></div>
        <div className="box-3"></div>
      </div>
      <button className="review-btn">See More Reviews</button>
    </div>
  );
}

export default ReviewBox;
