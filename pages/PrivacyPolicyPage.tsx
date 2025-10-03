import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

const PrivacyPolicyPage: React.FC = () => {
    return (
        <main className="container mx-auto px-6 py-20 min-h-screen">
            <ScrollReveal>
                <div className="p-8 glassmorphism rounded-xl max-w-4xl mx-auto">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 text-center">
                       <span className="gradient-text">Privacy Policy</span>
                    </h1>
                    <div className="text-left text-gray-700 dark:text-gray-300 space-y-4 leading-relaxed">
                        <p><strong>Last updated: October 2024</strong></p>
                        <p>Bit Benders ("us", "we", or "our") operates the Bit Benders website (the "Service").</p>
                        <p>This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data. We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy.</p>
                        
                        <h2 className="text-2xl font-bold pt-4 text-gray-900 dark:text-gray-100">Information Collection and Use</h2>
                        <p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>

                        <h2 className="text-2xl font-bold pt-4 text-gray-900 dark:text-gray-100">Types of Data Collected</h2>
                        <p><strong>Personal Data:</strong> While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to: Email address, First name and last name, Cookies and Usage Data.</p>
                        
                        <h2 className="text-2xl font-bold pt-4 text-gray-900 dark:text-gray-100">Contact Us</h2>
                        <p>If you have any questions about this Privacy Policy, please contact us.</p>
                    </div>
                     <div className="text-center mt-12">
                        <Link to="/" className="bg-primary text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl shadow-primary/40">
                            Return to Home
                        </Link>
                    </div>
                </div>
            </ScrollReveal>
        </main>
    );
};

export default PrivacyPolicyPage;
