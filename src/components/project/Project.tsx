import { type FC } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

interface IProjectProp {
    title: string;
    img: string;
    id: string;
}

export const Project: FC<IProjectProp> = ({ title, img, id }) => {
    return (
        <div className="project_container">
            <NavLink to={`/project/${id}`}>
                <li className="project">
                    <img
                        src={img}
                        alt={`${title} screenshot`}
                        className="project__img"
                    />
                    <h3 className="project__title">{title}</h3>
                </li>
            </NavLink>
        </div>
    );
};
