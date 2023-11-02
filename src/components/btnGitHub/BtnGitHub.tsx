import { type FC } from 'react'
import gitHubIcon from './gitHub-black.svg'
import './style.css'

export const BtnGitHub: FC<{ link: string }> = ({ link }) => {
  return (
    <a href={link} target='_blank' rel='noopener noreferrer' className='btn-outline'>
      <img src={gitHubIcon} alt='githubIcon' />
      GitHub repo
    </a>
  )
}
