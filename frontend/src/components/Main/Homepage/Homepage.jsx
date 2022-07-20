import React from 'react';
import './Homepage.scss';
import headerVideo from '../../../assets/media/videos/videoheader.mp4';


function Homepage() {
    return (
        <>
            <main>
                <section className="banner" >
                    <video loop muted autoPlay controls='' poster="" id="bgvid" preload="auto" height>
                        <source src={headerVideo} type="video/x-m4v" />
                    </video>

                    <div className="container">

                        <h1 id="hero-headline">Mollis aliquam <br />ut porttitor leo</h1>
                        <p id="hero-text-desktop">At tellus at urna condimentum mattis.<br /> Facilisis magna etiam tempor orci eu lobortis<br />elementum nibh tellus. </p>
                        <p id="hero-text-mobile">At tellus at urna condimentum mattis. Facilisis magna etiam tempor orci eu lobortis elementum nibh tellus. </p>

                        <a href="/register.html" id="button-registo" className="button">Registar</a>
                    </div>

                    <div className="container bottom-info">
                        <div className="bottom-inner">
                            <div className="bottom-inner">
                                <hr id="dash1" />
                                <p id="hero-signature">magna aliquam erat volutpat</p>
                            </div>

                            <div className="bottom-social">
                                <img className="icon" src="/assets/media/icons/insta.svg" alt="" />
                                <img className="icon" src="/assets/media/icons/facebook.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Homepage;