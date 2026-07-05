import { type FC } from 'react';
import { useParams } from 'react-router-dom';

import { Badge } from '@/components/badge/Badge';
import { LinkBtn } from '@/components/LinkBtn/LinkBtn';
import { Section } from '@/components/section/Section';
import { projects } from '@/data/projectList';

export const ProjectPage: FC = () => {
    const { id } = useParams() as { id: string };
    const project = projects.find((p) => p.id === id);

    if (!project) return null;

    const meta = [project.role, project.year].filter(Boolean).join(' · ');

    return (
        <Section>
            <div className="project-details">
                <h1 className="main-title">{project.title}</h1>
                <img
                    alt={`${project.title} screenshot`}
                    className="project-details__cover"
                    src={project.imgBig}
                />
                {meta && <p className="project-details__meta">{meta}</p>}
                {project.summary && (
                    <p className="project-details__summary">
                        {project.summary}
                    </p>
                )}
                <ul className="project-details__skills">
                    {project.skills.map((skill) => (
                        <li key={skill}>
                            <Badge label={skill} />
                        </li>
                    ))}
                </ul>
                <div className="project-details__actions">
                    {project.gitHubLink && (
                        <LinkBtn link={project.gitHubLink} type={'github'} />
                    )}
                    {project.link && (
                        <LinkBtn link={project.link} type={'hosted'} />
                    )}
                </div>
            </div>
        </Section>
    );
};
