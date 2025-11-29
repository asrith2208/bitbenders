import React, { useState } from 'react';
import { ShoppingCart, Star, Download, Eye, Filter, Search, Tag } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const ProjectMarketPage: React.FC = () => {
    const [filter, setFilter] = useState('all');

    const projects = [
        {
            id: 1,
            title: 'E-Commerce MERN Stack',
            price: '$49',
            rating: 4.8,
            sales: 120,
            tech: ['React', 'Node.js', 'MongoDB'],
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=1000',
            category: 'Web App'
        },
        {
            id: 2,
            title: 'Crypto Wallet App UI Kit',
            price: '$29',
            rating: 4.9,
            sales: 85,
            tech: ['Figma', 'UI/UX'],
            image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80&w=1000',
            category: 'Design'
        },
        {
            id: 3,
            title: 'AI Chatbot Python Script',
            price: '$19',
            rating: 4.7,
            sales: 200,
            tech: ['Python', 'OpenAI API'],
            image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000',
            category: 'AI/ML'
        },
        {
            id: 4,
            title: 'SaaS Dashboard Template',
            price: '$39',
            rating: 4.6,
            sales: 150,
            tech: ['Next.js', 'Tailwind CSS'],
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
            category: 'Web App'
        }
    ];

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <main className="min-h-screen bg-gray-50/50 dark:bg-[#111] pb-20">
            {/* Hero Section */}
            <div className="relative bg-white dark:bg-[#1A1E26] border-b border-gray-200 dark:border-gray-800 pt-32 pb-20 px-6">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <ScrollReveal>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#16A085]/10 text-[#16A085] font-medium text-sm mb-6">
                            <ShoppingCart size={16} />
                            <span>Code Marketplace</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
                            Buy & Sell <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16A085] to-[#1ABC9C]">Premium Projects</span>
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Accelerate your development with ready-to-use source code, UI kits, and templates.
                        </p>

                        <div className="max-w-xl mx-auto relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder="Search for projects, scripts, or templates..."
                                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white dark:bg-[#242B38] border border-gray-200 dark:border-gray-700 shadow-lg shadow-gray-100/50 dark:shadow-none focus:outline-none focus:ring-2 focus:ring-[#16A085]/50 text-gray-900 dark:text-white"
                            />
                        </div>
                    </ScrollReveal>
                </div>
            </div>

            <div className="container mx-auto px-6 py-16">

                {/* Filters */}
                <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
                    {['all', 'Web App', 'Design', 'AI/ML'].map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`
                px-6 py-2 rounded-full text-sm font-medium capitalize transition-all duration-200
                ${filter === cat
                                    ? 'bg-[#16A085] text-white shadow-lg shadow-[#16A085]/20'
                                    : 'bg-white dark:bg-[#1A1E26] text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800 hover:border-[#16A085]'}
              `}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {filteredProjects.map((project, i) => (
                        <ScrollReveal key={project.id} delay={i * 50}>
                            <div className="group bg-white dark:bg-[#1A1E26] rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 right-4">
                                        <span className="px-3 py-1 rounded-lg bg-white/90 dark:bg-black/80 backdrop-blur-sm text-sm font-bold text-gray-900 dark:text-white">
                                            {project.price}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-xs font-medium text-[#16A085] bg-[#16A085]/10 px-2 py-1 rounded-md">
                                            {project.category}
                                        </span>
                                        <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                                            <Star size={12} className="text-yellow-400 fill-current" />
                                            {project.rating} ({project.sales})
                                        </div>
                                    </div>

                                    <h3 className="font-bold text-gray-900 dark:text-white mb-3 line-clamp-1 group-hover:text-[#16A085] transition-colors">
                                        {project.title}
                                    </h3>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.map(t => (
                                            <span key={t} className="text-xs text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-[#242B38] px-2 py-1 rounded-md">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <button className="flex-grow py-2 rounded-lg bg-[#16A085] hover:bg-[#1ABC9C] text-white font-medium transition-colors text-sm">
                                            Buy Now
                                        </button>
                                        <button className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:text-[#16A085] transition-colors">
                                            <Eye size={18} />
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

export default ProjectMarketPage;
