import { type FC } from 'react';

import { Project } from '@/components/project/Project';
import { Section } from '@/components/section/Section';
import { projects } from '@/data/projectList';
import '@/assets/styles/main.css';

export const ProjectsPage: FC = () => {
    return (
        <Section>
            <h2 className="main-title">Projects</h2>
            <ul className="projects">
                {projects.map((project) => (
                    <Project key={project.id} project={project} />
                ))}
            </ul>
        </Section>
    );
};
