import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ChevronDown, Map, School, Code, Briefcase, Trophy, Users, DollarSign, FileText, Building2, Star, ShoppingCart, TestTube, MessageSquare, Calendar, Camera, Linkedin, Menu, X, Sun, Moon } from 'lucide-react';
import MegaMenu from './MegaMenu';
import MobileDrawer from './MobileDrawer';
import { MENU_ITEMS } from '../constants';

interface HeaderProps {
  theme: string;
  toggleTheme: () => void;
}

// Helper to map icon string names to components
const getIcon = (name: string) => {
  const icons: { [key: string]: React.ReactNode } = {
    map: <Map size={20} />,
    school: <School size={20} />,
    code: <Code size={20} />,
    work: <Briefcase size={20} />,
    trophy: <Trophy size={20} />,
    groups: <Users size={20} />,
    attach_money: <DollarSign size={20} />,
    article: <FileText size={20} />,
    business_center: <Building2 size={20} />,
    stars: <Star size={20} />,
    shopping_cart: <ShoppingCart size={20} />,
    science: <TestTube size={20} />,
    forum: <MessageSquare size={20} />,
    event: <Calendar size={20} />,
    camera_alt: <Camera size={20} />,
    linkedin: <Linkedin size={20} />,
  };
  return icons[name] || null;
};

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  // Process menu items to include icons
  const processedMenuItems = Object.entries(MENU_ITEMS).reduce((acc, [key, sections]) => {
    acc[key] = sections.map(section => ({
      ...section,
      items: section.items.map(item => ({
        ...item,
        icon: getIcon(item.icon as string)
      }))
    }));
    return acc;
  }, {} as any);

  return (
    <>
      <header
        className="
          fixed top-0 left-0 right-0 z-50 
          bg-white/95 
          dark:bg-gradient-to-r dark:from-[#1A1E26] dark:to-[#242B38]
          backdrop-blur-sm shadow-md
        "
        onMouseLeave={() => setActiveMenu(null)}
      >
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* LOGO SECTION */}
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3">
            <img
              className="h-10 w-auto object-contain transition-transform duration-300 hover:scale-105"
              src="/logo.png"
              alt="SikshaNext Logo"
            />
            <span
              className="text-2xl uppercase font-['Faculty_Glyphic'] tracking-wide 
                         text-gray-900 dark:text-gray-100"
            >
              SIKSHA<span className="text-[#16A085] dark:text-[#1ABC9C]">NEXT</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {Object.keys(MENU_ITEMS).map((key) => (
              <div key={key} className="relative group h-full flex items-center">
                <button
                  className={`flex items-center gap-1 text-base font-medium transition-colors duration-200 py-2
                    ${activeMenu === key ? 'text-[#1ABC9C]' : 'text-gray-800 dark:text-[#F5F7FA] hover:text-[#1ABC9C]'}
                  `}
                  onMouseEnter={() => setActiveMenu(key)}
                  onClick={() => setActiveMenu(activeMenu === key ? null : key)}
                >
                  {key}
                  <ChevronDown size={16} className={`transition-transform duration-200 ${activeMenu === key ? 'rotate-180' : ''}`} />
                </button>
              </div>
            ))}
            <Link to="/about" className="text-base font-medium text-gray-800 dark:text-[#F5F7FA] hover:text-[#1ABC9C] transition-colors">
              About
            </Link>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                window.location.href = '/login';
              }}
              className="hidden md:block bg-[#16A085] hover:bg-[#1ABC9C] text-white font-semibold px-5 py-2 rounded-md transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Get Started
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-700 dark:text-[#A0AEC0] hover:text-[#1ABC9C] transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-full text-gray-700 dark:text-gray-300 hover:text-[#FFC107] transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mega Menu - Rendered here to be full width relative to header */}
        <MegaMenu
          sections={activeMenu ? processedMenuItems[activeMenu] : []}
          isOpen={!!activeMenu}
          onClose={() => setActiveMenu(null)}
        />
      </header>

      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        menuSections={processedMenuItems}
      />
    </>
  );
};

export default Header;
