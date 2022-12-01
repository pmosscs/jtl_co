import React from "react";
import "./Header.css"
import toplogo from "./toplogo.png"

function Header () {
    return (
        <header>
            {/* remove blue around logo, find how to hide it then animate it in when scrolling */}
            <div className="header-image">
                <img src={toplogo} alt="" />
            </div>
            <nav>
                <ul>
                    <li><button>home</button></li>
                    <li><button>gallery</button></li>
                    <li><button>about us</button></li>
                    <li><button>contact us</button></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;