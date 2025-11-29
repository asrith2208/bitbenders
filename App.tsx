import React, { useState, useEffect, useLayoutEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import RoadmapsPage from './pages/RoadmapsPage';
import ProjectsPage from './pages/ProjectsPage';
import RoadmapDetailPage from './pages/RoadmapDetailPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import PlaceholderPage from './pages/PlaceholderPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import AImlMediumPage from './pages/AImlMediumPage';
import AImlAdvancedPage from './pages/AImlAdvancedPage';
import AImlExpertPage from './pages/AImlExpertPage';
import CoursesPage from './pages/CoursesPage';
import CodingGuidancePage from './pages/CodingGuidancePage';
import CareerTipsPage from './pages/CareerTipsPage';
import HackathonsPage from './pages/HackathonsPage';
import WorkshopsPage from './pages/WorkshopsPage';
import FreelanceExchangePage from './pages/FreelanceExchangePage';
import BlogPage from './pages/BlogPage';
import PlacementPrepPage from './pages/PlacementPrepPage';
import SuccessStoriesPage from './pages/SuccessStoriesPage';
import ProjectMarketPage from './pages/ProjectMarketPage';
import ResearchSupportPage from './pages/ResearchSupportPage';
import AboutPage from './pages/AboutPage';

// Import BOTH the default component and the named LessonPage component
import AImlBeginnerPage, { LessonPage } from './pages/AImlBeginnerPage';

const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

const App: React.FC = () => {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (savedTheme && (savedTheme === 'dark' || savedTheme === 'light')) {
            setTheme(savedTheme);
        } else if (prefersDark) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }, []);

    useLayoutEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(theme === 'dark' ? 'light' : 'dark');
        root.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
    };

    return (
        <HashRouter>
            <ScrollToTop />
            <div className={`flex flex-col min-h-screen bg-white dark:bg-gray-900`}>
                <Header theme={theme} toggleTheme={toggleTheme} />
                <div className="flex-grow pt-20">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/roadmaps" element={<RoadmapsPage />} />
                        <Route path="/roadmaps/ai-ml/beginner" element={<AImlBeginnerPage />} />
                        <Route path="/roadmaps/ai-ml/medium" element={<AImlMediumPage />} />
                        <Route path="/roadmaps/ai-ml/advanced" element={<AImlAdvancedPage />} />
                        <Route path="/roadmaps/ai-ml/expert" element={<AImlExpertPage />} />

                        {/* =================================================================== */}
                        {/* == NEW ROUTE FOR LESSONS - THIS IS THE IMPORTANT ADDITION         == */}
                        {/* =================================================================== */}
                        <Route path="/roadmaps/ai-ml/beginner/modules/:moduleId/lessons/:lessonId" element={<LessonPage />} />

                        <Route path="/roadmaps/:id" element={<RoadmapDetailPage />} />
                        <Route path="/projects" element={<ProjectsPage />} />
                        <Route path="/projects/:id" element={<ProjectDetailPage />} />

                        {/* Services */}
                        <Route path="/services/courses" element={<CoursesPage />} />
                        <Route path="/services/guidance" element={<CodingGuidancePage />} />
                        <Route path="/services/career" element={<CareerTipsPage />} />
                        <Route path="/services/hackathons" element={<HackathonsPage />} />
                        <Route path="/services/workshops" element={<WorkshopsPage />} />
                        <Route path="/services/freelance" element={<FreelanceExchangePage />} />

                        {/* Resources */}
                        <Route path="/resources/blog" element={<BlogPage />} />
                        <Route path="/resources/placement" element={<PlacementPrepPage />} />
                        <Route path="/resources/success-stories" element={<SuccessStoriesPage />} />
                        <Route path="/resources/project-market" element={<ProjectMarketPage />} />
                        <Route path="/resources/research" element={<ResearchSupportPage />} />

                        {/* Community */}
                        <Route path="/community/join" element={<PlaceholderPage />} />
                        <Route path="/community/events" element={<PlaceholderPage />} />

                        <Route path="/community" element={<PlaceholderPage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/services" element={<PlaceholderPage />} />
                        <Route path="/login" element={<PlaceholderPage />} />
                        <Route path="/privacy" element={<PrivacyPolicyPage />} />
                        <Route path="/terms" element={<TermsOfServicePage />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </HashRouter>
    );
};

export default App;