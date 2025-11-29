import React from 'react';
import { BookOpen, Code, Briefcase, CheckCircle, ArrowRight, Brain, Calculator, Terminal } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const PlacementPrepPage: React.FC = () => {
    const aptitudeTopics = [
        { title: 'Quantitative Aptitude', topics: ['Algebra', 'Geometry', 'Probability', 'Permutation & Combination'], icon: <Calculator className="text-blue-500" /> },
        { title: 'Logical Reasoning', topics: ['Puzzles', 'Data Interpretation', 'Blood Relations', 'Seating Arrangement'], icon: <Brain className="text-purple-500" /> },
        { title: 'Verbal Ability', topics: ['Reading Comprehension', 'Grammar', 'Vocabulary', 'Sentence Correction'], icon: <BookOpen className="text-green-500" /> }
    ];

    const techTopics = [
        { title: 'Data Structures', topics: ['Arrays & Strings', 'Linked Lists', 'Trees & Graphs', 'Dynamic Programming'], icon: <Code className="text-orange-500" /> },
        { title: 'Core CS Subjects', topics: ['Operating Systems', 'DBMS', 'Computer Networks', 'System Design'], icon: <Terminal className="text-red-500" /> }
    ];

    const companies = [
        { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg', focus: 'DSA, System Design' },
        { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg', focus: 'Leadership Principles, DSA' },
        { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg', focus: 'OOPs, DSA, Azure' },
        { name: 'Meta', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg', focus: 'Product Design, DSA' }
    ];

    return (
        <main className="min-h-screen bg-gray-50/50 dark:bg-[#111] pb-20">
            {/* Hero Section */}
            <div className="relative bg-white dark:bg-[#1A1E26] border-b border-gray-200 dark:border-gray-800 pt-32 pb-20 px-6">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <ScrollReveal>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#16A085]/10 text-[#16A085] font-medium text-sm mb-6">
                            <Briefcase size={16} />
                            <span>Placement Ready</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
                            Crack Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16A085] to-[#1ABC9C]">Dream Job</span>
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Comprehensive preparation materials for aptitude, coding, and interviews. Targeted guides for top tech companies.
                        </p>
                        <button className="px-8 py-3 rounded-xl bg-[#16A085] hover:bg-[#1ABC9C] text-white font-bold transition-all shadow-lg shadow-[#16A085]/20">
                            Start Mock Test
                        </button>
                    </ScrollReveal>
                </div>
            </div>

            <div className="container mx-auto px-6 py-16 max-w-6xl">

                {/* Aptitude Section */}
                <ScrollReveal delay={100}>
                    <div className="mb-20">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Aptitude & Reasoning</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {aptitudeTopics.map((section, i) => (
                                <div key={i} className="bg-white dark:bg-[#1A1E26] rounded-2xl border border-gray-100 dark:border-gray-800 p-8 hover:shadow-lg transition-all duration-300">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="p-3 rounded-xl bg-gray-50 dark:bg-[#242B38]">
                                            {section.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{section.title}</h3>
                                    </div>
                                    <ul className="space-y-3">
                                        {section.topics.map((topic, idx) => (
                                            <li key={idx} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                                <CheckCircle size={16} className="text-[#16A085]" />
                                                {topic}
                                            </li>
                                        ))}
                                    </ul>
                                    <button className="mt-8 w-full py-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-[#16A085] hover:text-[#16A085] font-medium transition-colors">
                                        Practice Now
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>

                {/* Technical Section */}
                <ScrollReveal delay={200}>
                    <div className="mb-20">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Technical Mastery</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {techTopics.map((section, i) => (
                                <div key={i} className="bg-white dark:bg-[#1A1E26] rounded-2xl border border-gray-100 dark:border-gray-800 p-8 hover:shadow-lg transition-all duration-300">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="p-3 rounded-xl bg-gray-50 dark:bg-[#242B38]">
                                            {section.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{section.title}</h3>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        {section.topics.map((topic, idx) => (
                                            <div key={idx} className="p-3 rounded-lg bg-gray-50 dark:bg-[#242B38] text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                                                {topic}
                                            </div>
                                        ))}
                                    </div>
                                    <button className="mt-8 w-full py-2 rounded-lg bg-[#16A085] hover:bg-[#1ABC9C] text-white font-medium transition-colors">
                                        Start Coding
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>

                {/* Company Prep */}
                <ScrollReveal delay={300}>
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Company-Specific Prep</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {companies.map((company, i) => (
                                <div key={i} className="bg-white dark:bg-[#1A1E26] rounded-xl border border-gray-100 dark:border-gray-800 p-6 flex flex-col items-center text-center hover:border-[#16A085] transition-colors cursor-pointer group">
                                    <div className="h-16 flex items-center justify-center mb-4 grayscale group-hover:grayscale-0 transition-all duration-300">
                                        <img src={company.logo} alt={company.name} className="h-8 md:h-10 object-contain" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">{company.name}</h3>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">Focus: {company.focus}</p>
                                    <div className="mt-auto flex items-center gap-1 text-sm font-medium text-[#16A085] opacity-0 group-hover:opacity-100 transition-opacity">
                                        View Guide <ArrowRight size={14} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>

            </div>
        </main>
    );
};

export default PlacementPrepPage;
