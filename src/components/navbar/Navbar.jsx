import React from 'react';
import {NavLink} from 'react-router-dom';
import BtnDarkMode from '../btnDarkMode/BtnDarkMode.jsx';
import './style.css';

const Navbar = () => {

    const activeLink = 'nav-list__link nav-list__link--active';
    const normalLink = 'nav-list__link';
    const classDefinition = ({isActive}) => {
        return isActive ? activeLink : normalLink;
    }

    return (
        <div>
            <nav className="nav">
                <div className="container">
                    <div className="nav-row">
                        <NavLink to="/" className="logo">
                            <strong>Frontend</strong> portfolio
                        </NavLink>
                        <BtnDarkMode/>
                        <ul className="nav-list">
                            <li className="nav-list__item">
                                <NavLink to="/" className={classDefinition}>Home</NavLink>
                            </li>
                            <li className="nav-list__item">
                                <NavLink to="/projects" className={classDefinition}>Projects</NavLink>
                            </li>
                            <li className="nav-list__item">
                                <NavLink to="/contacts" className={classDefinition}>Contacts</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;