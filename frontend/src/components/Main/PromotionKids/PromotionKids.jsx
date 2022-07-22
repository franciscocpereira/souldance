import React from "react";
import "../../../styles/styles.scss";
import "./PromotionKids.scss";


function PromotionKids() {
    // const ROLES = {
    //     user: "user",
    //     admin: "admin",
    // };
    return (
        <>
            <section className="bottom-promotion">
                <div className="bottom-promotion-desktop">
                    <div className="bottom-promotion-desktop-container">
                        <div className="bottom-promotion-desktop-copy">
                            <h2 className="section-h2">souldance <span>kids</span></h2>
                            <p>
                                Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                            </p>
                            <div className="section-link">
                                <a className="button" href="https://google.com">Aderir</a>
                            </div>
                        </div>
                        {/* <!--<div className="half-screen-image">
                            <img src="/assets/media/souldance_kids_promo_bg_desktop.png" />
                        </div>--> */}
                    </div>
                </div>
                <div className="bottom-promotion-mobile">
                    <div className="container">
                        <h2 className="section-h2">souldance <span>kids</span></h2>
                        <p className="section-p">
                            At tellus at urna condimentum mattis. Facilisis magna etiam tempor orci eu lobortis.
                        </p>
                        <div className="section-link">
                            <a className="button-purple" href="https://google.com">Aderir</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default PromotionKids;