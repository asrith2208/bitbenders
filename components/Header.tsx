import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

interface HeaderProps {
    theme: string;
    toggleTheme: () => void;
}

const NavLinks: React.FC<{ onLinkClick?: () => void }> = ({ onLinkClick }) => {
    const linkClasses = ({ isActive }: { isActive: boolean }) => 
        `block px-4 py-3 text-lg md:text-base text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors duration-300 ${
            isActive ? 'text-primary font-medium' : ''
        }`;

    return (
        <>
            <NavLink to="/roadmaps" onClick={onLinkClick} className={linkClasses}>Roadmaps</NavLink>
            <NavLink to="/projects" onClick={onLinkClick} className={linkClasses}>Projects</NavLink>
            <NavLink to="/services" onClick={onLinkClick} className={linkClasses}>Services</NavLink>
            <NavLink to="/community" onClick={onLinkClick} className={linkClasses}>Community</NavLink>
            <NavLink to="/about" onClick={onLinkClick} className={linkClasses}>About Us</NavLink>
        </>
    );
};

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
        return () => { document.body.style.overflow = 'unset'; };
    }, [isMenuOpen]);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (isMenuOpen && !target.closest('.mobile-menu') && !target.closest('.hamburger-button')) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMenuOpen]);

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 glassmorphism shadow-md">
                <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <Link to="/" onClick={() => setIsMenuOpen(false)} className="flex items-center space-x-2">
                        <img className="h-8 w-8" src="/logo.png" alt="Bit Benders Logo" />
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
                            <button 
                                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                                className="hamburger-button p-2 rounded-full text-gray-700 dark:text-gray-300 focus:outline-none"
                                aria-label="Toggle menu"
                                aria-expanded={isMenuOpen}
                            >
                                <span className="material-icons !text-2xl">{isMenuOpen ? 'close' : 'menu'}</span>
                            </button>
                        </div>
                    </div>
                </nav>
            </header>
            
            {/* Mobile Menu Overlay */}
            <div 
                className={`mobile-menu md:hidden fixed inset-0 z-40 bg-white dark:bg-gray-900 transform ${
                    isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                } transition-all duration-300 ease-in-out`}
                style={{
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    backgroundColor: theme === 'dark' ? 'rgba(17, 24, 39, 0.98)' : 'rgba(255, 255, 255, 0.98)',
                    color: theme === 'dark' ? '#f3f4f6' : '#111827',
                }}
            >
                <div className="container mx-auto px-6 py-8 h-full flex flex-col justify-center">
                    <div className="flex flex-col items-center justify-center space-y-8 text-center">
                        <div className="space-y-6 w-full">
                            <NavLinks onLinkClick={() => setIsMenuOpen(false)} />
                        </div>
                        <div className="pt-8 border-t border-gray-200 dark:border-gray-700 w-full sm:w-4/5 mx-auto flex flex-col items-center space-y-6">
                            <Link 
                                to="/login" 
                                onClick={() => setIsMenuOpen(false)} 
                                className="w-full sm:w-auto text-lg text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors duration-300 px-4 py-2"
                            >
                                Sign In
                            </Link>
                            <button 
                                className="w-full sm:w-auto bg-gray-800 dark:bg-primary text-white font-semibold px-8 py-3 text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md shadow-gray-400/20 dark:shadow-primary/40"
                                onClick={() => {
                                    setIsMenuOpen(false);
                                    // Add your get started action here
                                }}
                            >
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
