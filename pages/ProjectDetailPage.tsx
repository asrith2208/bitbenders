
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import ScrollReveal from '../components/ScrollReveal';

const ProjectDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const project = PROJECTS.find(p => p.id === id);

    if (!project) {
        return (
            <main className="container mx-auto px-6 py-20 min-h-screen flex items-center justify-center">
                 <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">Project Not Found</h1>
                    <Link to="/projects" className="mt-4 inline-block text-primary hover:underline">Back to Projects</Link>
                 </div>
            </main>
        );
    }

    return (
        <main className="container mx-auto px-6 py-20 min-h-screen">
            <ScrollReveal>
                <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden mb-8 shadow-2xl">
                    <video className="w-full h-full object-cover" src={project.videoUrl} autoPlay loop muted playsInline />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">{project.title}</h1>
                        <div className="flex flex-wrap gap-2 mt-2">
                             <span className="bg-primary/80 text-white px-3 py-1 text-xs sm:text-sm font-semibold rounded-full">{project.domain}</span>
                             <span className="bg-white/20 text-white px-3 py-1 text-xs sm:text-sm font-semibold rounded-full backdrop-blur-sm">{project.language}</span>
                             <span className="bg-white/20 text-white px-3 py-1 text-xs sm:text-sm font-semibold rounded-full backdrop-blur-sm">{project.level}</span>
                        </div>
                    </div>
                </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
                 <div className="p-8 glassmorphism rounded-xl">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Project Overview</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                        {project.description}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                        Further details, tech stack, and contribution guidelines will be available here soon.
                    </p>
                     <div className="mt-8">
                        <Link to="/projects" className="bg-primary text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl shadow-primary/40">
                           Back to All Projects
                        </Link>
                    </div>
                </div>
            </ScrollReveal>
        </main>
    );
};

export default ProjectDetailPage;