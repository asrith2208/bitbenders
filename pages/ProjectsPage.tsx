
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS, PROJECT_FILTERS } from '../constants';
import type { Project } from '../types';
import ScrollReveal from '../components/ScrollReveal';
import LiquidCard from '../components/LiquidCard';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
    <LiquidCard>
        <Link to={`/projects/${project.id}`} className="block h-full group">
            <div className="relative">
                <video 
                    className="w-full h-48 object-cover rounded-t-2xl" 
                    src={project.videoUrl} 
                    loop 
                    muted 
                    playsInline 
                    onMouseOver={e => (e.target as HTMLVideoElement).play()}
                    onMouseOut={e => (e.target as HTMLVideoElement).pause()}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <span className="material-icons text-white text-6xl opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-300">play_circle</span>
                </div>
            </div>
            <div className="p-6">
                <div className="flex justify-between text-xs font-semibold uppercase text-primary mb-2">
                    <span>{project.domain}</span>
                    <span>{project.language}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{project.description}</p>
                 <div className="text-right text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-2">{project.level}</div>
            </div>
        </Link>
    </LiquidCard>
);

const FilterButton: React.FC<{ label: string; onClick: () => void; isActive: boolean }> = ({ label, onClick, isActive }) => (
    <button
        onClick={onClick}
        className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
            isActive
                ? 'bg-primary text-white shadow-lg shadow-primary/30'
                : 'bg-white/10 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-primary/10'
        }`}
    >
        {label}
    </button>
);


const ProjectsPage: React.FC = () => {
    const [filters, setFilters] = useState<{ domain: string | null; language: string | null; level: string | null }>({
        domain: null,
        language: null,
        level: null,
    });

    const handleFilterChange = (filterType: 'domain' | 'language' | 'level', value: string) => {
        setFilters(prev => ({
            ...prev,
            [filterType]: prev[filterType] === value ? null : value
        }));
    };

    const filteredProjects = useMemo(() => {
        return PROJECTS.filter(project => {
            if (filters.domain && project.domain !== filters.domain) return false;
            if (filters.language && project.language !== filters.language) return false;
            if (filters.level && project.level !== filters.level) return false;
            return true;
        });
    }, [filters]);
    
    return (
        <main className="container mx-auto px-6 py-20">
            <ScrollReveal>
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">Project Universe</h2>
                <p className="text-lg text-gray-500 dark:text-gray-400 mt-2 text-center mb-12">Filter, find, and start building your next masterpiece.</p>
            </ScrollReveal>
            
            <ScrollReveal delay={100}>
                <div className="mb-12 space-y-6">
                    {Object.keys(PROJECT_FILTERS).map(filterKey => (
                         <div key={filterKey} className="flex flex-wrap items-center justify-center gap-2 md:gap-4 p-4 rounded-xl glassmorphism">
                           <span className="font-bold text-sm uppercase mr-4 text-gray-600 dark:text-gray-400">{filterKey}:</span>
                            {PROJECT_FILTERS[filterKey as keyof typeof PROJECT_FILTERS].map(option => (
                               <FilterButton 
                                   key={option} 
                                   label={option} 
                                   onClick={() => handleFilterChange(filterKey as 'domain' | 'language' | 'level', option)} 
                                   isActive={filters[filterKey as 'domain' | 'language' | 'level'] === option}
                               />
                           ))}
                       </div>
                    ))}
                </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, i) => (
                    <ScrollReveal key={project.id} delay={i * 50}>
                        <ProjectCard project={project} />
                    </ScrollReveal>
                ))}
                 {filteredProjects.length === 0 && (
                    <div className="md:col-span-2 lg:col-span-3 text-center py-16">
                        <p className="text-2xl font-bold text-gray-500 dark:text-gray-400">No projects match the current filters.</p>
                        <p className="text-gray-400 dark:text-gray-500 mt-2">Try adjusting your search!</p>
                    </div>
                )}
            </div>
        </main>
    );
};

export default ProjectsPage;