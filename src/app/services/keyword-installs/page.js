import React from 'react';
import KeywordInstallsServiceHero from '../../components/KeywordInstallsServiceHero';
import KeywordInstallsWhatIsSection from '../../components/KeywordInstallsWhatIsSection';
import KeywordInstallsStrategySection from '../../components/KeywordInstallsStrategySection';
import KeywordInstallsWhyItMattersSection from '../../components/KeywordInstallsWhyItMattersSection';
import KeywordInstallsWorkflowSection from '../../components/KeywordInstallsWorkflowSection';
import KeywordInstallsDeliverablesSection from '../../components/KeywordInstallsDeliverablesSection';
import KeywordInstallsWhyChooseSection from '../../components/KeywordInstallsWhyChooseSection';
import KeywordInstallsFinalCTA from '../../components/KeywordInstallsFinalCTA';
import GetStarted from '../../components/GetStarted';
import Footer from '../../components/Footer';
import GoogleAnalytics from '../../components/GoogleAnalytics';
import RelatedServices from '../../components/RelatedServices';

export const metadata = {
  title: 'Keyword Installs Service | Improve App Rankings | ASOWin',
  description:
    'Strategic keyword install campaigns to improve app rankings and increase organic search visibility. Data-driven approach to sustainable ranking growth.',
};

const KeywordInstallsServicePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <GoogleAnalytics />

      {/* Hero Section */}
      <KeywordInstallsServiceHero />

      {/* What Are Keyword Installs */}
      <KeywordInstallsWhatIsSection />

      {/* Our Keyword Install Strategy */}
      <KeywordInstallsStrategySection />

      {/* Why Keyword Installs Matter */}
      <KeywordInstallsWhyItMattersSection />

      {/* Our Keyword Install Workflow */}
      <KeywordInstallsWorkflowSection />

      {/* Key Deliverables */}
      <KeywordInstallsDeliverablesSection />

      {/* Why Choose ASOWin */}
      <KeywordInstallsWhyChooseSection />

      {/* Final CTA */}
      <KeywordInstallsFinalCTA />

      {/* Get Started */}
      <GetStarted />

      {/* Related Services */}
      <RelatedServices currentServiceSlug="keyword-installs" />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default KeywordInstallsServicePage;
