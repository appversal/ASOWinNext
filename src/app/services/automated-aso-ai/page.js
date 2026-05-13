import React from 'react';
import AutomatedASOAIServiceHero from '../../components/AutomatedASOAIServiceHero';
import AutomatedASOAIWhatIsSection from '../../components/AutomatedASOAIWhatIsSection';
import AutomatedASOAIServicesSection from '../../components/AutomatedASOAIServicesSection';
import AutomatedASOAIWhyMattersSection from '../../components/AutomatedASOAIWhyMattersSection';
import AutomatedASOAIWorkflowSection from '../../components/AutomatedASOAIWorkflowSection';
import AutomatedASOAIDeliverablesSection from '../../components/AutomatedASOAIDeliverablesSection';
import AutomatedASOAIWhyChooseSection from '../../components/AutomatedASOAIWhyChooseSection';
import AutomatedASOAIFinalCTA from '../../components/AutomatedASOAIFinalCTA';
import GetStarted from '../../components/GetStarted';
import Footer from '../../components/Footer';
import GoogleAnalytics from '../../components/GoogleAnalytics';
import RelatedServices from '../../components/RelatedServices';

export const metadata = {
  title: 'Automated ASO with AI | Smart App Growth | ASOWin',
  description:
    'AI-powered app store optimization services. Automate review management, improve ratings, and scale reputation management with intelligent systems.',
};

const AutomatedASOAIServicePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <GoogleAnalytics />

      {/* Hero Section */}
      <AutomatedASOAIServiceHero />

      {/* What is Automated ASO with AI */}
      <AutomatedASOAIWhatIsSection />

      {/* Our AI-Powered ASO Services */}
      <AutomatedASOAIServicesSection />

      {/* Why Automated ASO Matters */}
      <AutomatedASOAIWhyMattersSection />

      {/* Our AI-Powered ASO Workflow */}
      <AutomatedASOAIWorkflowSection />

      {/* Key Deliverables */}
      <AutomatedASOAIDeliverablesSection />

      {/* Why Choose ASOWin */}
      <AutomatedASOAIWhyChooseSection />

      {/* Final CTA */}
      <AutomatedASOAIFinalCTA />

      {/* Get Started */}
      <GetStarted />

      {/* Related Services */}
      <RelatedServices currentServiceSlug="automated-aso-ai" />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AutomatedASOAIServicePage;
