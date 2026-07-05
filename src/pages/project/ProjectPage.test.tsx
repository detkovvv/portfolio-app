import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import { projects } from '@/data/projectList';
import { ProjectPage } from '@/pages/project/ProjectPage';
import { PROJECT_DETAIL } from '@/routes/paths';

function renderProjectPage(path: string) {
    return render(
        <MemoryRouter initialEntries={[path]}>
            <Routes>
                <Route element={<ProjectPage />} path={PROJECT_DETAIL} />
            </Routes>
        </MemoryRouter>,
    );
}

describe('ProjectPage', () => {
    it('renders the matching project details', () => {
        const project = projects[0];

        renderProjectPage(`/project/${project.id}`);

        expect(
            screen.getByRole('heading', { name: project.title }),
        ).toBeInTheDocument();
    });

    it('renders nothing for an unknown project id', () => {
        const { container } = renderProjectPage('/project/does-not-exist');

        expect(container).toBeEmptyDOMElement();
    });
});
