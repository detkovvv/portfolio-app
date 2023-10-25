import './styles/main.css';
import { Routes, Route, HashRouter} from "react-router-dom";

import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";
import HomePage from "./pages/home/HomePage.jsx";
import ProjectsPage from "./pages/projects/ProjectsPage.jsx";
import ContactsPage from "./pages/contacts/ContactsPage.jsx";
import ProjectPage from "./pages/project/ProjectPage.jsx";

import ScrollToTop from "./utils/scrollToTop.js";

function App() {
    return (
        <div className="App">
            <HashRouter>
                <ScrollToTop />
                <Navbar/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/projects" element={<ProjectsPage/>}/>
                    <Route path="/contacts" element={<ContactsPage />}/>
                    <Route path="/project/:id" element={<ProjectPage />}/>
                </Routes>
                <Footer/>
            </HashRouter>
        </div>
    )
}

export default App
