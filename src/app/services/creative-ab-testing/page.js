'use client';
import React from 'react';
import CreativeABTestingServiceHero from '../../components/CreativeABTestingServiceHero';
import CreativeDesignShowcase from '../../components/CreativeDesignShowcase';
import CreativeABTestingWhatIsSection from '../../components/CreativeABTestingWhatIsSection';
import CreativeABTestingServicesDetailSection from '../../components/CreativeABTestingServicesDetailSection';
import CreativeABTestingWorkflowSection from '../../components/CreativeABTestingWorkflowSection';
import CreativeABTestingDeliverablesSection from '../../components/CreativeABTestingDeliverablesSection';
import CreativeABTestingImpactSection from '../../components/CreativeABTestingImpactSection';
import Footer from '../../components/Footer';
import GoogleAnalytics from '../../components/GoogleAnalytics';

const CreativeABTestingServicePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <GoogleAnalytics />

      {/* Hero Section */}
      <CreativeABTestingServiceHero />

      {/* Design Showcase - UNIQUE SECTION - Visual gallery! */}
      <CreativeDesignShowcase />

      {/* What is Section */}
      <CreativeABTestingWhatIsSection />

      {/* Services Detail Section */}
      <CreativeABTestingServicesDetailSection />

      {/* Workflow Section */}
      <CreativeABTestingWorkflowSection />

      {/* Deliverables Section */}
      <CreativeABTestingDeliverablesSection />

      {/* Impact Section */}
      <CreativeABTestingImpactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CreativeABTestingServicePage;
