import React, { Component } from 'react';
import './Home.css';
import arrow from "../assets/Line 2.svg"
import logov from "../assets/logo_vertical.png"
import guillermo from "../assets/Guilermo_alta_color_2.jpg"
import img from "../assets/Horizonte_030_cover.png"
import Footer from "./footer/Footer";
import NavBar from "./nav/NavBar";
import video from "../assets/Banner baja.mp4";

class Home extends Component {

    render() {
        return (
            <section >
                <NavBar/>
                <div className="slide-initial">
                    <div>
                        <div className="box-home">
                            <h2 className="titulos hm">Construimos legados que trascienden</h2>

                        </div>
                    </div>
                    <video autoPlay loop id="myVideo">
                        <source src={video} type="video/mp4"/>
                    </video>
                </div>
                <div className="manifiesto">
                    <img src="https://images.pexels.com/photos/48148/document-agreement-documents-sign-48148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""/>
                    <p>Ayudamos a familias y empresarios a que su patrimonio trascienda y perdure por
                        generaciones, con armonía familiar.</p>
                </div>
                <div className="products">
                    <div className="card-azul flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <h3>Quienes somos</h3>
                            </div>
                            <div className="flip-card-back">
                                <p>La primera firma de Asesoría Integral y Family Office con un
                                    enfoque holístico y multidisciplinar.</p>
                            </div>
                        </div>

                    </div>
                    <div className="card-azul flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <h3>Qué hacemos</h3>
                            </div>
                            <div className="flip-card-back">
                                <p>Crear un legado va mucho más allá de organizar testamentos
                                    y herencias.</p>
                            </div>
                        </div>

                    </div>
                    <div className="card-azul flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <h3>Qué pensamos</h3>
                            </div>
                            <div className="flip-card-back">
                                <p>Hacemos planeación hereditaria con un método propietario,
                                    buscando construir legados con verdadero impacto y trascendencia.</p>
                            </div>
                        </div>

                    </div>
                    <div className="card-azul flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <h3>Contacto</h3>
                            </div>
                            <div className="flip-card-back">
                                <p>Acérquese a nosotros, y construyamos juntos su legado.</p>
                            </div>
                        </div>

                    </div>
                </div>
                <Footer/>
            </section>
        );
    }
}

export default Home;