import { FC } from 'react'
import instagram from './../../assets/img/icons/instagram.svg'
import gitHub from './../../assets/img/icons/gitHub.svg'
import linkedin from './../../assets/img/icons/linkedIn.svg'
import './style.css'

const Footer: FC = () => {
  return (
    <div>
      <footer className='footer'>
        <div className='container'>
          <div className='footer__wrapper'>
            <ul className='social'>
              <li className='social__item'>
                <a href='https://instagram.com/vasvasilievich?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr'>
                  <img src={instagram} alt='link' />
                </a>
              </li>
              <li className='social__item'>
                <a href='https://github.com/detkovvv'>
                  <img src={gitHub} alt='link' />
                </a>
              </li>
              <li className='social__item'>
                <a href='https://www.linkedin.com/in/vasily-detkov-256847293/'>
                  <img src={linkedin} alt='link' />
                </a>
              </li>
            </ul>
            <div className='copyright'>
              <p>© 2023 detkovvv</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
