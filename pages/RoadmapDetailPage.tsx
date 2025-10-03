import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FEATURED_ROADMAPS, ROADMAP_CATEGORIES } from '../constants';
import ScrollReveal from '../components/ScrollReveal';

const RoadmapDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    
    const allDomains = ROADMAP_CATEGORIES.flatMap(cat => cat.domains);
    const featuredDomains = FEATURED_ROADMAPS;
    
    const roadmapInfo = allDomains.find(d => d.id === id) || featuredDomains.find(d => d.id === id);

    const roadmapTitle = roadmapInfo
        ? ('title' in roadmapInfo ? roadmapInfo.title : roadmapInfo.name)
        : id;

    return (
        <main className="container mx-auto px-6 py-20 min-h-screen flex items-center justify-center">
            <ScrollReveal>
                <div className="text-center p-8 glassmorphism rounded-xl">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 dark:text-gray-100">
                        Roadmap for <span className="gradient-text">{roadmapTitle}</span>
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                        The detailed, step-by-step learning path for this domain is under construction.
                    </p>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                        Check back soon for an interactive guide!
                    </p>
                    <Link to="/roadmaps" className="bg-primary text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl shadow-primary/40">
                        Back to All Roadmaps
                    </Link>
                </div>
            </ScrollReveal>
        </main>
    );
};

export default RoadmapDetailPage;