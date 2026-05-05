'use client';
import React from 'react';
import ASOServiceHero from '../../components/ASOServiceHero';
import ASOHeroVideo from '../../components/ASOHeroVideo';
import ASOWhatIsSection from '../../components/ASOWhatIsSection';
import ASOKeywordSuccess from '../../components/ASOKeywordSuccess';
import ASOServicesDetailSection from '../../components/ASOServicesDetailSection';
import ASOIndustriesSection from '../../components/ASOIndustriesSection';
import ASOWhyChooseSection from '../../components/ASOWhyChooseSection';
import GetStarted from '../../components/GetStarted';
import Footer from '../../components/Footer';
import GoogleAnalytics from '../../components/GoogleAnalytics';

const ASOServicePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <GoogleAnalytics />

      {/* Hero Section */}
      <ASOServiceHero />

      {/* Video Section */}
      <ASOHeroVideo />

      {/* What is ASO Section */}
      <ASOWhatIsSection />

      {/* Services Detail Section */}
      <ASOServicesDetailSection />

      {/* Keyword Success Stories - UNIQUE SECTION */}
      <ASOKeywordSuccess />

      {/* Industries We Serve */}
      <ASOIndustriesSection />

      {/* Why Choose ASOWin */}
      <ASOWhyChooseSection />

      {/* Get Started Section */}
      <GetStarted />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ASOServicePage;
