'use client';
import Image from "next/image";
import { useForm, ValidationError } from '@formspree/react';

const BlogContact = () => {
  const [state, handleSubmit] = useForm("xqaokzep");

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
          {state.succeeded && (
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
              className="w-full p-4 bg-white rounded-sm shadow-sm focus:outline-none"
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
              className="w-full p-4 bg-white rounded-sm shadow-sm focus:outline-none"
              rows="4"
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className="bg-black text-white rounded-[18px] w-[131px] h-[37px] px-8 py-1 text-sm uppercase tracking-wider"
          >
            {state.submitting ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogContact;