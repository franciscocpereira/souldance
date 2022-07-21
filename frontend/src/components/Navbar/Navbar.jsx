import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { LogoHorizontal, LogoMobile } from "../../assets/exportMedia";
import "../../styles/styles.scss";
import "./Navbar.scss";


function Navbar() {

    const [sideNavToggle, setSideNavToggle] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);

    const toggleSideNav = () => {
        setSideNavToggle(!sideNavToggle);
    }

    const scrollHandler = () => {
        if (window.pageYOffset > 50) {
            setIsScrolling(true)
        } else {
            setIsScrolling(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", scrollHandler);
    }, [])

    return (
        <div className="navbar">
            <header className={isScrolling ? 'is-scrolling' : null}>
                <div className="container">
                    <Link to="/" id="logo-mobile"><LogoMobile /></Link>
                    <Link to="/" id="logo-horizontal"><LogoHorizontal /></Link>
                    <nav className="is-active">
                        <a href="/school.html">escola</a>
                        <a href="/aboutus.html">sobre nós</a>
                        <a href="/pricing_desktop.html">Preçário</a>
                        <a href="/services.html">Serviços</a>
                        <a href="/contacts.html">Contactos</a>
                        <a className="button-negative" href="">Registar</a>
                        <a id="button-login-desktop">Login</a>   {/* onClick={toggleModal} */}
                    </nav>
                    <button className={sideNavToggle ? "hamburger is-active" : "hamburger sideNavIsActive "} onClick={toggleSideNav}>
                        <div className="bar"></div>
                    </button>
                </div>
            </header>
            <nav className={sideNavToggle ? "mobile-nav is-active" : "mobile-nav sideNavIsActive "}>
                <div className="top">
                    <a href="/school.html">Escola</a>
                    <a href="/aboutus.html">Sobre nós</a>
                    <a href="/pricing.html">Preçário</a>
                    <a href="/services.html">Serviços</a>
                    <a href="/contacts_mobile.html">Contactos</a>
                </div>
                <div className="bottom">
                    <a href="/login.html">login</a>
                    <a href="/register.html" className="button-negative">registo</a>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;