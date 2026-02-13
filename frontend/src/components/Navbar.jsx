import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-logo">J.A.R.V.I.S</div>

            <ul className="nav-links">
                <li><Link to="/" className="nav-link">HOME</Link></li>
                <li><a href="#systems" className="nav-link">SYSTEMS</a></li>
                <li><Link to="/controls" className="nav-link">CONTROLS</Link></li>
                <li><Link to="/settings" className="nav-link">SETTINGS</Link></li>
                <li><a href="#about" className="nav-link">ABOUT</a></li>
            </ul>

            <div className="nav-actions">
                <button className="nav-btn">LOGIN</button>
            </div>
        </nav>
    );
};

export default Navbar;
