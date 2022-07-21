import React from "react";
import { Link } from "react-router-dom";
import "../../styles/styles.scss";
import "./Footer.scss";
import { LogoIcon, Instagram, Facebook } from './../../assets/exportMedia';


function Footer() {

    return (
        <>
            <footer class="footer">
                <div class="footer-info-1">
                    <div class="">
                        <Link to="/" class="logo-icon"><LogoIcon /></Link>

                    </div>
                    <div class="">
                        <p>Souldance<br /> © 2021 All rights reserved.</p>
                    </div>
                </div>
                <div class="footer-info-2">
                    <div class="footer-info-2-div">
                        <h3>Contactos</h3>
                        <span class="span-500">T: </span
                        ><span class="span-300">+351 918 526 395</span>
                        <div>
                            <span class="span-500">Email: </span
                            ><span class="span-300">info@souldance.pt</span>
                        </div>
                    </div>
                    <div class="footer-info-2-div">
                        <h3>Morada</h3>
                        <p>Espaço "Casa Animada",<br /> Av. 25 de Abril 17, 2745-832 Queluz</p>
                    </div>
                    <div class="footer-info-2-div">
                        <h3 id="footer-social-h3">Social</h3>
                        <div class="footer-bottom-social">
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