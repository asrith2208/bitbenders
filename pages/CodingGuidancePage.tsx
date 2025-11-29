import React, { useState } from 'react';
import {
    Code,
    CheckCircle,
    BookOpen,
    Layers,
    Shield,
    GitBranch,
    Terminal,
    Cpu,
    Globe,
    ExternalLink,
    ChevronRight
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const CodingGuidancePage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'style' | 'principles' | 'review'>('style');

    const styleGuides = [
        {
            language: 'JavaScript / TypeScript',
            icon: <Globe className="text-yellow-500" />,
            guides: [
                { name: 'Airbnb Style Guide', url: 'https://github.com/airbnb/javascript', description: 'A mostly reasonable approach to JavaScript.' },
                { name: 'Google TypeScript Style Guide', url: 'https://google.github.io/styleguide/tsguide.html', description: 'The official style guide for TypeScript at Google.' },
                { name: 'Prettier', url: 'https://prettier.io/', description: 'An opinionated code formatter.' }
            ]
        },
        {
            language: 'Python',
            icon: <Terminal className="text-blue-500" />,
            guides: [
                { name: 'PEP 8', url: 'https://peps.python.org/pep-0008/', description: 'The Style Guide for Python Code.' },
                { name: 'Google Python Style Guide', url: 'https://google.github.io/styleguide/pyguide.html', description: 'Google\'s Python style guide.' },
                { name: 'Black', url: 'https://github.com/psf/black', description: 'The uncompromising Python code formatter.' }
            ]
        },
        {
            language: 'C++ / Java',
            icon: <Cpu className="text-purple-500" />,
            guides: [
                { name: 'Google C++ Style Guide', url: 'https://google.github.io/styleguide/cppguide.html', description: 'Conventions for C++ programming.' },
                { name: 'Google Java Style Guide', url: 'https://google.github.io/styleguide/javaguide.html', description: 'Hard-and-fast rules for Java source.' }
            ]
        }
    ];

    const principles = [
        {
            title: 'SOLID Principles',
            icon: <Layers size={32} className="text-indigo-500" />,
            items: [
                { name: 'Single Responsibility', desc: 'A class should have one, and only one, reason to change.' },
                { name: 'Open-Closed', desc: 'Entities should be open for extension, but closed for modification.' },
                { name: 'Liskov Substitution', desc: 'Derived classes must be substitutable for their base classes.' },
                { name: 'Interface Segregation', desc: 'Many client-specific interfaces are better than one general-purpose interface.' },
                { name: 'Dependency Inversion', desc: 'Depend upon abstractions, not concretions.' }
            ]
        },
        {
            title: 'Clean Code Basics',
            icon: <CheckCircle size={32} className="text-green-500" />,
            items: [
                { name: 'DRY (Don\'t Repeat Yourself)', desc: 'Every piece of knowledge must have a single, unambiguous representation.' },
                { name: 'KISS (Keep It Simple, Stupid)', desc: 'Most systems work best if they are kept simple rather than made complex.' },
                { name: 'YAGNI (You Aren\'t Gonna Need It)', desc: 'Always implement things when you actually need them, never when you just foresee that you need them.' }
            ]
        }
    ];

    const reviewChecklist = [
        { category: 'Functionality', items: ['Does the code do what it is supposed to do?', 'Are edge cases handled?', 'Is there any dead code?'] },
        { category: 'Readability', items: ['Are variable names descriptive?', 'Is the code easy to understand?', 'Are comments used appropriately (explaining "why", not "what")?'] },
        { category: 'Security', items: ['Are inputs validated?', 'Is sensitive data protected?', 'Are there any potential injection vulnerabilities?'] },
        { category: 'Performance', items: ['Is the algorithm efficient?', 'Are there any unnecessary API calls?', 'Is memory usage optimized?'] }
    ];

    return (
        <main className="min-h-screen bg-gray-50/50 dark:bg-[#111] pb-20">
            {/* Hero Section */}
            <div className="relative bg-white dark:bg-[#1A1E26] border-b border-gray-200 dark:border-gray-800 pt-32 pb-20 px-6">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <ScrollReveal>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#16A085]/10 text-[#16A085] font-medium text-sm mb-6">
                            <Code size={16} />
                            <span>Engineering Excellence</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
                            Coding <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16A085] to-[#1ABC9C]">Guidance</span>
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Your central hub for coding standards, design patterns, and best practices.
                            Write clean, scalable, and maintainable code.
                        </p>

                        {/* Tabs */}
                        <div className="flex flex-wrap justify-center gap-4">
                            {[
                                { id: 'style', label: 'Style Guides', icon: BookOpen },
                                { id: 'principles', label: 'Design Principles', icon: Layers },
                                { id: 'review', label: 'Code Review', icon: GitBranch }
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id as any)}
                                    className={`
                    flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300
                    ${activeTab === tab.id
                                            ? 'bg-[#16A085] text-white shadow-lg shadow-[#16A085]/30 scale-105'
                                            : 'bg-white dark:bg-[#242B38] text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-[#2D3748]'}
                  `}
                                >
                                    <tab.icon size={18} />
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-6 py-16 max-w-5xl">

                {/* Style Guides Tab */}
                {activeTab === 'style' && (
                    <div className="space-y-12">
                        {styleGuides.map((section, idx) => (
                            <ScrollReveal key={idx} delay={idx * 100}>
                                <div className="bg-white dark:bg-[#1A1E26] rounded-2xl border border-gray-100 dark:border-gray-800 p-8 shadow-sm">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-3 rounded-lg bg-gray-50 dark:bg-[#242B38]">
                                            {section.icon}
                                        </div>
                                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{section.language}</h2>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {section.guides.map((guide, i) => (
                                            <a
                                                key={i}
                                                href={guide.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group block p-5 rounded-xl bg-gray-50 dark:bg-[#242B38] hover:bg-[#16A085]/5 dark:hover:bg-[#1ABC9C]/10 border border-transparent hover:border-[#16A085]/20 dark:hover:border-[#1ABC9C]/20 transition-all duration-300"
                                            >
                                                <div className="flex justify-between items-start mb-2">
                                                    <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-[#16A085] dark:group-hover:text-[#1ABC9C] transition-colors">
                                                        {guide.name}
                                                    </h3>
                                                    <ExternalLink size={14} className="text-gray-400 group-hover:text-[#16A085] dark:group-hover:text-[#1ABC9C]" />
                                                </div>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                                    {guide.description}
                                                </p>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                )}

                {/* Design Principles Tab */}
                {activeTab === 'principles' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {principles.map((section, idx) => (
                            <ScrollReveal key={idx} delay={idx * 100}>
                                <div className="h-full bg-white dark:bg-[#1A1E26] rounded-2xl border border-gray-100 dark:border-gray-800 p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                                    <div className="flex items-center gap-4 mb-8">
                                        {section.icon}
                                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{section.title}</h2>
                                    </div>
                                    <ul className="space-y-6">
                                        {section.items.map((item, i) => (
                                            <li key={i} className="flex gap-4">
                                                <div className="mt-1 min-w-[24px]">
                                                    <div className="w-6 h-6 rounded-full bg-[#16A085]/10 text-[#16A085] flex items-center justify-center text-xs font-bold">
                                                        {i + 1}
                                                    </div>
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">{item.name}</h3>
                                                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                )}

                {/* Code Review Tab */}
                {activeTab === 'review' && (
                    <ScrollReveal>
                        <div className="bg-white dark:bg-[#1A1E26] rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden shadow-sm">
                            <div className="p-8 border-b border-gray-100 dark:border-gray-800 bg-gradient-to-r from-[#16A085]/5 to-transparent">
                                <div className="flex items-center gap-4">
                                    <Shield size={32} className="text-[#16A085]" />
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Code Review Checklist</h2>
                                        <p className="text-gray-500 dark:text-gray-400 mt-1">Ensure high quality before merging.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-10">
                                {reviewChecklist.map((category, idx) => (
                                    <div key={idx}>
                                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                            <ChevronRight size={18} className="text-[#16A085]" />
                                            {category.category}
                                        </h3>
                                        <ul className="space-y-3 pl-6">
                                            {category.items.map((item, i) => (
                                                <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-300 text-sm">
                                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>
                )}

            </div>
        </main>
    );
};

export default CodingGuidancePage;
