import React, { useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { FEATURED_ROADMAPS, ROADMAP_CATEGORIES } from '../constants';
import ScrollReveal from '../components/ScrollReveal';
import { motion } from 'framer-motion';

const levels = [
  { id: 'beginner', name: 'Beginner', description: 'Learn the fundamentals and build a strong foundation', progress: 0 },
  { id: 'intermediate', name: 'Intermediate', description: 'Dive deeper into core concepts and practical applications', progress: 0 },
  { id: 'advanced', name: 'Advanced', description: 'Master complex topics and real-world implementations', progress: 0 },
  { id: 'expert', name: 'Expert', description: 'Specialize and contribute to the field', progress: 0 },
];

const LevelCard: React.FC<{ 
  level: typeof levels[0]; 
  isSelected: boolean; 
  onClick: () => void 
}> = ({ level, isSelected, onClick }) => (
  <motion.div
    onClick={onClick}
    whileHover={{ y: -4 }}
    className={`relative p-6 rounded-xl cursor-pointer transition-all duration-300 ${
      isSelected 
        ? 'bg-gradient-to-r from-[#16A085] to-[#1ABC9C] text-white' 
        : 'bg-white dark:bg-[#1A1E26] border border-gray-200 dark:border-[#2D3748] hover:border-[#16A085] dark:hover:border-[#1ABC9C]'
    }`}
  >
    <div className="flex items-start justify-between">
      <div>
        <h3 className={`text-lg font-semibold ${
          isSelected ? 'text-white' : 'text-gray-900 dark:text-gray-100'
        }`}>
          {level.name}
        </h3>
        <p className={`mt-1 text-sm ${
          isSelected ? 'text-white/90' : 'text-gray-600 dark:text-gray-400'
        }`}>
          {level.description}
        </p>
      </div>
      {isSelected && (
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      )}
    </div>
    {!isSelected && (
      <div className="mt-4 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
        <div 
          className="bg-[#16A085] dark:bg-[#1ABC9C] h-1.5 rounded-full transition-all duration-500" 
          style={{ width: `${level.progress}%` }}
        />
      </div>
    )}
  </motion.div>
);

const RoadmapDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const location = useLocation();
    const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
    
    const allDomains = ROADMAP_CATEGORIES.flatMap(cat => cat.domains);
    const featuredDomains = FEATURED_ROADMAPS;
    
    const roadmapInfo = allDomains.find(d => d.id === id) || featuredDomains.find(d => d.id === id);

    const roadmapTitle = roadmapInfo
        ? ('title' in roadmapInfo ? roadmapInfo.title : roadmapInfo.name)
        : id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    // Check if we're on the levels page
    const isLevelsPage = location.hash === '#/levels';

    if (isLevelsPage) {
        return (
            <main className="min-h-screen bg-gray-50 dark:bg-[#0F172A] py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <Link 
                            to={`/roadmaps/${id}`}
                            className="inline-flex items-center text-[#16A085] dark:text-[#1ABC9C] hover:underline mb-4 text-sm font-medium"
                        >
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Back to Roadmap
                        </Link>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
                            {roadmapTitle} Learning Path
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400">
                            Select your current level to get a personalized learning path
                        </p>
                    </div>

                    <div className="max-w-2xl mx-auto space-y-4">
                        {levels.map((level) => (
                            <LevelCard
                                key={level.id}
                                level={level}
                                isSelected={selectedLevel === level.id}
                                onClick={() => setSelectedLevel(level.id)}
                            />
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <button
                            onClick={() => {
                                if (selectedLevel) {
                                    // Handle level selection
                                    console.log(`Selected level: ${selectedLevel}`);
                                }
                            }}
                            disabled={!selectedLevel}
                            className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                                selectedLevel
                                    ? 'bg-[#16A085] hover:bg-[#1ABC9C] text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                                    : 'bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
                            }`}
                        >
                            Continue to {selectedLevel || 'Select a Level'}
                        </button>
                    </div>
                </div>
            </main>
        );
    }

    // Original roadmap detail page
    return (
        <main className="min-h-screen bg-white dark:bg-[#1A1E26] py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <Link 
                        to="/roadmaps"
                        className="inline-flex items-center text-[#16A085] dark:text-[#1ABC9C] hover:underline mb-4 text-sm font-medium"
                    >
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to All Roadmaps
                    </Link>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                        {roadmapTitle} Roadmap
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                        Master {roadmapTitle} with our structured learning path. Start with the basics and progress to advanced topics.
                    </p>
                    <Link
                        to={`/roadmaps/${id}#/levels`}
                        className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-[#16A085] hover:bg-[#1ABC9C] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                        Start Learning Path
                        <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>

                <div className="mt-16 max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">What you'll learn</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            'Core concepts and fundamentals',
                            'Practical hands-on projects',
                            'Best practices and patterns',
                            'Real-world applications',
                            'Advanced techniques and optimization',
                            'Community and resources'
                        ].map((item, index) => (
                            <div key={index} className="flex items-start">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="flex items-center justify-center h-5 w-5 rounded-full bg-[#16A085]/10 dark:bg-[#1ABC9C]/20">
                                        <svg className="h-3 w-3 text-[#16A085] dark:text-[#1ABC9C]" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                                <p className="ml-3 text-gray-700 dark:text-gray-300">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default RoadmapDetailPage;
