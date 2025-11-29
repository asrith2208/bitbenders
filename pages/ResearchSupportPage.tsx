import React from 'react';
import { BookOpen, FileText, Lightbulb, Users, ArrowRight, Search } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const ResearchSupportPage: React.FC = () => {
    const resources = [
        {
            title: 'Paper Writing Guide',
            description: 'Learn how to structure your research paper, cite sources correctly, and get published in top conferences.',
            icon: <FileText className="text-blue-500" size={32} />,
            link: '#'
        },
        {
            title: 'Patent Filing Process',
            description: 'A step-by-step guide to protecting your intellectual property and filing patents in India and globally.',
            icon: <Lightbulb className="text-yellow-500" size={32} />,
            link: '#'
        },
        {
            title: 'Research Grants',
            description: 'Explore available grants and funding opportunities for your innovative projects and research.',
            icon: <Search className="text-green-500" size={32} />,
            link: '#'
        },
        {
            title: 'Find Collaborators',
            description: 'Connect with like-minded researchers and professors to work on joint publications.',
            icon: <Users className="text-purple-500" size={32} />,
            link: '#'
        }
    ];

    return (
        <main className="min-h-screen bg-gray-50/50 dark:bg-[#111] pb-20">
            {/* Hero Section */}
            <div className="relative bg-white dark:bg-[#1A1E26] border-b border-gray-200 dark:border-gray-800 pt-32 pb-20 px-6">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <ScrollReveal>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#16A085]/10 text-[#16A085] font-medium text-sm mb-6">
                            <BookOpen size={16} />
                            <span>Academic Excellence</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
                            Research & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16A085] to-[#1ABC9C]">Innovation</span>
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Turn your ideas into publications and patents. We provide the resources and mentorship you need to succeed in academia.
                        </p>
                    </ScrollReveal>
                </div>
            </div>

            <div className="container mx-auto px-6 py-16 max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {resources.map((resource, i) => (
                        <ScrollReveal key={i} delay={i * 100}>
                            <div className="bg-white dark:bg-[#1A1E26] rounded-2xl border border-gray-100 dark:border-gray-800 p-8 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                                <div className="flex items-start gap-6">
                                    <div className="p-4 rounded-xl bg-gray-50 dark:bg-[#242B38] group-hover:scale-110 transition-transform duration-300">
                                        {resource.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[#16A085] transition-colors">
                                            {resource.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                                            {resource.description}
                                        </p>
                                        <button className="flex items-center gap-2 text-[#16A085] font-bold hover:gap-3 transition-all">
                                            Learn More <ArrowRight size={18} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Call to Action */}
                <ScrollReveal delay={400}>
                    <div className="mt-20 bg-gradient-to-r from-[#16A085] to-[#1ABC9C] rounded-3xl p-12 text-center text-white relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-10" />
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Have a Research Idea?</h2>
                            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                                Submit your proposal and get matched with a mentor who can guide you through the process.
                            </p>
                            <button className="px-8 py-4 rounded-xl bg-white text-[#16A085] font-bold hover:bg-gray-50 transition-colors shadow-lg">
                                Submit Proposal
                            </button>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </main>
    );
};

export default ResearchSupportPage;
