import React, { Component } from 'react';
import './Home.css';
import video from "../assets/Pexels Videos 1932324.mp4"
import {Link} from "react-router-dom"
import NavBar from "./nav/NavBar";
import Footer from "./footer/Footer";

class Contact extends Component {

    render() {
        return (
            <div >
                <NavBar/>
                <div className="contacto">
                    <div className="img-contacto">

                    </div>
                    <div className="form-contacto">
                    <h2 className="titulos">Contacto</h2>
                       <div className="form_ctc">
                            <div>
                                <input type="text" placeholder="Nombre"/>

                            </div>
                           <div>
                               <input type="text" placeholder="E-mail"/>

                           </div>
                           <div>
                               <input type="text" placeholder="Teléfono"/>

                           </div>
                           <div>
                               <textarea type="text" placeholder="Mensaje"/>

                           </div>
                       </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Contact;