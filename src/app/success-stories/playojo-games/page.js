import Breadcrumb from "../../components/Breadcrumb";
import BackButton from "../../components/BackButton";
import CaseStudy7Hero from "../../components/CaseStudy7Hero";
import CaseStudyAbout7 from "../../components/CaseStudyAbout7";
import CaseStudy7Stats from "../../components/CaseStudy7Stats";
import CaseStudyResult7 from "../../components/CaseStudyResult7";
import GetStarted from "../../components/GetStarted";
import BlogContact from "../../components/CaseStudyContact";
import RelatedCaseStudies from "../../components/RelatedCaseStudies";
import Footer from "../../components/Footer";

export default function CaseStudy7() {
  return (
    <div className="min-h-screen">
      <CaseStudy7Hero />
      <Breadcrumb />
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-6">
        <BackButton />
      </div>
      <CaseStudyAbout7 />
      <CaseStudy7Stats />
      <CaseStudyResult7 />
      <RelatedCaseStudies currentCaseStudy={7} />
      <GetStarted />
      <BlogContact />
      <br />
      <Footer />
    </div>
  );
}
