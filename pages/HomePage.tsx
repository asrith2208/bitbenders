import React from 'react';
import { Link } from 'react-router-dom';
import { FEATURED_ROADMAPS } from '../constants';
import ScrollReveal from '../components/ScrollReveal';
import LiquidCard from '../components/LiquidCard';

const HeroSection: React.FC = () => (
    <section className="container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center justify-between min-h-[70vh]">
        <div className="lg:w-1/2 mb-10 lg:mb-0">
            <ScrollReveal>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 text-gray-900 dark:text-gray-100">
                    Shape Your <span className="gradient-text animate-subtle-pulse">Tech Future</span>
                </h1>
                <p className="text-lg md:text-xl max-w-lg text-gray-600 dark:text-gray-400 mb-8">
                    Join the ultimate platform for student developers. Learn, build, earn, and connect with the future of technology.
                </p>

                <div className="flex flex-wrap gap-4 mb-12">
                    <Link to="/roadmaps" className="bg-gray-900 dark:bg-primary text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl shadow-gray-500/20 dark:shadow-primary/40">
                        Start Learning
                    </Link>
                    <Link to="/projects" className="glassmorphism border border-gray-300 dark:border-gray-700 dark:text-gray-300 text-gray-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors duration-300">
                        Explore Projects
                    </Link>
                </div>
            
                <div className="flex space-x-10 text-center">
                    <ScrollReveal delay={200}>
                        <p className="text-3xl font-bold gradient-text">10K+</p>
                        <p className="text-gray-500 dark:text-gray-400">Students</p>
                    </ScrollReveal>
                    <ScrollReveal delay={300}>
                        <p className="text-3xl font-bold gradient-text">500+</p>
                        <p className="text-gray-500 dark:text-gray-400">Projects</p>
                    </ScrollReveal>
                    <ScrollReveal delay={400}>
                        <p className="text-3xl font-bold gradient-text">50+</p>
                        <p className="text-gray-500 dark:text-gray-400">Mentors</p>
                    </ScrollReveal>
                </div>
            </ScrollReveal>
        </div>
        
        <div className="lg:w-1/2 w-full flex justify-center items-center h-full">
            <ScrollReveal delay={500}>
                <div className="w-full lg:w-4/5 hero-visual-box relative overflow-hidden flex items-center justify-center p-6">
                     <video
                        src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50"></div>
                    <div className="relative z-10 text-center">
                         <p className="text-gray-300 dark:text-gray-400 text-xl font-semibold">
                            [Placeholder: 3D Animated Logo & Data Stream Visualization]
                        </p>
                    </div>
                    <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-primary/20 dark:bg-gray-800/50 flex items-center justify-center border border-primary/30 dark:border-gray-700 animate-pulse-slow z-10">
                        <span className="material-icons text-primary dark:text-white">rocket_launch</span>
                    </div>
                </div>
            </ScrollReveal>
        </div>
    </section>
);


const features = [
    { icon: 'book', title: 'Learning Roadmaps', description: 'Step-by-step career guides for Web Dev, AI, Data Science, and more.', link: '/roadmaps' },
    { icon: 'storefront', title: 'Project Marketplace', description: 'Buy, sell, and collaborate on real-world projects with payment systems.', link: '/projects' },
    { icon: 'group', title: 'Team Recruitment', description: 'Find teammates for projects with role-wise and tech-stack matching.', link: '/community' },
    { icon: 'attach_money', title: 'Earn Money', description: 'Complete tasks, freelance, and earn through our work exchange board.', link: '/services' },
    { icon: 'smart_toy', title: 'AI-Powered Tools', description: 'AI roadmap generator, resume builder, and code reviewer.', link: '/services' },
    { icon: 'trophy', title: 'Gamification', description: 'Badges, points, leaderboards, and recognition for contributions.', link: '/community' },
];

const FeaturesGridSection: React.FC = () => (
    <section className="py-20" id="services">
        <div className="container mx-auto px-6">
            <ScrollReveal>
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100">Everything You Need to Succeed</h2>
                    <p className="text-lg text-gray-500 dark:text-gray-400 mt-2">From learning roadmaps to earning opportunities, we’ve built the complete ecosystem for student developers.</p>
                </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, i) => (
                    <ScrollReveal key={feature.title} delay={i * 100}>
                       <Link to={feature.link} className="h-full block">
                            <LiquidCard contentClassName="p-8 h-full">
                                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gray-100 dark:bg-gray-800 mb-4 transition-colors duration-300 group-hover:bg-primary/20">
                                    <span className="material-icons text-gray-900 dark:text-white group-hover:text-primary text-2xl">{feature.icon}</span>
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">{feature.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                            </LiquidCard>
                        </Link>
                    </ScrollReveal>
                ))}
            </div>
        </div>
    </section>
);

