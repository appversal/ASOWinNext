import React from 'react';
import Image from 'next/image';

const ReviewRepliesIntegration = () => {
  const integrations = [
    {
      name: "App Store Connect",
      logo: "/automate_reviews_logos/app_store_logo.png",
      description: "Sync iOS reviews automatically"
    },
    {
      name: "Google Play Console",
      logo: "/automate_reviews_logos/play_console_logo.png",
      description: "Manage Android reviews seamlessly"
    },
    {
      name: "Jira",
      logo: "/automate_reviews_logos/jira_logo.png",
      description: "Auto-create tickets for critical reviews"
    },
    {
      name: "Linear",
      logo: "/automate_reviews_logos/linear_logo.png",
      description: "1-star reviews become actionable items"
    },
    {
      name: "Zendesk",
      logo: "/automate_reviews_logos/zendesk_logo.png",
      description: "Route replies through your support hub"
    },
    {
      name: "Slack",
      logo: "/automate_reviews_logos/slack_logo.png",
      description: "Get instant notifications and alerts"
    }
  ];

  return (
    <section className="w-full bg-white pt-4 md:pt-8 pb-12 md:pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#111111] mb-4">
            Built to Integrate
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            Connect with your favorite platforms and tools to streamline your workflow
          </p>
        </div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {integrations.map((integration, index) => (
            <div 
              key={index}
              className="bg-gray-50 hover:bg-gray-100 rounded-xl p-8 border border-gray-200 transition-all duration-300 hover:border-[#fdb124] hover:shadow-lg"
            >
              <div className="w-16 h-16 mb-4 relative">
                <Image
                  src={integration.logo}
                  alt={integration.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-[#111111] mb-2">
                {integration.name}
              </h3>
              <p className="text-gray-600 text-sm">
                {integration.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-700 text-lg mb-6">
            Don't see your platform? We can create custom integrations.
          </p>
          <button className="bg-[#fdb124] text-white px-8 py-3 rounded-full font-medium hover:bg-[#e09910] transition-colors">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewRepliesIntegration;
