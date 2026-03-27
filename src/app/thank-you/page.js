import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Thank You | ASOWin - Leading ASO Agency",
  description: "Success! We've received your inquiry. Our team will be in touch with you shortly to discuss your app growth goals.",
  robots: "noindex, nofollow",
};

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-20 px-4">
        <div className="max-w-2xl w-full bg-[#FFFDF7] rounded-[48px] p-8 md:p-16 shadow-lg flex flex-col items-center text-center border border-[#FFE8CC]">
          
          {/* Text Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-[#E6F3F5] text-[#306777] rounded-full text-sm font-bold tracking-wide mb-2">
              SUCCESS!
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#111122] leading-tight">
              Thanks for <br />
              <span className="text-[#306777]">Submitting.</span>
            </h1>
            <p className="text-[#4A5568] text-lg leading-relaxed max-w-lg mx-auto">
              We&apos;ve received your message! One of our ASO experts will review your request and get back to you within 24 hours.
            </p>
            
            <div className="pt-4">
              <Link href="/">
                <button className="bg-[#111122] text-white px-10 py-4 rounded-full font-bold hover:bg-black transition-all shadow-md transform hover:-translate-y-1">
                  Back to Homepage
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
