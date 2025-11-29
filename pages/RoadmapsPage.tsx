import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ROADMAP_CATEGORIES } from '../constants';
import type { RoadmapCategory } from '../types';
import ScrollReveal from '../components/ScrollReveal';

const levels = [
  { id: 'beginner', name: 'Beginner', description: 'Start your journey with the basics' },
  { id: 'intermediate', name: 'Intermediate', description: 'Build on your knowledge' },
  { id: 'advanced', name: 'Advanced', description: 'Master complex concepts' },
  { id: 'expert', name: 'Expert', description: 'Become a domain authority' }
];

const getPagePath = (categoryId: string, domainId: string, levelId: string) => {
  // For AI/ML domain
  if (domainId.toLowerCase() === 'ai-ml') {
    const levelMap: Record<string, string> = {
      'beginner': '/aiml-beginner',
      'intermediate': '/aiml-medium',
      'advanced': '/aiml-advanced',
      'expert': '/aiml-expert'
    };
    return levelMap[levelId] || '#';
  }
  // Add other domains here as needed
  return `/${domainId}-${levelId}`;
};

const DomainCard: React.FC<{ domain: any; categoryId: string }> = ({ domain, categoryId }) => (
  <div className="group relative p-6 bg-white dark:bg-[#1A1E26] rounded-xl border border-gray-200 dark:border-[#2D3748] hover:border-[#16A085] dark:hover:border-[#1ABC9C] transition-all duration-300 hover:shadow-lg">
    <div className="flex justify-between items-start">
      <div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">{domain.name}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm">{domain.description}</p>
      </div>
      <div className="flex-shrink-0 ml-4">
        <div className="h-10 w-10 rounded-full bg-[#16A085]/10 dark:bg-[#1ABC9C]/20 flex items-center justify-center">
          <span className="text-[#16A085] dark:text-[#1ABC9C] text-lg">{domain.emoji}</span>
        </div>
      </div>
    </div>
    
    <div className="mt-6 pt-4 border-t border-gray-100 dark:border-[#2D3748]">
      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">Learning Path</h4>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {levels.map((level) => {
          const levelPath = getPagePath(categoryId, domain.id, level.id);
          return (
            <Link
              key={level.id}
              to={levelPath}
              className="block p-3 text-center rounded-lg border border-gray-200 dark:border-[#2D3748] hover:border-[#16A085] dark:hover:border-[#1ABC9C] hover:bg-[#16A085]/5 dark:hover:bg-[#1ABC9C]/5 transition-colors"
            >
              <div className="h-8 w-8 mx-auto mb-2 rounded-full bg-[#16A085]/10 dark:bg-[#1ABC9C]/20 flex items-center justify-center">
                <span className="text-[#16A085] dark:text-[#1ABC9C] text-sm font-medium">
                  {level.name.charAt(0)}
                </span>
              </div>
              <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                {level.name}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  </div>
);

const DomainCategory: React.FC<{ category: RoadmapCategory; delay: number }> = ({
  category,
  delay,
}) => (
  <ScrollReveal delay={delay}>
    <div className="mb-12">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center">
        <span className="mr-3">{category.emoji}</span>
        {category.title}
      </h3>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {category.domains.map((domain) => (
          <DomainCard 
            key={domain.id} 
            domain={domain} 
            categoryId={category.id}
          />
        ))}
      </div>
    </div>
  </ScrollReveal>
);

const RoadmapsPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId?: string }>();

  return (
    <main className="container mx-auto px-4 sm:px-6 py-12">
      <ScrollReveal>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Learning Paths
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Choose a domain and start your learning journey at any level. Our structured paths will guide you from beginner to expert.
          </p>
        </div>

        <div className="space-y-16">
          {ROADMAP_CATEGORIES.map((category, i) => (
            <DomainCategory 
              key={category.id} 
              category={category} 
              delay={i * 100} 
            />
          ))}
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Not sure where to start?
          </h2>
          <Link
            to="/assessment"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-[#16A085] hover:bg-[#1ABC9C] shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Take our skill assessment
            <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </ScrollReveal>
    </main>
  );
};

export default RoadmapsPage;
