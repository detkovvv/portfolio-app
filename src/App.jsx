import './styles/main.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/navbar/Navbar.jsx'
import Footer from './components/footer/Footer.jsx'
import HomePage from './pages/home/HomePage.jsx'
import ProjectsPage from './pages/projects/ProjectsPage.jsx'
import ContactsPage from './pages/contacts/ContactsPage.jsx'
import ProjectPage from './pages/project/ProjectPage.jsx'

import ScrollToTop from './utils/scrollToTop.js'

function App() {
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
