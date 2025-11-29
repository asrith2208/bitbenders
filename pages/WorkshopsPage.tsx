import React from 'react';
import { Calendar, Clock, Users, Video, Mic, ArrowRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const WorkshopsPage: React.FC = () => {
    const workshops = [
        {
            id: 1,
            title: 'Mastering React Server Components',
            date: 'Dec 10, 2024',
            time: '10:00 AM - 2:00 PM EST',
            instructor: 'Sarah Drasner',
            role: 'Director of Engineering, Google',
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100',
            image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1000',
            tags: ['React', 'Frontend', 'Performance']
        },
        {
            id: 2,
            title: 'System Design for Scale',
            date: 'Dec 18, 2024',
            time: '1:00 PM - 5:00 PM EST',
            instructor: 'Alex Xu',
            role: 'Author, System Design Interview',
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
            image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000',
            tags: ['Architecture', 'Backend', 'Scalability']
        },
        {
            id: 3,
            title: 'AI Engineering with LLMs',
            date: 'Jan 05, 2025',
            time: '9:00 AM - 1:00 PM EST',
            instructor: 'Andrej Karpathy',
            role: 'Founding Member, OpenAI',
            avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100',
            image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000',
            tags: ['AI', 'Python', 'LLMs']
        }
    ];

    return (
        <main className="min-h-screen bg-gray-50/50 dark:bg-[#111] pb-20">
            {/* Hero Section */}
            <div className="relative bg-white dark:bg-[#1A1E26] border-b border-gray-200 dark:border-gray-800 pt-32 pb-20 px-6">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <ScrollReveal>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#16A085]/10 text-[#16A085] font-medium text-sm mb-6">
                            <Video size={16} />
                            <span>Live Interactive Sessions</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
                            Expert-Led <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16A085] to-[#1ABC9C]">Workshops</span>
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Deep dive into advanced topics with industry leaders. Get hands-on experience and real-time feedback.
                        </p>
                    </ScrollReveal>
                </div>
            </div>

            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {workshops.map((workshop, i) => (
                        <ScrollReveal key={workshop.id} delay={i * 100}>
                            <div className="group bg-white dark:bg-[#1A1E26] rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                                <div className="relative h-48 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                                    <img
                                        src={workshop.image}
                                        alt={workshop.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute bottom-4 left-4 z-20">
                                        <div className="flex flex-wrap gap-2">
                                            {workshop.tags.map(tag => (
                                                <span key={tag} className="px-2 py-1 rounded-md bg-white/20 backdrop-blur-md text-white text-xs font-medium">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 flex-grow flex flex-col">
                                    <div className="flex items-center gap-2 text-sm text-[#16A085] font-medium mb-3">
                                        <Calendar size={14} />
                                        {workshop.date}
                                        <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600 mx-1" />
                                        <Clock size={14} />
                                        {workshop.time}
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-[#16A085] transition-colors">
                                        {workshop.title}
                                    </h3>

                                    <div className="flex items-center gap-3 mb-6 mt-auto">
                                        <img src={workshop.avatar} alt={workshop.instructor} className="w-10 h-10 rounded-full border-2 border-white dark:border-[#242B38]" />
                                        <div>
                                            <p className="text-sm font-bold text-gray-900 dark:text-white">{workshop.instructor}</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">{workshop.role}</p>
                                        </div>
                                    </div>

                                    <button className="w-full py-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-[#16A085] hover:bg-[#16A085] hover:text-white text-gray-700 dark:text-gray-300 font-medium transition-all duration-300 flex items-center justify-center gap-2">
                                        Reserve Seat
                                        <ArrowRight size={16} />
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

export default WorkshopsPage;
