import React from "react";

const Header = () => {
    return(
        <header>
            <nav className="nav">
                <img src="logo192.png" alt = "React Logo" className="img__logo"/>
                <ul className= "nav__items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;

