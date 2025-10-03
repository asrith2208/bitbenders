
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
            <div className={`flex flex-col min-h-screen`}>
                 <Header theme={theme} toggleTheme={toggleTheme} />
                 <div className="flex-grow pt-20">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/roadmaps" element={<RoadmapsPage />} />
                        <Route path="/roadmaps/:id" element={<RoadmapDetailPage />} />
                        <Route path="/projects" element={<ProjectsPage />} />
                        <Route path="/projects/:id" element={<ProjectDetailPage />} />
                        <Route path="/community" element={<PlaceholderPage />} />
                        <Route path="/about" element={<PlaceholderPage />} />
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