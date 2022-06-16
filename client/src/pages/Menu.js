import React from 'react';
import '../components/assets/css/style.css';
import {Image} from "react-bootstrap";
import fst from "../components/assets/images/menu/1.png";
import snd from "../components/assets/images/menu/2.png";
import NavBar from "./NavBar";

const Menu = () => {
    return (
        <div>
            <NavBar/>
            <section className="section section--menu">
                <div className="container">
                    <div className="menu__header">
                        <h2 className="section__title">Menu</h2>
                        <h3 className="section__subtitle">Speak with the taste</h3>
                    </div>
                    <div className="menu">
                        <div className="menu__item">
                            <div className="accordion">
                                <div className="accordion__item" id="acc-item1">
                                    <div className="accordion__section" id="menu_1">
                                        <Image className="accordion__icon" width={40} src={fst}/>
                                        <div className="accordion__title">Recipes</div>

                                    </div>
                                    <div>
                                        <a className="accordion__subsection" href="Soups">Soups</a>
                                        <a className="accordion__subsection" href="MainCourse">Main course</a>
                                        <a className="accordion__subsection" href="Appetizers">Appetizers</a>
                                        <a className="accordion__subsection" href="Salads">Salads</a>
                                        <a className="accordion__subsection" href="Desserts">Desserts</a>
                                        <a className="accordion__subsection" href="Drinks">Drinks</a>
                                    </div>
                                </div>
                                <div className="accordion__item" id="acc-item2">
                                    <div className="accordion__section" id="menu_2">
                                        <Image className="accordion__icon" width={40} src={snd}/>
                                        <div className="accordion__title">Products</div>
                                    </div>
                                    <div>
                                        <a className="accordion__subsection" href="AboutFood">About products</a>
                                        <a className="accordion__subsection" href="CookingMethods">Cooking
                                            methods</a>
                                        <a className="accordion__subsection" href="HealthFood">Health and food</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Menu;