import React, { Component } from 'react';
import './Home.css';
import video from "../assets/Banner.mp4"
import {Link} from "react-router-dom"

class Slide extends Component {

    render() {
        return (
            <div className="video-box">     <div className="backi">
                    <div className="welcome">

                        <p>Construimos legados que trascienden</p>

                        <br/>
                        <div>
                            <Link to="/que-pensamos-horizonte">
                                <button className="btn-white">English</button>
                            </Link>
                            <button className="btn-white">Espanol</button>
                        </div></div>

                <video autoPlay loop id="myVideo">
                    <source src={video} type="video/mp4"/>
                </video>  </div>
            </div>
        );
    }
}

export default Slide;