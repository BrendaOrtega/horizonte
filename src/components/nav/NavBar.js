import React, { Component } from 'react';
import "./NavBar.css"
import {Link} from "react-router-dom"
import logo from "../../assets/logo_horizontal.png"

class NavBar extends Component {

    render() {
        return (
            <div className="nav">
                <Link to="/">
                    <img src={logo} alt=""/>
                </Link>
                <div>
                    <Link to="/quienes-somos-horizonte">
                        <p>¿Quienes somos?</p>
                    </Link>
                    <Link to="/que-pensamos-horizonte">
                        <p>¿Qué pensamos?</p>
                    </Link>
                    <Link to="/que-hacemos-horizonte">
                        <p>¿Qué hacemos?</p>
                    </Link>
                    <Link to="/contacto">
                        <p>Contacto</p>
                    </Link>
                </div>
            </div>
        );
    }
}

export default NavBar;