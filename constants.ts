import type { Project, Roadmap, RoadmapCategory } from './types';

export const FEATURED_ROADMAPS: Roadmap[] = [
    { id: 'web-dev', icon: 'code', title: 'Web Development', description: 'Frontend, Backend, Full-Stack Mastery.', duration: '12 weeks', level: 'Beginner', color: 'indigo' },
    { id: 'data-science', icon: 'analytics', title: 'Data Science', description: 'Python, ML, Visualization & Analysis.', duration: '16 weeks', level: 'Intermediate', color: 'teal' },
    { id: 'ai-ml', icon: 'smart_toy', title: 'AI & Machine Learning', description: 'Deep Learning, Neural Networks, NLP.', duration: '20 weeks', level: 'Advanced', color: 'purple' },
    { id: 'cybersecurity', icon: 'security', title: 'Cybersecurity', description: 'Ethical Hacking, Network Security, Forensics.', duration: '14 weeks', level: 'Intermediate', color: 'red' }
];

export const ROADMAP_CATEGORIES: RoadmapCategory[] = [
    {
        id: 'core-tech',
        title: 'Core & Emerging Tech Domain',
        domains: [
            { id: 'ai-ml/levels', name: 'AI/ML' },
            { id: 'data-science', name: 'Data Science & Analytics' },
            { id: 'cybersecurity', name: 'Cybersecurity' },
            { id: 'iot', name: 'IoT (Internet of Things)' },
            { id: 'cloud-computing', name: 'Cloud Computing' },
            { id: 'blockchain', name: 'Blockchain' },
            { id: 'ar-vr', name: 'AR/VR' },
            { id: 'quantum', name: 'Quantum Computing' }
        ]
    },
    {
        id: 'software-systems',
        title: 'Software & Systems Domains',
        domains: [
            { id: 'full-stack', name: 'Full Stack Development' },
            { id: 'devops', name: 'DevOps' },
            { id: 'mobile-app', name: 'Mobile App Development' },
            { id: 'os-systems', name: 'Operating Systems & Systems Programming' },
            { id: 'embedded', name: 'Embedded Systems' }
        ]
    },
    {
        id: 'theory-algorithms',
        title: 'Theory & Algorithms',
        domains: [
            { id: 'dsa', name: 'Algorithms & Data Structures' },
            { id: 'comp-theory', name: 'Computational Theory' },
            { id: 'parallel-computing', name: 'Parallel & Distributed Computing' }
        ]
    }
];

export const PROJECTS: Project[] = [
    { id: 'p1', title: 'AI-Powered E-commerce Platform', description: 'A smart e-commerce site with personalized recommendations.', domain: 'AI/ML', language: 'Python', level: 'Advanced', videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4' },
    { id: 'p2', title: 'Decentralized Voting System', description: 'A secure voting application using blockchain technology.', domain: 'Blockchain', language: 'Solidity', level: 'Advanced', videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4' },
    { id: 'p3', title: 'Full-Stack Social Media App', description: 'Create your own social network from scratch.', domain: 'Web Development', language: 'JavaScript', level: 'Intermediate', videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4' },
    { id: 'p4', title: 'IoT Smart Home Controller', description: 'Control home appliances using a web dashboard.', domain: 'IoT', language: 'C++', level: 'Intermediate', videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4' },
    { id: 'p5', title: 'Data Visualization Dashboard', description: 'Interactive charts for analyzing large datasets.', domain: 'Data Science', language: 'Python', level: 'Intermediate', videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4' },
    { id: 'p6', title: 'Ethical Hacking Toolkit', description: 'A collection of scripts for penetration testing.', domain: 'Cybersecurity', language: 'Python', level: 'Advanced', videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4' },
    { id: 'p7', title: 'Mobile Fitness Tracker', description: 'An iOS/Android app to track workouts and nutrition.', domain: 'Mobile Development', language: 'Swift', level: 'Intermediate', videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4' },
    { id: 'p8', title: 'Personal Portfolio Website', description: 'A stunning portfolio to showcase your skills.', domain: 'Web Development', language: 'HTML/CSS', level: 'Beginner', videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4' },
];

export const PROJECT_FILTERS = {
    domain: ['AI/ML', 'Blockchain', 'Web Development', 'IoT', 'Data Science', 'Cybersecurity', 'Mobile Development'],
    language: ['Python', 'Solidity', 'JavaScript', 'C++', 'Swift', 'HTML/CSS'],
    level: ['Beginner', 'Intermediate', 'Advanced'],
};