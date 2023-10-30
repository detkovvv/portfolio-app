import React, { FC, useEffect } from 'react'
import { useLocalStorage } from '../../utils/useLocalStorage'
import detectDarkMode from '../../utils/detectDarkMode'
import sun from './sun.svg'
import moon from './moon.svg'
import './style.css'

const BtnDarkMode: FC = () => {
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectDarkMode())

  useEffect((): void => {
    if (darkMode === 'dark') {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [darkMode])

  useEffect((): void => {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
      const newColorScheme = event.matches ? 'dark' : 'light'
      setDarkMode(newColorScheme)
    })
  }, [setDarkMode])

  const toggleDarkMode = () => {
    setDarkMode((currentValue: string) => {
      return currentValue === 'light' ? 'dark' : 'light'
    })
  }

  const btnNormal: string = 'dark-mode-btn'
  const btnActive: string = 'dark-mode-btn dark-mode-btn--active'

  return (
    <button className={darkMode === 'dark' ? btnActive : btnNormal} onClick={toggleDarkMode}>
      <img src={sun} alt='Light mode' className='dark-mode-btn__icon'></img>
      <img src={moon} alt='Dark mode' className='dark-mode-btn__icon'></img>
    </button>
  )
}

export default BtnDarkMode