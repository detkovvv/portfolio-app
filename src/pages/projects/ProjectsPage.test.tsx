import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import { projects } from '@/data/projectList';
import { ProjectsPage } from '@/pages/projects/ProjectsPage';

describe('ProjectsPage', () => {
    it('renders a card for every project', () => {
        render(
            <MemoryRouter>
                <ProjectsPage />
            </MemoryRouter>,
        );

        projects.forEach((project) => {
            expect(
                screen.getByRole('heading', { name: project.title }),
            ).toBeInTheDocument();
        });
    });
});
