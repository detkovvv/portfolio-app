import { type FC } from 'react'
import { Header } from '../../components/header/Header'
import './../../styles/main.css'

export const HomePage: FC = () => {
  return (
    <div>
      <Header />
      <main className='section'>
        <div className='container'>
          <h1 className='title-1'>Skills</h1>
          <ul className='content-list'>
            <li className='content-list__item'>
              <h2 className='title-2'>Programming Languages</h2>
              <p>JavaScript, Typescript, HTML5, CSS3 </p>
            </li>
            <li className='content-list__item'>
              <h2 className='title-2'>Frameworks, Libraries, Tools and Platforms</h2>
              <p>
                {' '}
                React, React Router, Redux, Redux Thunk, Redux Toolkit, RTK Query, Next.JS
                <br />
                Sass, CSS Modules, Material UI
                <br />
                Webpack/Vite, NPM/Yarn, Git,
                <br />
                Vitest, Jest{' '}
              </p>
            </li>
          </ul>
        </div>
      </main>
    </div>
  )
}
