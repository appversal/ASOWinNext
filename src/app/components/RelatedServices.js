'use client';

import Image from "next/image";
import Link from "next/link";

const relatedServicesMap = {
  "app-store-optimization": [
    {
      title: "Keyword Research & Rankings",
      description: "Target high-performing keywords and achieve top rankings for maximum visibility.",
      href: "/services/keyword-installs",
      icon: "/img2.png"
    },
    {
      title: "Design Services & A/B Testing",
      description: "Optimize your app visuals through data-driven A/B testing for better conversions.",
      href: "/services/creative-ab-testing",
      icon: "/img6.png"
    },
    {
      title: "App Reputation Management",
      description: "Build trust and credibility through strategic reputation and review management.",
      href: "/services/app-reputation-management",
      icon: "/img4.png"
    }
  ],
  "app-reputation-management": [
    {
      title: "Full-Service ASO",
      description: "Comprehensive optimization to boost your app's discoverability and downloads.",
      href: "/services/app-store-optimization",
      icon: "/img2.png"
    },
    {
      title: "Paid User Acquisition",
      description: "Drive high-quality users with targeted campaigns and maximize ROI.",
      href: "/services/paid-user-acquisition",
      icon: "/img5.png"
    },
    {
      title: "Keyword Research & Rankings",
      description: "Target high-performing keywords and achieve top rankings for maximum visibility.",
      href: "/services/keyword-installs",
      icon: "/img2.png"
    }
  ],
  "keyword-installs": [
    {
      title: "Full-Service ASO",
      description: "Comprehensive optimization to boost your app's discoverability and downloads.",
      href: "/services/app-store-optimization",
      icon: "/img2.png"
    },
    {
      title: "Design Services & A/B Testing",
      description: "Optimize your app visuals through data-driven A/B testing for better conversions.",
      href: "/services/creative-ab-testing",
      icon: "/img6.png"
    },
    {
      title: "Paid User Acquisition",
      description: "Drive high-quality users with targeted campaigns and maximize ROI.",
      href: "/services/paid-user-acquisition",
      icon: "/img5.png"
    }
  ],
  "creative-ab-testing": [
    {
      title: "Full-Service ASO",
      description: "Comprehensive optimization to boost your app's discoverability and downloads.",
      href: "/services/app-store-optimization",
      icon: "/img2.png"
    },
    {
      title: "Keyword Research & Rankings",
      description: "Target high-performing keywords and achieve top rankings for maximum visibility.",
      href: "/services/keyword-installs",
      icon: "/img2.png"
    },
    {
      title: "Paid User Acquisition",
      description: "Drive high-quality users with targeted campaigns and maximize ROI.",
      href: "/services/paid-user-acquisition",
      icon: "/img5.png"
    }
  ],
  "paid-user-acquisition": [
    {
      title: "Full-Service ASO",
      description: "Comprehensive optimization to boost your app's discoverability and downloads.",
      href: "/services/app-store-optimization",
      icon: "/img2.png"
    },
    {
      title: "App Reputation Management",
      description: "Build trust and credibility through strategic reputation and review management.",
      href: "/services/app-reputation-management",
      icon: "/img4.png"
    },
    {
      title: "Design Services & A/B Testing",
      description: "Optimize your app visuals through data-driven A/B testing for better conversions.",
      href: "/services/creative-ab-testing",
      icon: "/img6.png"
    }
  ],
  "automated-aso-ai": [
    {
      title: "Full-Service ASO",
      description: "Comprehensive optimization to boost your app's discoverability and downloads.",
      href: "/services/app-store-optimization",
      icon: "/img2.png"
    },
    {
      title: "Keyword Research & Rankings",
      description: "Target high-performing keywords and achieve top rankings for maximum visibility.",
      href: "/services/keyword-installs",
      icon: "/img2.png"
    },
    {
      title: "App Reputation Management",
      description: "Build trust and credibility through strategic reputation and review management.",
      href: "/services/app-reputation-management",
      icon: "/img4.png"
    }
  ]
};

const RelatedServices = ({ currentServiceSlug }) => {
  const relatedServices = relatedServicesMap[currentServiceSlug] || [];

  if (relatedServices.length === 0) {
    return null;
  }

  return (
    <section className="w-full px-4 py-16 max-w-[90rem] mx-auto bg-gray-50">
      <div className="mb-12">
        <h2 className="text-4xl md:text-[56px] font-medium font-serif text-center mb-4">
          Explore Our Related Services
        </h2>
        <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto">
          Complement your current service with our other specialized offerings to maximize your app's potential
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedServices.map((service, index) => (
          <Link 
            key={index} 
            href={service.href}
            className="group"
          >
            <div className="bg-white p-8 rounded-lg h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer border border-gray-100">
              <div className="space-y-4">
                {service.icon && (
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={50}
                    height={50}
                    className="h-12 w-12 object-contain"
                  />
                )}
                <h3 className="font-semibold text-lg text-gray-900 group-hover:text-[#fdb124] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="mt-6 flex items-center text-[#fdb124] font-semibold">
                Learn More
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Browse All Services Link */}
      <div className="text-center mt-12">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 px-8 py-3 bg-[#fdb124] text-white rounded-lg hover:bg-[#e09910] transition-colors font-semibold"
        >
          View All Services
          <span>→</span>
        </Link>
      </div>
    </section>
  );
};

export default RelatedServices;
