import React, { Component } from 'react';
import './Home.css';
import video from "../assets/Pexels Videos 1932324.mp4"
import {Link} from "react-router-dom"

class Slide extends Component {

    render() {
        return (
            <div className="video-box">
                    <div className="welcome">
                    <p>Nuestra misión es ayudar a familias empresarias para que su patrimonio
                        perdure por generaciones en armonía familiar</p>
                        <br/>
                    <div>
                        <Link to="/home">
                            <button className="btn-white">English</button>
                        </Link>
                        <button className="btn-white">Espanol</button>
                    </div>
                </div>
                <video autoPlay loop id="myVideo">
                    <source src={video} type="video/mp4"/>
                </video>
            </div>
        );
    }
}

export default Slide;