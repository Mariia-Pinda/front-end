import React, {useContext} from 'react';
import {Link, Navigate, Route, Routes} from 'react-router-dom';
import {Context} from "../index";

import Main from "../pages/Main";
import Auth from "../pages/Auth";
import Menu from "../pages/Menu";
import Appetizers from "../pages/Appetizers"
import Soups from "../pages/Soups"
import Drinks from "../pages/Drinks"
import Desserts from "../pages/Desserts"
import MainCourse from "../pages/MainCourse"
import Salads from "../pages/Salads"
import AboutFood from "../pages/AboutFood"
import CookingMethods from "../pages/CookingMethods"
import HealthFood from "../pages/HealthFood"
import TastyPancakes from "../pages/TastyPancakes"
import BroilingMethod from "../pages/BroilingMethod";

export default function AppRouter() {
    const {user} = useContext(Context)
    return (
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/Main" element={<Main/>}/>
            {/*<Route path = "/TastyPancakes" element = {user.isAuth && <TastyPancakes/>}/>*/}
            {/*<Route path="/auth" element={<Auth/>}/>*/}
            <Route path="/registration" element={<Auth/>}/>
            <Route path="/login" element={<Auth/>}/>
            <Route path="/Menu" element={<Menu/>}/>
            <Route path="/Appetizers" element={<Appetizers/>}/>
            <Route path="/Desserts" element={<Desserts/>}/>
            <Route path="/Drinks" element={<Drinks/>}/>
            <Route path="/MainCourse" element={<MainCourse/>}/>
            <Route path="/Soups" element={<Soups/>}/>
            <Route path="/Salads" element={<Salads/>}/>
            <Route path="/AboutFood" element={<AboutFood/>}/>
            <Route path="/CookingMethods" element={<CookingMethods/>}/>
            <Route path="/HealthFood" element={<HealthFood/>}/>
            <Route path="/TastyPancakes" element={<TastyPancakes/>}/>
            <Route path="/BroilingMethod" element={<BroilingMethod/>}/>
            <Route path="*" element={<Main/>}/>
        </Routes>
    );
};
