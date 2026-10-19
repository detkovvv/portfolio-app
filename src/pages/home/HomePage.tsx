import { type FC } from 'react';
import { NavLink } from 'react-router-dom';

import { Badge } from '@/components/badge/Badge';
import { Header } from '@/components/header/Header';
import { Project } from '@/components/project/Project';
import { Section } from '@/components/section/Section';
import { projects } from '@/data/projectList';
import { CONTACTS, PROJECTS } from '@/routes/paths';
import '@/assets/styles/main.css';

const featuredOrder = ['globex-trans', 'company-table', 'chat-app'];
const featuredProjects = projects
    .filter((project) => project.featured)
    .sort((a, b) => featuredOrder.indexOf(a.id) - featuredOrder.indexOf(b.id));

const skillGroups = [
    {
        title: 'Programming Languages',
        skills: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3'],
    },
    {
        title: 'Frameworks, Libraries, Tools and Platforms',
        skills: [
            'React',
            'Preact',
            'React Router',
            'Zustand',
            'Redux Toolkit',
            'Next.js',
            'Express',
            'Emscripten',
            'Sass',
            'CSS Modules',
            'Material UI',
            'Vite',
            'Webpack',
            'Yarn',
            'NPM',
            'Git',
            'Node.js',
            'Docker',
            'Vitest',
            'Jest',
        ],
    },
];

export const HomePage: FC = () => {
    return (
        <div>
            <Header />
            <Section>
                <h2 className="main-title">Featured projects</h2>
                <ul className="projects">
                    {featuredProjects.map((project) => (
                        <Project key={project.id} project={project} />
                    ))}
                </ul>
            </Section>
            <Section>
                <div className="about">
                    <h2 className="sub-title">About me</h2>
                    <p>
                        I&apos;m a frontend developer who builds fast, polished
                        web interfaces with React and TypeScript. My
                        background spans commercial projects and personal
                        pet-projects — from responsive landing pages to SPAs
                        with REST APIs, Redux, and test coverage. I care about
                        clean code, accessible interfaces, and making sure
                        everything works just as well on any device.
                    </p>
                </div>
            </Section>
            <Section>
                <h2 className="main-title">Skills</h2>
                <ul className="skill-groups">
                    {skillGroups.map((group) => (
                        <li className="skill-group" key={group.title}>
                            <h3 className="sub-title">{group.title}</h3>
                            <ul className="skill-group__tags">
                                {group.skills.map((skill) => (
                                    <li key={skill}>
                                        <Badge label={skill} />
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </Section>
            <Section>
                <div className="cta">
                    <NavLink className="btn" to={PROJECTS}>
                        View all projects
                    </NavLink>
                    <NavLink className="btn-secondary" to={CONTACTS}>
                        Get in touch
                    </NavLink>
                </div>
            </Section>
        </div>
    );
};
