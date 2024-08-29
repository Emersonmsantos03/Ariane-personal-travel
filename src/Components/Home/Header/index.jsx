import React, { useState } from "react";
import "./header.css";
import logo from "../../../../public/images/Logo-ariane.svg";

let Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="header">
            <div className="header-logo">
                <a href="arianepersonaltravel.com"><img src={logo} alt="Logo Ariane" /></a>
            </div>
            <div className={`header-nav ${menuOpen ? "open" : ""}`}>
                <a href="#about" className="header-nav-a">Sobre mim</a>
                <a href="#offers" className="header-nav-a">Serviços</a>
                <a href="#partners" className="header-nav-a">Parcerias</a>
                <button className="header-nav-button"><a href="#contacts">Contatos</a></button>
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </div>
        </div>
    );
};

export default Header;
