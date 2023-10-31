import { type FC } from 'react'
import './../../styles/main.css'

export const ContactsPage: FC = () => {
  return (
    <main className='section'>
      <div className='container'>
        <h1 className='title-1'>Contacts</h1>
        <ul className='content-list'>
          <li className='content-list__item'>
            <h2 className='title-2'>Location</h2>
            <p>Krasnodar, Russia</p>
          </li>
          <li className='content-list__item'>
            <h2 className='title-2'>Telegram / WhatsApp</h2>
            <p>
              <a href='tel:+79996349733'>+7(999)634-97-33</a>
            </p>
          </li>
          <li className='content-list__item'>
            <h2 className='title-2'>Email</h2>
            <p>
              <a href='mailto:fgh.detkov@gmail.com'>fgh.detkov@gmail.com</a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  )
}
