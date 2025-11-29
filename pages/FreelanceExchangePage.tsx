import React, { useState } from 'react';
import { Briefcase, DollarSign, Clock, Tag, Search, Filter, Star } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const FreelanceExchangePage: React.FC = () => {
    const [filter, setFilter] = useState('all');

    const projects = [
        {
            id: 1,
            title: 'Build a SaaS Landing Page',
            budget: '$500 - $1,000',
            duration: '1 week',
            skills: ['React', 'Tailwind CSS', 'Framer Motion'],
            client: 'TechStart Inc.',
            rating: 4.9,
            posted: '2 hours ago',
            category: 'Web Dev'
        },
        {
            id: 2,
            title: 'Mobile App UI Redesign',
            budget: '$2,000 - $3,000',
            duration: '3 weeks',
            skills: ['Figma', 'UI/UX', 'Mobile Design'],
            client: 'Appify',
            rating: 4.8,
            posted: '5 hours ago',
            category: 'Design'
        },
        {
            id: 3,
            title: 'Python Script for Data Scraping',
            budget: '$200 - $400',
            duration: '2 days',
            skills: ['Python', 'BeautifulSoup', 'Selenium'],
            client: 'DataCorp',
            rating: 5.0,
            posted: '1 day ago',
            category: 'Scripting'
        },
        {
            id: 4,
            title: 'Smart Contract Audit',
            budget: '$1,500 - $2,500',
            duration: '1 week',
            skills: ['Solidity', 'Security', 'Blockchain'],
            client: 'DeFi Protocol',
            rating: 4.7,
            posted: '2 days ago',
            category: 'Blockchain'
        }
    ];

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(p => p.category.toLowerCase().includes(filter.toLowerCase()));

    return (
        <main className="min-h-screen bg-gray-50/50 dark:bg-[#111] pb-20">
            {/* Hero Section */}
            <div className="relative bg-white dark:bg-[#1A1E26] border-b border-gray-200 dark:border-gray-800 pt-32 pb-20 px-6">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <ScrollReveal>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#16A085]/10 text-[#16A085] font-medium text-sm mb-6">
                            <Briefcase size={16} />
                            <span>Gig Marketplace</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
                            Find Your Next <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16A085] to-[#1ABC9C]">Project</span>
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Connect with clients looking for your skills. From quick scripts to full-scale applications, find work that fits your schedule.
                        </p>

                        <div className="flex justify-center gap-4">
                            <button className="px-8 py-3 rounded-xl bg-[#16A085] hover:bg-[#1ABC9C] text-white font-bold transition-all shadow-lg shadow-[#16A085]/20">
                                Find Work
                            </button>
                            <button className="px-8 py-3 rounded-xl bg-white dark:bg-[#242B38] border border-gray-200 dark:border-gray-700 hover:border-[#16A085] text-gray-900 dark:text-white font-bold transition-all">
                                Post a Project
                            </button>
                        </div>
                    </ScrollReveal>
                </div>
            </div>

            <div className="container mx-auto px-6 py-16 max-w-5xl">

                {/* Filters */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
                    <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
                        {['All', 'Web Dev', 'Design', 'Blockchain', 'Scripting'].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat === 'All' ? 'all' : cat)}
                                className={`
                  px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200
                  ${(filter === 'all' && cat === 'All') || filter === cat
                                        ? 'bg-[#16A085] text-white'
                                        : 'bg-white dark:bg-[#1A1E26] text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800 hover:border-[#16A085]'}
                `}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Showing {filteredProjects.length} projects
                    </p>
                </div>

                {/* Project List */}
                <div className="space-y-4">
                    {filteredProjects.map((project, i) => (
                        <ScrollReveal key={project.id} delay={i * 50}>
                            <div className="bg-white dark:bg-[#1A1E26] rounded-xl border border-gray-100 dark:border-gray-800 p-6 hover:shadow-lg transition-all duration-300 hover:border-[#16A085]/50 group">
                                <div className="flex flex-col md:flex-row justify-between gap-4">
                                    <div className="flex-grow">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-[#16A085] transition-colors">
                                                {project.title}
                                            </h3>
                                            <span className="md:hidden text-sm text-gray-500">{project.posted}</span>
                                        </div>

                                        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                                            <span className="flex items-center gap-1"><DollarSign size={14} /> {project.budget}</span>
                                            <span className="flex items-center gap-1"><Clock size={14} /> {project.duration}</span>
                                            <span className="flex items-center gap-1"><Briefcase size={14} /> {project.category}</span>
                                        </div>

                                        <div className="flex flex-wrap gap-2">
                                            {project.skills.map(skill => (
                                                <span key={skill} className="px-2 py-1 rounded-md bg-gray-100 dark:bg-[#242B38] text-gray-600 dark:text-gray-300 text-xs font-medium">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-end justify-between min-w-[150px]">
                                        <div className="hidden md:block text-sm text-gray-500 mb-2">{project.posted}</div>
                                        <div className="flex items-center gap-1 text-sm font-medium text-gray-900 dark:text-white mb-4">
                                            {project.client}
                                            <Star size={12} className="text-yellow-400 fill-current" />
                                            {project.rating}
                                        </div>
                                        <button className="w-full md:w-auto px-6 py-2 rounded-lg bg-[#16A085] hover:bg-[#1ABC9C] text-white font-medium transition-colors">
                                            Apply Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

            </div>
        </main>
    );
};

export default FreelanceExchangePage;
