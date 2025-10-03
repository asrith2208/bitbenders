
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

const PlaceholderPage: React.FC = () => {
    const location = useLocation();
    const pageName = location.pathname.replace('/', '').replace(/^\w/, c => c.toUpperCase());

    return (
        <main className="container mx-auto px-6 py-20 min-h-screen flex items-center justify-center">
            <ScrollReveal>
                <div className="text-center p-8 glassmorphism rounded-xl">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 dark:text-gray-100">
                       <span className="gradient-text">{pageName}</span> Page
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                        This section of our universe is currently under development.
                    </p>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                        Our architects are building something amazing. Please check back later!
                    </p>
                    <Link to="/" className="bg-primary text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl shadow-primary/40">
                        Return to Home
                    </Link>
                </div>
            </ScrollReveal>
        </main>
    );
};

export default PlaceholderPage;