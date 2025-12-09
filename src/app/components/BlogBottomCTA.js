'use client';
import { useRouter } from "next/navigation";

const BlogBottomCTA = ({ title, description, buttonText, buttonLink }) => {
  const router = useRouter();

  const handleClick = () => {
    if (buttonLink) {
      router.push(buttonLink);
    }
  };

  return (
    <div className="w-full bg-[#1a4d5a] py-16 md:py-20 px-4 sm:px-6 lg:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          {title || "Ready to get started?"}
        </h2>
        <p className="text-lg md:text-xl text-white/90 mb-8">
          {description || ""}
        </p>
        <button
          onClick={handleClick}
          className="bg-white text-[#306777] px-8 py-3 rounded-lg font-semibold border-2 border-[#306777] hover:bg-gray-100 transition-colors"
        >
          {buttonText || "Request Demo"}
        </button>
      </div>
    </div>
  );
};

export default BlogBottomCTA;
