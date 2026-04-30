import ReviewRepliesHero from "../components/ReviewRepliesHero";
import ReviewRepliesFeatures from "../components/ReviewRepliesFeatures";
import ReviewRepliesIntegration from "../components/ReviewRepliesIntegration";
import ReviewRepliesCaseStudy from "../components/ReviewRepliesCaseStudy";
import ReviewRepliesFaq from "../components/ReviewRepliesFaq";
import Footer from "../components/Footer";
import GetStarted from "../components/GetStarted";

export default function AutomatedReviewRepliesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ReviewRepliesHero />

      {/* Features Section */}
      <ReviewRepliesFeatures />

      {/* Integration Section */}
      <ReviewRepliesIntegration />

      {/* Case Study Section */}
      <ReviewRepliesCaseStudy />

      {/* FAQ Section */}
      <ReviewRepliesFaq />

      {/* Get Started CTA Section */}
      <GetStarted />

      {/* Footer */}
      <Footer />
    </div>
  );
}
