
import React from 'react';
import { Link } from 'react-router-dom';
import { ROADMAP_CATEGORIES } from '../constants';
import type { RoadmapCategory } from '../types';
import ScrollReveal from '../components/ScrollReveal';
import LiquidCard from '../components/LiquidCard';
import MagneticLink from '../components/MagneticLink';

const DomainCategory: React.FC<{ category: RoadmapCategory, delay: number }> = ({ category, delay }) => (
    <ScrollReveal delay={delay}>
        <LiquidCard className="border border-transparent dark:border-gray-800/50 hover:border-primary/50">
            <div className="p-8">
                <h3 className="text-3xl font-extrabold gradient-text mb-6">{category.title}</h3>
                <div className="flex flex-wrap gap-4">
                    {category.domains.map(domain => (
                        <Link to={`/roadmaps/${domain.id}`} key={domain.id}>
                           <MagneticLink>
                                <span className="domain-pill">{domain.name}</span>
                            </MagneticLink>
                        </Link>
                    ))}
                </div>
            </div>
        </LiquidCard>
    </ScrollReveal>
);

const RoadmapsPage: React.FC = () => {
    return (
        <main className="container mx-auto px-6 py-20">
            <ScrollReveal>
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">The Complete Domain Architecture</h2>
                <p className="text-lg text-gray-500 dark:text-gray-400 mt-2 text-center mb-16">Select a domain to begin your guided learning journey.</p>
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