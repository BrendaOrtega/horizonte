import React, { Component } from 'react';
import "./Footer.css"
import {Link} from "react-router-dom"
import logo from "../../assets/logo_horizontal.png"
import FontAwesome from "react-fontawesome"

class Footer extends Component {

    render() {
        return (
            <div className="footer">
                <div>
                    <p>Horizonte © 2019</p>
                    <hr/>
                    <p>Politicas de Privacidad</p>
                </div>
                <div>
                    <div>
                        <FontAwesome name="linkedin"/>
                        <FontAwesome name="twitter"/>
                        <FontAwesome name="facebook"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;