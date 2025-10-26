import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import LiquidCard from '../components/LiquidCard';

const AImlMediumPage: React.FC = () => {
  const paths = [
    { id: 'ml', name: 'Machine Learning', desc: 'Supervised/Unsupervised learning, model tuning, deployment.' },
    { id: 'nlp', name: 'Natural Language Processing', desc: 'Text preprocessing, transformers, LLMs.' },
    { id: 'cv', name: 'Computer Vision', desc: 'CNNs, object detection, image segmentation.' },
    { id: 'mlops', name: 'MLOps', desc: 'Pipelines, monitoring, CI/CD for ML models.' },
  ];

  return (
    <main className="container mx-auto px-6 py-20">
      <ScrollReveal>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
          Mid-Level Path — Pick Your Specialization
        </h2>
        <p className="text-lg text-gray-500 dark:text-gray-400 text-center mb-16">
          Choose a field you’d like to master within AI/ML.
        </p>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {paths.map(p => (
          <ScrollReveal key={p.id}>
            <LiquidCard className="hover:border-primary/60 border dark:border-gray-800/40 transition-all duration-300">
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold gradient-text mb-4">{p.name}</h3>
                <p className="text-gray-500 dark:text-gray-400">{p.desc}</p>
              </div>
            </LiquidCard>
          </ScrollReveal>
        ))}
      </div>
    </main>
  );
};

export default AImlMediumPage;
