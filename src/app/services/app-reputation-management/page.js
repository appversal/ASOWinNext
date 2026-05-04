'use client';
import React from 'react';
import AppReputationServiceHero from '../../components/AppReputationServiceHero';
import AppReputationRatingsTransform from '../../components/AppReputationRatingsTransform';
import AppReputationWhatIsSection from '../../components/AppReputationWhatIsSection';
import AppReputationServicesDetailSection from '../../components/AppReputationServicesDetailSection';
import AppReputationWorkflowSection from '../../components/AppReputationWorkflowSection';
import AppReputationASOConnection from '../../components/AppReputationASOConnection';
import Footer from '../../components/Footer';
import GoogleAnalytics from '../../components/GoogleAnalytics';

const AppReputationServicePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <GoogleAnalytics />

      {/* Hero Section */}
      <AppReputationServiceHero />

      {/* Ratings Transformation - UNIQUE SECTION - Early impact! */}
      <AppReputationRatingsTransform />

      {/* What is Section */}
      <AppReputationWhatIsSection />

      {/* Services Detail Section */}
      <AppReputationServicesDetailSection />

      {/* Workflow Section */}
      <AppReputationWorkflowSection />

      {/* ASO Connection */}
      <AppReputationASOConnection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AppReputationServicePage;
