import React from 'react';
import {Image} from "react-bootstrap";
import pancakes from "../components/assets/images/recipe/desserts/pancakes.jpg";
import NavBar from "./NavBar";

const TastyPancakes = () => {
    return (
        <div>
            <NavBar/>

            <section className="section">
                <div className="container">
                    <div className="menu__header">
                        <h2 className="section__title">Tasty Pancakes</h2>
                        <h3 className="section__subtitle">Family favorite</h3>
                    </div>
                    <div className="recipes">
                        <div className="recipes__item">
                            <div className="products__img recipes--img">
                                <Image width={440} src={pancakes}/>
                            </div>
                        </div>
                        <div className="recipes__item">
                            <p className="ingredients__title"><strong>Ingredients</strong></p>

                        {/*    <label htmlFor="ingredients__count"></label><select id="ingredients__count"*/}
                        {/*                                                        onChange={ingCount()}>*/}
                        {/*    <option>0 servings</option>*/}
                        {/*    <option>4 servings</option>*/}
                        {/*    <option>8 servings</option>*/}
                        {/*</select>*/}

                            <ul className="ingredients">
                                <li><p className="ingredients__nums" id="result0"></p> cups all-purpose flour</li>
                                <li><p className="ingredients__nums" id="result1"></p> teaspoons baking powder</li>
                                <li><p className="ingredients__nums" id="result2"></p> teaspoon salt, or more to taste
                                </li>
                                <li><p className="ingredients__nums" id="result3"></p> tablespoon white sugar</li>
                                <li><p className="ingredients__nums" id="result4"></p> cups milk</li>
                                <li><p className="ingredients__nums" id="result5"></p> egg</li>
                                <li><p className="ingredients__nums" id="result6"></p> tablespoons butter, melted</li>
                            </ul>
                            <div className="recipes__text">
                                <p>In a large bowl, sift together the flour, baking powder, salt and sugar.
                                    Make a well in the center and pour in the milk, egg and melted butter;
                                    mix until smooth.</p>
                                <p>Heat a lightly oiled griddle or frying pan over medium-high heat.
                                    Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each
                                    pancake.
                                    Brown on both sides and serve hot.</p>
                            </div>
                            <hr className="recipes__hr"/>
                                <div className="quote recipes--quote">Bon appetit!</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TastyPancakes;