import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Clock, BarChart, ArrowRight, Star, BookOpen } from 'lucide-react';
import { ROADMAP_CATEGORIES } from '../constants';
import ScrollReveal from '../components/ScrollReveal';

const CoursesPage: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');

    // Flatten all domains into a single list of "courses"
    const allCourses = ROADMAP_CATEGORIES.flatMap(category =>
        category.domains.map(domain => ({
            ...domain,
            category: category.title,
            // Mock data for course-specific attributes
            duration: '12-16 Weeks',
            level: 'Beginner to Expert',
            rating: (4.5 + Math.random() * 0.5).toFixed(1),
            students: Math.floor(1000 + Math.random() * 5000)
        }))
    );

    const filteredCourses = allCourses.filter(course =>
        course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <main className="min-h-screen bg-gray-50/50 dark:bg-[#111] pb-20">
            {/* Hero Section */}
            <div className="relative bg-white dark:bg-[#1A1E26] border-b border-gray-200 dark:border-gray-800 pt-32 pb-20 px-6">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <ScrollReveal>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#16A085]/10 text-[#16A085] font-medium text-sm mb-6">
                            <BookOpen size={16} />
                            <span>World-Class Curriculum</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
                            Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16A085] to-[#1ABC9C]">Premium Courses</span>
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Dive deep into expert-led courses designed to take you from basics to mastery.
                            Hands-on projects, real-world scenarios, and industry-recognized certifications.
                        </p>

                        {/* Search Bar */}
                        <div className="max-w-xl mx-auto relative group">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <Search className="h-5 w-5 text-gray-400 group-focus-within:text-[#16A085] transition-colors" />
                            </div>
                            <input
                                type="text"
                                placeholder="Search for a course..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="block w-full pl-12 pr-4 py-4 bg-white dark:bg-[#242B38] border border-gray-200 dark:border-gray-700 rounded-2xl text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#16A085]/50 focus:border-transparent shadow-lg shadow-gray-100/50 dark:shadow-none transition-all duration-300"
                            />
                        </div>
                    </ScrollReveal>
                </div>
            </div>

            {/* Courses Grid */}
            <div className="container mx-auto px-6 py-16">
                {filteredCourses.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredCourses.map((course, i) => (
                            <ScrollReveal key={course.id} delay={i * 50}>
                                <div className="group flex flex-col h-full bg-white dark:bg-[#1A1E26] rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-[#16A085] dark:hover:border-[#1ABC9C] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden">

                                    {/* Card Header */}
                                    <div className="p-6 pb-4">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#16A085]/10 to-[#1ABC9C]/20 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                                                {course.emoji}
                                            </div>
                                            <div className="flex items-center gap-1 bg-yellow-400/10 text-yellow-600 dark:text-yellow-400 px-2 py-1 rounded-lg text-xs font-bold">
                                                <Star size={12} fill="currentColor" />
                                                {course.rating}
                                            </div>
                                        </div>

                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#16A085] dark:group-hover:text-[#1ABC9C] transition-colors">
                                            {course.name}
                                        </h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-4">
                                            {course.description}
                                        </p>

                                        {/* Meta Info */}
                                        <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                                            <div className="flex items-center gap-1">
                                                <Clock size={14} />
                                                {course.duration}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <BarChart size={14} />
                                                {course.level}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Divider */}
                                    <div className="w-full h-px bg-gray-50 dark:bg-gray-800 mt-auto" />

                                    {/* Footer */}
                                    <div className="p-6 pt-4">
                                        <Link
                                            to={`/roadmaps/${course.id.split('/')[0]}`} // Simple logic to link to roadmap
                                            className="flex items-center justify-between w-full px-4 py-2 bg-gray-50 dark:bg-[#242B38] hover:bg-[#16A085] hover:text-white dark:hover:bg-[#1ABC9C] text-gray-700 dark:text-gray-300 rounded-xl transition-all duration-300 group/btn"
                                        >
                                            <span className="font-medium text-sm">View Course</span>
                                            <ArrowRight size={16} className="transform group-hover/btn:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No courses found</h3>
                        <p className="text-gray-500 dark:text-gray-400">
                            Try adjusting your search terms.
                        </p>
                    </div>
                )}
            </div>
        </main>
    );
};

export default CoursesPage;
