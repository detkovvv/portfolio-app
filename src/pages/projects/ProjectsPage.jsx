import React from 'react';
import '../../styles/main.css';
import {projects} from '../../helpers/projectList.js';
import Project from '../../components/project/Project.jsx';


const ProjectsPage = () => {
    return (
        <div>
            <main className="section">
                <div className="container">
                    <h2 className="title-1">Projects</h2>
                    <ul className="projects">
                        {projects.map((project, index)=>{
                            return <Project
                                key={index}
                                title={project.title}
                                img={project.img}
                                index={index}
                            />;
                        })}
                    </ul>
                </div>
            </main>
        </div>
    );
};

export default ProjectsPage;