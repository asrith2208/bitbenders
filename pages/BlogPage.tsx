import React, { useState } from 'react';
import { Calendar, User, Clock, ArrowRight, Tag, Search } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const BlogPage: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', 'Tech', 'Career', 'Tutorials', 'Industry News'];

    const articles = [
        {
            id: 1,
            title: 'The Future of AI in Software Development',
            excerpt: 'How Large Language Models are reshaping the way we write, test, and deploy code.',
            author: 'Sarah Connor',
            date: 'Nov 28, 2024',
            readTime: '5 min read',
            category: 'Tech',
            image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000'
        },
        {
            id: 2,
            title: 'Mastering the Technical Interview',
            excerpt: 'Top strategies to crack coding interviews at FAANG companies.',
            author: 'John Wick',
            date: 'Nov 25, 2024',
            readTime: '8 min read',
            category: 'Career',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000'
        },
        {
            id: 3,
            title: 'Building Scalable Microservices with Go',
            excerpt: 'A step-by-step guide to designing robust backend systems.',
            author: 'Gopher',
            date: 'Nov 20, 2024',
            readTime: '12 min read',
            category: 'Tutorials',
            image: 'https://images.unsplash.com/photo-1623479322729-28b25c16b011?auto=format&fit=crop&q=80&w=1000'
        },
        {
            id: 4,
            title: 'Web3: Beyond the Hype',
            excerpt: 'Understanding the real-world utility of blockchain technology.',
            author: 'Satoshi N.',
            date: 'Nov 15, 2024',
            readTime: '6 min read',
            category: 'Industry News',
            image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1000'
        },
        {
            id: 5,
            title: 'React Server Components Explained',
            excerpt: 'Why RSC is the biggest shift in the React ecosystem since Hooks.',
            author: 'Dan A.',
            date: 'Nov 10, 2024',
            readTime: '7 min read',
            category: 'Tech',
            image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1000'
        },
        {
            id: 6,
            title: '10 Tips for Remote Work Productivity',
            excerpt: 'Stay focused and maintain work-life balance while working from home.',
            author: 'Alice W.',
            date: 'Nov 05, 2024',
            readTime: '4 min read',
            category: 'Career',
            image: 'https://images.unsplash.com/photo-1593642632823-8f78536788c6?auto=format&fit=crop&q=80&w=1000'
        }
    ];

    const filteredArticles = activeCategory === 'All'
        ? articles
        : articles.filter(article => article.category === activeCategory);

    return (
        <main className="min-h-screen bg-gray-50/50 dark:bg-[#111] pb-20">
            {/* Hero Section */}
            <div className="relative bg-white dark:bg-[#1A1E26] border-b border-gray-200 dark:border-gray-800 pt-32 pb-20 px-6">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <ScrollReveal>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#16A085]/10 text-[#16A085] font-medium text-sm mb-6">
                            <Tag size={16} />
                            <span>Latest Insights</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
                            Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16A085] to-[#1ABC9C]">Chronicles</span>
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Stay ahead of the curve with expert articles, tutorials, and industry news.
                        </p>

                        {/* Search Bar */}
                        <div className="max-w-xl mx-auto relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white dark:bg-[#242B38] border border-gray-200 dark:border-gray-700 shadow-lg shadow-gray-100/50 dark:shadow-none focus:outline-none focus:ring-2 focus:ring-[#16A085]/50 text-gray-900 dark:text-white"
                            />
                        </div>
                    </ScrollReveal>
                </div>
            </div>

            <div className="container mx-auto px-6 py-16">

                {/* Categories */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`
                px-6 py-2 rounded-full text-sm font-medium transition-all duration-200
                ${activeCategory === cat
                                    ? 'bg-[#16A085] text-white shadow-lg shadow-[#16A085]/20'
                                    : 'bg-white dark:bg-[#1A1E26] text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800 hover:border-[#16A085]'}
              `}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Article Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredArticles.map((article, i) => (
                        <ScrollReveal key={article.id} delay={i * 50}>
                            <article className="group bg-white dark:bg-[#1A1E26] rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 rounded-lg bg-white/90 dark:bg-black/80 backdrop-blur-sm text-xs font-bold text-[#16A085]">
                                            {article.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6 flex-grow flex flex-col">
                                    <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-3">
                                        <span className="flex items-center gap-1"><Calendar size={12} /> {article.date}</span>
                                        <span className="flex items-center gap-1"><Clock size={12} /> {article.readTime}</span>
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[#16A085] transition-colors line-clamp-2">
                                        {article.title}
                                    </h3>

                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 line-clamp-3 flex-grow">
                                        {article.excerpt}
                                    </p>

                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800 mt-auto">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-xs font-bold text-gray-600 dark:text-gray-300">
                                                {article.author.charAt(0)}
                                            </div>
                                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{article.author}</span>
                                        </div>
                                        <button className="text-[#16A085] hover:text-[#1ABC9C] transition-colors">
                                            <ArrowRight size={20} />
                                        </button>
                                    </div>
                                </div>
                            </article>
                        </ScrollReveal>
                    ))}
                </div>

            </div>
        </main>
    );
};

export default BlogPage;
