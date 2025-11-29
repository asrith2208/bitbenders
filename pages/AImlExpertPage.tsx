import React from 'react';
import { Link } from 'react-router-dom';

const AImlExpertPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#16A085] dark:bg-[#1ABC9C] mb-6">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl mb-4">
          Coming Soon
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Our expert-level AI/ML content is currently in development.
        </p>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-2xl mx-auto mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            What to Expect
          </h2>
          <ul className="space-y-3 text-left text-gray-600 dark:text-gray-300">
            <li className="flex items-start">
              <svg className="h-5 w-5 text-[#16A085] dark:text-[#1ABC9C] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Advanced machine learning research papers and implementations
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-[#16A085] dark:text-[#1ABC9C] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Cutting-edge AI model development
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-[#16A085] dark:text-[#1ABC9C] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Real-world AI deployment strategies
            </li>
          </ul>
        </div>
        
        <Link
          to="/roadmaps"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#16A085] hover:bg-[#1ABC9C] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#16A085] transition-colors duration-200"
        >
          <svg className="-ml-1 mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          Back to Roadmaps
        </Link>
      </div>
    </div>
  );
};

export default AImlExpertPage;
