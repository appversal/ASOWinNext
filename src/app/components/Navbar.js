'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesMobileOpen, setIsServicesMobileOpen] = useState(false);

  return (
    <header className="sticky top-4 z-50 mx-4 md:mx-8 lg:mx-10 2xl:mx-20 font">
      <nav className="relative bg-white shadow-lg rounded-2xl container mx-auto flex items-center justify-between py-4 px-4 md:px-6 lg:px-8 2xl:px-12">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold">
            <Image
              height={38}
              width={118}
              className="w-[100px] md:w-[118px] 2xl:w-[140px] h-auto"
              src="/ASOWin.png"
              alt="Logo"
            />

          </span>
        </Link>

        {/* Desktop Menu Container */}
        <div className="hidden md:flex flex-1 items-center justify-between md:pl-8 lg:pl-12 2xl:pl-16">
          {/* Menu Items */}
          <div className="flex items-center md:space-x-6 lg:space-x-8 2xl:space-x-12">
            <Link
              href="/"
              className="text-[#111111] font-medium hover:text-black text-sm lg:text-[14px] 2xl:text-[14px]"
            >
              Home
            </Link>
            <div className="relative group">
              <div className="flex items-center gap-1 cursor-pointer py-2">
                <Link
                  href="/services"
                  className="text-[#111111] font-medium hover:text-black text-sm lg:text-[14px] 2xl:text-[14px]"
                >
                  Services
                </Link>
                <svg className="w-4 h-4 text-gray-500 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="absolute top-[100%] left-0 w-48 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="bg-white shadow-xl rounded-xl border border-gray-100 py-2">
                  <Link
                    href="/services"
                    className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-black transition-colors"
                  >
                    All Services
                  </Link>
                  <Link
                    href="/automated-review-replies"
                    className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-black transition-colors"
                  >
                    AI Reply-To-Reviews
                  </Link>
                </div>
              </div>
            </div>
            <Link
              href="/success-stories"
              className="text-[#111111] font-medium hover:text-black text-sm lg:text-[14px] 2xl:text-[14px]"
            >
              Success Stories
            </Link>
            <Link
              href="/book"
              className="text-[#111111] font-medium hover:text-black text-sm lg:text-[14px] 2xl:text-[14px]"
            >
              Our Book
            </Link>
            <Link
              href="/blog"
              className="text-[#111111] font-medium hover:text-black text-sm lg:text-[14px] 2xl:text-[14px]"
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="text-[#111111] font-medium hover:text-black text-sm lg:text-[14px] 2xl:text-[14px]"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-[#111111] font-medium hover:text-black text-sm lg:text-[14px] 2xl:text-[14px]"
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <Link href="/contact">
            <button
              className="bg-[#fdb124] text-white px-4 md:px-6 py-2.5 rounded-[3px] text-sm lg:text-[14px] 2xl:text-[14px] font-medium hover:bg-[#e09910] transition-colors md:ml-6 lg:ml-8 2xl:ml-12 whitespace-nowrap w-auto md:w-[160px] lg:w-[197px] h-[41px]"
              onClick={() => {
                if (typeof window !== 'undefined' && window.gtag) {
                  window.gtag('event', 'click_get_started', {
                    'event_category': 'CTA',
                    'event_label': 'Navbar'
                  });
                }
              }}
            >
              Let's Get Started
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            aria-hidden="true"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-3 bg-white shadow-2xl rounded-2xl md:hidden border border-gray-100 z-50 overflow-hidden">
            <div className="flex flex-col py-5 px-5 space-y-1">
              <Link
                href="/"
                className="px-4 py-3 text-[#111122] font-semibold text-[15px] hover:bg-gray-50 rounded-xl transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <div className="flex flex-col">
                <div className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 rounded-xl transition-colors">
                  <Link
                    href="/services"
                    className="text-[#111122] font-semibold text-[15px]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Services
                  </Link>
                  <button
                    onClick={() => setIsServicesMobileOpen(!isServicesMobileOpen)}
                    className="p-1 rounded-md hover:bg-gray-200 text-gray-600 focus:outline-none"
                    aria-label="Toggle Services Menu"
                  >
                    <svg className={`w-5 h-5 transition-transform duration-200 ${isServicesMobileOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
                {isServicesMobileOpen && (
                  <div className="flex flex-col pl-6 pr-2 py-1 space-y-1">
                    <Link
                      href="/services"
                      className="px-4 py-2 text-gray-600 font-medium text-[14px] hover:text-[#111122] hover:bg-gray-50 rounded-lg transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      All Services
                    </Link>
                    <Link
                      href="/automated-review-replies"
                      className="px-4 py-2 text-gray-600 font-medium text-[14px] hover:text-[#111122] hover:bg-gray-50 rounded-lg transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Review Replies
                    </Link>
                  </div>
                )}
              </div>
              <Link
                href="/success-stories"
                className="px-4 py-3 text-[#111122] font-semibold text-[15px] hover:bg-gray-50 rounded-xl transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Success Stories
              </Link>
              <Link
                href="/book"
                className="px-4 py-3 text-[#111122] font-semibold text-[15px] hover:bg-gray-50 rounded-xl transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Our Book
              </Link>
              <Link
                href="/blog"
                className="px-4 py-3 text-[#111122] font-semibold text-[15px] hover:bg-gray-50 rounded-xl transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/about"
                className="px-4 py-3 text-[#111122] font-semibold text-[15px] hover:bg-gray-50 rounded-xl transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="px-4 py-3 text-[#111122] font-semibold text-[15px] hover:bg-gray-50 rounded-xl transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="px-4 pt-4 pb-2 border-t border-gray-100 mt-2">
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <button className="w-full bg-[#fdb124] text-white py-3 rounded-xl font-bold text-sm hover:bg-[#e09910] transition-all shadow-md">
                    Let's Get Started
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;