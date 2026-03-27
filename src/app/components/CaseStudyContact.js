'use client';
import { useEffect, useState } from 'react';
import Image from "next/image";

const BlogContact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSucceeded, setIsSucceeded] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    formData.append("access_key", "a05ea8f5-1d65-4506-bde6-e519d7f5ea71");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
      const result = await response.json();
      if (result.success) {
        setIsSucceeded(true);
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
        e.target.reset();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="w-full min-h-[600px] bg-[#FFF8E7] relative flex justify-end"
      style={{
        backgroundImage: `url(/bc.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Form Container */}
      <div className="w-full md:w-1/2 p-8 md:p-16">
        <h1 className="text-4xl md:text-5xl lg:text-[77px] font-serif mb-12">Contact Us</h1>

        <form onSubmit={handleSubmit} className="space-y-6 max-w-lg">
          {isSucceeded && (
            <div className="text-sm text-green-700 bg-green-100 p-2 rounded">
              Thank you! We'll be in touch soon.
            </div>
          )}

          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-4 bg-white rounded-sm shadow-sm focus:outline-none"
              required
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-4 bg-white rounded-sm shadow-sm focus:outline-none"
              required
            />
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Message"
              className="w-full p-4 bg-white rounded-sm shadow-sm focus:outline-none"
              rows="4"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-black text-white rounded-[18px] w-[131px] h-[37px] px-8 py-1 text-sm uppercase tracking-wider"
          >
            {isSubmitting ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogContact;