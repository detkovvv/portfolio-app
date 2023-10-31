import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/navbar/Navbar'
import { Footer } from './components/footer/Footer'
import { HomePage } from './pages/home/HomePage'
import { ProjectsPage } from './pages/projects/ProjectsPage'
import { ContactsPage } from './pages/contacts/ContactsPage'
import { ProjectPage } from './pages/project/ProjectPage'
import { ScrollToTop } from './utils/scrollToTop'
import './styles/main.css'

export function App(): React.JSX.Element {
  return (
    <div className='App'>
      <Router basename={import.meta.env.PROD ? '/portfolio-app' : undefined}>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/projects' element={<ProjectsPage />} />
          <Route path='/contacts' element={<ContactsPage />} />
          <Route path='/project/:id' element={<ProjectPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}
