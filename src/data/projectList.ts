
import project03 from '@/assets/img/projects/chat-app.webp';
import project03Big from '@/assets/img/projects/chat-app_big.webp';
import project04 from '@/assets/img/projects/company_table.webp';
import project04Big from '@/assets/img/projects/company_table_full.webp';
import project05 from '@/assets/img/projects/ekaterininskaya.webp';
import project05Big from '@/assets/img/projects/ekaterininskaya_big.webp';
import project06 from '@/assets/img/projects/project06.webp';
import project06Big from '@/assets/img/projects/project06Big.webp';
import project02 from '@/assets/img/projects/todo-app.webp';
import project02Big from '@/assets/img/projects/todo-app_big.webp';
import project01 from '@/assets/img/projects/top-app.webp';
import project01Big from '@/assets/img/projects/top-app_big.webp';
import { type ProjectData } from '@/types/project';

export const projects: ProjectData[] = [
    {
        id: 'globex-trans',
        title: 'Globex-trans',
        img: project06,
        imgBig: project06Big,
        skills: ['Javascript', 'HTML', 'CSS', 'Adaptive Layout', 'FB events'],
        link: 'https://globex-trans.com/',
        featured: false,
    },
    {
        id: 'top-courses',
        title: 'Top courses app',
        skills: [
            'Typescript',
            'React',
            'Next.js',
            'Docker',
            'Accessibility',
            'CSS Grid Layout',
        ],
        img: project01,
        imgBig: project01Big,
        gitHubLink: 'https://github.com/detkovvv/top-app',
        featured: true,
    },
    {
        id: 'ekaterininskaya-clinic',
        title: 'Ekaterininskaya clinic',
        img: project05,
        imgBig: project05Big,
        skills: ['HTML', 'CSS', 'Adaptive Layout', 'Javascript', 'Swiper.js'],
        gitHubLink: 'https://github.com/detkovvv/eco-page',
        featured: false,
    },
    {
        id: 'chat-app',
        title: 'Chat App',
        img: project03,
        imgBig: project03Big,
        skills: [
            'Typescript',
            'React',
            'React Router',
            'Redux',
            'Redux-Thunk',
            'REST API',
            'ESLint',
            'Prettier',
            'Vite',
        ],
        gitHubLink: 'https://github.com/detkovvv/chat-app',
        featured: true,
    },
    {
        id: 'company-table',
        title: 'Company table',
        img: project04,
        imgBig: project04Big,
        skills: [
            'Typescript',
            'React',
            'Redux Toolkit',
            'CSS Modules',
            'Vitest',
            'Faker-js',
            'Vite',
        ],
        gitHubLink: 'https://github.com/detkovvv/companies_table',
        featured: true,
    },
    {
        id: 'todo-app',
        title: 'ToDo App',
        img: project02,
        imgBig: project02Big,
        skills: ['Javascript', 'React', 'Vite'],
        gitHubLink: 'https://github.com/detkovvv/to_do_list',
        featured: false,
    },
];
