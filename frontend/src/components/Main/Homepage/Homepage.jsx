import React from 'react';
import './Homepage.scss';
import headerVideo from '../../../assets/media/videos/videoheader.m4v';
import { Facebook, Instagram } from '../../../assets/exportMedia';
import { Link } from 'react-router-dom';
import { ArrowRight } from '../../../assets/exportMedia';
import TrialLesson from './../TrialLesson/TrialLesson';
import workshopsThumb from '../../../assets/media/images/workshops_thumb.png';
import PromotionKids from './../PromotionKids/PromotionKids';


function Homepage() {
    return (
        <>
            <main>
                <section className="banner" >
                    <video loop muted autoPlay controls='' poster="" id="bgvid" preload="auto">
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
                                <Link to=""><div className="icon"><Instagram /></div></Link>
                                <Link to=""><div className="icon"><Facebook /></div></Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="modalidades-mobile">
                    <div className="container-section">
                        <div className="modalidades-inner">
                            <h2 className="section-h2 text-center">Modalidades</h2>
                            <p className="section-p text-center">At tellus at urna condimentum mattis.<br />Facilisis magna etiam tempor orci eu lobortis ementum nibh tellus.</p>
                        </div>
                    </div>
                    {/* <div className="container-touch-large">
                        <div id="touch-container">
                            <div id="rendered-items-flexbox" :class="transitionClass" :style="{transform: transformStyle}">
                                <div v-for="item in renderedItems" :id="item.key" :key="item.key" className="rendered-item">
                                    <div className="item-content" :style="'background-image: url(' + item.bgImageUrl + ');'">
                                        <p className="dias-modalidade">{{ item.scheduleDaysAbreviation }}</p>
                                        <p className="nome-modalidade">{{ item.name }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    <div className="section-link text-center">
                        <a className="section-mobile-a" href="/modalidades">
                            ver todas
                            <div className="icon-small">
                                <svg width="13" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M6.16534 0.19355L6.21109 0.146447C6.40936 -0.0337954 6.72133 -0.0476601 6.9371 0.104852L6.98891 0.146447L10.8389 3.64645L10.8617 3.66843L10.892 3.70235L10.9314 3.75797L10.9608 3.81433L10.9803 3.867L10.9962 3.94095L11 4L10.9985 4.03762L10.9889 4.10036L10.9726 4.15607L10.9485 4.21161L10.9197 4.26035L10.8792 4.31272L10.8389 4.35355L6.98891 7.85355C6.77412 8.04882 6.42588 8.04882 6.21109 7.85355C6.01283 7.67331 5.99757 7.3897 6.16534 7.19355L6.21109 7.14645L9.1212 4.5H0.55C0.246243 4.5 0 4.27614 0 4C0 3.72386 0.246243 3.5 0.55 3.5H9.1223L6.21109 0.853553C6.01283 0.673311 5.99757 0.389696 6.16534 0.19355L6.21109 0.146447L6.16534 0.19355Z" fill="black" />
                                </svg>
                            </div>
                        </a>
                    </div>

                </section>

                <section className="modalidades">
                    <div className="container-grid grid-2">
                        <div className="">
                            <div className="">
                                <h2 className="section-h2">Modalidades</h2>
                                <p className="section-p">Diam vel quam elementum pulvinar etiam non quam lacus.
                                    Feugiat in fermentum posuere urna. Et ultrices neque ornare aenean euismod elementum. Amet tellus cras adipiscing enim eu. Quam pellentesque nec nam aliquam sem et tortor.</p>
                            </div>

                            <div className="section-link text-center">
                                <a className="section-mobile-a" href="/modalidades">
                                    ver todas
                                    <div className="icon-small">
                                        <svg width="13" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M6.16534 0.19355L6.21109 0.146447C6.40936 -0.0337954 6.72133 -0.0476601 6.9371 0.104852L6.98891 0.146447L10.8389 3.64645L10.8617 3.66843L10.892 3.70235L10.9314 3.75797L10.9608 3.81433L10.9803 3.867L10.9962 3.94095L11 4L10.9985 4.03762L10.9889 4.10036L10.9726 4.15607L10.9485 4.21161L10.9197 4.26035L10.8792 4.31272L10.8389 4.35355L6.98891 7.85355C6.77412 8.04882 6.42588 8.04882 6.21109 7.85355C6.01283 7.67331 5.99757 7.3897 6.16534 7.19355L6.21109 7.14645L9.1212 4.5H0.55C0.246243 4.5 0 4.27614 0 4C0 3.72386 0.246243 3.5 0.55 3.5H9.1223L6.21109 0.853553C6.01283 0.673311 5.99757 0.389696 6.16534 0.19355L6.21109 0.146447L6.16534 0.19355Z" fill="black" />
                                        </svg>
                                    </div>
                                </a>
                            </div>

                        </div>

                    </div>
                </section>

                <TrialLesson />


                <section className="workshops">
                    <div className="container-section">
                        <div className="workshops-mobile">
                            <h2 className="section-h2">Workshops</h2>
                            <p className="section-p text-center">At tellus at urna condimentum mattis.<br />Facilisis magna etiam tempor orci eu lobortis ementum nibh tellus.</p>
                            <div className="workshops-content-grid-mobile">
                                <div className="workshops-img" style={{ backgroundImage: `url('${workshopsThumb}')` }} >
                                    <div className="workshops-content-overlay">
                                        <div className="top-right">01/03/22</div>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="workshop-title">eventualmente talvez, título grande</h3>
                                    <p className="workshop-description">At tellus at urna condimentum mattis. Facilisis magna etiam tempor orci eu lobortis ementum nibh tellus.</p>
                                </div>
                            </div>
                            <div className="section-link text-center">
                                <a className="section-mobile-a" href="/modalidades">
                                    ver todos
                                    <div className="icon-small">
                                        {/* <svg width="13" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.16534 0.19355L6.21109 0.146447C6.40936 -0.0337954 6.72133 -0.0476601 6.9371 0.104852L6.98891 0.146447L10.8389 3.64645L10.8617 3.66843L10.892 3.70235L10.9314 3.75797L10.9608 3.81433L10.9803 3.867L10.9962 3.94095L11 4L10.9985 4.03762L10.9889 4.10036L10.9726 4.15607L10.9485 4.21161L10.9197 4.26035L10.8792 4.31272L10.8389 4.35355L6.98891 7.85355C6.77412 8.04882 6.42588 8.04882 6.21109 7.85355C6.01283 7.67331 5.99757 7.3897 6.16534 7.19355L6.21109 7.14645L9.1212 4.5H0.55C0.246243 4.5 0 4.27614 0 4C0 3.72386 0.246243 3.5 0.55 3.5H9.1223L6.21109 0.853553C6.01283 0.673311 5.99757 0.389696 6.16534 0.19355L6.21109 0.146447L6.16534 0.19355Z" fill="black" />
                                        </svg> */}
                                        <ArrowRight />
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="workshops-desktop">
                            <div className="workshops-content-grid-desktop">
                                <div className="workshops-info">
                                    <div className="">
                                        <h2 className="section-h2">Workshops</h2>
                                        <p className="section-p">Diam vel quam elementum pulvinar etiam non quam lacus.
                                            Feugiat in fermentum posuere urna. Et ultrices neque ornare aenean euismod elementum.</p>
                                    </div>
                                    <div className="section-link text-center">
                                        <a className="section-mobile-a" href="/modalidades">
                                            ver todos
                                            <div className="icon-small">
                                                {/* <svg style={"margin-top:2px"} width="13" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.16534 0.19355L6.21109 0.146447C6.40936 -0.0337954 6.72133 -0.0476601 6.9371 0.104852L6.98891 0.146447L10.8389 3.64645L10.8617 3.66843L10.892 3.70235L10.9314 3.75797L10.9608 3.81433L10.9803 3.867L10.9962 3.94095L11 4L10.9985 4.03762L10.9889 4.10036L10.9726 4.15607L10.9485 4.21161L10.9197 4.26035L10.8792 4.31272L10.8389 4.35355L6.98891 7.85355C6.77412 8.04882 6.42588 8.04882 6.21109 7.85355C6.01283 7.67331 5.99757 7.3897 6.16534 7.19355L6.21109 7.14645L9.1212 4.5H0.55C0.246243 4.5 0 4.27614 0 4C0 3.72386 0.246243 3.5 0.55 3.5H9.1223L6.21109 0.853553C6.01283 0.673311 5.99757 0.389696 6.16534 0.19355L6.21109 0.146447L6.16534 0.19355Z" fill="black" />
                                                </svg> */}
                                                <ArrowRight />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="workshops-card">
                                    <div className="workshops-img" style={{ backgroundImage: `url('${workshopsThumb}')` }} >
                                        <div className="workshops-content-overlay">
                                            <div className="top-right">15
                                                <span>OUT</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="workshop-info-grid">
                                        <h3 className="article-header">eventualmente talvez, título grande</h3>
                                        <p className="workshop-description">At tellus at urna condimentum mattis. Facilisis magna etiam tempor orci eu lobortis ementum nibh tellus.</p>
                                        <div className="section-link">
                                            <a className="button" href="">Inscrever</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <PromotionKids />

            </main>
        </>
    );
}

export default Homepage;