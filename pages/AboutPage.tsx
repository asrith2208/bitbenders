import React from 'react';
import { Users, Target, Lightbulb, Globe, Cpu, Code, Briefcase, Award, Linkedin, ExternalLink } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const AboutPage: React.FC = () => {
    const whatWeDo = [
        {
            title: 'Skill Development Programs',
            description: 'Practical courses designed and delivered by students, for students.',
            icon: <Code className="text-blue-500" size={24} />
        },
        {
            title: 'Workshops & Bootcamps',
            description: 'Hands-on sessions that help learners turn concepts into real projects.',
            icon: <Users className="text-green-500" size={24} />
        },
        {
            title: 'Hackathons & Tech Events',
            description: 'Platforms for students to innovate, compete, and showcase their talent.',
            icon: <Award className="text-yellow-500" size={24} />
        },
        {
            title: 'Freelancing & Client Projects',
            description: 'Connecting skilled students to real paid projects.',
            icon: <Briefcase className="text-purple-500" size={24} />
        },
        {
            title: 'School-Level Tech Learning',
            description: 'Introducing coding, robotics, and AI to school students early.',
            icon: <Cpu className="text-red-500" size={24} />
        },
        {
            title: 'Frugal AI for Rural Schools',
            description: 'Building low-cost AI learning tools so students in rural or growing schools can access modern tech education without expensive infrastructure.',
            icon: <Lightbulb className="text-orange-500" size={24} />
        }
    ];



    const founders = [
        {
            name: 'T. Asrith Behala',
            role: 'Founder',
            description: 'Student innovator & technologist leading SikshaNext’s vision to empower the next generation.',
            portfolio: 'https://asrithbehala.in',
            image: '/behala.jpg'
        },
        {
            name: 'SK Arafath',
            role: 'Co-Founder',
            description: 'Tech enthusiast and operations lead, focused on scaling programs and building accessible learning pathways.',
            portfolio: 'https://skarafath.in',
            image: '/arafath.jpg'
        }
    ];

    const whyUs = [
        { title: 'By Students, For Students', desc: 'Real solutions to real student needs' },
        { title: 'Accessible & Affordable', desc: 'Designed for schools, colleges & rural learners' },
        { title: 'Future-Ready Programs', desc: 'AI, coding, robotics, freelancing & more' },
        { title: 'Real Outcomes', desc: 'Portfolios, projects, clients, competitions' }
    ];

    return (
        <main className="min-h-screen bg-gray-50/50 dark:bg-[#111] pb-20">
            {/* Hero Section - Who We Are */}
            <div className="relative bg-white dark:bg-[#1A1E26] border-b border-gray-200 dark:border-gray-800 pt-32 pb-20 px-6">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <ScrollReveal>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#16A085]/10 text-[#16A085] font-medium text-sm mb-6">
                            <Globe size={16} />
                            <span>About SikshaNext Pvt. Ltd.</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
                            Empowering the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16A085] to-[#1ABC9C]">Next Generation</span>
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                            SikshaNext is a student-driven skill & innovation platform focused on empowering learners—from school level to college—through practical education, hands-on exposure, and real opportunities.
                        </p>
                        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                            We believe that quality tech education should not be limited to Tier-1 cities; it should reach every student who wants to grow.
                        </p>
                    </ScrollReveal>
                </div>
            </div>

            <div className="container mx-auto px-6 py-16 max-w-6xl">

                {/* What We Do */}
                <ScrollReveal delay={100}>
                    <div className="mb-24">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">What We Do</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {whatWeDo.map((item, i) => (
                                <div key={i} className="bg-white dark:bg-[#1A1E26] rounded-2xl border border-gray-100 dark:border-gray-800 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                    <div className="mb-6 p-4 rounded-xl bg-gray-50 dark:bg-[#242B38] inline-block">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>

                {/* Vision & Mission */}
                <ScrollReveal delay={200}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                        <div className="bg-gradient-to-br from-[#16A085] to-[#1ABC9C] rounded-3xl p-10 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-10 opacity-10">
                                <Target size={120} />
                            </div>
                            <div className="relative z-10">
                                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                    <Target /> Our Vision
                                </h2>
                                <p className="text-lg leading-relaxed text-white/90">
                                    To build India’s most impactful, student-powered learning ecosystem that prepares young minds—from rural schools to urban colleges—for the future of technology, innovation, and entrepreneurship.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-[#1A1E26] rounded-3xl border border-gray-100 dark:border-gray-800 p-10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-10 opacity-5">
                                <Lightbulb size={120} />
                            </div>
                            <div className="relative z-10">
                                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                                    <Lightbulb className="text-[#16A085]" /> Our Mission
                                </h2>
                                <ul className="space-y-4">
                                    {[
                                        'Enable every student to access high-quality, affordable skill education',
                                        'Bring AI, coding, and innovation to school-level learners',
                                        'Create frugal AI tools for rural schools',
                                        'Build a strong community where students learn, teach, build, and earn',
                                        'Provide real-world exposure through events, internships, and freelancing'
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#16A085] flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Founders */}
                <ScrollReveal delay={300}>
                    <div className="mb-24">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Meet the Founders</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                            {founders.map((founder, i) => (
                                <div key={i} className="bg-white dark:bg-[#1A1E26] rounded-2xl border border-gray-100 dark:border-gray-800 p-8 text-center hover:shadow-xl transition-all duration-300">
                                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6 border-4 border-gray-50 dark:border-[#242B38]">
                                        <img src={founder.image} alt={founder.name} className="w-full h-full object-cover" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{founder.name}</h3>
                                    <p className="text-[#16A085] font-medium mb-4">{founder.role}</p>
                                    <p className="text-gray-600 dark:text-gray-400 mb-6">{founder.description}</p>
                                    <a
                                        href={founder.portfolio}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white hover:text-[#16A085] transition-colors"
                                    >
                                        View Portfolio <ExternalLink size={14} />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>

                {/* Why SikshaNext */}
                <ScrollReveal delay={400}>
                    <div className="bg-[#1A1E26] rounded-3xl p-12 text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold text-white mb-12">Why SikshaNext?</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {whyUs.map((item, i) => (
                                    <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                                        <h3 className="text-lg font-bold text-[#16A085] mb-2">{item.title}</h3>
                                        <p className="text-gray-300 text-sm">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

            </div>
        </main>
    );
};

export default AboutPage;
