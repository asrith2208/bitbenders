import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

const TermsOfServicePage: React.FC = () => {
    return (
        <main className="container mx-auto px-6 py-20 min-h-screen">
            <ScrollReveal>
                <div className="p-8 glassmorphism rounded-xl max-w-4xl mx-auto">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 text-center">
                       <span className="gradient-text">Terms of Service</span>
                    </h1>
                    <div className="text-left text-gray-700 dark:text-gray-300 space-y-4 leading-relaxed">
                         <p><strong>Last updated: October 2024</strong></p>
                        <p>Please read these terms and conditions carefully before using Our Service.</p>

                        <h2 className="text-2xl font-bold pt-4 text-gray-900 dark:text-gray-100">Acknowledgment</h2>
                        <p>These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.</p>
                        <p>Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.</p>

                         <h2 className="text-2xl font-bold pt-4 text-gray-900 dark:text-gray-100">Termination</h2>
                        <p>We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.</p>

                        <h2 className="text-2xl font-bold pt-4 text-gray-900 dark:text-gray-100">Contact Us</h2>
                        <p>If you have any questions about these Terms, please contact us.</p>
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

export default TermsOfServicePage;
