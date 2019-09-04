import React, { Component } from 'react';
import './Home.css';
import arrow from "../assets/Line 2.svg"
import logov from "../assets/logo_vertical.png"
import guillermo from "../assets/Guilermo_alta_color_2.jpg"
import img from "../assets/Horizonte_030_cover.png"
import Footer from "./footer/Footer";
import NavBar from "./nav/NavBar";

class WhatWeAre extends Component {

    render() {
        return (
            <section >
                <NavBar/>
                <div className="slide-home">
                    <div>
                        <div className="box-dos"></div>
                        <div className="box-white">
                            <h2 className="titulos">¿Quienes somos?</h2>
                            <p className="txt">Nuestra misión es ayudar a familias empresarias para que su patrimonio
                                perdure por generaciones en armonía familiar</p>
                            <img src={arrow} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="intro">
                    <img src={logov} alt="logo-horizontal"/>
                    <h2 className="subtitulos">Más que un Family Office</h2>
                    <p className="parrafo">Nuestra misión es ayudar a familias empresarias para que su patrimonio perdure
                        por generaciones, con armonía familiar.
                        <br/>
                        Proponemos un enfoque integral, que pone la familia al centro, haciendo de su
                        unión y armonía el objetivo principal, mientras que el enfoque tradicional de un
                        Family Office está centrado únicamente en administrar el patrimonio y la empresa,
                        desentendiéndose de la familia.</p>
                </div>
                <div className="founder">
                    <div className="photo-box">
                        <img className="guillermo" src={guillermo} alt=""/>
                        <h3>Guillermo Monroy</h3>
                    </div>
                    <div className="recuadro">
                        <div>
                            <p>
                                Profesional especializado en asesorar a familias mexicanas y latinoamericanas para lograr que su patrimonio trascienda por generaciones, en armonía familiar.
                            </p>
                            <hr/>
                            <p>
                                Guillermo les ayuda a alcanzar acuerdos, protocolos y transiciones generacionales exitosas para evitar desavenencias y alcanzar la resolución de conflictos internos. En este sentido, su apoyo va desde ayudarlos a reconocer dichos conflictos hasta gestionarlos para lograr una mejor dinámica familiar.
                            </p>
                            <hr/>
                            <p>
                                Previamente, fue socio de una firma internacional en la cual fue líder del área de Servicios Patrimoniales y Sucesorios, participando en el diseño de estructuras patrimoniales y empresariales, fideicomisos y servicios de Family Office, así como adjudicaciones hereditarias y acuerdos entre herederos para la distribución de los bienes.
                            </p>
                            <hr/>
                            <p>
                                Es abogado por la Universidad Anáhuac México, Campus Norte. También es investigador y postulador teórico sobre cómo aplicar la teoría de sistemas familiares en las necesidades de las familias empresarias.
                            </p>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <div className="flex-cards">

                    <div id="bx-img">
                        <img src={img} alt=""/>
                    </div>
                    <div className="bx-info">
                        <h2 className="subtitulos">Reconocidos por muchos. Valorados por incluso más.</h2>
                        <div className="card">
                            <p>Nuestra experiencia ha hecho posible que numerosas familias tengan mejores relaciones, además de una sólida consolidación patrimonial.</p>
                        </div>
                    </div>
                </div>
                <div className="flex-cards">
                    <div className="card-small">
                        <p>En casos de distanciamiento profundo, incluso hemos logrado una notoria mejoría en el panorama familiar y patrimonial presente y futuro.</p>
                    </div>
                    <div className="card-small">
                        <p>En casos de distanciamiento profundo, incluso hemos logrado una notoria mejoría en el panorama familiar y patrimonial presente y futuro.</p>
                    </div>
                    <div className="card-small">
                        <p>En casos de distanciamiento profundo, incluso hemos logrado una notoria mejoría en el panorama familiar y patrimonial presente y futuro.</p>

                    </div>

                </div>
                <br/>
                <br/>
                <Footer/>
            </section>
        );
    }
}

export default WhatWeAre;