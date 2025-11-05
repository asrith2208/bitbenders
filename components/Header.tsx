import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

interface HeaderProps {
  theme: string;
  toggleTheme: () => void;
}

const NavLinks: React.FC<{ onLinkClick?: () => void }> = ({ onLinkClick }) => {
  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `relative block px-3 py-2 text-base font-medium transition-all duration-300 
     text-gray-800 dark:text-gray-200 
     hover:text-[#FFC107] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 
     after:bg-[#FFC107] after:transition-all after:duration-300 hover:after:w-full
     ${isActive ? 'text-[#FFC107] after:w-full' : ''}`;

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

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2">
            <img className="h-8 w-8" src="/logo.png" alt="Logo" />
            <span className="text-xl font-bold text-gray-900 dark:text-gray-100">Sikshanext</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <NavLinks />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="hidden md:block text-gray-600 dark:text-gray-300 hover:text-[#FFC107] transition-colors duration-300"
            >
              Sign In
            </Link>

            <button
              className="hidden md:block bg-[#FFC107] hover:bg-[#ffb300] text-white font-semibold px-5 py-2 rounded-md transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Get Started
            </button>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:text-[#FFC107] transition-colors"
              aria-label="Toggle theme"
            >
              <span className="material-icons !text-2xl">
                {theme === 'dark' ? 'light_mode' : 'dark_mode'}
              </span>
            </button>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-full text-gray-700 dark:text-gray-300 hover:text-[#FFC107] transition-colors"
              aria-label="Toggle menu"
            >
              <span className="material-icons !text-2xl">{isMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white dark:bg-gray-900 flex flex-col items-center justify-center space-y-8 transition-all duration-300">
          <NavLinks onLinkClick={() => setIsMenuOpen(false)} />

          <div className="flex flex-col items-center space-y-5">
            <Link
              to="/login"
              onClick={() => setIsMenuOpen(false)}
              className="text-lg text-gray-700 dark:text-gray-200 hover:text-[#FFC107] transition-colors duration-300"
            >
              Sign In
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="bg-[#FFC107] hover:bg-[#ffb300] text-white font-semibold px-8 py-3 rounded-md shadow-sm transition-all duration-300 hover:shadow-md"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
