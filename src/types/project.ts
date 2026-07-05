export interface ProjectData {
    id: string;
    title: string;
    skills: string[];
    img: string;
    imgBig: string;
    gitHubLink?: string;
    link?: string;
    role?: string;
    summary?: string;
    year?: string | number;
    featured?: boolean;
}
