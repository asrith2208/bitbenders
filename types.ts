export interface Project {
    id: string;
    title: string;
    description: string;
    domain: string;
    language: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced';
    videoUrl: string;
}

export interface Roadmap {
    id: string;
    icon: string;
    title: string;
    description: string;
    duration: string;
    level: string;
    color: string;
}

export interface RoadmapCategory {
    id: string;
    title: string;
    emoji: string;
    domains: {
        id: string;
        name: string;
        description: string;
        emoji: string;
    }[];
}