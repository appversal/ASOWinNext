'use client';

import React, { useEffect } from "react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";
import Navbar from "./Navbar";
import { useForm, ValidationError } from '@formspree/react';

const ContactHero = () => {
  const [state, handleSubmit] = useForm("xqaokzep");

  useEffect(() => {
    if (state.succeeded) {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'conversion', {
          'send_to': 'AW-17791392097/38a7COX2084bEOGyzKNC',
          'value': 1.0,
          'currency': 'INR'
        });
        window.gtag('event', 'conversion', {
          'send_to': 'AW-938608563/t3qxCNPz8pYbELOPyL8D',
          'value': 1.0,
          'currency': 'INR'
        });
      }
    }
  }, [state.succeeded]);

  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen bg-[#FFFDF7] relative overflow-hidden pt-20 pb-20 px-4">
        {/* Background Sphere Decorations (inspired by screenshot) */}
        {/* Top Left - Large */}
        <div className="absolute -top-12 -left-8 w-48 h-48 bg-gradient-to-br from-[#FFE8CC] to-[#FFDCB0] rounded-full opacity-60 -z-10" />
        {/* Top Left - Small */}
        <div className="absolute top-20 left-32 w-12 h-12 bg-gradient-to-br from-[#FFE8CC] to-[#FFDCB0] rounded-full opacity-40 -z-10" />
        
        {/* Top Right - Large */}
        <div className="absolute top-8 -right-12 w-40 h-40 bg-gradient-to-br from-[#FFE8CC] to-[#FFDCB0] rounded-full opacity-60 -z-10" />
        {/* Top Right - Small */}
        <div className="absolute top-4 right-8 w-10 h-10 bg-gradient-to-br from-[#FFE8CC] to-[#FFDCB0] rounded-full opacity-40 -z-10" />

        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <h1 className="text-4xl md:text-[50px] font-bold text-center text-[#111122] mb-8 tracking-tight">
            Contact Us
          </h1>

          {/* Main Container Card */}
          <div className="bg-gradient-to-br from-[#FFFDE4] via-[#FFF6E9] to-[#FFDAB3] p-5 md:p-14 rounded-[36px] shadow-sm flex flex-col md:flex-row items-center gap-10 md:gap-14 relative overflow-hidden">

            {/* Left Column content */}
            <div className="flex-1 space-y-7 z-10">
              <h2 className="text-3xl md:text-[36px] font-bold text-[#111122] leading-tight tracking-tight">
                Ready to Start Your Project?
              </h2>

              <p className="text-[#4A5568] text-base leading-relaxed">
                Let&apos;s make your vision a reality.<br />
                Contact us today and let&apos;s discuss how we can help you innovate and grow.
              </p>

              <div className="space-y-4 pt-4">
                <h4 className="text-base font-bold text-[#111122]">Contact Info</h4>

                <div className="flex items-center gap-2 text-[#4A5568]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#111122]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L22 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:support@asowin.com" className="hover:underline">support@asowin.com</a>
                </div>

                <div className="flex items-center gap-2 text-[#4A5568]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#111122]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Delaware | California | Mumbai | Noida</span>
                </div>
              </div>
            </div>

            {/* Right Column - White Form Card */}
            <div className="w-full md:w-[420px] bg-white rounded-3xl p-6 md:p-8 shadow-md z-10">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-[#111122]">Become a Partner</h3>
                <p className="text-xs text-[#718096] mt-1">Break the ice! Let us help you out</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {state.succeeded && (
                  <div className="p-3 rounded bg-green-50 text-green-700 text-sm mb-4">
                    Thank you! We&apos;ll get back to you soon.
                  </div>
                )}

                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-[#F7FAFC] border border-transparent rounded-xl focus:bg-white focus:border-gray-200 text-sm transition-all"
                    required
                  />
                </div>

                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-[#F7FAFC] border border-transparent rounded-xl focus:bg-white focus:border-gray-200 text-sm transition-all"
                    required
                  />
                </div>

                <div>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Describe your interest"
                    className="w-full px-4 py-3 bg-[#F7FAFC] border border-transparent rounded-xl focus:bg-white focus:border-gray-200 text-sm resize-none transition-all"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full py-3 bg-[#111122] text-white font-bold rounded-full text-sm hover:bg-black transition-all mt-2 flex items-center justify-center disabled:opacity-50"
                >
                  Submit
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default ContactHero;