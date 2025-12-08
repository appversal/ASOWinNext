'use client';

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GoogleAnalytics from "../components/GoogleAnalytics";
import Image from "next/image";

const BookPage = () => {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            {/* Google Analytics */}
            <GoogleAnalytics />

            {/* Hero Section with Navbar */}
            <div className="w-full bg-gradient-to-b from-[#EEF6FF] to-[#FFFFFF]">
                <Navbar />

                {/* Hero Content */}
                <div className="w-full px-4 sm:px-6 lg:px-20 pt-12 pb-16 md:pt-16 md:pb-20">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-8 md:mb-12">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#1a1a1a] mb-4 md:mb-6 leading-tight">
                                ASOWin Book
                            </h1>
                            <p className="text-lg sm:text-xl md:text-2xl text-[#6B7280] max-w-3xl mx-auto leading-relaxed">
                                Your comprehensive guide to App Store Optimization
                            </p>
                            <p className="text-base sm:text-lg text-[#9CA3AF] mt-4 max-w-2xl mx-auto">
                                Discover proven strategies, expert insights, and actionable techniques to boost your app&apos;s visibility and rankings
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* PDF Viewer Section */}
            <div className="flex-1 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-8 md:py-12 bg-white">
                <div className="container mx-auto max-w-7xl">
                    {/* PDF Embed Container */}
                    <div className="w-full bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 mb-8"
                        style={{
                            height: 'calc(100vh - 400px)',
                            minHeight: '700px',
                            maxHeight: '900px'
                        }}>
                        <div className="w-full h-full relative">
                            <iframe
                                src="/ASOWinBook.pdf#toolbar=1&navpanes=1&scrollbar=1&view=FitH"
                                className="w-full h-full"
                                style={{ border: 'none' }}
                                title="ASOWin Book PDF Viewer"
                                allow="fullscreen"
                                loading="lazy"
                            />
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                        <a
                            href="/ASOWinBook.pdf"
                            download="ASOWinBook.pdf"
                            className="inline-flex items-center justify-center bg-[#306777] text-white px-8 py-4 rounded-[3px] font-semibold hover:bg-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-base md:text-lg min-w-[200px]"
                        >
                            <svg
                                className="w-5 h-5 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                />
                            </svg>
                            Download PDF
                        </a>
                        <a
                            href="/ASOWinBook.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center bg-white text-[#306777] border-2 border-[#306777] px-8 py-4 rounded-[3px] font-semibold hover:bg-[#306777] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-base md:text-lg min-w-[200px]"
                        >
                            <svg
                                className="w-5 h-5 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                            </svg>
                            Open in New Tab
                        </a>
                    </div>

                    {/* Additional Info Section */}
                    <div className="bg-gradient-to-br from-[#EEF6FF] to-[#F0F9FF] rounded-2xl p-6 md:p-8 lg:p-10 border border-gray-100">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-4">
                                What You&apos;ll Learn
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-6">
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#306777] flex items-center justify-center mt-1">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-[#374151] text-base md:text-lg">App Store Optimization strategies</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#306777] flex items-center justify-center mt-1">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-[#374151] text-base md:text-lg">Keyword research and optimization</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#306777] flex items-center justify-center mt-1">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-[#374151] text-base md:text-lg">Creative A/B testing techniques</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#306777] flex items-center justify-center mt-1">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-[#374151] text-base md:text-lg">App reputation management</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default BookPage;

