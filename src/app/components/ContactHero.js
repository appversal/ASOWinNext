'use client';

import React from "react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";
import Navbar from "./Navbar";
import { useForm, ValidationError } from '@formspree/react';

const ContactHero = () => {
  const [state, handleSubmit] = useForm("xqaokzep");

  return (
    <>
      <Navbar />
      <div
        className="w-full min-h-[90vh] relative"
        id="form-section"
        style={{
          backgroundImage: `url('/contactbg.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Left Column */}
            <div className="flex flex-col mt-10">
              <h1 className="text-[52px] leading-tight font-normal text-black mb-4">
                Contact Us
              </h1>

              <p className="text-black text-lg mb-10">
                Contact ASOWin and our team will connect with you instantly
              </p>

              {/* Company Info */}
              <div className="space-y-8">
                {/* Addresses */}
                <div>
                  <p className="text-sm text-black font-medium mb-4">
                    Company Addresses
                  </p>
                  <div className="space-y-4">
                    {/* Delaware Address */}
                    <div className="flex items-start gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-black"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <p className="text-base text-black">
                        <span className="font-bold">Delaware:</span> 16192
                        Coastal Hwy, Lewes, DE 19958, USA
                      </p>
                    </div>
                    {/* California Address */}
                    <div className="flex items-start gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-black"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <p className="text-base text-black">
                        <span className="font-bold">California:</span> 140 Black
                        Mountain Cir, Fremont, California, USA - 94536
                      </p>
                    </div>
                    {/* Mumbai Address */}
                    <div className="flex items-start gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-black"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <p className="text-base text-black">
                        <span className="font-bold">Mumbai:</span> Office #3,
                        Neelkanth, Next to Shreeji Heights, Sector 46A, Navi
                        Mumbai, Maharashtra, India - 400706
                      </p>
                    </div>
                    {/* Noida Address */}
                    <div className="flex items-start gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-black"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <p className="text-base text-black">
                        <span className="font-bold">Noida:</span> 1401, Tower 4, Assotech Business Cresterra, Sector 135, Noida, Uttar Pradesh - 201304
                      </p>
                    </div>
                  </div>
                </div>

                {/* Email and Phone */}
                <div>
                  <p className="text-sm text-black font-medium mb-1">
                    Contact Us
                  </p>
                  <div className="flex items-center justify-between space-x-8">
                    <a
                      href="mailto:support@asowin.com"
                      className="text-base text-black underline"
                    >
                      support@asowin.com
                    </a>
                    <div className="flex flex-col text-base text-black">
                      {/* <h3>Phone:</h3> */}
                      <p>+1 510-365-7173 (USA)</p>
                      {/* <p>+91 9619963340 (India)</p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="mt-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                {state.succeeded && (
                  <div className="p-4 rounded bg-green-100 text-green-700">
                    Thank you for contacting us! We&apos;ll get back to you soon.
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                    FULL NAME*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 border border-gray-200 rounded focus:ring-1 focus:ring-gray-300 focus:border-gray-300"
                    required
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                    EMAIL ADDRESS*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 border border-gray-200 rounded focus:ring-1 focus:ring-gray-300 focus:border-gray-300"
                    required
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                    ADDITIONAL MESSAGE
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    placeholder="Please provide any additional details about your request"
                    className="w-full min-h-[150px] px-4 py-3 border border-gray-200 rounded focus:ring-1 focus:ring-gray-300 focus:border-gray-300 resize-none"
                  ></textarea>
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className={`px-8 py-3 bg-[#FF8712] text-white font-medium rounded-full hover:bg-[#e85f25] transition-colors ${state.submitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {state.submitting ? 'SUBMITTING...' : 'SUBMIT FORM'}
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