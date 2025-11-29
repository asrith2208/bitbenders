import React from 'react';
import { Quote, Linkedin, Award, TrendingUp, Play } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const SuccessStoriesPage: React.FC = () => {
    const stories = [
        {
            id: 1,
            name: 'Priya Sharma',
            role: 'SDE II at Google',
            prevRole: 'Student, Tier-3 College',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1000',
            quote: "The DSA roadmap was a game-changer. It structured my preparation and helped me crack Google's coding rounds.",
            companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg'
        },
        {
            id: 2,
            name: 'Rahul Verma',
            role: 'Frontend Engineer at Amazon',
            prevRole: 'Freelancer',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=1000',
            quote: "I learned React and System Design here. The mock interviews gave me the confidence to clear the bar raiser round.",
            companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'
        },
        {
            id: 3,
            name: 'Anjali Gupta',
            role: 'Data Scientist at Microsoft',
            prevRole: 'Analyst',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000',
            quote: "The AI/ML path is comprehensive. From Python basics to Deep Learning, everything is well-curated.",
            companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg'
        }
    ];

    const stats = [
        { label: 'Placements', value: '5000+' },
        { label: 'Avg Hike', value: '150%' },
        { label: 'Top Companies', value: '50+' },
        { label: 'Highest Package', value: '₹1.2 Cr' }
    ];

    return (
        <main className="min-h-screen bg-gray-50/50 dark:bg-[#111] pb-20">
            {/* Hero Section */}
            <div className="relative bg-white dark:bg-[#1A1E26] border-b border-gray-200 dark:border-gray-800 pt-32 pb-20 px-6">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <ScrollReveal>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#16A085]/10 text-[#16A085] font-medium text-sm mb-6">
                            <Award size={16} />
                            <span>Hall of Fame</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16A085] to-[#1ABC9C]">Success Stories</span>
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Meet the learners who transformed their careers. From college students to industry leaders, their journeys inspire us all.
                        </p>
                    </ScrollReveal>
                </div>
            </div>

            {/* Stats Section */}
            <div className="bg-[#16A085] py-12">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
                        {stats.map((stat, i) => (
                            <ScrollReveal key={i} delay={i * 100}>
                                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                                <div className="text-white/80 font-medium">{stat.label}</div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 py-20 max-w-6xl">

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stories.map((story, i) => (
                        <ScrollReveal key={story.id} delay={i * 100}>
                            <div className="bg-white dark:bg-[#1A1E26] rounded-2xl border border-gray-100 dark:border-gray-800 p-8 hover:shadow-xl transition-all duration-300 h-full flex flex-col relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Quote size={64} className="text-[#16A085]" />
                                </div>

                                <div className="flex items-center gap-4 mb-6 relative z-10">
                                    <img src={story.image} alt={story.name} className="w-16 h-16 rounded-full object-cover border-2 border-white dark:border-[#242B38] shadow-md" />
                                    <div>
                                        <h3 className="font-bold text-gray-900 dark:text-white text-lg">{story.name}</h3>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">{story.prevRole}</p>
                                    </div>
                                </div>

                                <div className="mb-8 flex-grow relative z-10">
                                    <p className="text-gray-600 dark:text-gray-300 italic leading-relaxed">"{story.quote}"</p>
                                </div>

                                <div className="mt-auto pt-6 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between relative z-10">
                                    <div>
                                        <p className="text-xs font-bold text-[#16A085] uppercase tracking-wide mb-1">Now At</p>
                                        <div className="h-6 flex items-center">
                                            <img src={story.companyLogo} alt="Company" className="h-full object-contain grayscale group-hover:grayscale-0 transition-all" />
                                        </div>
                                    </div>
                                    <a href="#" className="text-gray-400 hover:text-[#0077b5] transition-colors">
                                        <Linkedin size={20} />
                                    </a>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Video Section */}
                <ScrollReveal delay={300}>
                    <div className="mt-20 bg-[#1A1E26] rounded-3xl overflow-hidden relative h-[400px] flex items-center justify-center group cursor-pointer">
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000"
                            alt="Community"
                            className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-30 transition-opacity duration-500"
                        />
                        <div className="relative z-10 text-center">
                            <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 border border-white/20">
                                <Play size={32} className="text-white fill-current ml-1" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Watch Their Journey</h2>
                            <p className="text-gray-300 max-w-lg mx-auto">See how our community supports each other to achieve their dreams.</p>
                        </div>
                    </div>
                </ScrollReveal>

            </div>
        </main>
    );
};

export default SuccessStoriesPage;
