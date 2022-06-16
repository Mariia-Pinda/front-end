import React from 'react';
import '../components/assets/css/style.css';
import NavBar from "./NavBar";

function Main() {
    return (
        <div>
            <NavBar/>
            <div className="intro" id="intro">
                <div className="container">
                    <div id="intro__inner">
                        <h1 className="intro__title">Cooking blog</h1>
                        <h2 className="intro__subtitle">Cooking with passion. Cooking with love
                            <link href="https://fonts.googleapis.com/css2?family=Amiri&display=swap" rel="stylesheet"/>
                        </h2>
                        <a className="btn" href="Menu">Menu</a>
                    </div>
                </div>
                <div className="slider">
                    <div className="container">
                        <div className="slider__inner">
                            <div className="slider__item active">
                                <span className="slider__num">01</span>
                                <span className="slider__text">Intro</span>
                            </div>
                            <div className="slider__item">
                                <span className="slider__num">02</span>
                                <span className="slider__text">My blog</span>
                            </div>
                            <div className="slider__item">
                                <span className="slider__num">03</span>
                                <span className="slider__text">Saved</span>
                            </div>
                            <div className="slider__item">
                                <span className="slider__num">04</span>
                                <span className="slider__text">Contacts</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    );
}
export default Main;