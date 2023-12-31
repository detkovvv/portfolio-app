import { type FC } from 'react'
import './style.css'

export const Header: FC = () => {
  return (
    <div>
      <header className='header'>
        <div className='header__wrapper'>
          <h1 className='header__title'>
            <strong>
              Hi, my name is <em>Vasiliy</em>
            </strong>
            <br />a frontend developer
          </h1>
          <div className='header__text'>
            <p>with passion for learning and creating.</p>
          </div>
          <a
            href='https://drive.google.com/file/d/1XxQbtJKfnavZd95ujttBG87av3k2eg1E/view?usp=sharing'
            target='_blank'
            className='btn'
            rel='noreferrer'
          >
            Download CV
          </a>
        </div>
      </header>
    </div>
  )
}
