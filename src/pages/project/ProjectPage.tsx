import { type FC } from 'react'
import { useParams } from 'react-router-dom'
import { BtnGitHub } from '../../components/btnGitHub/BtnGitHub'
import { projects } from '../../helpers/projectList'

export const ProjectPage: FC = () => {
  const { id } = useParams() as { id: string }
  const project = projects[Number(id) || 0]

  return (
    <main className='section'>
      <div className='container'>
        <div className='project-details'>
          <h1 className='title-1'>{project.title}</h1>
          <img src={project.imgBig} alt='imgBig' className='project-details__cover' />
          <div className='project-details__desc'>
            <p>Skills: {project.skills}</p>
          </div>
          {project.gitHubLink && <BtnGitHub link={project.gitHubLink} />}
        </div>
      </div>
    </main>
  )
}
