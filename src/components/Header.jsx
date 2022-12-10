import React from "react";
import toplogo from "../assets/toplogo.png";
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="header-image">
        <img src={toplogo} alt="" />
      </div>
      <nav>
        <ul>
          <li>
            <button>home</button>
          </li>
          <li>
            <button>gallery</button>
          </li>
          <li>
            <button>about us</button>
          </li>
          <li>
            <button>contact us</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
