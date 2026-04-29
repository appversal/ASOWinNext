import Breadcrumb from "../../components/Breadcrumb";
import BackButton from "../../components/BackButton";
import CaseStudy6Hero from "../../components/CaseStudy6Hero";
import CaseStudyAbout6 from "../../components/CaseStudyAbout6";
import CaseStudy6Stats from "../../components/CaseStudy6Stats";
import CaseStudyResult6 from "../../components/CaseStudyResult6";
import GetStarted from "../../components/GetStarted";
import BlogContact from "../../components/CaseStudyContact";
import RelatedCaseStudies from "../../components/RelatedCaseStudies";
import Footer from "../../components/Footer";

export default function CaseStudy6() {
  return (
    <div className="min-h-screen">
      <CaseStudy6Hero />
      <Breadcrumb />
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-6">
        <BackButton />
      </div>
      <CaseStudyAbout6 />
      <CaseStudy6Stats />
      <CaseStudyResult6 />
      <RelatedCaseStudies currentCaseStudy={6} />
      <GetStarted />
      <BlogContact />
      <br />
      <Footer />
    </div>
  );
}