const colorClasses = {
    indigo: { bg: 'bg-indigo-500/10 dark:bg-indigo-900/40', text: 'text-indigo-400' },
    teal: { bg: 'bg-teal-500/10 dark:bg-teal-900/40', text: 'text-teal-400' },
    purple: { bg: 'bg-purple-500/10 dark:bg-purple-900/40', text: 'text-purple-400' },
    red: { bg: 'bg-red-500/10 dark:bg-red-900/40', text: 'text-red-400' },
};

const RoadmapsPathSection: React.FC = () => (
    <section className="py-20" id="roadmaps">
        <div className="container mx-auto px-6">
            <ScrollReveal>
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100">Choose Your Path</h2>
                    <p className="text-lg text-gray-500 dark:text-gray-400 mt-2">Structured learning roadmaps designed by industry experts.</p>
                </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {FEATURED_ROADMAPS.map((roadmap, i) => {
                    const colors = colorClasses[roadmap.color as keyof typeof colorClasses] || colorClasses.indigo;
                    return (
                        <ScrollReveal key={roadmap.id} delay={i * 100}>
                            <LiquidCard>
                                <Link to={`/roadmaps/${roadmap.id}`} className="p-6 block h-full">
                                    <div className={`flex items-center justify-center h-16 w-16 rounded-xl ${colors.bg} mb-4`}>
                                        <span className={`material-icons text-4xl ${colors.text}`}>{roadmap.icon}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-1 text-gray-900 dark:text-gray-100">{roadmap.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{roadmap.description}</p>
                                    <div className="flex justify-between items-center text-primary">
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{roadmap.duration} • {roadmap.level}</p>
                                        <span className="material-icons transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
                                    </div>
                                </Link>
                            </LiquidCard>
                        </ScrollReveal>
                    )
                })}
            </div>
            <ScrollReveal delay={400}>
                <div className="text-center">
                    <Link to="/roadmaps" className="inline-flex items-center space-x-2 text-lg font-semibold gradient-text hover:opacity-80 transition-opacity">
                        <span>View All 15+ Roadmaps</span>
                        <span className="material-icons text-xl ml-1">trending_flat</span>
                    </Link>
                </div>
            </ScrollReveal>
        </div>
    </section>
);

const CommunitySection: React.FC = () => (
    <section className="pt-20" id="community">
        <div className="container mx-auto px-6 pb-16">
            <div className="flex flex-col items-center text-center">
                <div className="w-full lg:w-3/4">
                    <ScrollReveal>
                        <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">Join a Thriving Community</h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">Connect with like-minded developers, share knowledge, and grow together in our vibrant ecosystem.</p>
                        <div className="space-y-6 text-left max-w-lg mx-auto">
                            <div className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300">
                                <span className="material-icons text-primary text-2xl mt-1">chat</span>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-gray-100">Q&A Forums</h4>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">Ask questions, share knowledge, and help others grow.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300">
                                <span className="material-icons text-primary text-2xl mt-1">person_pin</span>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-gray-100">Mentorship</h4>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">Get guidance from senior students and industry experts.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300">
                                <span className="material-icons text-primary text-2xl mt-1">event</span>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-gray-100">Events & Hackathons</h4>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">Participate in workshops, hackathons, and networking events.</p>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </div>
    </section>
);

const CallToActionSection: React.FC = () => (
    <section className="py-20 bg-gray-900 dark:bg-gray-950/80">
        <ScrollReveal>
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-4 text-white">Ready to Transform Your Future?</h2>
                <p className="text-lg text-gray-400 mb-8">Join thousands of students who are already building their tech careers with Bit Benders.</p>
                 <div className="flex justify-center flex-wrap gap-4">
                    <Link to="/roadmaps" className="bg-white text-gray-900 font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                        Start Your Journey
                    </Link>
                    <Link to="/about" className="glassmorphism text-white font-semibold px-8 py-3 rounded-lg border border-white/20 hover:border-white transition-all duration-300 transform hover:scale-105">
                        Learn More
                    </Link>
                </div>
                <p className="text-sm text-gray-500 mt-4">Join 10,000+ students • Free to start • No credit card required</p>
            </div>
        </ScrollReveal>
    </section>
);

const HomePage: React.FC = () => {
    return (
        <main className="relative z-10">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-20 dark:block hidden">
                <div className="absolute w-[150%] h-[150%] -top-[25%] -left-[25%] bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_70%)] animate-pulse-slow"></div>
                <div className="absolute w-full h-full bg-[radial-gradient(circle_at_100%_0%,rgba(20,184,166,0.1),transparent_70%)]"></div>
            </div>
            <HeroSection />
            <FeaturesGridSection />
            <RoadmapsPathSection />
            <CommunitySection />
            <CallToActionSection />
        </main>
    );
};

export default HomePage;