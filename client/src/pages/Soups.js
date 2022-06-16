import React from 'react';
import {Image} from "react-bootstrap";
import NavBar from "./NavBar";
import mushroom from "../components/assets/images/recipe/soups/mushroom-soup.jpg";
import cauliflower from "../components/assets/images/recipe/soups/cauliflower-soup.jpg";
import tomato from "../components/assets/images/recipe/soups/tomato-soup.jpg";
import bouillabaisse from "../components/assets/images/recipe/soups/bouillabaisse.jpg";
import cabbage from "../components/assets/images/recipe/soups/cabbage-soup.jpg";
import clam from "../components/assets/images/recipe/soups/clam-chowder.jpg";

const Soups = () => {
    return (
        <div>
            <NavBar/>
            <section className="section">
                <div className="container">
                    <div className="menu__header">
                        <h2 className="section__title">Soups</h2>
                        <h3 className="section__subtitle">Paradise on your plate</h3>
                        <div className="section__text recipes">
                            <p>Soup is a primarily liquid food, generally served warm or hot (but may be cool or cold),
                                that is made by combining ingredients of meat or vegetables with stock, milk, or water.
                                Hot soups are additionally characterized by boiling solid ingredients in liquids
                                in a pot until the flavors are extracted, forming a broth. Soups are similar to stews,
                                and in some cases there may not be a clear distinction between the two; however,
                                soups generally have more liquid (broth) than stews.</p>
                        </div>
                    </div>
                    <div className="recipes__menu">
                        <div className="recipes__menu__item">
                            <div className="recipes__menu__img">
                                <Image width={300} src={mushroom}/>
                            </div>
                            <div className="products__text">Mushroom soup</div>
                        </div>
                        <div className="recipes__menu__item">
                            <div className="recipes__menu__img">
                                <Image width={300} src={cauliflower}/>
                            </div>
                            <div className="products__text">Cauliflower soup</div>
                        </div>
                        <div className="recipes__menu__item">
                            <div className="recipes__menu__img">
                                <Image width={300} src={tomato}/>
                            </div>
                            <div className="products__text">Tomato soup</div>
                        </div>
                        <div className="recipes__menu__item">
                            <div className="recipes__menu__img">
                                <Image width={300} src={bouillabaisse}/>
                            </div>
                            <div className="products__text">Bouillabaisse</div>
                        </div>
                        <div className="recipes__menu__item">
                            <div className="recipes__menu__img">
                                <Image width={300} src={cabbage}/>
                            </div>
                            <div className="products__text">Cabbage Soup</div>
                        </div>
                        <div className="recipes__menu__item">
                            <div className="recipes__menu__img">
                                <Image width={300} src={clam}/>
                            </div>
                            <div className="products__text">Clam chowder</div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Soups;