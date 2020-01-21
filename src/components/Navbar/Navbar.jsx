import React from 'react';
import { Link } from 'react-router-dom';
import { PAGES_NAME } from "../../constants/constants";

const Navbar = ({ activePage }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">YONI MANAGER</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className={`nav-item ${activePage === PAGES_NAME.mainPage ? 'active' : ''}`}>
                        <Link className="nav-link" to="/">Главная</Link>
                    </li>
                    <li className={`nav-item ${activePage === PAGES_NAME.order ? 'active' : ''}`}>
                        <Link className="nav-link" to="/order">Добавить заказ</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/second-page">Second Page</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default Navbar;
