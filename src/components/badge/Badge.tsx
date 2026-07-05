import { type FC } from 'react';
import './style.css';

interface BadgeProps {
    label: string;
}

export const Badge: FC<BadgeProps> = ({ label }) => {
    return <span className="badge">{label}</span>;
};
