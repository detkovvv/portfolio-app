import './styles/main.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/navbar/Navbar.tsx'
import Footer from './components/footer/Footer.tsx'
import HomePage from './pages/home/HomePage.tsx'
import ProjectsPage from './pages/projects/ProjectsPage.tsx'
import ContactsPage from './pages/contacts/ContactsPage.tsx'
import ProjectPage from './pages/project/ProjectPage.tsx'
import ScrollToTop from './utils/scrollToTop.ts'

function App(): JSX.Element {
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

export default App
