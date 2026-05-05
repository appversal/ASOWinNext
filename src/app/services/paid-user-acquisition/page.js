import React from 'react';
import PaidUAServiceHero from '../../components/PaidUAServiceHero';
import PaidUAWhatIsSection from '../../components/PaidUAWhatIsSection';
import PaidUAServicesSection from '../../components/PaidUAServicesSection';
import PaidUAWhyMattersSection from '../../components/PaidUAWhyMattersSection';
import PaidUAWorkflowSection from '../../components/PaidUAWorkflowSection';
import PaidUADeliverablesSection from '../../components/PaidUADeliverablesSection';
import PaidUAWhyChooseSection from '../../components/PaidUAWhyChooseSection';
import PaidUAFinalCTA from '../../components/PaidUAFinalCTA';
import GetStarted from '../../components/GetStarted';
import Footer from '../../components/Footer';
import GoogleAnalytics from '../../components/GoogleAnalytics';

export const metadata = {
  title: 'Paid User Acquisition & Search Ads | App Growth | ASOWin',
  description:
    'Strategic paid acquisition services for app growth. Apple Search Ads, Google App Campaigns, and high-converting user acquisition strategies.',
};

const PaidUAServicePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <GoogleAnalytics />

      {/* Hero Section */}
      <PaidUAServiceHero />

      {/* What is Paid User Acquisition */}
      <PaidUAWhatIsSection />

      {/* Our Paid Acquisition Services */}
      <PaidUAServicesSection />

      {/* Why Paid User Acquisition Matters */}
      <PaidUAWhyMattersSection />

      {/* Our Paid Growth Workflow */}
      <PaidUAWorkflowSection />

      {/* Key Deliverables */}
      <PaidUADeliverablesSection />

      {/* Why Choose ASOWin */}
      <PaidUAWhyChooseSection />

      {/* Final CTA */}
      <PaidUAFinalCTA />

      {/* Get Started */}
      <GetStarted />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PaidUAServicePage;
