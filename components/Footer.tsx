import React from 'react';
import { Link } from 'react-router-dom';

const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-500 dark:text-[#A0AEC0] hover:text-[#1ABC9C] transition-all duration-300 transform hover:scale-110"
  >
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      {children}
    </svg>
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer
      className="
        border-t border-gray-200 dark:border-[#2D3748] 
        bg-gray-50 
        dark:bg-gradient-to-r dark:from-[#1A1E26] dark:to-[#242B38]
      "
    >
      <div className="container mx-auto px-6 py-12 text-gray-700 dark:text-[#E2E8F0]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo + Tagline */}
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-3">
              <img src="/logo.png" alt="SikshaNext Logo" className="h-9 w-9 object-contain" />
              <h4
                className="text-2xl uppercase font-['Faculty_Glyphic'] tracking-wide
                           text-gray-900 dark:text-gray-100"
              >
                SIKSHA<span className="text-[#16A085] dark:text-[#1ABC9C]">NEXT</span>
              </h4>
            </div>
            <p className="text-sm text-gray-600 dark:text-[#A0AEC0] leading-relaxed">
              Empowering the Future of Education.
            </p>
          </div>

          {/* Footer Link Sections */}
          {[
            { title: 'Explore', links: ['Roadmaps', 'Projects', 'Community'] },
            { title: 'About', links: ['About Us', 'Services'] },
            { title: 'Legal', links: ['Privacy Policy', 'Terms of Service'] },
          ].map((section, i) => (
            <div key={i}>
              <h4 className="font-semibold text-gray-900 dark:text-[#F5F7FA] mb-4">{section.title}</h4>
              <ul className="space-y-2 text-sm">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link
                      to={`/${link.toLowerCase().replace(/\s+/g, '')}`}
                      className="relative inline-block hover:text-[#1ABC9C] transition-all duration-300 
                                 after:content-[''] after:absolute after:w-0 after:h-[2px] 
                                 after:bg-[#1ABC9C] after:left-0 after:-bottom-[2px] 
                                 after:transition-all after:duration-300 hover:after:w-full"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-[#2D3748] flex flex-col sm:flex-row justify-between items-center">
          {/* Social Icons */}
          <div className="flex space-x-6 order-2 sm:order-1 mt-4 sm:mt-0">
            <SocialIcon href="https://www.linkedin.com/company/sikshanextpvtltd/">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </SocialIcon>
            <SocialIcon href="https://www.instagram.com/siksha_next/">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.355 2.175 8.744 2.163 12 2.163m0-2.163C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" />
            </SocialIcon>
            <SocialIcon href="https://x.com/sikshanext">
              <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.931ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
            </SocialIcon>
            <SocialIcon href="https://www.youtube.com/channel/UC8wLCi3QHUiLBUc-YM1KAWw">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </SocialIcon>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-600 dark:text-gray-400 order-1 sm:order-2 text-center sm:text-right">
            © 2025{' '}
            <span className="uppercase font-['Faculty_Glyphic'] tracking-wide text-gray-900 dark:text-[#F5F7FA]">
              SIKSHA<span className="text-[#1ABC9C]">NEXT</span>
            </span>{' '}
            Pvt Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
