import { type FC } from 'react';
import hostedIcon from './hostedLink.svg';
import gitHubIcon from './gitHub-black.svg';

import './style.css';

export const LinkBtn: FC<{ link: string; type: 'hosted' | 'github' }> = ({
    link,
    type,
}) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
        >
            <img
                src={type === 'github' ? gitHubIcon : hostedIcon}
                alt="link icon"
            />
            View the project
        </a>
    );
};
