import React, { Component } from 'react';
import './Home.css';
import arrow from "../assets/Line 2.svg"
import logov from "../assets/logo_vertical.png"
import guillermo from "../assets/Guilermo_alta_color_2.jpg"
import img from "../assets/Horizonte_030_cover.png"
import Footer from "./footer/Footer";
import NavBar from "./nav/NavBar";
import Nav from "./nav/Nav";
import FooterTest from "./footer/FooterTest";

class WhatWeThink extends Component {

    render() {
        return (
            <section >
                <Nav/>
                <div className="slide-test">
                    <div className="back">
                        <div>
                        <h2 className="titulos hm">Construimos legados <br/>que trascienden</h2>
                        <hr/></div>
                    </div>
                </div>
                <div className="manifiesto">
                    <img src="https://images.pexels.com/photos/48148/document-agreement-documents-sign-48148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""/>
                    <p>Ayudamos a familias y empresarios a que su patrimonio trascienda y perdure por
                        generaciones, con armonía familiar.</p>
                </div>
                <div className="products">
                    <div className="card-azul-test flip-card-test">
                        <div className="flip-card-inner-test">
                            <div className="flip-card-front-test">
                                <div>
                                <h3>Quienes somos</h3>
                                <hr className="linea"/>
                            </div>
                            </div>
                            <div className="flip-card-back-test">
                                <p>La primera firma de Asesoría Integral y Family Office con un
                                    enfoque holístico y multidisciplinar.</p>
                            </div>
                        </div>

                    </div>
                    <div className="card-azul-test flip-card-test">
                        <div className="flip-card-inner-test">
                            <div className="flip-card-front-test">
                                <div>
                                    <h3>Qué hacemos</h3>
                                    <hr className="linea"/>
                                </div>
                            </div>
                            <div className="flip-card-back-test">
                                <p>Crear un legado va mucho más allá de organizar testamentos
                                    y herencias.</p>
                            </div>
                        </div>

                    </div>
                    <div className="card-azul-test flip-card-test">
                        <div className="flip-card-inner-test">
                            <div className="flip-card-front-test">
                                <div>
                                    <h3>Qué pensamos</h3>
                                    <hr className="linea"/>
                                </div>
                            </div>
                            <div className="flip-card-back-test">
                                <p>Hacemos planeación hereditaria con un método propietario,
                                    buscando construir legados con verdadero impacto y trascendencia.</p>
                            </div>
                        </div>

                    </div>
                    <div className="card-azul-test flip-card-test">
                        <div className="flip-card-inner-test">
                            <div className="flip-card-front-test">
                                <div>
                                    <h3>Contacto</h3>
                                    <hr className="linea"/>
                                </div>
                            </div>
                            <div className="flip-card-back-test">
                                <p>Acérquese a nosotros, y construyamos juntos su legado.</p>  </div>
                        </div>

                    </div>



                </div>
                <FooterTest/>
            </section>
        );
    }
}

export default WhatWeThink;