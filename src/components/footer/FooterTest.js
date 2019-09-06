import React, { Component } from 'react';
import "./Footer.css"
import {Link} from "react-router-dom"
import logo from "../../assets/logo_horizontal.png"
import FontAwesome from "react-fontawesome"

class FooterTest extends Component {

    render() {
        return (
            <div className="footer-test">
                <div >
                    <p>Horizonte © 2019</p>

                </div>
                    <div>

                        <FontAwesome name="linkedin"/>
                        <FontAwesome name="twitter"/>
                        <FontAwesome name="facebook"/>
                    </div>


            </div>
        );
    }
}

export default FooterTest;