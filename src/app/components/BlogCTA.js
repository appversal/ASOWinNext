'use client';
import { useForm, ValidationError } from '@formspree/react';

const BlogCTA = ({ title, subtitle, buttonText, buttonLink }) => {
  const [state, handleSubmit] = useForm("xqaokzep");

  return (
    <div className="w-full bg-[#306777] py-16 md:py-20 px-4 sm:px-6 lg:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 whitespace-nowrap">
          {title || "Improve your App&apos;s visibility with ASOWin"}
        </h2>
        <p className="text-lg md:text-xl text-white/90 mb-8">
          {subtitle || ""}
        </p>
        {state.succeeded && (
          <div className="mb-6 p-4 rounded-lg bg-green-100 text-green-700 max-w-md mx-auto">
            Thank you! We&apos;ll be in touch soon.
          </div>
        )}
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <div className="flex-1">
            <input
              type="email"
              name="email"
              placeholder="Enter your work email"
              className="w-full px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <button
            type="submit"
            disabled={state.submitting}
            className="bg-white text-[#306777] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {state.submitting ? 'Submitting...' : (buttonText || "Request Demo")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogCTA;
