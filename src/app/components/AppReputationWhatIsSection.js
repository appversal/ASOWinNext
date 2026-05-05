'use client';
import React from 'react';

const AppReputationWhatIsSection = () => {
  const involves = [
    'Review monitoring',
    'Ratings management',
    'User feedback analysis',
    'Response management',
    'Sentiment benchmarking',
    'Trust-building engagement'
  ];

  const helps = [
    'Increase install conversion rates',
    'Improve user trust and credibility',
    'Boost app store rankings',
    'Reduce uninstall rates',
    'Improve retention and engagement',
    'Strengthen organic growth'
  ];

  return (
    <section className="w-full py-16 md:py-24 px-6 sm:px-12 lg:px-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-[1440px] mx-auto">
        {/* What is Section */}
        <div className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
            What is App Reputation Management?
          </h2>
          
          <p className="text-gray-700 text-base md:text-lg mb-8 leading-relaxed max-w-[800px]">
            App Reputation Management is the process of monitoring, analyzing, and improving how users perceive your app across app marketplaces.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">It involves:</h3>
              <ul className="space-y-3">
                {involves.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[#fdb124] font-bold mt-1">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#014458] to-[#0a2f3f] rounded-xl p-8 text-white">
              <h3 className="text-xl font-bold mb-6">Why It Matters in 2026</h3>
              <p className="text-gray-300 leading-relaxed">
                In 2026, app stores prioritize apps with strong engagement signals, better ratings, and active developer-user interaction. Reputation management has become a critical growth factor for both visibility and conversion performance.
              </p>
            </div>
          </div>
        </div>

        {/* Why It Matters Section */}
        <div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Why App Reputation Matters
          </h2>
          
          <p className="text-gray-700 text-base md:text-lg mb-8 leading-relaxed max-w-[800px]">
            Users decide within seconds whether they trust your app. Poor ratings and unanswered reviews can significantly reduce installs, while positive engagement can improve conversion rates and strengthen brand credibility.
          </p>

          <p className="text-gray-700 text-base md:text-lg font-medium mb-8">
            Strong app reputation helps:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Benefit Card 1 */}
            <div className="group relative bg-gradient-to-br from-white to-blue-50 border-2 border-gray-200 rounded-2xl p-8 hover:border-[#014458] hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-100 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-[#014458] to-[#0a5a7a] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-[#fdb124]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Increase install conversion rates</h3>
                <p className="text-sm text-gray-600">Higher ratings directly boost download decisions at critical decision moments</p>
              </div>
            </div>

            {/* Benefit Card 2 */}
            <div className="group relative bg-gradient-to-br from-white to-amber-50 border-2 border-gray-200 rounded-2xl p-8 hover:border-[#fdb124] hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-20 h-20 bg-amber-100 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-[#fdb124] to-[#e09910] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Improve user trust and credibility</h3>
                <p className="text-sm text-gray-600">Strong ratings build confidence and reduce user hesitation before download</p>
              </div>
            </div>

            {/* Benefit Card 3 */}
            <div className="group relative bg-gradient-to-br from-white to-green-50 border-2 border-gray-200 rounded-2xl p-8 hover:border-green-500 hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-20 h-20 bg-green-100 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Boost app store rankings</h3>
                <p className="text-sm text-gray-600">App store algorithms prioritize apps with high ratings and positive engagement</p>
              </div>
            </div>

            {/* Benefit Card 4 */}
            <div className="group relative bg-gradient-to-br from-white to-red-50 border-2 border-gray-200 rounded-2xl p-8 hover:border-red-500 hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-20 h-20 bg-red-100 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-rose-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Reduce uninstall rates</h3>
                <p className="text-sm text-gray-600">Positive reviews and engagement keep users satisfied and retained</p>
              </div>
            </div>

            {/* Benefit Card 5 */}
            <div className="group relative bg-gradient-to-br from-white to-purple-50 border-2 border-gray-200 rounded-2xl p-8 hover:border-purple-500 hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-20 h-20 bg-purple-100 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Improve retention and engagement</h3>
                <p className="text-sm text-gray-600">Active reputation management builds community and keeps users coming back</p>
              </div>
            </div>

            {/* Benefit Card 6 */}
            <div className="group relative bg-gradient-to-br from-white to-cyan-50 border-2 border-gray-200 rounded-2xl p-8 hover:border-cyan-500 hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-20 h-20 bg-cyan-100 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-6.5-9c.83 0 1.5-.67 1.5-1.5S6.33 8 5.5 8 4 8.67 4 9.5 4.67 11 5.5 11zm7 0c.83 0 1.5-.67 1.5-1.5S13.33 8 12.5 8 11 8.67 11 9.5s.67 1.5 1.5 1.5zm7 0c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zm-7 7c-2.33 0-4.31 1.46-5.11 3.5h10.22c-.8-2.04-2.78-3.5-5.11-3.5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Strengthen organic growth</h3>
                <p className="text-sm text-gray-600">Sustainable growth through word-of-mouth and positive review velocity</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AppReputationWhatIsSection;
