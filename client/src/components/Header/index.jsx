import React from "react";
import backgroundImg from "../../../public/assets/backgroundImg.jpg"

function Header(props) {
    return (
        <header className="header">
            <h1>Yana's Portfolio</h1>
            <img src = {backgroundImg} alt="background image"></img>
            {props.children}
        </header>
    )
}

export default Header