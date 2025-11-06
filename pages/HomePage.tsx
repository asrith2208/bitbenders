import React from 'react';
import { Link } from 'react-router-dom';
import { FEATURED_ROADMAPS } from '../constants';

const HeroSection: React.FC = () => {
  return (
    <section
      className="
        container mx-auto px-6 py-16 flex flex-col lg:flex-row items-center justify-between min-h-[70vh]
        bg-white dark:bg-gradient-to-r dark:from-[#2A2A2A] dark:via-[#333333] dark:to-[#3D3D3D]
        transition-colors duration-500
      "
    >
      <div className="lg:w-1/2 mb-10 lg:mb-0">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 dark:text-gray-100">
          Shape Your <span className="text-[#FFC107]">Tech Future</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-md">
          Join the platform built for student developers — learn, build, and grow with community support.
        </p>
        <div className="flex flex-wrap gap-4 mb-8">
          <Link
            to="/roadmaps"
            className="bg-[#FFC107] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#ffb300] transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Start Learning
          </Link>
          <Link
            to="/projects"
            className="border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-md hover:border-[#FFC107] hover:text-[#FFC107] transition-all duration-300"
          >
            Explore Projects
          </Link>
        </div>
        <div className="flex space-x-8">
          {[
            { label: 'Students', value: '10K+' },
            { label: 'Projects', value: '500+' },
            { label: 'Mentors', value: '50+' },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-2xl font-bold text-[#FFC107]">{item.value}</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Video */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <div className="rounded-xl overflow-hidden shadow-lg w-full max-w-lg bg-gray-100 dark:bg-gray-800 aspect-video">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/AY5qcIq5u2g?autoplay=1&mute=1&loop=1&playlist=AY5qcIq5u2g&controls=1&modestbranding=1&rel=0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

const features = [
  { icon: 'book', title: 'Learning Roadmaps', description: 'Step-by-step career guides for Web Dev, AI, Data Science, and more.', link: '/roadmaps' },
  { icon: 'storefront', title: 'Project Marketplace', description: 'Collaborate or showcase real-world projects.', link: '/projects' },
  { icon: 'group', title: 'Team Recruitment', description: 'Find teammates with matching skills.', link: '/community' },
  { icon: 'attach_money', title: 'Earn Money', description: 'Complete freelance tasks and earn.', link: '/services' },
  { icon: 'smart_toy', title: 'AI Tools', description: 'AI roadmap generator and resume builder.', link: '/services' },
  { icon: 'trophy', title: 'Gamification', description: 'Earn badges and points for contributions.', link: '/community' },
];

const FeaturesGridSection: React.FC = () => (
  <section className="py-16 bg-white dark:bg-[#2E2E2E] transition-colors duration-500" id="services">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Everything You Need</h2>
        <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">All-in-one ecosystem for student developers.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => (
          <Link
            key={feature.title}
            to={feature.link}
            className="block border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:border-[#FFC107] transition"
          >
            <div className="flex items-center mb-3">
              <span className="material-icons text-[#FFC107] mr-3">{feature.icon}</span>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">{feature.title}</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

const RoadmapsPathSection: React.FC = () => (
  <section className="py-16 bg-white dark:bg-gradient-to-r dark:from-[#2A2A2A] dark:via-[#333333] dark:to-[#3D3D3D] transition-colors duration-500" id="roadmaps">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Choose Your Path</h2>
        <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">Explore structured roadmaps made by experts.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {FEATURED_ROADMAPS.map((roadmap) => (
          <Link
            key={roadmap.id}
            to={`/roadmaps/${roadmap.id}`}
            className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:border-[#FFC107] transition"
          >
            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-amber-100 dark:bg-amber-900/30 mb-4">
              <span className="material-icons text-[#FFC107]">{roadmap.icon}</span>
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">{roadmap.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{roadmap.description}</p>
            <p className="text-xs text-gray-500 dark:text-gray-500">
              {roadmap.duration} • {roadmap.level}
            </p>
          </Link>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link to="/roadmaps" className="text-[#FFC107] font-semibold hover:underline">
          View All 15+ Roadmaps →
        </Link>
      </div>
    </div>
  </section>
);

const CommunitySection: React.FC = () => (
  <section className="py-16 bg-white dark:bg-[#2E2E2E] transition-colors duration-500" id="community">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Join the Community</h2>
      <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 text-sm">
        Connect with like-minded developers, share knowledge, and grow together.
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-6 text-left">
        {[
          { icon: 'chat', title: 'Q&A Forums', desc: 'Ask and answer questions with peers.' },
          { icon: 'person_pin', title: 'Mentorship', desc: 'Guidance from seniors and experts.' },
          { icon: 'event', title: 'Events', desc: 'Hackathons, workshops & networking.' },
        ].map((item) => (
          <div
            key={item.title}
            className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 max-w-sm hover:border-[#FFC107] transition"
          >
            <span className="material-icons text-[#FFC107] mb-2">{item.icon}</span>
            <h4 className="font-semibold text-gray-900 dark:text-gray-100">{item.title}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CallToActionSection: React.FC = () => (
  <section className="py-16 bg-gray-900 dark:bg-black text-center text-white transition-colors duration-500">
    <h2 className="text-3xl font-bold mb-4">Ready to Start?</h2>
    <p className="text-gray-400 mb-6 text-sm">Join thousands of students building their tech careers.</p>
    <div className="flex justify-center flex-wrap gap-4">
      <Link
        to="/roadmaps"
        className="bg-[#FFC107] text-white font-semibold px-8 py-3 rounded-md hover:bg-[#ffb300] transition"
      >
        Start Learning
      </Link>
      <Link
        to="/about"
        className="border border-white/40 text-white px-8 py-3 rounded-md hover:bg-white/10 transition"
      >
        Learn More
      </Link>
    </div>
  </section>
);

const HomePage: React.FC = () => {
  return (
    <main className="bg-white dark:bg-gradient-to-r dark:from-[#2A2A2A] dark:via-[#333333] dark:to-[#3D3D3D] transition-colors duration-500">
      <HeroSection />
      <FeaturesGridSection />
      <RoadmapsPathSection />
      <CommunitySection />
      <CallToActionSection />
    </main>
  );
};

export default HomePage;
