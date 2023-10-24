import React from 'react';
import {NavLink} from "react-router-dom";
import './style.css';


const Project = ({title, img, index}) => {
    return (
        <div>
            <NavLink to={`/project/${index}`}>
                <li className="project">
                    <img src={img} alt={title} className="project__img"/>
                    <h3 className="project__title">{title}</h3>
                </li>
            </NavLink>
        </div>
    );
};

export default Project;