
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
        summary: 'Responsive website for an auto transport service.',
        role: 'Frontend development',
        featured: true,
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
        featured: false,
    },
    {
        id: 'ekaterininskaya-clinic',
        title: 'Ekaterininskaya clinic',
        img: project05,
        imgBig: project05Big,
        skills: ['HTML', 'CSS', 'Adaptive Layout', 'Javascript', 'Swiper.js'],
        gitHubLink: 'https://github.com/detkovvv/eco-page',
        link: 'https://detkovvv.github.io/eco-page/',
        summary: 'Responsive page for a 2020 clinic webinar, kept as an archive case study.',
        role: 'Frontend development',
        year: 2020,
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
        link: 'https://detkovvv.github.io/chat-app/',
        summary: 'A messaging interface with a ready-to-try demo and optional Green API connection.',
        role: 'Frontend development',
        year: 2023,
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
        link: 'https://detkovvv.github.io/companies_table/',
        summary: 'Editable company and employee tables with selection and virtual scrolling.',
        role: 'Frontend development',
        year: 2023,
        featured: true,
    },
    {
        id: 'todo-app',
        title: 'ToDo App',
        img: project02,
        imgBig: project02Big,
        skills: ['Javascript', 'React', 'Vite'],
        gitHubLink: 'https://github.com/detkovvv/to_do_list',
        link: 'https://detkovvv.github.io/to_do_list/',
        summary: 'A simple task planner with editing, filters, and local browser storage.',
        role: 'Frontend development',
        featured: false,
    },
];
