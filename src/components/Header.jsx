import React, { useState, useEffect } from "react";
import toplogo from "../assets/toplogo.png";
import "./Header.css";

function Header() {
  const [big, setBig] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        setBig(window.pageYOffset > 100);
      });
    }
  }, []);
  return (
    <header className={`${big ? "big" : ""}`}>
      <div className={`${!big ? "hide-logo" : "show-logo"}`}>
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
