import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronLeft, X } from 'lucide-react';
import { MenuSection, MenuItem } from './MegaMenu';

interface MobileDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    menuSections: { [key: string]: MenuSection[] }; // Keyed by main category name
}

const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose, menuSections }) => {
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    if (!isOpen) return null;

    const handleCategoryClick = (category: string) => {
        setActiveCategory(category);
    };

    const handleBackClick = () => {
        setActiveCategory(null);
    };

    return (
        <div className="fixed inset-0 z-50 flex justify-end pointer-events-none">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm pointer-events-auto transition-opacity duration-300"
                onClick={onClose}
            />

            {/* Drawer */}
            <div className="relative w-full max-w-sm bg-white dark:bg-[#1A1E26] h-full shadow-2xl pointer-events-auto flex flex-col transition-transform duration-300 transform translate-x-0">

                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-800">
                    {activeCategory ? (
                        <button
                            onClick={handleBackClick}
                            className="flex items-center text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-[#1ABC9C]"
                        >
                            <ChevronLeft className="w-5 h-5 mr-1" />
                            Back
                        </button>
                    ) : (
                        <span className="text-lg font-bold text-gray-900 dark:text-white">Menu</span>
                    )}
                    <button
                        onClick={onClose}
                        className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto">
                    {activeCategory ? (
                        <div className="p-4 space-y-6">
                            <h2 className="text-xl font-bold text-[#1ABC9C] mb-4">{activeCategory}</h2>
                            {menuSections[activeCategory]?.map((section, idx) => (
                                <div key={idx} className="space-y-3">
                                    <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                                        {section.title}
                                    </h3>
                                    <ul className="space-y-2">
                                        {section.items.map((item, itemIdx) => (
                                            <li key={itemIdx}>
                                                <Link
                                                    to={item.href}
                                                    onClick={onClose}
                                                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200"
                                                >
                                                    {item.icon && <span className="text-gray-400">{item.icon}</span>}
                                                    <span>{item.title}</span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="p-4 space-y-2">
                            <Link
                                to="/"
                                onClick={onClose}
                                className="block p-3 text-lg font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg"
                            >
                                Home
                            </Link>
                            {Object.keys(menuSections).map((category) => (
                                <button
                                    key={category}
                                    onClick={() => handleCategoryClick(category)}
                                    className="w-full flex items-center justify-between p-3 text-lg font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg group"
                                >
                                    <span>{category}</span>
                                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#1ABC9C]" />
                                </button>
                            ))}
                            <div className="border-t border-gray-100 dark:border-gray-800 my-4 pt-4">
                                <Link
                                    to="/login"
                                    onClick={onClose}
                                    className="block w-full text-center bg-[#16A085] hover:bg-[#1ABC9C] text-white font-semibold px-5 py-3 rounded-md transition-all"
                                >
                                    Get Started
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MobileDrawer;
