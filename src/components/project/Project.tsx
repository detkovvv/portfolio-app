import { type FC } from 'react';
import { NavLink } from 'react-router-dom';

import { Badge } from '@/components/badge/Badge';
import { projectLink } from '@/routes/paths';
import { type ProjectData } from '@/types/project';
import './style.css';

const MAX_VISIBLE_SKILLS = 4;

interface ProjectProps {
    project: ProjectData;
}

export const Project: FC<ProjectProps> = ({ project }) => {
    const { id, title, img, skills, summary } = project;
    const visibleSkills = skills.slice(0, MAX_VISIBLE_SKILLS);

    return (
        <li className="project_container">
            <NavLink className="project" to={projectLink(id)}>
                <div className="img_container">
                    <img
                        alt={`${title} screenshot`}
                        className="project__img"
                        loading="lazy"
                        src={img}
                    />
                </div>
                <div className="project__body">
                    <h3 className="project__title">{title}</h3>
                    <ul className="project__skills">
                        {visibleSkills.map((skill) => (
                            <li key={skill}>
                                <Badge label={skill} />
                            </li>
                        ))}
                    </ul>
                    {summary && <p className="project__summary">{summary}</p>}
                </div>
            </NavLink>
        </li>
    );
};
