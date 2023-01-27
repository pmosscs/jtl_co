import React from "react";
import "./ReviewBox.css";

function ReviewBox() {
  return (
    <div className="rb-wrapper">
      <div className="rb-box">
        <div className="box-1">
          <div className="in-box-1">
            <p className="review-p">
              "He was awesome. We love our new deck. He did it quickly and made
              sure it was quality work. We will recommend him to our friends."
            </p>
            <p className="quote-name">-Melody L.</p>
          </div>
        </div>
        <div className="box-2">
          <div className="in-box-2">
            <p className="review-p">
              "Joe was amazing to work with. He exceeded my expectations! Joe
              made sure everything was perfect and communicated any changes
              making sure we got exactly what we envisioned. We are loving our
              new deck, and will definitely use Joe for our next home project!"
            </p>
            <p className="quote-name">-Neena R.</p>
          </div>
        </div>
        <div className="box-3">
          <div className="in-box-3">
            <p className="review-p">
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus velit veritatis optio nulla libero quos illo
              impedit, praesentium vitae harum quo accusantium natus"
            </p>
            <p className="quote-name">-Poopy Face</p>
          </div>
        </div>
      </div>
      <button className="review-btn">See More Reviews</button>
    </div>
  );
}

export default ReviewBox;
