'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";

const BlogCTA = ({ title, subtitle, buttonText, buttonLink }) => {
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (buttonLink) {
      router.push(buttonLink);
    }
  };

  return (
    <div className="w-full bg-[#306777] py-16 md:py-20 px-4 sm:px-6 lg:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 whitespace-nowrap">
          {title || "Improve your App's visibility with ASOWin"}
        </h2>
        <p className="text-lg md:text-xl text-white/90 mb-8">
          {subtitle || ""}
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your work email"
            className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:ouline-none focus:ring-2 focus:ring-white"
            required
          />
          <button
            type="submit"
            className="bg-white text-[#306777] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap"
          >
            {buttonText || "Request Demo"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogCTA;
