import React, { FC } from 'react'
import gitHubIcon from './gitHub-black.svg'
import './style.css'

const BtnGitHub: FC<{ link: string }> = ({ link }) => {
  return (
    <a href={link} target='_blank' rel='noreferrer' className='btn-outline'>
      <img src={gitHubIcon} alt='' />
      GitHub repo
    </a>
  )
}

export default BtnGitHub
