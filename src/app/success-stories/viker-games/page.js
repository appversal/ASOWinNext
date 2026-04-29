import Breadcrumb from "../../components/Breadcrumb";
import BackButton from "../../components/BackButton";
import CaseStudy5Hero from "../../components/CaseStudy5Hero";
import CaseStudyAbout5 from "../../components/CaseStudyAbout5";
import CaseStudy5Stats from "../../components/CaseStudy5Stats";
import CaseStudyResult5 from "../../components/CaseStudyResult5";
import GetStarted from "../../components/GetStarted";
import BlogContact from "../../components/CaseStudyContact";
import RelatedCaseStudies from "../../components/RelatedCaseStudies";
import Footer from "../../components/Footer";

export default function CaseStudy5() {
  return (
    <div className="min-h-screen">
      <CaseStudy5Hero />
      <Breadcrumb />
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-6">
        <BackButton />
      </div>
      <CaseStudyAbout5 />
      <CaseStudy5Stats />
      <CaseStudyResult5 />
      <RelatedCaseStudies currentCaseStudy={5} />
      <GetStarted />
      <BlogContact />
      <br />
      <Footer />
    </div>
  );
}
