import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TableOfContents from "../components/TableOfContents";

export const metadata = {
    title: "Privacy Policy | ASOWin",
    description: "Read our privacy policy to understand how ASOWin collects, uses, and protects your personal information.",
};

export default function PrivacyPolicy() {
    const sections = [
        { id: "introduction", label: "Introduction" },
        { id: "information-we-collect", label: "Information We Collect" },
        { id: "data-usage", label: "Data Usage" },
        { id: "security", label: "Security" },
        { id: "data-retention", label: "Data Retention" },
        { id: "cookies", label: "Cookies" },
        { id: "user-rights", label: "User Rights" },
        { id: "contact", label: "Contact" },
        { id: "changes-to-policy", label: "Changes To Policy" },
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
                            Privacy Policy
                        </h1>
                        <p className="text-[#4A5568] text-lg md:text-[17px] leading-relaxed max-w-3xl mb-5 font-normal">
                            Your privacy is important to us. This policy outlines how we collect, use, and protect your personal information.
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
                        <div className="space-y-4">
                            <p>
                                Welcome to ASOWin. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy or our practices with regards to your personal information, please contact us at <a href="mailto:hello@asowin.com" className="text-orange-500 hover:underline">hello@asowin.com</a>.
                            </p>
                            <p>
                                This Privacy Policy applies to all information collected through our website, mobile applications, and any related services, sales, marketing, or events (collectively referred to as the "Services").
                            </p>
                            <p>
                                Please read this privacy policy carefully as it will help you make informed decisions about sharing your personal information with us.
                            </p>
                        </div>
                    </section>

                    {/* Information We Collect */}
                    <section id="information-we-collect" className="scroll-mt-28">
                        <h2 className="text-2xl font-bold text-[#111122] mb-6 tracking-tight">Information We Collect</h2>
                        <p className="mb-6">
                            We collect information that you voluntarily provide to us when registering for the Services, expressing an interest in obtaining information about us or our products and services, or otherwise contacting us.
                        </p>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-base font-bold text-[#111122] mb-3">Personal Information</h3>
                                <p className="mb-3">
                                    The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:
                                </p>
                                <ul className="list-disc list-inside space-y-2 pl-4 text-[#4A5568]">
                                    <li>Name and contact information (email address, phone number)</li>
                                    <li>Payment information and billing details</li>
                                    <li>Account credentials (username and password)</li>
                                    <li>Company information and business details</li>
                                    <li>App store data and analytics you provide access to</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-base font-bold text-[#111122] mb-3">Automatically Collected Information</h3>
                                <p className="mb-3">
                                    We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity but may include device and usage information:
                                </p>
                                <ul className="list-disc list-inside space-y-2 pl-4 text-[#4A5568]">
                                    <li>Log and usage data (IP address, browser type, operating system)</li>
                                    <li>Device information (device type, unique identifiers)</li>
                                    <li>Location data (approximate location derived from IP address)</li>
                                    <li>Cookies and similar tracking technologies</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-base font-bold text-[#111122] mb-3">Third-Party Information</h3>
                                <p>
                                    We may receive information from third parties such as app store platforms (Apple App Store, Google Play Store) when you authorize us to access your app performance data for optimization purposes.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Data Usage */}
                    <section id="data-usage" className="scroll-mt-28">
                        <h2 className="text-2xl font-bold text-[#111122] mb-6 tracking-tight">Data Usage</h2>
                        <p className="mb-6">
                            We process your information for purposes based on legitimate business interests, the fulfillment of our contract with you, compliance with our legal obligations, and/or your consent.
                        </p>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-base font-bold text-[#111122] mb-3">How We Use Your Information</h3>
                                <p className="mb-3">We use the information we collect or receive to:</p>
                                <ul className="list-disc list-inside space-y-2 pl-4 text-[#4A5568]">
                                    <li>Provide, operate, and maintain our Services</li>
                                    <li>Improve, personalize, and expand our Services</li>
                                    <li>Understand and analyze how you use our Services</li>
                                    <li>Develop new products, services, features, and functionality</li>
                                    <li>Communicate with you for customer service, updates, and marketing purposes</li>
                                    <li>Process your transactions and manage your orders</li>
                                    <li>Send you promotional communications and special offers</li>
                                    <li>Detect, prevent, and address technical issues and security threats</li>
                                    <li>Comply with legal obligations and enforce our terms and policies</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-base font-bold text-[#111122] mb-3">AI and Machine Learning</h3>
                                <p>
                                    We use artificial intelligence and machine learning technologies to analyze app store data and provide optimization recommendations. This processing helps us deliver better insights and improve your app's performance in app stores.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Security */}
                    <section id="security" className="scroll-mt-28">
                        <h2 className="text-2xl font-bold text-[#111122] mb-6 tracking-tight">Security</h2>
                        <p className="mb-6">
                            We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please note that no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure.
                        </p>

                        <div>
                            <h3 className="text-base font-bold text-[#111122] mb-3">Security Measures</h3>
                            <p className="mb-3">Our security measures include:</p>
                            <ul className="list-disc list-inside space-y-2 pl-4 text-[#4A5568]">
                                <li>Encryption of data in transit using SSL/TLS protocols</li>
                                <li>Encryption of sensitive data at rest</li>
                                <li>Regular security assessments and vulnerability testing</li>
                                <li>Access controls and authentication mechanisms</li>
                                <li>Employee training on data protection and security best practices</li>
                                <li>Incident response and breach notification procedures</li>
                            </ul>
                        </div>
                    </section>

                    {/* Data Retention */}
                    <section id="data-retention" className="scroll-mt-28">
                        <h2 className="text-2xl font-bold text-[#111122] mb-6 tracking-tight">Data Retention</h2>
                        <p>
                            We will retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
                        </p>
                    </section>

                    {/* Cookies */}
                    <section id="cookies" className="scroll-mt-28">
                        <h2 className="text-2xl font-bold text-[#111122] mb-6 tracking-tight">Cookies</h2>
                        <p className="mb-6">
                            We use cookies and similar tracking technologies to access or store information. Cookies are small data files that are placed on your device when you visit our website.
                        </p>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-base font-bold text-[#111122] mb-3">Types of Cookies We Use</h3>
                                <ul className="space-y-3 text-[#4A5568]">
                                    <li>
                                        <strong className="text-[#111122]">Essential Cookies:</strong> Required for the website to function properly and cannot be disabled. They enable core functionality such as security, network management, and accessibility.
                                    </li>
                                    <li>
                                        <strong className="text-[#111122]">Analytics Cookies:</strong> Help us understand how visitors interact with our website by collecting and reporting information anonymously.
                                    </li>
                                    <li>
                                        <strong className="text-[#111122]">Functional Cookies:</strong> Enable enhanced functionality and personalization, such as remembering your preferences and settings.
                                    </li>
                                    <li>
                                        <strong className="text-[#111122]">Marketing Cookies:</strong> Used to track visitors across websites to display relevant and engaging advertisements.
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-base font-bold text-[#111122] mb-3">Managing Cookies</h3>
                                <p>
                                    You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of the Services may become inaccessible or not function properly.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* User Rights */}
                    <section id="user-rights" className="scroll-mt-28">
                        <h2 className="text-2xl font-bold text-[#111122] mb-6 tracking-tight">User Rights</h2>
                        <p className="mb-6">
                            Depending on your location, you may have certain rights regarding your personal information under applicable data protection laws, including GDPR, CCPA, and other privacy regulations.
                        </p>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-base font-bold text-[#111122] mb-3">Your Privacy Rights</h3>
                                <p className="mb-3">You have the right to:</p>
                                <ul className="list-disc list-inside space-y-2 pl-4 text-[#4A5568]">
                                    <li>Access and receive a copy of your personal information</li>
                                    <li>Rectify or update inaccurate or incomplete personal information</li>
                                    <li>Request deletion of your personal information</li>
                                    <li>Object to or restrict the processing of your personal information</li>
                                    <li>Withdraw consent where processing is based on consent</li>
                                    <li>Data portability (receive your data in a structured, commonly used format)</li>
                                    <li>Lodge a complaint with a supervisory authority</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-base font-bold text-[#111122] mb-3">Exercising Your Rights</h3>
                                <p>
                                    To exercise any of these rights, please contact us at <a href="mailto:hello@asowin.com" className="text-orange-500 hover:underline">hello@asowin.com</a>. We will respond to your request within the timeframe required by applicable law. Please note that we may need to verify your identity before processing your request.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-base font-bold text-[#111122] mb-3">Do Not Sell My Personal Information</h3>
                                <p>
                                    We do not sell your personal information to third parties. We may share your information with service providers who assist us in operating our Services, but only for the purposes described in this Privacy Policy.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Contact */}
                    <section id="contact" className="scroll-mt-28">
                        <h2 className="text-2xl font-bold text-[#111122] mb-6 tracking-tight">Contact</h2>
                        <p className="mb-6">
                            If you have questions or comments about this Privacy Policy or our privacy practices, please contact us at:
                        </p>
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 w-full md:w-fit space-y-1">
                            <h4 className="font-bold text-[#111122] mb-1">ASOWin</h4>
                            <p className="text-[#4A5568]">Email: <a href="mailto:hello@asowin.com" className="text-orange-500 hover:underline">hello@asowin.com</a></p>
                            <p className="text-[#4A5568] pt-1">We will make every effort to resolve your concerns and answer your questions promptly.</p>
                        </div>
                    </section>

                    {/* Changes to This Privacy Policy */}
                    <section id="changes-to-policy" className="scroll-mt-28">
                        <h2 className="text-2xl font-bold text-[#111122] mb-6 tracking-tight">Changes to This Privacy Policy</h2>
                        <p className="mb-3">
                            We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last updated" date at the top of this Privacy Policy. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.
                        </p>
                        <p>
                            If we make material changes to this Privacy Policy, we may notify you either through the email address you have provided us, or by placing a prominent notice on our website.
                        </p>
                    </section>

                </article>
            </div>

            <Footer />
        </div>
    );
}

