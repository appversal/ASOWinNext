'use client';
import React from 'react';

const ASOServiceStats = () => {
  const stats = [
    {
      number: '500+',
      label: 'Apps Optimized',
      icon: '📱'
    },
    {
      number: '2B+',
      label: 'Downloads Generated',
      icon: '⬇️'
    },
    {
      number: '50%',
      label: 'Average Download Growth',
      icon: '📈'
    },
    {
      number: '3x',
      label: 'Average Conversion Uplift',
      icon: '🚀'
    }
  ];

  const caseStudies = [
    {
      title: 'EdTech Platform',
      challenge: 'Low app store visibility despite high quality product',
      solution: 'Comprehensive keyword research, metadata optimization, and creative A/B testing',
      results: {
        downloads: '+250%',
        ranking: 'Top 10 keywords',
        timeline: '6 months'
      }
    },
    {
      title: 'E-commerce App',
      challenge: 'Poor conversion rate from app store clicks',
      solution: 'Creative redesign with multiple A/B test variations and rating management',
      results: {
        conversion: '+45%',
        rating: '4.8 stars',
        timeline: '3 months'
      }
    },
    {
      title: 'Health & Fitness App',
      challenge: 'Struggling to compete in saturated health category',
      solution: 'Advanced keyword analysis and localization for 15 markets',
      results: {
        expansion: '15 new markets',
        downloads: '+1.5M',
        timeline: '8 months'
      }
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 px-4 bg-white">
      <div className="max-w-[1440px] mx-auto">
        {/* Stats Grid */}
        <div className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-12 text-center">
            Proven Results
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 border border-gray-200 text-center hover:border-[#fdb124] transition-all duration-300"
              >
                <div className="text-5xl mb-4">{stat.icon}</div>
                <h3 className="text-3xl md:text-4xl font-bold text-[#fdb124] mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Case Studies Section */}
        <div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 text-center">
            Success Stories
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-[600px] mx-auto">
            Real results from real apps across diverse categories
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300"
              >
                {/* App Icon */}
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#014458] to-[#0a2f3f] flex items-center justify-center text-white text-2xl font-bold mb-4">
                  {String(index + 1)}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{study.title}</h3>
                
                {/* Challenge */}
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-1">Challenge</p>
                  <p className="text-gray-700 text-sm">{study.challenge}</p>
                </div>

                {/* Solution */}
                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-1">Our Approach</p>
                  <p className="text-gray-700 text-sm">{study.solution}</p>
                </div>

                {/* Results */}
                <div className="bg-gradient-to-r from-[#014458] to-[#0a2f3f] rounded-lg p-4 text-white">
                  <p className="text-xs font-semibold uppercase tracking-wide mb-3 text-gray-300">Results</p>
                  <div className="space-y-2">
                    {Object.entries(study.results).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center">
                        <span className="text-sm text-gray-300">{key}:</span>
                        <span className="text-lg font-bold text-[#fdb124]">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-gradient-to-r from-[#014458] via-[#fdb124] to-[#E06F00] rounded-2xl p-8 md:p-12 text-white text-center relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Achieve Similar Results?
            </h3>
            <p className="text-white mb-6 max-w-[600px] mx-auto">
              Let's discuss your app's potential and create a customized ASO strategy for maximum growth.
            </p>
            <button className="bg-white hover:bg-gray-100 text-gray-900 font-bold py-3 px-8 rounded-full transition-colors">
              Start Your ASO Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ASOServiceStats;
