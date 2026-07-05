import { type FC } from 'react';
import { NavLink } from 'react-router-dom';

import { Section } from '@/components/section/Section';
import { ROOT } from '@/routes/paths';
import '@/assets/styles/main.css';

export const NotFoundPage: FC = () => {
    return (
        <Section>
            <h1 className="main-title">404</h1>
            <p>This page does not exist.</p>
            <NavLink className="btn" to={ROOT}>
                Back to home
            </NavLink>
        </Section>
    );
};
