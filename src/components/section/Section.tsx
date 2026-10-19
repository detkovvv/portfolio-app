import { type FC, type ReactNode } from 'react';

interface SectionProps {
    children: ReactNode;
}

export const Section: FC<SectionProps> = ({ children }) => {
    return (
        <section className="section">
            <div className="container">{children}</div>
        </section>
    );
};
