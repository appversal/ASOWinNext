import Link from "next/link";

const HeroBreadcrumb = ({ serviceName, serviceSlug }) => {
  return (
    <nav className="flex items-center gap-2 text-sm md:text-base mb-6 md:mb-8 justify-center">
      {/* Home Link */}
      <Link 
        href="/" 
        className="text-gray-600 hover:text-[#fdb124] font-medium transition-colors duration-200"
      >
        Home
      </Link>
      
      {/* Separator */}
      <span className="text-gray-400">/</span>
      
      {/* Services Link */}
      <Link 
        href="/services" 
        className="text-gray-600 hover:text-[#fdb124] font-medium transition-colors duration-200"
      >
        Services
      </Link>
      
      {/* Separator */}
      <span className="text-gray-400">/</span>
      
      {/* Current Service */}
      <span className="text-[#fdb124] font-semibold">{serviceName}</span>
    </nav>
  );
};

export default HeroBreadcrumb;
