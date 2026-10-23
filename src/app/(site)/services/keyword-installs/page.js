import React from 'react';
import KeywordInstallsServiceHero from '../../../components/KeywordInstallsServiceHero';
import KeywordInstallsWhatIsSection from '../../../components/KeywordInstallsWhatIsSection';
import KeywordInstallsStrategySection from '../../../components/KeywordInstallsStrategySection';
import KeywordInstallsWhyItMattersSection from '../../../components/KeywordInstallsWhyItMattersSection';
import KeywordInstallsWorkflowSection from '../../../components/KeywordInstallsWorkflowSection';
import KeywordInstallsDeliverablesSection from '../../../components/KeywordInstallsDeliverablesSection';
import KeywordInstallsWhyChooseSection from '../../../components/KeywordInstallsWhyChooseSection';
import KeywordInstallsFinalCTA from '../../../components/KeywordInstallsFinalCTA';
import GetStarted from '../../../components/GetStarted';
import ServiceFaq from '../../../components/ServiceFaq';
import Footer from '../../../components/Footer';
import GoogleAnalytics from '../../../components/GoogleAnalytics';
import RelatedServices from '../../../components/RelatedServices';

export const metadata = {
  title: 'Keyword Installs Service | Improve App Rankings | ASOWin',
  description:
    'Strategic keyword install campaigns to improve app rankings and increase organic search visibility. Data-driven approach to sustainable ranking growth.',
  alternates: { canonical: '/services/keyword-installs/' },
  openGraph: {
    type: 'website',
    url: '/services/keyword-installs/',
    siteName: 'ASOWin',
    title: 'Keyword Installs Service | Improve App Rankings | ASOWin',
    description: 'Strategic keyword install campaigns to improve app rankings and increase organic search visibility. Data-driven approach to sustainable ranking growth.',
    images: [{ url: '/og-keyword-installs.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'Keyword Installs Service | Improve App Rankings | ASOWin', description: 'Strategic keyword install campaigns to improve app rankings and increase organic search visibility. Data-driven approach to sustainable ranking growth.', site: '@asowin' },
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

      {/* Service and breadcrumb schema (no visible FAQ yet) */}
      <ServiceFaq slug="keyword-installs" />

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
