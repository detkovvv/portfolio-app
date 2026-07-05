import { type FC } from 'react';

import gitHub from '@/assets/img/icons/gitHub.svg';
import instagram from '@/assets/img/icons/instagram.svg';
// import linkedin from '@/assets/img/icons/linkedIn.svg';
import telegram from '@/assets/img/icons/telegram.svg';
import './style.css';

export const Footer: FC = () => {
    return (
        <div>
            <footer className="footer">
                <div className="container">
                    <div className="footer__wrapper">
                        <ul className="social">
                            <li className="social__item">
                                <a
                                    href="https://github.com/detkovvv"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <img alt="github" src={gitHub} />
                                </a>
                            </li>
                            <li className="social__item">
                                <a
                                    href="https://t.me/detkovvv"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <img alt="telegram" src={telegram} />
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
                            <li className="social__item">
                                <a
                                    href="https://instagram.com/vasvasilievich?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <img alt="instagram" src={instagram} />
                                </a>
                            </li>
                        </ul>
                        <div className="copyright">
                            <p>{`© ${new Date().getFullYear().toString()} detkovvv`}</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};
