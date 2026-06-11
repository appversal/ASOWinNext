"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import FAQ from "../../components/FAQ";
import { Check, Send } from "lucide-react";
import { Caveat } from "next/font/google";

const caveat = Caveat({ subsets: ["latin"], weight: ["700"] });

export default function MessagePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSucceeded, setIsSucceeded] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    formData.append("access_key", "a05ea8f5-1d65-4506-bde6-e519d7f5ea71");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
      const result = await response.json();
      if (result.success) {
        setIsSucceeded(true);
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'conversion', {
            'send_to': 'AW-17791392097/38a7COX2084bEOGyzKNC',
            'value': 1.0,
            'currency': 'INR'
          });
          window.gtag('event', 'conversion', {
            'send_to': 'AW-938608563/t3qxCNPz8pYbELOPyL8D',
            'value': 1.0,
            'currency': 'INR'
          });
        }
        e.target.reset();
        setSubmittedEmail(object.email);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fff6f0] text-[#111111] font-manrope relative">
      <header className="absolute top-0 left-0 w-full p-6 md:p-8 lg:px-16 lg:py-8 z-50">
        <Link href="/" className="inline-block">
          <Image
            height={38}
            width={118}
            className="w-[100px] md:w-[118px] 2xl:w-[140px] h-auto"
            src="/ASOWin.png"
            alt="ASOWin Logo"
          />
        </Link>
      </header>

      <main className="flex-grow flex items-center justify-center pt-20 pb-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

          {/* Left Content Column */}
          <div className="flex flex-col space-y-10">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-[#111]">
                Dominate The <br />
                App Store <span className={`${caveat.className} text-[#fdb124] inline-block font-bold ml-2 mt-1`}>
                  Rankings.
                </span>
              </h1>
              <p className="text-[19px] text-[#444] max-w-xl leading-relaxed font-medium">
                ASOWin enables mobile growth teams to skyrocket app visibility,
                increase organic downloads, and improve app reputation—with data-driven
                Keyword Research and App Store Optimization strategies.
              </p>
            </div>

            {/* Checkmarks Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-2">
              {[
                "Data-Driven Keyword Research",
                "App Reputation Management",
                "Top Charts & Featured Placements",
                "Conversion Rate Optimization",
                "Global ASO Strategies",
                "Assured Ranking Improvements",
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="bg-[#fff0e6] rounded-full p-1">
                    <Check className="w-[14px] h-[14px] text-[#fdb124]" strokeWidth={3} />
                  </div>
                  <span className="text-[15px] font-bold text-[#333]">{item}</span>
                </div>
              ))}
            </div>

            <div className="w-full h-[1px] bg-[#eedcd3] my-2 max-w-2xl"></div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div className="space-y-1">
                <h3 className="text-4xl font-bold text-[#fdb124]">37%</h3>
                <p className="text-[11px] font-bold text-[#888] tracking-wider uppercase">Avg Conversion Rate</p>
              </div>
              <div className="space-y-1">
                <h3 className="text-4xl font-bold text-[#fdb124]">136+</h3>
                <p className="text-[11px] font-bold text-[#888] tracking-wider uppercase">Keywords Ranked #1</p>
              </div>
              <div className="space-y-1">
                <h3 className="text-4xl font-bold text-[#fdb124]">10M+</h3>
                <p className="text-[11px] font-bold text-[#888] tracking-wider uppercase">Downloads Delivered</p>
              </div>
              <div className="space-y-1">
                <h3 className="text-4xl font-bold text-[#fdb124]">#1</h3>
                <p className="text-[11px] font-bold text-[#888] tracking-wider uppercase">ASO Platform</p>
              </div>
            </div>

            <div className="pt-8">
              <h2 className="text-3xl md:text-[34px] font-bold text-center sm:text-left leading-tight tracking-tight">
                Get your App to the top charts. <br />
                That&apos;s an assurance.
              </h2>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="w-full max-w-[480px] mx-auto">
            <div className="bg-white rounded-3xl p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] relative transition-all duration-500">
              {isSucceeded ? (
                <div className="flex flex-col items-center text-center py-8 animate-in fade-in zoom-in duration-500">
                  <div className="w-24 h-24 rounded-full border-[4px] border-[#ff6a28] bg-[#ffeae1] flex items-center justify-center mb-8 mx-auto">
                    <Check className="w-12 h-12 text-[#ff6a28]" strokeWidth={3} />
                  </div>
                  <h3 className="text-[28px] md:text-[32px] font-extrabold text-[#111] mb-4 tracking-tight">
                    You're on the list!
                  </h3>
                  <p className="text-[#555] text-[17px] leading-relaxed font-medium">
                    We'll reach out to <br />
                    <span className="text-[#ff6a28] font-bold break-all">{submittedEmail}</span> <br />
                    within 24 hours with your personalized demo details.
                  </p>
                </div>
              ) : (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <h3 className="text-[22px] font-extrabold text-[#111]">Schedule a Personalized Demo</h3>

                  <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-[11px] font-bold text-[#888] tracking-wider uppercase">
                      Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Jane Doe"
                      className="w-full px-4 py-[14px] bg-white border border-[#e5e5e5] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#fdb124] focus:border-transparent transition-all text-[#333] placeholder:text-[#aaa]"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-[11px] font-bold text-[#888] tracking-wider uppercase">
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="jane@company.com"
                      className="w-full px-4 py-[14px] bg-white border border-[#e5e5e5] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#fdb124] focus:border-transparent transition-all text-[#333] placeholder:text-[#aaa]"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-[11px] font-bold text-[#888] tracking-wider uppercase">
                      How can we help? *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      placeholder="Tell us about your app and goals..."
                      className="w-full px-4 py-[14px] bg-white border border-[#e5e5e5] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#fdb124] focus:border-transparent transition-all text-[#333] placeholder:text-[#aaa] resize-none"
                      required
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#fdb124] hover:bg-[#e29b1b] disabled:opacity-50 text-white font-bold text-[15px] py-4 px-4 rounded-xl flex items-center justify-center space-x-2 transition-all hover:shadow-lg active:scale-[0.98]"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? "Sending..." : "Book My Free Strategy Session"}</span>
                    </button>
                  </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Trusted By Section - Grid Design */}
      <section className="pt-12 pb-10 bg-[#fff6f0] border-t border-[#f2e6df]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16 text-center">
          <div className="mb-14">
            <p className="text-[#fdb124] italic font-serif text-[22px] mb-2 font-medium">Trusted Partners</p>
            <h2 className="text-4xl md:text-[42px] font-extrabold text-[#111] mb-5 tracking-tight">Our Clients</h2>
            <p className="text-[15px] text-[#555] font-medium max-w-xl mx-auto leading-relaxed">
              We have deep integrations and work with the largest brands globally to deliver unprecedented mobile growth in real time.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6 w-full">
            {[
              "bajaj_finserv_logo.png",
              "delhivery_logo.png",
              "pepperfry_logo.png",
              "playojo_logo.png",
              "vikergames_logo.png",
              "volt_money_logo.png",
              "ring_kisht_logo.png",
              "shremaroo_logo.png",
              "zupee_logo.png",
              "lsm_apps_logo.png",
            ].map((logo, idx) => (
              <div key={idx} className="bg-white border border-[#e5e5e5] rounded-[16px] p-6 flex items-center justify-center h-28 md:h-32 w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-1rem)] lg:w-[calc(20%-1.2rem)] hover:shadow-md hover:border-[#ddd] transition-all">
                <Image
                  src={`/carousel_logos/${logo}`}
                  width={200}
                  height={80}
                  alt="Client Logo"
                  className="object-contain w-full h-full max-h-[44px] md:max-h-[52px] opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose ASOWin Section */}
      <section className="pt-10 pb-24 bg-[#fff6f0]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#111] mb-6 tracking-tight">The Ultimate <span className="text-[#fdb124] italic">ASO engine</span></h2>
            <p className="text-lg text-[#555] font-medium leading-relaxed">We combine AI-driven insights with human expertise to deliver unparalleled growth for your mobile app across global markets.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "AI-Powered Analysis", desc: "Proprietary algorithms that analyze millions of data points to find your highest-converting keywords.", icon: "ai.png" },
              { title: "Global Reach", desc: "Localize your app metadata across 60+ languages to dominate top charts worldwide.", icon: "earth.png" },
              { title: "Guaranteed Growth", desc: "Data-backed strategies that ensure your organic downloads multiply month over month.", icon: "growth.png" }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-[#f2e6df] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-14 h-14 bg-[#fff0e6] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#fdb124] group-hover:text-white transition-colors duration-300">
                  <Image src={`/why_asowin_icons/${feature.icon}`} width={28} height={28} alt={feature.title} className="group-hover:brightness-0 group-hover:invert transition-all duration-300" />
                </div>
                <h3 className="text-xl font-bold text-[#111] mb-3">{feature.title}</h3>
                <p className="text-[#555] leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Proven Process Section */}
      <section className="py-24 bg-white border-b border-[#f2e6df]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl font-extrabold text-[#111] mb-6 tracking-tight">How we guarantee your <span className="text-[#fdb124] italic">Success</span></h2>
            <p className="text-lg text-[#555] font-medium leading-relaxed">A systematic approach to uncovering hidden opportunities and scaling your app&apos;s growth predictably.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-[2px] bg-[#f2e6df] -z-10"></div>

            {[
              { step: "01", title: "Deep Analysis", desc: "We audit your current metadata, competitors, and keyword landscape.", icon: "analysis.png" },
              { step: "02", title: "Strategic Roadmap", desc: "Customized ASO roadmap targeting high-intent, low-competition keywords.", icon: "roadmap.png" },
              { step: "03", title: "Iterative Execution", desc: "Deploying updates, A/B testing creatives, and monitoring ranking changes.", icon: "log.png" },
              { step: "04", title: "Exponential Growth", desc: "Watching organic installs climb and scaling the strategy to new locales.", icon: "growth.png" }
            ].map((feature, idx) => (
              <div key={idx} className="relative group">
                <div className="w-24 h-24 bg-white border border-[#f2e6df] rounded-full flex items-center justify-center mx-auto mb-8 relative z-10 group-hover:border-[#fdb124] group-hover:shadow-[0_0_30px_rgba(253,177,36,0.3)] transition-all duration-300">
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#fdb124] text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                    {feature.step}
                  </div>
                  <Image src={`/why_asowin_icons/${feature.icon}`} width={40} height={40} alt={feature.title} className="group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-[#111] mb-3">{feature.title}</h3>
                  <p className="text-[#555] leading-relaxed text-[15px]">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 bg-[#fff6f0] text-[#111]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-[#111]">Real results for <span className="text-[#fdb124] italic">real apps</span></h2>
              <p className="text-lg text-[#555] font-medium leading-relaxed">See how we&apos;ve helped apps across fintech, gaming, and lifestyle categories dominate the app stores.</p>
            </div>
            <Link href="/success-stories" className="bg-transparent border-2 border-[#111] hover:bg-[#111] hover:text-white text-[#111] px-8 py-3 rounded-full font-bold transition-all whitespace-nowrap">
              View All Success Stories
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { img: "casestudy.png", title: "Gaming Top Charts", metric: "Top #3", desc: "Reached Top 3 in Strategy Games in US", link: "/success-stories/lsm-apps" },
              { img: "casestudy2.png", title: "Lifestyle App SEO", metric: "+40%", desc: "Boost in conversion rate via creative A/B testing", link: "/success-stories/pepperfry" },
              { img: "casestudy3.png", title: "Fintech App Growth", metric: "+150%", desc: "Increase in organic installs within 3 months", link: "/success-stories/indiabulls-securities" }
            ].map((caseStudy, idx) => (
              <Link href={caseStudy.link} key={idx} className="bg-white border border-[#f2e6df] shadow-sm rounded-3xl overflow-hidden flex flex-col group hover:border-[#fdb124] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#fafafa] p-6 md:p-8 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <Image src={`/${caseStudy.img}`} fill alt={caseStudy.title} className="object-contain group-hover:scale-105 transition-transform duration-500" />
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h4 className="text-4xl font-black text-[#fdb124] mb-4 tracking-tight">{caseStudy.metric}</h4>
                  <h3 className="text-2xl font-bold mb-3 text-[#111] group-hover:text-[#fdb124] transition-colors">{caseStudy.title}</h3>
                  <p className="text-[#555] font-medium leading-relaxed mb-8 flex-grow">{caseStudy.desc}</p>

                  <div className="flex items-center text-[#111] font-bold text-[13px] uppercase tracking-wider mt-auto group-hover:text-[#fdb124] transition-colors">
                    <span>Read full case study</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQ />

      <Footer />
    </div>
  );
}
