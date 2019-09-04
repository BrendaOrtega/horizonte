import React, { Component } from 'react';
import './Home.css';
import arrow from "../assets/Line 2.svg"
import logov from "../assets/logo_vertical.png"
import guillermo from "../assets/Guilermo_alta_color_2.jpg"
import img from "../assets/Horizonte_030_cover.png"
import Footer from "./footer/Footer";
import NavBar from "./nav/NavBar";

class WhatWeDo extends Component {

    render() {
        return (
            <section >
                <NavBar/>

                <Footer/>
            </section>
        );
    }
}

export default WhatWeDo;