import { type FC } from 'react'
import instagram from './../../assets/img/icons/instagram.svg'
import gitHub from './../../assets/img/icons/gitHub.svg'
import linkedin from './../../assets/img/icons/linkedIn.svg'
import telegram from './../../assets/img/icons/telegram.svg'
import './style.css'

export const Footer: FC = () => {
  return (
    <div>
      <footer className='footer'>
        <div className='container'>
          <div className='footer__wrapper'>
            <ul className='social'>
              <li className='social__item'>
                <a href='https://github.com/detkovvv' rel='noopener noreferrer' target='_blank'>
                  <img src={gitHub} alt='github' />
                </a>
              </li>
              <li className='social__item'>
                <a href='https://t.me/detkovvv' rel='noopener noreferrer' target='_blank'>
                  <img src={telegram} alt='telegram' />
                </a>
              </li>
              {/* <li className='social__item'> */}
              {/*   <a */}
              {/*     href='https://www.linkedin.com/in/vasily-detkov-256847293/' */}
              {/*     rel='noopener noreferrer' */}
              {/*     target='_blank' */}
              {/*   > */}
              {/*     <img src={linkedin} alt='linkedin' /> */}
              {/*   </a> */}
              {/* </li> */}
              <li className='social__item'>
                <a
                  href='https://instagram.com/vasvasilievich?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <img src={instagram} alt='instagram' />
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
