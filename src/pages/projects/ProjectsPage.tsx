import { type FC } from 'react';
import { projects } from '@/helpers/projectList';
import { Project } from '@/components/project/Project';
import '@/assets/styles/main.css';

export const ProjectsPage: FC = () => {
    return (
        <div>
            <main className="section">
                <div className="container">
                    <h2 className="title-1">Projects</h2>
                    <ul className="projects">
                        {projects.map((project) => {
                            return (
                                <Project
                                    key={project.title}
                                    title={project.title}
                                    img={project.img}
                                    id={project.id}
                                />
                            );
                        })}
                    </ul>
                </div>
            </main>
        </div>
    );
};
