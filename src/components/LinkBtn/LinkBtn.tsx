import { type FC } from 'react';

import gitHubIcon from './gitHub-black.svg';
import hostedIcon from './hostedLink.svg';

import './style.css';

export const LinkBtn: FC<{ link: string; type: 'hosted' | 'github' }> = ({
    link,
    type,
}) => {
    return (
        <a
            className="btn-outline"
            href={link}
            rel="noopener noreferrer"
            target="_blank"
        >
            <img
                alt="link icon"
                src={type === 'github' ? gitHubIcon : hostedIcon}
            />
            View the project
        </a>
    );
};
