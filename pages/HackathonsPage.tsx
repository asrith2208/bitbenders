import React, { useState } from 'react';
import { Calendar, Trophy, MapPin, Users, ArrowRight, Clock, Filter, Search } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const HackathonsPage: React.FC = () => {
    const [filter, setFilter] = useState('all');

    const hackathons = [
        {
            id: 1,
            title: 'Global AI Challenge 2024',
            date: 'Dec 15 - Dec 17, 2024',
            prize: '$50,000',
            participants: '5000+',
            mode: 'Online',
            status: 'Upcoming',
            tags: ['AI/ML', 'Python', 'Cloud'],
            image: 'https://images.unsplash.com/photo-1504384308090-c54be3855833?auto=format&fit=crop&q=80&w=1000'
        },
        {
            id: 2,
            title: 'Web3 Innovation Summit',
            date: 'Nov 20 - Nov 22, 2024',
            prize: '$25,000',
            participants: '2000+',
            mode: 'Hybrid (NYC)',
            status: 'Ongoing',
            tags: ['Blockchain', 'Solidity', 'DeFi'],
            image: 'https://images.unsplash.com/photo-1516245834210-c4c14278733f?auto=format&fit=crop&q=80&w=1000'
        },
        {
            id: 3,
            title: 'Green Tech Hackathon',
            date: 'Jan 10 - Jan 12, 2025',
            prize: '$15,000',
            participants: '1500+',
            mode: 'Online',
            status: 'Upcoming',
            tags: ['IoT', 'Sustainability', 'Hardware'],
            image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000'
        },
        {
            id: 4,
            title: 'FinTech Revolution',
            date: 'Oct 05 - Oct 07, 2024',
            prize: '$30,000',
            participants: '3000+',
            mode: 'London',
            status: 'Past',
            tags: ['Finance', 'API', 'Security'],
            image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1000'
        }
    ];

    const filteredHackathons = filter === 'all'
        ? hackathons
        : hackathons.filter(h => h.status.toLowerCase() === filter.toLowerCase());

    return (
        <main className="min-h-screen bg-gray-50/50 dark:bg-[#111] pb-20">
            {/* Hero Section */}
            <div className="relative bg-white dark:bg-[#1A1E26] border-b border-gray-200 dark:border-gray-800 pt-32 pb-20 px-6">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <ScrollReveal>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#16A085]/10 text-[#16A085] font-medium text-sm mb-6">
                            <Trophy size={16} />
                            <span>Compete & Win</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
                            Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16A085] to-[#1ABC9C]">Hackathons</span>
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Join the world's biggest coding competitions. Build innovative solutions, win prizes, and get hired by top tech companies.
                        </p>
                    </ScrollReveal>
                </div>
            </div>

            <div className="container mx-auto px-6 py-16">

                {/* Filters */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
                    <div className="flex items-center gap-2 bg-white dark:bg-[#1A1E26] p-1 rounded-xl border border-gray-100 dark:border-gray-800">
                        {['all', 'upcoming', 'ongoing', 'past'].map((f) => (
                            <button
                                key={f}
                                onClick={() => setFilter(f)}
                                className={`
                  px-4 py-2 rounded-lg text-sm font-medium capitalize transition-all duration-200
                  ${filter === f
                                        ? 'bg-[#16A085] text-white shadow-md'
                                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-[#242B38]'}
                `}
                            >
                                {f}
                            </button>
                        ))}
                    </div>
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search hackathons..."
                            className="pl-10 pr-4 py-2 rounded-xl bg-white dark:bg-[#1A1E26] border border-gray-100 dark:border-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#16A085]/50"
                        />
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredHackathons.map((hackathon, i) => (
                        <ScrollReveal key={hackathon.id} delay={i * 100}>
                            <div className="group bg-white dark:bg-[#1A1E26] rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                <div className="relative h-48 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                                    <img
                                        src={hackathon.image}
                                        alt={hackathon.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 right-4 z-20">
                                        <span className={`
                      px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide
                      ${hackathon.status === 'Ongoing' ? 'bg-green-500 text-white animate-pulse' :
                                                hackathon.status === 'Upcoming' ? 'bg-blue-500 text-white' : 'bg-gray-500 text-white'}
                    `}>
                                            {hackathon.status}
                                        </span>
                                    </div>
                                    <div className="absolute bottom-4 left-4 z-20 text-white">
                                        <h3 className="text-2xl font-bold mb-1">{hackathon.title}</h3>
                                        <div className="flex items-center gap-4 text-sm opacity-90">
                                            <span className="flex items-center gap-1"><Calendar size={14} /> {hackathon.date}</span>
                                            <span className="flex items-center gap-1"><MapPin size={14} /> {hackathon.mode}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-6">
                                        <div>
                                            <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Prize Pool</p>
                                            <p className="text-xl font-bold text-[#16A085]">{hackathon.prize}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Participants</p>
                                            <div className="flex items-center justify-end gap-1 font-medium text-gray-700 dark:text-gray-300">
                                                <Users size={16} />
                                                {hackathon.participants}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {hackathon.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1 rounded-lg bg-gray-50 dark:bg-[#242B38] text-xs font-medium text-gray-600 dark:text-gray-400">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <button className="w-full py-3 rounded-xl bg-[#16A085] hover:bg-[#1ABC9C] text-white font-bold transition-colors flex items-center justify-center gap-2">
                                        Register Now
                                        <ArrowRight size={18} />
                                    </button>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default HackathonsPage;
