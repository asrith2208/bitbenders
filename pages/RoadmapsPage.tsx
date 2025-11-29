import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Search, ArrowRight, BookOpen, Layers, Award } from 'lucide-react';
import { ROADMAP_CATEGORIES } from '../constants';
import type { RoadmapCategory } from '../types';
import ScrollReveal from '../components/ScrollReveal';

const levels = [
  { id: 'beginner', name: 'Beginner', icon: BookOpen, color: 'text-green-500', bg: 'bg-green-500/10' },
  { id: 'intermediate', name: 'Medium', icon: Layers, color: 'text-blue-500', bg: 'bg-blue-500/10' },
  { id: 'advanced', name: 'Advanced', icon: Award, color: 'text-purple-500', bg: 'bg-purple-500/10' },
  { id: 'expert', name: 'Expert', icon: StarIcon, color: 'text-orange-500', bg: 'bg-orange-500/10' }
];

// Helper for custom icon since Star is not imported from lucide-react in the list above but used
function StarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

const getPagePath = (categoryId: string, domainId: string, levelId: string) => {
  if (domainId.toLowerCase() === 'ai-ml') {
    const levelMap: Record<string, string> = {
      'beginner': '/roadmaps/ai-ml/beginner',
      'intermediate': '/roadmaps/ai-ml/medium',
      'advanced': '/roadmaps/ai-ml/advanced',
      'expert': '/roadmaps/ai-ml/expert'
    };
    return levelMap[levelId] || '#';
  }
  return `/roadmaps/${domainId}/${levelId}`;
};

const DomainCard: React.FC<{ domain: any; categoryId: string }> = ({ domain, categoryId }) => (
  <div className="group relative flex flex-col h-full bg-white dark:bg-[#1A1E26] rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-[#16A085] dark:hover:border-[#1ABC9C] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden">

    {/* Card Header */}
    <div className="p-6 pb-4 flex items-start justify-between">
      <div>
        <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#16A085]/10 to-[#1ABC9C]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <span className="text-2xl">{domain.emoji}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#16A085] dark:group-hover:text-[#1ABC9C] transition-colors">
          {domain.name}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
          {domain.description}
        </p>
      </div>
    </div>

    {/* Divider */}
    <div className="w-full h-px bg-gray-50 dark:bg-gray-800 my-2" />

    {/* Levels Grid */}
    <div className="p-6 pt-2 mt-auto">
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
        Select Level
      </p>
      <div className="grid grid-cols-2 gap-2">
        {levels.map((level) => {
          const Icon = level.icon;
          const levelPath = getPagePath(categoryId, domain.id, level.id);
          return (
            <Link
              key={level.id}
              to={levelPath}
              className={`
                flex items-center gap-2 p-2 rounded-lg border border-transparent
                hover:border-gray-200 dark:hover:border-gray-700
                bg-gray-50 dark:bg-[#242B38] hover:bg-white dark:hover:bg-[#2D3748]
                transition-all duration-200 group/btn
              `}
            >
              <div className={`p-1.5 rounded-md ${level.bg} ${level.color}`}>
                <Icon size={14} />
              </div>
              <span className="text-xs font-medium text-gray-700 dark:text-gray-300 group-hover/btn:text-gray-900 dark:group-hover/btn:text-white">
                {level.name}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  </div>
);

const RoadmapsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter categories and domains based on search query
  const filteredCategories = ROADMAP_CATEGORIES.map(category => ({
    ...category,
    domains: category.domains.filter(domain =>
      domain.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.domains.length > 0);

  return (
    <main className="min-h-screen bg-gray-50/50 dark:bg-[#111] pb-20">
      {/* Hero Section */}
      <div className="relative bg-white dark:bg-[#1A1E26] border-b border-gray-200 dark:border-gray-800 pt-32 pb-20 px-6">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
              Master Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16A085] to-[#1ABC9C]">Tech Career</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Comprehensive, step-by-step learning paths curated by industry experts.
              From beginner basics to advanced mastery.
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400 group-focus-within:text-[#16A085] transition-colors" />
              </div>
              <input
                type="text"
                placeholder="Search for a skill, role, or technology..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-12 pr-4 py-4 bg-white dark:bg-[#242B38] border border-gray-200 dark:border-gray-700 rounded-2xl text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#16A085]/50 focus:border-transparent shadow-lg shadow-gray-100/50 dark:shadow-none transition-all duration-300"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 py-16">
        {filteredCategories.length > 0 ? (
          <div className="space-y-20">
            {filteredCategories.map((category, i) => (
              <ScrollReveal key={category.id} delay={i * 100}>
                <div className="mb-8 flex items-center gap-3">
                  <span className="text-3xl">{category.emoji}</span>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                  {category.domains.map((domain) => (
                    <DomainCard
                      key={domain.id}
                      domain={domain}
                      categoryId={category.id}
                    />
                  ))}
                </div>
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 mb-4">
              <Search className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No roadmaps found</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Try adjusting your search terms or browse our categories below.
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-6 text-[#16A085] hover:text-[#1ABC9C] font-medium hover:underline"
            >
              Clear search
            </button>
          </div>
        )}

        {/* Assessment CTA */}
        <ScrollReveal delay={200}>
          <div className="mt-24 relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#16A085] to-[#1ABC9C] p-12 text-center">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-10" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4">
                Unsure where to begin?
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Take our AI-powered skills assessment to get a personalized learning path recommendation tailored just for you.
              </p>
              <Link
                to="/assessment"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#16A085] font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Start Assessment
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
};

export default RoadmapsPage;
