import React, { Component } from 'react';
import "./Footer.css"
import {Link} from "react-router-dom"
import logo from "../../assets/logo_horizontal.png"
import FontAwesome from "react-fontawesome"

class Footer extends Component {

    render() {
        return (
            <div className="footer">
                <div className="box-footer">
                    <div>
                        <h4>Contaco</h4>
                        <hr className="line_green"/>
                        <p> <FontAwesome name="phone"/> 555 55 55 55</p>
                        <p> <FontAwesome name="envelope"/> 555 55 55 55</p>
                    </div>
                    <div>
                        <h4>Información</h4>
                        <hr className="line_green"/>
                        <p> Preguntas frecuentes</p>
                        <p> Políticas de privacidad</p>
                    </div>
                    <div>
                        <h4>Conecta con nosotros</h4>
                        <hr className="line_green"/>
                        <FontAwesome name="linkedin"/>
                        <FontAwesome name="twitter"/>
                        <FontAwesome name="facebook"/>
                    </div>


                </div>
                <div className="politic">
                    <p>Horizonte © 2019</p>

                </div>
            </div>
        );
    }
}

export default Footer;