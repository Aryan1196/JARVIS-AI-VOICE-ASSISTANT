import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-logo"><Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>J.A.R.V.I.S</Link></div>

            <ul className="nav-links">
                <li><Link to="/" className="nav-link">HOME</Link></li>
                <li><Link to="/controls" className="nav-link">CONTROLS</Link></li>
                <li><Link to="/manual" className="nav-link">USER MANUAL</Link></li>
                <li><Link to="/about" className="nav-link">ABOUT ME</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
