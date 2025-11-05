import React from 'react';
import { Link } from 'react-router-dom';
import { ROADMAP_CATEGORIES } from '../constants';
import type { RoadmapCategory } from '../types';
import ScrollReveal from '../components/ScrollReveal';

const DomainCategory: React.FC<{ category: RoadmapCategory; delay: number }> = ({
  category,
  delay,
}) => (
  <ScrollReveal delay={delay}>
    <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-8 hover:border-[#F4B400] transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#F4B400]/20 bg-gray-50 dark:bg-gray-900/60">
      <h3 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-6">
        {category.title}
      </h3>
      <div className="flex flex-wrap gap-4">
        {category.domains.map((domain) => (
          <Link
            to={`/roadmaps/${domain.id}`}
            key={domain.id}
            className="px-5 py-2 rounded-full border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 text-sm font-semibold hover:bg-[#F4B400] hover:text-black transition-all duration-300"
          >
            {domain.name}
          </Link>
        ))}
      </div>
    </div>
  </ScrollReveal>
);

const RoadmapsPage: React.FC = () => {
  return (
    <main className="container mx-auto px-6 py-20">
      <ScrollReveal>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">
          The Complete Domain Architecture
        </h2>
        <p className="text-lg text-gray-500 dark:text-gray-400 mt-2 text-center mb-16">
          Select a domain to begin your guided learning journey.
        </p>
      </ScrollReveal>

      <div className="space-y-12">
        {ROADMAP_CATEGORIES.map((category, i) => (
          <DomainCategory key={category.id} category={category} delay={i * 100} />
        ))}
      </div>
    </main>
  );
};

export default RoadmapsPage;
