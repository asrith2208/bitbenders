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
        title: 'Core & Emerging Tech',
        emoji: '🚀',
        domains: [
            { id: 'ai-ml/levels', name: 'AI/ML', description: 'Master Artificial Intelligence & Machine Learning.', emoji: '🤖' },
            { id: 'data-science', name: 'Data Science', description: 'Unlock insights from data with Python & R.', emoji: '📊' },
            { id: 'cybersecurity', name: 'Cybersecurity', description: 'Protect systems and networks from attacks.', emoji: '🔒' },
            { id: 'iot', name: 'IoT', description: 'Connect the physical world to the internet.', emoji: '🌐' },
            { id: 'cloud-computing', name: 'Cloud Computing', description: 'Architect scalable solutions on AWS/Azure.', emoji: '☁️' },
            { id: 'blockchain', name: 'Blockchain', description: 'Build decentralized applications (DApps).', emoji: '🔗' },
            { id: 'ar-vr', name: 'AR/VR', description: 'Create immersive augmented & virtual realities.', emoji: '👓' },
            { id: 'quantum', name: 'Quantum Computing', description: 'Explore the future of computing power.', emoji: '⚛️' }
        ]
    },
    {
        id: 'software-systems',
        title: 'Software & Systems',
        emoji: '💻',
        domains: [
            { id: 'full-stack', name: 'Full Stack Dev', description: 'Build complete web applications from scratch.', emoji: '🛠️' },
            { id: 'devops', name: 'DevOps', description: 'Streamline development and operations.', emoji: '♾️' },
            { id: 'mobile-app', name: 'Mobile App Dev', description: 'Create apps for iOS and Android devices.', emoji: '📱' },
            { id: 'os-systems', name: 'OS & Systems', description: 'Dive deep into operating system internals.', emoji: '🖥️' },
            { id: 'embedded', name: 'Embedded Systems', description: 'Program hardware and microcontrollers.', emoji: '🔌' }
        ]
    },
    {
        id: 'theory-algorithms',
        title: 'Theory & Algorithms',
        emoji: '📐',
        domains: [
            { id: 'dsa', name: 'DSA', description: 'Master Data Structures and Algorithms.', emoji: '📚' },
            { id: 'comp-theory', name: 'Comp. Theory', description: 'Understand the mathematical foundations.', emoji: '🧮' },
            { id: 'parallel-computing', name: 'Parallel Comp.', description: 'Optimize performance with concurrent processing.', emoji: '⚡' }
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

export const MENU_ITEMS = {
    Services: [
        {
            title: 'Learning Paths',
            items: [
                { title: 'Roadmaps', href: '/roadmaps', description: 'Step-by-step career paths', icon: 'map' },
                { title: 'Courses', href: '/services/courses', description: 'Expert-led video courses', icon: 'school' },
                { title: 'Coding Guidance', href: '/services/guidance', description: 'Best practices & standards', icon: 'code' },
                { title: 'Career Tips', href: '/services/career', description: 'Resume & interview prep', icon: 'work' },
            ]
        },
        {
            title: 'Opportunities',
            items: [
                { title: 'Hackathons', href: '/services/hackathons', description: 'Compete & win prizes', icon: 'trophy' },
                { title: 'Workshops', href: '/services/workshops', description: 'Live interactive sessions', icon: 'groups' },
                { title: 'Freelance Exchange', href: '/services/freelance', description: 'Find paid projects', icon: 'attach_money' },
            ]
        }
    ],
    Resources: [
        {
            title: 'Knowledge Base',
            items: [
                { title: 'Blog', href: '/resources/blog', description: 'Tech articles & news', icon: 'article' },
                { title: 'Placement Prep', href: '/resources/placement', description: 'Aptitude & technical prep', icon: 'business_center' },
                { title: 'Success Stories', href: '/resources/success-stories', description: 'Alumni achievements', icon: 'stars' },
            ]
        },
        {
            title: 'Innovation',
            items: [
                { title: 'Project Market', href: '/resources/project-market', description: 'Buy & sell projects', icon: 'shopping_cart' },
                { title: 'Research Support', href: '/resources/research', description: 'Paper writing & patents', icon: 'science' },
            ]
        }
    ],
    Community: [
        {
            title: 'Connect',
            items: [
                { title: 'Join Community', href: '/community/join', description: 'Discord, Telegram & WhatsApp', icon: 'forum' },
                { title: 'Events', href: '/community/events', description: 'Past & upcoming meetups', icon: 'event' },
            ]
        },
        {
            title: 'Social',
            items: [
                { title: 'Instagram', href: 'https://instagram.com', description: 'Follow us for updates', icon: 'camera_alt' },
                { title: 'LinkedIn', href: 'https://linkedin.com', description: 'Professional network', icon: 'linkedin' },
            ]
        }
    ]
};