import project03 from './../assets/img/projects/chat-app.png'
import project03Big from './../assets/img/projects/chat-app_big.png'

import project02 from './../assets/img/projects/todo-app.png'
import project02Big from './../assets/img/projects/todo-app_big.png'

import project01 from './../assets/img/projects/top-app.jpg'
import project01Big from './../assets/img/projects/top-app _big.jpg'

interface Projects {
  title: string
  skills: string
  img: string
  imgBig: string
  gitHubLink: string
}

export const projects: Projects[] = [
  {
    title: 'Chat App',
    img: project03,
    imgBig: project03Big,
    skills: 'Typescript, React, React Router, Redux, Redux-Thunk, REST API, ESLint, Prettier, Vite',
    gitHubLink: 'https://github.com/detkovvv/chat-app',
  },
  {
    title: 'Top courses app',
    skills: 'Typescript, React, Next.js, Docker, Accessibility, CSS Grid Layout,',
    img: project01,
    imgBig: project01Big,
    gitHubLink: 'https://github.com/detkovvv/top-app',
  },
  {
    title: 'ToDo App',
    img: project02,
    imgBig: project02Big,
    skills: 'Javascript, React, Vite',
    gitHubLink: 'https://github.com/detkovvv/to_do_list',
  },
]
