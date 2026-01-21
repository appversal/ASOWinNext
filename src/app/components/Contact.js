"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
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
    <section className="flex flex-col lg:flex-row w-full bg-[#F5FDFF]">
      {/* Left side with image */}
      <div className="w-full lg:w-[40%] flex items-center justify-center p-8">
        <Image
          src="/contact.png"
          alt="Contact illustration"
          width={500}
          height={400}
          className="w-full max-w-xl object-contain"
        />
      </div>

      {/* Right side with form */}
      <div className="w-full lg:w-[60%] flex items-center justify-center p-8">
        <div className="w-full max-w-lg">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-4xl md:text-[60px] font-serif mb-8">Contact Us</h2>

            {state.succeeded && (
              <div className="p-4 mb-6 rounded bg-green-100 text-green-700">
                Thank you for contacting us! We'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:border-[#004851]"
                  required
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:border-[#004851]"
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:border-[#004851]"
                  required
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>

              <div className="flex justify-center items-center">
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full lg:w-1/2 h-[37px] text-center font-medium py-1 px-6 text-white bg-[#004851] rounded-[18px] hover:bg-[#003842] transition-colors uppercase text-sm tracking-wider disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {state.submitting ? "Sending..." : "Send"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
