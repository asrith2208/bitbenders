import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import LiquidCard from '../components/LiquidCard';
import MagneticLink from '../components/MagneticLink';

const AImlLevelPage: React.FC = () => (
  <main className="container mx-auto px-6 py-20">
    <ScrollReveal>
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
        Choose Your AI/ML Learning Level
      </h2>
      <p className="text-lg text-gray-500 dark:text-gray-400 text-center mb-16">
        Select a level to begin your personalized learning journey.
      </p>
    </ScrollReveal>

    <div className="grid md:grid-cols-3 gap-8">
      {[
        { id: 'beginner', name: 'Beginner', desc: 'Start from the basics — Python, stats, and ML fundamentals.' },
        { id: 'medium', name: 'Medium', desc: 'Pick specialization like ML, NLP, CV, or MLOps.' },
        { id: 'advanced', name: 'Advanced', desc: 'Leadership, Research, or Deep Specialization tracks.' },
      ].map(level => (
        <ScrollReveal key={level.id}>
          <Link to={`/roadmaps/ai-ml/${level.id}`}>
            <MagneticLink>
              <LiquidCard className="hover:border-primary/60 border dark:border-gray-800/40 transition-all duration-300">
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-bold gradient-text mb-4">{level.name}</h3>
                  <p className="text-gray-500 dark:text-gray-400">{level.desc}</p>
                </div>
              </LiquidCard>
            </MagneticLink>
          </Link>
        </ScrollReveal>
      ))}
    </div>
  </main>
);

export default AImlLevelPage;
