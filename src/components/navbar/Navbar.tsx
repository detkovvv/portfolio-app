import { type FC } from 'react'
import { NavLink } from 'react-router-dom'
import { BtnDarkMode } from '../btnDarkMode/BtnDarkMode'
import './style.css'

export const Navbar: FC = () => {
  const activeLink: string = 'nav-list__link nav-list__link--active'
  const normalLink: string = 'nav-list__link'
  const classDefinition = ({ isActive }: { isActive: boolean }) => {
    return isActive ? activeLink : normalLink
  }

  return (
    <div>
      <nav className='nav'>
        <div className='container'>
          <div className='nav-row'>
            <NavLink to='/' className='logo'>
              <strong>Frontend</strong> portfolio
            </NavLink>
            <BtnDarkMode />
            <ul className='nav-list'>
              <li className='nav-list__item'>
                <NavLink to='/' className={classDefinition}>
                  Home
                </NavLink>
              </li>
              <li className='nav-list__item'>
                <NavLink to='/projects' className={classDefinition}>
                  Projects
                </NavLink>
              </li>
              <li className='nav-list__item'>
                <NavLink to='/contacts' className={classDefinition}>
                  Contacts
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
