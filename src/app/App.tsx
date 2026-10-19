import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Footer } from '@/components/footer/Footer';
import { Navbar } from '@/components/navbar/Navbar';
import { ContactsPage } from '@/pages/contacts/ContactsPage';
import { HomePage } from '@/pages/home/HomePage';
import { NotFoundPage } from '@/pages/notFound/NotFoundPage';
import { ProjectPage } from '@/pages/project/ProjectPage';
import { ProjectsPage } from '@/pages/projects/ProjectsPage';
import {
    ROOT,
    PROJECTS,
    CONTACTS,
    PROJECT_DETAIL,
    NOT_FOUND,
} from '@/routes/paths';
import { ScrollToTop } from '@/utils/scrollToTop';

export function App() {
    return (
        <Router
            basename={import.meta.env.PROD ? '/portfolio-app' : undefined}
            // eslint-disable-next-line camelcase -- react-router's `future` flag API contract
            future={{ v7_startTransition: true }}
        >
            <ScrollToTop />
            <Navbar />
            <main>
                <Routes>
                    <Route element={<HomePage />} path={ROOT} />
                    <Route element={<ProjectsPage />} path={PROJECTS} />
                    <Route element={<ContactsPage />} path={CONTACTS} />
                    <Route element={<ProjectPage />} path={PROJECT_DETAIL} />
                    <Route element={<NotFoundPage />} path={NOT_FOUND} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}
