import React from "react";
import backgroundImg from "../../assets/backgroundImg.jpeg"

function Header(props) {
    return (
        <header>
            <h1>Yana's Portfolio</h1>
            <img src = {backgroundImg} alt="background image"></img>
            {props.children}
        </header>
    )
}

export default Header