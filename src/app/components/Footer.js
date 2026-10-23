"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Loader2 } from "lucide-react";

const footerColumns = [
  {
    title: "Services",
    links: [
      { label: "App Store Optimization", href: "/services/app-store-optimization/" },
      { label: "App Reputation Management", href: "/services/app-reputation-management/" },
      { label: "Creative A/B Testing", href: "/services/creative-ab-testing/" },
      { label: "Keyword Installs", href: "/services/keyword-installs/" },
      { label: "Automated ASO with AI", href: "/services/automated-aso-ai/" },
      { label: "Paid UA & Apple Search Ads", href: "/services/paid-user-acquisition/" },
      { label: "AI Review Replies", href: "/automated-review-replies/" },
    ],
  },
  {
    title: "Success stories",
    links: [
      { label: "Pepperfry", href: "/success-stories/pepperfry/" },
      { label: "Bybit", href: "/success-stories/bybit/" },
      { label: "Indiabulls Securities", href: "/success-stories/indiabulls-securities/" },
      { label: "LSM Apps", href: "/success-stories/lsm-apps/" },
      { label: "Viker Games", href: "/success-stories/viker-games/" },
    ],
  },
  {
    title: "Markets",
    links: [
      { label: "ASO Agency USA", href: "/aso-agency-usa/" },
      { label: "ASO Agency India", href: "/aso-agency-india/" },
      { label: "Agensi ASO Indonesia", href: "/aso-agency-indonesia/" },
      { label: "Google Play ASO", href: "/google-play-store-optimization/" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog/" },
      { label: "ASO Guide", href: "/blog/app-store-optimization-guide/" },
      { label: "ASO Glossary", href: "/blog/aso-glossary-key-terms/" },
      { label: "Our Book", href: "/book/" },
      { label: "Media Kit", href: "/media-kit/" },
    ],
  },
];

const Footer = () => {
  const [isLoading, setIsLoading] = useState({
    book: false
  });

  const handleExternalLink = async (type, url) => {
    setIsLoading(prev => ({ ...prev, [type]: true }));

    // Open URLs directly since they're external resources
    window.open(url, '_blank', 'noopener,noreferrer');

    // Reset loading state after a short delay
    setTimeout(() => {
      setIsLoading(prev => ({ ...prev, [type]: false }));
    }, 500);
  };

  return (
    <footer className="w-full">
      <div
        className="w-full relative"
        style={{
          backgroundImage: "url('/footer.png')",
          backgroundColor: "#014458",
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          minHeight: "350px",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
          {/* Top section */}
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start pt-8 sm:pt-12 md:pt-16">
            {/* Logo */}
            <div className="mb-6 sm:mb-8 md:mb-0 mt-12 sm:mt-16 md:mt-24">
              <Image
                src="/ASOWin.png"
                alt="ASOWin"
                width={200}
                height={100}
                className="w-[150px] h-auto sm:w-[180px] md:w-[200px]"
                priority
              />
            </div>

            {/* Navigation */}
            <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 mt-6 sm:mt-16 md:mt-28 text-center md:text-left" aria-label="Footer">
              {[
                { label: "SERVICES", href: "/services/" },
                { label: "SUCCESS STORIES", href: "/success-stories/" },
                { label: "ABOUT", href: "/about/" },
                { label: "CONTACT US", href: "/contact/" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white hover:text-[#FFB842] text-sm font-semibold whitespace-nowrap"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-12 md:mt-16 pb-10 border-b border-white/15">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <p className="text-[#FFB842] text-xs font-semibold tracking-widest uppercase mb-4">
                  {column.title}
                </p>
                <ul className="space-y-2">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-white/80 hover:text-white text-sm">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom section */}
          <div className="py-6 sm:py-8">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <p className="text-white/80 text-xs order-3 sm:order-1 text-center sm:text-left">
                © 2026 ASOWin Inc. All Rights Reserved.
              </p>

              <div className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-4 md:gap-6 order-1 sm:order-2">
                <Link
                  href="/privacy-policy"
                  className="text-white/80 hover:text-white text-xs whitespace-nowrap"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-of-service"
                  className="text-white/80 hover:text-white text-xs whitespace-nowrap"
                >
                  Terms Of Service
                </Link>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 order-2 sm:order-3">
                <a
                  href="mailto:support@asowin.com"
                  className="text-white/80 hover:text-white text-xs flex items-center gap-2 whitespace-nowrap text-center sm:text-left"
                  onClick={() => {
                    if (typeof window !== 'undefined' && window.gtag) {
                      window.gtag('event', 'click_email', {
                        'event_category': 'Engagement',
                        'event_label': 'Footer Support Email'
                      });
                    }
                  }}
                >
                  <span className="text-[#FFB842]">✉</span>
                  support@asowin.com
                </a>

                <a
                  href="https://www.linkedin.com/company/asowin/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white text-xs flex items-center gap-2 whitespace-nowrap text-center sm:text-left"
                  onClick={() => {
                    if (typeof window !== 'undefined' && window.gtag) {
                      window.gtag('event', 'click_social', {
                        'event_category': 'Engagement',
                        'event_label': 'LinkedIn Footer'
                      });
                    }
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                  >
                    <path d="M22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.203 24 24 23.226 24 22.271V1.729C24 .774 23.203 0 22.225 0zm-14.47 20.451h-3.96v-11.74h3.96v11.74zM6.474 7.336c-1.26 0-2.283-1.046-2.283-2.336 0-1.291 1.023-2.336 2.283-2.336 1.26 0 2.283 1.045 2.283 2.336s-1.023 2.336-2.283 2.336zM20.451 20.451h-3.96v-5.66c0-1.348-.027-3.088-1.884-3.088-1.886 0-2.175 1.476-2.175 2.994v5.754h-3.96v-11.74h3.803v1.604h.053c.528-1 1.818-2.057 3.741-2.057 4.005 0 4.748 2.637 4.748 6.066v6.128z"></path>
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;