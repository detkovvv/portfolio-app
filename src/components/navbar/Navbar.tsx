import { type FC } from 'react';
import { NavLink } from 'react-router-dom';

import { BtnDarkMode } from '@/components/btnDarkMode/BtnDarkMode';
import { ROOT, PROJECTS, CONTACTS } from '@/routes/paths';
import './style.css';

export const Navbar: FC = () => {
    const activeLink: string = 'nav-list__link nav-list__link--active';
    const normalLink: string = 'nav-list__link';
    const classDefinition = ({ isActive }: { isActive: boolean }) => {
        return isActive ? activeLink : normalLink;
    };

    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-row">
                    <NavLink className="logo" to={ROOT}>
                        <strong>Frontend</strong> portfolio
                    </NavLink>
                    <BtnDarkMode />
                    <ul className="nav-list">
                        <li className="nav-list__item">
                            <NavLink className={classDefinition} to={ROOT}>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink className={classDefinition} to={PROJECTS}>
                                Projects
                            </NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink className={classDefinition} to={CONTACTS}>
                                Contacts
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
