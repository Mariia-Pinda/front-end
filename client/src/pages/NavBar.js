import React from 'react';

const NavBar = () => {
    return (
        <div>
            <header className="header">
                <div className="container">
                    <div className="header__inner">
                        <div className="header__logo">Cooking blog</div>
                        <nav className="nav index" id="nav">
                            <a className="nav__link" href="Main">Main page</a>
                            <a className="nav__link" href="/login">Log in</a>
                            <a className="nav__link" href="/registration">Sign up</a>
                        </nav>
                        <button className="nav-toggle" id="nav_toggle" type="button">
                            <span className="nav-toggle__item">Nav</span>
                        </button>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default NavBar;