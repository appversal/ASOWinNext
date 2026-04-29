import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import playojoCover from "../assets/success-stories/playojo/cover.png";
import vikerIcon from "../assets/success-stories/vikergames/viker_icon.png";
import bajajIcon from "../assets/success-stories/bajajfinserv/bajaj_icon.png";
import playojoLogo from "../assets/success-stories/playojo/playojo_logo.png";

const caseStudiesData = [
  {
    id: 1,
    logo: "/pflogo.jpg",
    title: "Pepperfry",
    description: "Furniture E-Commerce",
    stats: [
      { value: "#1", label: "Rankings" },
      { value: "10x", label: "Increase" },
    ],
    highlight: "Ranked highest for category keyword with 10x increase in total rate",
    image: "/casestudy2.png",
    link: "/success-stories/pepperfry",
  },
  {
    id: 2,
    logo: "/iblogo.jpg",
    title: "Indiabulls Securities",
    description: "Financial Services",
    stats: [
      { value: "50+", label: "Keywords" },
      { value: "Improved", label: "Visibility" },
    ],
    highlight: "Ranked for more than 25+ unranked keywords with improved visibility",
    image: "/casestudy3.png",
    link: "/success-stories/indiabulls-securities",
  },
  {
    id: 3,
    logo: "/lsm.png",
    title: "LSM Apps",
    description: "Mobile Application",
    stats: [
      { value: "Top #2", label: "Rank" },
      { value: "+12,000", label: "Daily Downloads" },
    ],
    highlight: "Achieved top rankings with consistent growth in organic installs",
    image: "/casestudy.png",
    link: "/success-stories/lsm-apps",
  },
  {
    id: 4,
    logo: vikerIcon.src,
    title: "Viker Games",
    description: "Mobile Gaming",
    stats: [
      { value: "#1", label: "Free Games" },
      { value: "500K+", label: "Daily Installs" },
    ],
    highlight: "Achieved #1 ranking in Top Free Games in Australia with 500,000+ installs in one day",
    image: "/placeholder.jpg",
    link: "/success-stories/viker-games",
  },
  {
    id: 5,
    logo: bajajIcon.src,
    title: "Bajaj Finserv",
    description: "Fintech / CSAT",
    stats: [
      { value: "90+", label: "App Screens" },
      { value: "Improved", label: "Visibility" },
    ],
    highlight: "Custom CSAT integration across 90+ screens with improved app ratings",
    image: "/placeholder.jpg",
    link: "/success-stories/bajaj-finserv",
  },
  {
    id: 6,
    logo: playojoLogo.src,
    title: "PlayOJO Games",
    description: "Online Gaming / iGaming",
    stats: [
      { value: "500+", label: "FTDs/Month" },
      { value: "Improved", label: "Performance" },
    ],
    highlight: "Scaled first-time deposits with targeted user acquisition campaigns",
    image: playojoCover.src,
    link: "/success-stories/playojo-games",
  },
];

export default function SuccessStories() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#FFEDE3] to-[#FFFFFF] py-16 md:py-24 lg:py-32 px-4 md:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111111] mb-6 leading-tight">
            Our Success Stories
          </h1>
          <p className="text-lg md:text-xl text-[#111111]/80 mb-4">
            Proven Results with Leading Brands
          </p>
          <p className="text-base md:text-lg text-[#111111]/70">
            Explore how ASOWin's tailored App Store Optimization strategies have delivered exceptional results for Fortune 500 companies and emerging startups alike.
          </p>
        </div>
      </section>

      {/* Success Stories Grid */}
      <section className="py-8 md:py-12 lg:py-16 px-4 md:px-8 lg:px-12 -mt-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
            {caseStudiesData.map((story) => (
              <Link
                key={story.id}
                href={story.link}
                className="group h-full"
              >
                <div className="bg-white border border-[#e0e0e0] rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                  {/* Image Container */}
                  <div className="relative w-full h-64 bg-gray-100 overflow-hidden flex items-center justify-center">
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-300 p-2"
                    />
                  </div>

                  {/* Content Container */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Logo and Title */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden ${[4, 5, 6].includes(story.id) ? '' : 'bg-emerald-500'}`}>
                        <Image
                          src={story.logo}
                          alt={`${story.title} logo`}
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-[#111111]">
                          {story.title}
                        </h3>
                        <p className="text-sm text-[#111111]/60">
                          {story.description}
                        </p>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {story.stats.map((stat, index) => (
                        <div key={index}>
                          <p className="text-2xl font-semibold font-serif text-[#FF6B00] mb-1">
                            {stat.value}
                          </p>
                          <p className="text-xs text-[#111111]/60">
                            {stat.label}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Highlight */}
                    <p className="text-sm text-[#111111]/75 mb-6 flex-grow">
                      {story.highlight}
                    </p>

                    {/* Read More Button */}
                    <button className="w-full bg-[#FF6B00] text-white py-2.5 px-4 rounded-full font-medium hover:bg-[#FF6B00]/90 transition-colors text-sm">
                      Read Full Story
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center bg-gradient-to-r from-[#FFEDE3] to-[#FFE8D6] py-12 px-6 rounded-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4">
              Ready to Grow Your App?
            </h2>
            <p className="text-lg text-[#111111]/80 mb-8 max-w-2xl mx-auto">
              Let ASOWin help you achieve similar results. Get in touch with our team to discuss your app's growth strategy.
            </p>
            <Link href="/contact">
              <button className="bg-[#FF8712] text-white px-8 py-3 rounded-full font-medium hover:bg-orange-600 transition-colors text-base">
                Let's Talk
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
