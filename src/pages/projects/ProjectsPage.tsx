import React, { FC } from 'react'
import { projects } from '../../helpers/projectList'
import Project from '../../components/project/Project'
import '../../styles/main.css'

const ProjectsPage: FC = () => {
  return (
    <div>
      <main className='section'>
        <div className='container'>
          <h2 className='title-1'>Projects</h2>
          <ul className='projects'>
            {projects.map((project, index) => {
              return <Project key={index} title={project.title} img={project.img} index={index} />
            })}
          </ul>
        </div>
      </main>
    </div>
  )
}

export default ProjectsPage