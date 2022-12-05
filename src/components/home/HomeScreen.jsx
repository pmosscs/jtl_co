import React from "react";
import "./HomeScreen.css";
import homeImage from "./homeImage.png"


function HomeScreen () {
    return (
        <div className="home-screen"
        style={{
            background: `url(${homeImage})`,
            backgroundSize: "cover",

        }}>

        </div>
    )
}

export default HomeScreen;