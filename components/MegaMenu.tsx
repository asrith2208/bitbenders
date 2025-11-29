import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export interface MenuItem {
  title: string;
  href: string;
  description?: string;
  icon?: React.ReactNode;
}

export interface MenuSection {
  title: string;
  items: MenuItem[];
}

interface MegaMenuProps {
  sections: MenuSection[];
  isOpen: boolean;
  onClose: () => void;
}

const MegaMenu: React.FC<MegaMenuProps> = ({ sections, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="absolute top-full left-0 w-full bg-white dark:bg-[#1A1E26] shadow-xl border-t border-gray-100 dark:border-gray-800 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
      onMouseLeave={onClose}
    >
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {sections.map((section, idx) => (
          <div key={idx} className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              {section.title}
            </h3>
            <ul className="space-y-3">
              {section.items.map((item, itemIdx) => (
                <li key={itemIdx}>
                  <Link 
                    to={item.href}
                    onClick={onClose}
                    className="group flex items-start gap-3 p-2 -mx-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    {item.icon && (
                      <span className="mt-1 text-gray-400 group-hover:text-[#1ABC9C] transition-colors">
                        {item.icon}
                      </span>
                    )}
                    <div>
                      <div className="text-sm font-medium text-gray-900 dark:text-gray-100 group-hover:text-[#1ABC9C] transition-colors">
                        {item.title}
                      </div>
                      {item.description && (
                        <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MegaMenu;
