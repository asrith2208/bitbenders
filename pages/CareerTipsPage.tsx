import React from 'react';
import { Briefcase, FileText, MessageSquare, TrendingUp, CheckCircle, ArrowRight, DollarSign, Award } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const CareerTipsPage: React.FC = () => {
    const resumeTips = [
        { title: 'Quantify Achievements', desc: 'Use numbers to show impact (e.g., "Improved load time by 40%").', icon: <TrendingUp className="text-green-500" /> },
        { title: 'Tailor to Job Description', desc: 'Use keywords from the JD to pass ATS filters.', icon: <FileText className="text-blue-500" /> },
        { title: 'Keep it Concise', desc: 'One page for < 10 years experience. Two pages max.', icon: <CheckCircle className="text-purple-500" /> },
        { title: 'Action Verbs', desc: 'Start bullets with strong verbs like "Architected", "Deployed", "Led".', icon: <Award className="text-orange-500" /> }
    ];

    const interviewPrep = [
        { q: 'Tell me about yourself.', a: 'Focus on your professional journey, key achievements, and why you want this role. Keep it under 2 minutes.' },
        { q: 'What is your greatest weakness?', a: 'Choose a real weakness, but explain how you are working to improve it (e.g., "I sometimes struggle with public speaking, so I joined Toastmasters").' },
        { q: 'Why do you want to work here?', a: 'Show you have done your research. Mention specific projects, culture, or values that align with yours.' },
        { q: 'Describe a challenge you faced.', a: 'Use the STAR method: Situation, Task, Action, Result.' }
    ];

    const salaryData = [
        { role: 'Junior Dev', range: '$60k - $90k', growth: '+15%' },
        { role: 'Mid-Level Dev', range: '$90k - $130k', growth: '+12%' },
        { role: 'Senior Dev', range: '$130k - $180k', growth: '+10%' },
        { role: 'Tech Lead', range: '$160k - $220k+', growth: '+8%' }
    ];

    return (
        <main className="min-h-screen bg-gray-50/50 dark:bg-[#111] pb-20">
            {/* Hero Section */}
            <div className="relative bg-white dark:bg-[#1A1E26] border-b border-gray-200 dark:border-gray-800 pt-32 pb-20 px-6">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <ScrollReveal>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#16A085]/10 text-[#16A085] font-medium text-sm mb-6">
                            <Briefcase size={16} />
                            <span>Career Accelerator</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
                            Land Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16A085] to-[#1ABC9C]">Dream Job</span>
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Expert advice on crafting the perfect resume, acing interviews, and negotiating the salary you deserve.
                        </p>
                    </ScrollReveal>
                </div>
            </div>

            <div className="container mx-auto px-6 py-16 max-w-6xl">

                {/* Resume Section */}
                <ScrollReveal delay={100}>
                    <div className="mb-20">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500">
                                <FileText size={32} />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Resume Mastery</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {resumeTips.map((tip, i) => (
                                <div key={i} className="bg-white dark:bg-[#1A1E26] p-6 rounded-2xl border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-shadow duration-300">
                                    <div className="mb-4 p-3 bg-gray-50 dark:bg-[#242B38] rounded-lg w-fit">
                                        {tip.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{tip.title}</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{tip.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>

                {/* Interview Prep & Salary Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Interview Prep */}
                    <ScrollReveal delay={200}>
                        <div className="bg-white dark:bg-[#1A1E26] rounded-3xl border border-gray-100 dark:border-gray-800 p-8 h-full">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-500">
                                    <MessageSquare size={32} />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Interview FAQs</h2>
                            </div>
                            <div className="space-y-6">
                                {interviewPrep.map((item, i) => (
                                    <div key={i} className="group">
                                        <h3 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2 group-hover:text-[#16A085] transition-colors">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#16A085]" />
                                            {item.q}
                                        </h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 pl-3.5 border-l-2 border-gray-100 dark:border-gray-800 group-hover:border-[#16A085]/30 transition-colors">
                                            {item.a}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Salary Insights */}
                    <ScrollReveal delay={300}>
                        <div className="bg-white dark:bg-[#1A1E26] rounded-3xl border border-gray-100 dark:border-gray-800 p-8 h-full">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 rounded-xl bg-green-500/10 text-green-500">
                                    <DollarSign size={32} />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Market Insights</h2>
                            </div>
                            <div className="space-y-4">
                                {salaryData.map((data, i) => (
                                    <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-gray-50 dark:bg-[#242B38]">
                                        <div>
                                            <h4 className="font-bold text-gray-900 dark:text-white">{data.role}</h4>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">Average Base Salary</p>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-[#16A085]">{data.range}</div>
                                            <div className="text-xs text-green-500 flex items-center justify-end gap-1">
                                                <TrendingUp size={10} />
                                                {data.growth} YoY
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 p-4 rounded-xl bg-gradient-to-r from-[#16A085]/10 to-[#1ABC9C]/10 border border-[#16A085]/20">
                                <p className="text-sm text-center text-gray-700 dark:text-gray-300">
                                    <span className="font-bold">Pro Tip:</span> Always negotiate! 70% of companies expect it.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>

                </div>
            </div>
        </main>
    );
};

export default CareerTipsPage;
