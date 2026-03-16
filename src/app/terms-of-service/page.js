import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TableOfContents from "../components/TableOfContents";

export const metadata = {
    title: "Terms & Conditions | ASOWin",
    description: "Read our terms and conditions to understand your rights and obligations when using ASOWin services.",
};

export default function TermsOfService() {
    const sections = [
        { id: "introduction", label: "Introduction" },
        { id: "services", label: "Services" },
        { id: "user-accounts", label: "User Accounts" },
        { id: "payment-terms", label: "Payment Terms" },
        { id: "intellectual-property", label: "Intellectual Property" },
        { id: "limitation-of-liability", label: "Limitation of Liability" },
        { id: "indemnification", label: "Indemnification" },
        { id: "termination", label: "Termination" },
        { id: "contact", label: "Contact" },
        { id: "governing-law", label: "Governing Law" },
        { id: "dispute-resolution", label: "Dispute Resolution" },
        { id: "severability", label: "Severability" },
        { id: "entire-agreement", label: "Entire Agreement" }
    ];

    return (
        <div className="min-h-screen flex flex-col bg-white font-sans text-[#2D3748]">
            <div className="bg-gradient-to-r from-[#FFFDF2] via-[#FFF9E6] to-[#FFE8D1]">
                <Navbar />

                {/* Hero section */}
                <header className="relative pt-44 pb-20 px-6 md:px-12 overflow-hidden">
                    {/* Wavy lines SVG decoration strictly matching contour topography vibe on the right */}
                    <svg className="absolute right-0 top-0 h-full w-1/2 opacity-40 select-none pointer-events-none" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 400 C300 350 350 200 600 80" stroke="#F6A866" strokeWidth="1" strokeDasharray="1 1" />
                        <path d="M80 400 C280 340 330 190 600 60" stroke="#F6A866" strokeWidth="0.8" />
                        <path d="M60 400 C260 330 310 180 600 40" stroke="#F6A866" strokeWidth="0.8" />
                        <path d="M40 400 C240 320 290 170 600 20" stroke="#F6A866" strokeWidth="0.8" />
                        <path d="M20 400 C220 310 270 160 600 0" stroke="#F6A866" strokeWidth="0.5" />
                        <path d="M0 400 C200 300 250 150 550 -20" stroke="#F6A866" strokeWidth="0.5" />
                        <path d="M-20 400 C180 290 230 140 500 -40" stroke="#F6A866" strokeWidth="0.3" />

                        {/* Secondary overlapping set */}
                        <path d="M150 400 C400 380 450 250 600 120" stroke="#F6A866" strokeWidth="0.5" />
                        <path d="M130 400 C380 370 430 240 600 100" stroke="#F6A866" strokeWidth="0.5" />
                    </svg>

                    <div className="container mx-auto max-w-6xl relative z-10">
                        <h1 className="text-4xl md:text-[44px] font-bold mb-5 text-[#111122] tracking-tight">
                            Terms & Conditions
                        </h1>
                        <p className="text-[#4A5568] text-lg md:text-[17px] leading-relaxed max-w-3xl mb-5 font-normal">
                            Please read these terms and conditions carefully before using our services.
                        </p>
                        <p className="text-[#718096] text-sm">
                            Last updated: March 16, 2026
                        </p>
                    </div>
                </header>
            </div>

            {/* Main Content with Sidebar */}
            <div className="container mx-auto max-w-6xl px-6 md:px-12 py-20 flex flex-col md:flex-row gap-12">

                {/* Sticky Sidebar Navigation */}
                <aside className="md:w-1/4">
                    <TableOfContents sections={sections} />
                </aside>

                {/* Content Sections */}
                <article className="md:w-3/4 space-y-16 text-[#4A5568] leading-[26px] text-[15px]">

                    {/* Introduction */}
                    <section id="introduction" className="scroll-mt-28">
                        <h2 className="text-2xl font-bold text-[#111122] mb-6 tracking-tight">Introduction</h2>
                        <div className="space-y-4 mb-6">
                            <p>
                                Welcome to ASOWin. These Terms and Conditions ("Terms") govern your access to and use of our website, applications, and services (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms.
                            </p>
                            <p>
                                ASOWin provides App Store Optimization services, including but not limited to keyword optimization, app analytics, competitor analysis, and AI-powered insights to help improve your app's visibility and performance in app stores.
                            </p>
                            <p>
                                If you do not agree to these Terms, you must not access or use the Services. We reserve the right to modify these Terms at any time, and such modifications will be effective immediately upon posting.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-base font-bold text-[#111122] mb-3">Acceptance of Terms</h3>
                                <p>By creating an account, accessing our website, or using any of our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy.</p>
                            </div>
                            <div>
                                <h3 className="text-base font-bold text-[#111122] mb-3">Eligibility</h3>
                                <p className="mb-2">You must be at least 18 years old and have the legal capacity to enter into a binding agreement to use our Services. By using the Services, you represent and warrant that you meet these requirements.</p>
                                <p>If you are using the Services on behalf of a company or other legal entity, you represent that you have the authority to bind that entity to these Terms.</p>
                            </div>
                            <div>
                                <h3 className="text-base font-bold text-[#111122] mb-3">Agreement to Terms</h3>
                                <p>Your continued use of the Services following any changes to these Terms constitutes your acceptance of such changes. We encourage you to review these Terms periodically to stay informed of any updates.</p>
                            </div>
                        </div>
                    </section>

                    {/* Services */}
                    <section id="services" className="scroll-mt-28">
                        <h2 className="text-2xl font-bold text-[#111122] mb-6 tracking-tight">Services</h2>
                        <p className="mb-6">
                            ASOWin provides comprehensive App Store Optimization services designed to help you improve your app's visibility, downloads, and overall performance in app stores.
                        </p>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-base font-bold text-[#111122] mb-3">Service Description</h3>
                                <p className="mb-3">Our Services include, but are not limited to:</p>
                                <ul className="list-disc list-inside space-y-2 pl-4 text-[#4A5568]">
                                    <li>Keyword research and optimization recommendations</li>
                                    <li>App metadata analysis and improvement suggestions</li>
                                    <li>Competitor tracking and market intelligence</li>
                                    <li>Performance analytics and reporting</li>
                                    <li>AI-powered insights and recommendations</li>
                                    <li>App store conversion rate optimization</li>
                                    <li>Visual asset optimization guidance</li>
                                    <li>Review and rating management tools</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-base font-bold text-[#111122] mb-3">Service Availability</h3>
                                <p>We strive to provide reliable and uninterrupted access to our Services. However, we do not guarantee that the Services will always be available, error-free, or free from disruptions. We may modify, suspend, or discontinue any part of the Services at any time without prior notice.</p>
                            </div>
                            <div>
                                <h3 className="text-base font-bold text-[#111122] mb-3">Service Limitations</h3>
                                <p>While we use advanced AI and data analytics to provide recommendations, we cannot guarantee specific results such as app ranking improvements, download increases, or revenue growth. App store performance depends on many factors beyond our control, including app quality, market competition, and platform algorithm changes.</p>
                            </div>
                        </div>
                    </section>

                    {/* User Accounts */}
                    <section id="user-accounts" className="scroll-mt-28">
                        <h2 className="text-2xl font-bold text-[#111122] mb-6 tracking-tight">User Accounts</h2>
                        <p className="mb-6">
                            To access certain features of the Services, you must create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                        </p>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-base font-bold text-[#111122] mb-3">Account Registration</h3>
                                <p>When creating an account, you must provide accurate, current, and complete information. You agree to update your information promptly if it changes. Failure to provide accurate information may result in suspension or termination of your account.</p>
                            </div>
                            <div>
                                <h3 className="text-base font-bold text-[#111122] mb-3">Account Security</h3>
                                <ul className="list-disc list-inside space-y-2 pl-4 text-[#4A5568]">
                                    <li>Keep your password secure and do not share it with others</li>
                                    <li>Notify us immediately of any unauthorized use of your account</li>
                                    <li>You are responsible for all activities that occur under your account</li>
                                    <li>We are not liable for any loss or damage arising from unauthorized account access</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-base font-bold text-[#111122] mb-3">Account Usage</h3>
                                <p className="mb-3">You agree to use your account only for lawful purposes and in accordance with these Terms. You must not:</p>
                                <ul className="list-disc list-inside space-y-2 pl-4 text-[#4A5568]">
                                    <li>Use another user's account without permission</li>
                                    <li>Share your account credentials with others</li>
                                    <li>Create multiple accounts to circumvent service restrictions</li>
                                    <li>Use automated systems or bots to access the Services</li>
                                    <li>Attempt to gain unauthorized access to our systems or networks</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Payment Terms */}
                    <section id="payment-terms" className="scroll-mt-28">
                        <h2 className="text-2xl font-bold text-[#111122] mb-6 tracking-tight">Payment Terms</h2>
                        <p className="mb-6">
                            Certain features of our Services require payment of fees. By subscribing to a paid plan, you agree to pay all applicable fees as described at the time of purchase.
                        </p>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-base font-bold text-[#111122] mb-3">Subscription Plans</h3>
                                <p>We offer various subscription plans with different features and pricing. Subscription fees are charged on a recurring basis (monthly or annually) and will automatically renew unless you cancel before the renewal date.</p>
                            </div>
                            <div>
                                <h3 className="text-base font-bold text-[#111122] mb-3">Payment Processing</h3>
                                <ul className="list-disc list-inside space-y-2 pl-4 text-[#4A5568]">
                                    <li>All payments are processed through secure third-party payment processors</li>
                                    <li>You must provide valid payment information to subscribe to paid plans</li>
                                    <li>Prices are listed in USD unless otherwise specified</li>
                                    <li>All fees are non-refundable except as required by law or as expressly stated</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-base font-bold text-[#111122] mb-3">Billing and Renewal</h3>
                                <p>Your subscription will automatically renew at the end of each billing period unless you cancel before the renewal date. You authorize us to charge your payment method for renewal fees. We will provide notice of any fee changes at least 30 days in advance.</p>
                            </div>
                            <div>
                                <h3 className="text-base font-bold text-[#111122] mb-3">Cancellation and Refunds</h3>
                                <p>You may cancel your subscription at any time through your account settings. Cancellation will be effective at the end of your current billing period. We do not provide refunds for partial billing periods, except as required by applicable law.</p>
                            </div>
                        </div>
                    </section>

                    {/* Intellectual Property */}
                    <section id="intellectual-property" className="scroll-mt-28">
                        <h2 className="text-2xl font-bold text-[#111122] mb-6 tracking-tight">Intellectual Property</h2>
                        <p className="mb-6">
                            All content, features, and functionality of the Services, including but not limited to text, graphics, logos, icons, images, software, and data compilations, are the exclusive property of ASOWin or its licensors and are protected by copyright, trademark, and other intellectual property laws.
                        </p>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-base font-bold text-[#111122] mb-3">License Grant</h3>
                                <p className="mb-3">Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Services for your internal business purposes. This license does not include any right to:</p>
                                <ul className="list-disc list-inside space-y-2 pl-4 text-[#4A5568]">
                                    <li>Modify, copy, distribute, or create derivative works of our content</li>
                                    <li>Reverse engineer, decompile, or disassemble any software</li>
                                    <li>Remove or modify any copyright or proprietary notices</li>
                                    <li>Use the Services for competitive purposes or to develop competing products</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-base font-bold text-[#111122] mb-3">User Content</h3>
                                <p>You retain ownership of any content you submit to the Services. By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and display that content solely for the purpose of providing and improving the Services.</p>
                            </div>
                            <div>
                                <h3 className="text-base font-bold text-[#111122] mb-3">Trademarks</h3>
                                <p>"ASOWin" and our logo are trademarks of ASOWin. You may not use our trademarks without our prior written permission. All other trademarks, service marks, and trade names referenced in the Services are the property of their respective owners.</p>
                            </div>
                        </div>
                    </section>

                    {/* Limitation of Liability */}
                    <section id="limitation-of-liability" className="scroll-mt-28">
                        <h2 className="text-2xl font-bold text-[#111122] mb-6 tracking-tight">Limitation of Liability</h2>
                        <p className="mb-6">
                            To the maximum extent permitted by applicable law, ASOWin and its affiliates, officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of the Services.
                        </p>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-base font-bold text-[#111122] mb-3">Disclaimer of Warranties</h3>
                                <p className="mb-3">The Services are provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that:</p>
                                <ul className="list-disc list-inside space-y-2 pl-4 text-[#4A5568]">
                                    <li>The Services will meet your specific requirements or expectations</li>
                                    <li>The Services will be uninterrupted, timely, secure, or error-free</li>
                                    <li>The results obtained from using the Services will be accurate or reliable</li>
                                    <li>Any errors or defects in the Services will be corrected</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-base font-bold text-[#111122] mb-3">Limitation of Damages</h3>
                                <div className="bg-orange-50/50 border-l-4 border-orange-400 p-6 rounded-r-xl">
                                    <p className="text-gray-700 text-sm font-medium">
                                        In no event shall our total liability to you for all damages, losses, and causes of action exceed the amount you have paid to us in the twelve (12) months prior to the event giving rise to the liability, or $100 USD, whichever is greater.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Indemnification */}
                    <section id="indemnification" className="scroll-mt-28">
                        <h2 className="text-2xl font-bold text-[#111122] mb-6 tracking-tight">Indemnification</h2>
                        <p>
                            You agree to indemnify, defend, and hold harmless ASOWin and its affiliates from any claims, liabilities, damages, losses, and expenses arising out of your use of the Services, violation of these Terms, or infringement of any third-party rights.
                        </p>
                    </section>

                    {/* Termination */}
                    <section id="termination" className="scroll-mt-28">
                        <h2 className="text-2xl font-bold text-[#111122] mb-6 tracking-tight">Termination</h2>
                        <p className="mb-6">
                            We reserve the right to suspend or terminate your access to the Services at any time, with or without cause, and with or without notice, for any reason including violation of these Terms.
                        </p>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-base font-bold text-[#111122] mb-3">Termination by You</h3>
                                <p>You may terminate your account at any time by contacting us at hello@asowin.com or through your account settings. Upon termination, your right to access and use the Services will immediately cease.</p>
                            </div>
                            <div>
                                <h3 className="text-base font-bold text-[#111122] mb-3">Termination by Us</h3>
                                <p className="mb-2">We may terminate or suspend your account if:</p>
                                <ul className="list-disc list-inside space-y-2 pl-4 text-[#4A5568]">
                                    <li>You violate these Terms or our policies</li>
                                    <li>Your account has been inactive for an extended period</li>
                                    <li>We are required to do so by law</li>
                                    <li>We discontinue the Services or significant parts thereof</li>
                                    <li>We determine that continuing to provide Services would create risk or legal liability</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-base font-bold text-[#111122] mb-3">Effect of Termination</h3>
                                <p>Upon termination, all licenses and rights granted to you under these Terms will immediately cease. We may delete your account data in accordance with our data retention policies. Sections of these Terms that by their nature should survive termination will continue to apply.</p>
                            </div>
                        </div>
                    </section>

                    {/* Contact */}
                    <section id="contact" className="scroll-mt-28">
                        <h2 className="text-2xl font-bold text-[#111122] mb-6 tracking-tight">Contact</h2>
                        <p className="mb-6">
                            If you have any questions, concerns, or disputes regarding these Terms or the Services, please contact us:
                        </p>
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 w-full md:w-fit space-y-1">
                            <h4 className="font-bold text-[#111122] mb-1">ASOWin</h4>
                            <p className="text-[#4A5568]">Email: <a href="mailto:hello@asowin.com" className="text-orange-500 hover:underline">hello@asowin.com</a></p>
                            <p className="text-[#4A5568] pt-1">We are committed to resolving any issues promptly and professionally.</p>
                        </div>
                    </section>

                    {/* Standard Legal Clauses */}
                    <section id="governing-law" className="scroll-mt-28">
                        <h2 className="text-2xl font-bold text-[#111122] mb-4 tracking-tight">Governing Law</h2>
                        <p>These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which ASOWin operates, without regard to its conflict of law provisions. Any disputes arising from these Terms or your use of the Services shall be subject to the exclusive jurisdiction of the courts in that jurisdiction.</p>
                    </section>

                    <section id="dispute-resolution" className="scroll-mt-28">
                        <h2 className="text-2xl font-bold text-[#111122] mb-4 tracking-tight">Dispute Resolution</h2>
                        <p>We encourage you to contact us first to resolve any disputes informally. If we cannot resolve a dispute informally, you agree to resolve any claims through binding arbitration or small claims court, rather than through class actions or other representative proceedings.</p>
                    </section>

                    <section id="severability" className="scroll-mt-28">
                        <h2 className="text-2xl font-bold text-[#111122] mb-4 tracking-tight">Severability</h2>
                        <p>If any provision of these Terms is found to be invalid or unenforceable, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.</p>
                    </section>

                    <section id="entire-agreement" className="scroll-mt-28">
                        <h2 className="text-2xl font-bold text-[#111122] mb-4 tracking-tight">Entire Agreement</h2>
                        <p>These Terms, together with our Privacy Policy and any other legal notices published by us on the Services, constitute the entire agreement between you and ASOWin concerning your use of the Services and supersede all prior agreements and understandings.</p>
                    </section>

                </article>
            </div>

            <Footer />
        </div>
    );
}
