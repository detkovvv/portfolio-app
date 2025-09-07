import { type FC } from 'react';
import { useParams } from 'react-router-dom';
import { LinkBtn } from '@/components/LinkBtn/LinkBtn';
import { projects } from '@/helpers/projectList';

export const ProjectPage: FC = () => {
    const { id } = useParams() as { id: string };
    const project = projects.find((p) => p.id === id);

    if (!project) return null;

    return (
        <main className="section">
            <div className="container">
                <div className="project-details">
                    <h1 className="main-title">{project.title}</h1>
                    <img
                        src={project.imgBig}
                        alt={`${project.title} screenshot`}
                        className="project-details__cover"
                    />
                    <div className="project-details__desc">
                        <p>Skills: {project.skills}</p>
                    </div>
                    {project.gitHubLink && (
                        <LinkBtn link={project.gitHubLink} type={'github'} />
                    )}
                    {project.link && (
                        <LinkBtn link={project.link} type={'hosted'} />
                    )}
                </div>
            </div>
        </main>
    );
};
