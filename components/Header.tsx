import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

interface HeaderProps {
    theme: string;
    toggleTheme: () => void;
}

const NavLinks: React.FC<{ onLinkClick?: () => void }> = ({ onLinkClick }) => (
    <>
        <NavLink to="/roadmaps" onClick={onLinkClick} className={({ isActive }) => `text-lg md:text-base nav-link text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-all duration-300 ${isActive ? 'text-primary' : ''}`}>Roadmaps</NavLink>
        <NavLink to="/projects" onClick={onLinkClick} className={({ isActive }) => `text-lg md:text-base nav-link text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-all duration-300 ${isActive ? 'text-primary' : ''}`}>Projects</NavLink>
        <NavLink to="/services" onClick={onLinkClick} className={({ isActive }) => `text-lg md:text-base nav-link text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-all duration-300 ${isActive ? 'text-primary' : ''}`}>Services</NavLink>
        <NavLink to="/community" onClick={onLinkClick} className={({ isActive }) => `text-lg md:text-base nav-link text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-all duration-300 ${isActive ? 'text-primary' : ''}`}>Community</NavLink>
        <NavLink to="/about" onClick={onLinkClick} className={({ isActive }) => `text-lg md:text-base nav-link text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-all duration-300 ${isActive ? 'text-primary' : ''}`}>About Us</NavLink>
    </>
);

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
        return () => { document.body.style.overflow = 'unset'; };
    }, [isMenuOpen]);

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 glassmorphism shadow-md">
                <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <Link to="/" onClick={() => setIsMenuOpen(false)} className="flex items-center space-x-2">
                        <img className="h-8 w-8" src="logo.png" alt="Bit Benders Logo" />
                        <span className="text-xl font-bold text-gray-900 dark:text-gray-100">Bit Benders</span>
                    </Link>
                    <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                        <NavLinks />
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-4">
                        <div className="hidden md:flex items-center space-x-4">
                            <Link to="/login" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300">
                                Sign In
                            </Link>
                            <button className="bg-gray-800 dark:bg-primary text-white font-semibold px-5 py-2 rounded-lg transition-all duration-500 transform hover:scale-105 shadow-md shadow-gray-400/20 dark:shadow-primary/40">
                                Get Started
                            </button>
                        </div>
                        <button onClick={toggleTheme} className="p-2 rounded-full glassmorphism text-gray-700 dark:text-gray-300 hover:text-primary transition-colors" id="theme-toggle">
                            <span className="material-icons !text-2xl" id="theme-icon">
                                {theme === 'dark' ? 'light_mode' : 'dark_mode'}
                            </span>
                        </button>
                        <div className="md:hidden">
                             <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-full text-gray-700 dark:text-gray-300">
                                <span className="material-icons !text-2xl">{isMenuOpen ? 'close' : 'menu'}</span>
                            </button>
                        </div>
                    </div>
                </nav>
            </header>
            
            {/* Mobile Menu Overlay */}
            <div className={`md:hidden fixed inset-0 z-40 bg-background-light dark:bg-background-dark transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
                <div className="flex flex-col items-center justify-center h-full space-y-8 text-center">
                   <NavLinks onLinkClick={() => setIsMenuOpen(false)} />
                    <div className="pt-8 border-t border-gray-200 dark:border-gray-800 w-4/5 mx-auto flex flex-col items-center space-y-6">
                         <Link to="/login" onClick={() => setIsMenuOpen(false)} className="text-lg text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300">
                            Sign In
                        </Link>
                        <button className="bg-gray-800 dark:bg-primary text-white font-semibold px-8 py-3 text-lg rounded-lg transition-all duration-500 transform hover:scale-105 shadow-md shadow-gray-400/20 dark:shadow-primary/40">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
