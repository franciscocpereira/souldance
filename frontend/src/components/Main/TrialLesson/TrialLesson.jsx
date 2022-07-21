import React from "react";
import { Quotes } from "../../../assets/exportMedia";
import "../../../styles/styles.scss";
import "./TrialLesson.scss";


function TrialLesson() {
    // const ROLES = {
    //     user: "user",
    //     admin: "admin",
    // };
    return (
        <div className="">
            <section className="aula-experimental">
                <div className="container-grid">
                    <div className="aula-experimental-container">
                        <h2 className="section-h2">Marque uma aula experimental</h2>
                        <form>
                            <div className="aula-experimental-form grid-1">
                                <div className="aula-experimental-form-row-1">
                                    <div className="">
                                        <h6>Primeiro nome*</h6>
                                        <input type="text" placeholder="Primeiro nome" required />
                                    </div>
                                    <div className="">
                                        <h6>Último nome*</h6>
                                        <input type="text" placeholder="Último nome" required />
                                    </div>
                                </div>
                                <div className="aula-experimental-form-row-2">
                                    <div className="aula-experimental-form-row-2-item-1">
                                        <h6>Modalidade*</h6>
                                        <select className="round" required>
                                            <option>  </option> {/* v-for="modalidade in modalidades" :key="modalidade.id"> {{ modalidade.name }} */}
                                        </select>
                                    </div>
                                    <div className="aula-experimental-form-row-2-item-2">
                                        <h6>Telemóvel*</h6>
                                        <div className="">
                                            <input className="" title="9-digit cellphone number" type="text" pattern="\d*" maxLength="9" placeholder="918526395" data-valid-example="913781495" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="aula-experimental-form-row-3">
                                    <div className="aula-experimental-form-row-3-item-1">
                                        <h6>Email*</h6>
                                        <div className="">
                                            <input type="text" placeholder="example@address.com" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="aula-experimental-form-row-5">
                                    <p>*A marcação estará sujeita a revisão por parte do instructor(a), será notificado caso seja possível a disponibilidade indicada.</p>
                                    <div className="aula-experimental-form-row-5-item-2">
                                        <label htmlFor="checkboxInputOverride">Aceito a <a className="link-underline" href="www.google.com" target="_blank">Política de processamento de dados</a>.</label>

                                        <input type="checkbox" id="checkboxInputOverride" name="checkboxInputOverride" required />
                                    </div>
                                </div>
                                <div className="aula-experimental-form-row-6">
                                    <div className="section-link">
                                        <a className="button-purple" href="">Enviar</a>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div >
            </section >

            <section className="aula-experimental-desktop">
                <div className="container-grid grid-6">
                    <div className="aula-experimental-container">
                        <h2 className="section-h2">Marque uma aula experimental</h2>
                        <form>
                            <div className="aula-experimental-form">
                                <div className="aula-experimental-form-row-1">
                                    <div className="aula-experimental-item-1">
                                        <h6>Primeiro nome*</h6>
                                        <div className="">
                                            <input type="text" placeholder="Primeiro nome" />
                                        </div>
                                    </div>
                                    <div className="aula-experimental-item-2">
                                        <h6>Último nome*</h6>
                                        <div className="">
                                            <input type="text" placeholder="Último nome" />
                                        </div>
                                    </div>
                                    <div className="aula-experimental-item-3">
                                        <h6>Telemóvel*</h6>
                                        <div className="">
                                            <input className="" title="9-digit cellphone number" type="text" pattern="\d*" maxLength="9" placeholder="918526395" data-valid-example="913781495" />
                                        </div>
                                    </div>
                                </div>
                                <div className="aula-experimental-form-row-2">
                                    <div className="aula-experimental-item-4">
                                        <h6>Email*</h6>
                                        <div className="">
                                            <input type="text" placeholder="example@address.com" />
                                        </div>
                                    </div>
                                    <div className="aula-experimental-item-5">
                                        <div className="">
                                            <h6>Modalidade*</h6>
                                            <select className="round">
                                                <option> </option> {/*v-for="modalidade in modalidades" :key="modalidade.id"> {{ modalidade.name }}  */}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="aula-experimental-form-row-5">
                                    <div>
                                        <p>*A marcação estará sujeita a revisão por parte do instructor(a), será notificado caso seja possível a disponibilidade indicada.</p>
                                        <div className="aula-experimental-form-row-5-item-2">

                                            <label htmlFor="checkboxInputOverride">Aceito a <a className="link-underline" href="www.google.com" target="_blank">Política de processamento de dados</a>.</label>
                                            <input type="checkbox" id="checkboxInputOverride" name="checkboxInputOverride" />



                                        </div>
                                    </div>
                                </div>
                                <div className="aula-experimental-form-row-6">
                                    <div className="section-link">
                                        <a className="button-purple" href="">Enviar</a>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="comment-section">
                        <div id="branding-quote-1">
                            <Quotes />
                        </div>

                        <p className="comment-p">
                            Et ultrices neque ornare aenean euismod elementum. Amet tellus cras adipiscing enim eu. Quam pellentesque nec nam aliquam sem et tortor.
                        </p>
                        <p className="comment-owner">
                            Mariana Santos
                        </p>

                        <div id="branding-quote-2">
                            <Quotes />
                        </div >
                    </div>
                </div >
            </section >

        </div >
    );
}

export default TrialLesson;