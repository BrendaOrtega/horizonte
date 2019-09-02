import React, { Component } from 'react';
import './Home.css';

class Home extends Component {

    render() {
        return (
            <section >
                <div className="slide-home">
                    <div>
                        <div className="box-dos"></div>
                        <div className="box-white">
                            <h2>Quienes somos?</h2>
                            <p>Nuestra misión es ayudar a familias empresarias para que su patrimonio
                                perdure por generaciones en armonía familiar</p>
                        </div>

                    </div>

                </div>

            </section>
        );
    }
}

export default Home;