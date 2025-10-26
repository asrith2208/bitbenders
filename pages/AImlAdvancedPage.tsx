import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import LiquidCard from '../components/LiquidCard';

const AImlAdvancedPage: React.FC = () => {
  const tracks = [
    { id: 'leadership', name: 'Leadership', desc: 'AI project management, product strategy, mentoring.' },
    { id: 'research', name: 'Research', desc: 'Contribute to AI papers, experiment with architectures.' },
    { id: 'deep-specialization', name: 'Deep Specialization', desc: 'Focus on Reinforcement Learning or Generative AI.' },
  ];

  return (
    <main className="container mx-auto px-6 py-20">
      <ScrollReveal>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
          Advanced Path — Choose Your Direction
        </h2>
        <p className="text-lg text-gray-500 dark:text-gray-400 text-center mb-16">
          Select how you want to shape your advanced AI/ML journey.
        </p>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-8">
        {tracks.map(t => (
          <ScrollReveal key={t.id}>
            <LiquidCard className="hover:border-primary/60 border dark:border-gray-800/40 transition-all duration-300">
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold gradient-text mb-4">{t.name}</h3>
                <p className="text-gray-500 dark:text-gray-400">{t.desc}</p>
              </div>
            </LiquidCard>
          </ScrollReveal>
        ))}
      </div>
    </main>
  );
};

export default AImlAdvancedPage;
