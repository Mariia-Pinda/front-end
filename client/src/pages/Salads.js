import React from 'react';
import {Image} from "react-bootstrap";
import NavBar from "./NavBar";
import greek from "../components/assets/images/recipe/salads/greek.jpg";
import chickpea from "../components/assets/images/recipe/salads/chickpea.jpg";
import nicoise from "../components/assets/images/recipe/salads/nicoise.jpg";
import broccoli from "../components/assets/images/recipe/salads/broccoli.jpg";
import caesar from "../components/assets/images/recipe/salads/caesar.jpg";
import fruit from "../components/assets/images/recipe/salads/fruit.jpg";

const Salads = () => {
    return (
        <div>
            <NavBar/>

            <section className="section">
                <div className="container">
                    <div className="menu__header">
                        <h2 className="section__title">Salads</h2>
                        <h3 className="section__subtitle">Kitchen. Heart. Home</h3>
                        <div className="section__text recipes">
                            <p>A salad is a dish consisting of mixed, mostly natural ingredients with at least
                                one raw ingredient. They are often dressed, and typically served at room temperature
                                or chilled, though some can be served warm.</p>
                        </div>
                    </div>
                    <div className="recipes__menu">
                        <div className="recipes__menu__item">
                            <div className="recipes__menu__img">
                                <Image width={300} src={greek}/>
                            </div>
                            <div className="products__text">Greek salad</div>
                        </div>
                        <div className="recipes__menu__item">
                            <div className="recipes__menu__img">
                                <Image width={300} src={chickpea}/>
                            </div>
                            <div className="products__text">Chickpea salad</div>
                        </div>
                        <div className="recipes__menu__item">
                            <div className="recipes__menu__img">
                                <Image width={300} src={nicoise}/>
                            </div>
                            <div className="products__text">Salade niçoise</div>
                        </div>

                        <div className="recipes__menu__item">
                            <div className="recipes__menu__img">
                                <Image width={300} src={broccoli}/>
                            </div>
                            <div className="products__text">Broccoli salad</div>
                        </div>
                        <div className="recipes__menu__item">
                            <div className="recipes__menu__img">
                                <Image width={300} src={caesar}/>
                            </div>
                            <div className="products__text">Chicken Caesar salad</div>
                        </div>
                        <div className="recipes__menu__item">
                            <div className="recipes__menu__img">
                                <Image width={300} src={fruit}/>
                            </div>
                            <div className="products__text">Fruit salad</div>
                        </div>

                    </div>
                </div>
                <div id="like_button_container"></div>
            </section>
        </div>
    );
};

export default Salads;