import React from "react";
import { Link } from "react-router-dom";
import "../../styles/styles.scss";
import "./Footer.scss";
import { LogoIcon, Instagram, Facebook } from './../../assets/exportMedia';


function Footer() {

    return (
        <>
            <footer className="footer">
                <div className="footer-info-1">
                    <div className="">
                        <Link to="/" className="logo-icon"><LogoIcon /></Link>

                    </div>
                    <div className="">
                        <p>Souldance<br /> © 2021 All rights reserved.</p>
                    </div>
                </div>
                <div className="footer-info-2">
                    <div className="footer-info-2-div">
                        <h3>Contactos</h3>
                        <span className="span-500">T: </span
                        ><span className="span-300">+351 918 526 395</span>
                        <div>
                            <span className="span-500">Email: </span
                            ><span className="span-300">info@souldance.pt</span>
                        </div>
                    </div>
                    <div className="footer-info-2-div">
                        <h3>Morada</h3>
                        <p>Espaço "Casa Animada",<br /> Av. 25 de Abril 17, 2745-832 Queluz</p>
                    </div>
                    <div className="footer-info-2-div">
                        <h3 id="footer-social-h3">Social</h3>
                        <div className="footer-bottom-social">
                            <Link to=""><div className="icon"><Instagram /></div></Link>
                            <Link to=""><div className="icon"><Facebook /></div></Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;