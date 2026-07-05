import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

import { App } from '@/app/App';

afterEach(() => {
    cleanup();
    window.history.pushState({}, '', '/');
});

describe('App routing', () => {
    it('renders the home page at "/"', () => {
        render(<App />);

        expect(
            screen.getByRole('heading', { name: /featured projects/i }),
        ).toBeInTheDocument();
    });

    it('renders the contacts page at "/contacts"', () => {
        window.history.pushState({}, '', '/contacts');
        render(<App />);

        expect(
            screen.getByRole('heading', { name: /contacts/i }),
        ).toBeInTheDocument();
    });

    it('renders the 404 page for an unknown route', () => {
        window.history.pushState({}, '', '/this-route-does-not-exist');
        render(<App />);

        expect(screen.getByText(/404/i)).toBeInTheDocument();
    });
});
