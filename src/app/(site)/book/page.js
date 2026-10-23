import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";

export const metadata = {
  title: "App Store Optimization: The Ultimate Book (Free PDF) | ASOWin",
  description:
    "Free ASO book by ASOWin: how the Apple App Store and Google Play rank apps, which metadata, ratings and creative factors matter, and how to execute ASO.",
};

const chapters = [
    {
        title: "The business imperative of App Store Optimization",
        topics: "Why visibility decides an app's revenue, and what ASO is",
    },
    {
        title: "Determinants of app rankings",
        topics: "Factors both stores share: app name, downloads, ratings and reviews, update frequency, conversion, retention and ANR rate",
    },
    {
        title: "Apple App Store ranking factors",
        topics: "App name, subtitle, description, the keyword field, downloads, in-app events, in-app purchases, ratings and update cycle",
    },
    {
        title: "Google Play Store ranking factors",
        topics: "App title, short and long description, category, in-app purchases, ratings, update cycle and downloads",
    },
    {
        title: "Executing App Store Optimization",
        topics: "Finding your strengths and gaps, benchmarking competitor apps, and researching other information sources",
    },
    {
        title: "The art and science of ASO",
        topics: "What ASO cannot fix, and why execution needs specialist judgment",
    },
];

const takeaways = [
    "On the App Store, the 30-character subtitle and the 100-character keyword field are prime space: use related terms, check what competitors target, and borrow words from your reviews.",
    "Only the first three screenshots appear in App Store search results, so choose them through A/B testing.",
    "Ratings and reviews are both a ranking signal and a source of keywords. When ratings drop, pause asking for reviews and fix the underlying issues first.",
    "Retention and stability (ANR rate) influence rankings, so ASO depends on product quality as well as metadata.",
    "ASO cannot rescue an app in a market that is not ready or an app that users do not like.",
];

const bookSchema = {
    "@context": "https://schema.org",
    "@type": "Book",
    "@id": "https://www.asowin.com/book/#book",
    name: "App Store Optimization: The Ultimate Book",
    alternativeHeadline: "Everything you ever wanted to know about ASO",
    author: { "@id": "https://www.asowin.com/#organization" },
    publisher: { "@id": "https://www.asowin.com/#organization" },
    bookEdition: "1",
    bookFormat: "https://schema.org/EBook",
    numberOfPages: 18,
    inLanguage: "en",
    isAccessibleForFree: true,
    image: "https://www.asowin.com/asowin-book-cover.jpg",
    url: "https://www.asowin.com/book/",
    about: ["App Store Optimization", "Apple App Store ranking factors", "Google Play ranking factors", "App ratings and reviews"],
    description:
        "A free guide by ASOWin to how the Apple App Store and Google Play rank apps, which metadata, ratings, creative and quality factors matter on each store, and how to execute an ASO strategy.",
    hasPart: chapters.map((chapter, index) => ({
        "@type": "Chapter",
        position: index + 1,
        name: chapter.title,
    })),
};

const BookPage = () => {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            {/* Google Analytics */}

            {/* Hero Section with Navbar */}
            <div className="w-full bg-gradient-to-b from-[#EEF6FF] to-[#FFFFFF]">
                <Navbar />

                {/* Hero Content */}
                <div className="w-full px-4 sm:px-6 lg:px-20 pt-12 pb-16 md:pt-16 md:pb-20">
                    <div className="max-w-7xl mx-auto">
                        <script
                            type="application/ld+json"
                            dangerouslySetInnerHTML={{ __html: JSON.stringify(bookSchema) }}
                        />
                        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,280px)_1fr] gap-10 md:gap-16 items-center">
                            <Image
                                src="/asowin-book-cover.jpg"
                                alt="Cover of App Store Optimization: The Ultimate Book by ASOWin, Edition 1"
                                width={719}
                                height={1130}
                                priority
                                className="w-48 md:w-full h-auto mx-auto rounded-lg shadow-2xl"
                            />
                            <div className="text-center md:text-left">
                                <p className="text-sm font-semibold tracking-widest text-[#306777] uppercase mb-4">
                                    Free ASO book · Edition 1 · 18 pages
                                </p>
                                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1a1a1a] mb-4 md:mb-6 leading-tight">
                                    App Store Optimization: The Ultimate Book
                                </h1>
                                <p className="text-lg sm:text-xl md:text-2xl text-[#6B7280] mb-6 leading-relaxed">
                                    Everything you ever wanted to know about ASO, by the ASOWin team
                                </p>
                                <p className="text-base sm:text-lg text-[#374151] leading-relaxed max-w-2xl">
                                    This guide explains how the Apple App Store and Google Play decide which apps to show,
                                    and what app owners can do about it. It starts with why visibility drives app revenue,
                                    then breaks down the ranking factors both stores share, such as downloads, ratings,
                                    update frequency, conversion and retention. Separate chapters cover the App Store
                                    (app name, subtitle, keyword field, in-app events) and Google Play (title, short and
                                    long description, category). It closes with a practical approach to executing ASO:
                                    auditing your listing, benchmarking competitor apps and researching additional data
                                    sources, along with an honest caveat about what ASO cannot fix.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* PDF Viewer Section */}
            <div className="flex-1 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-8 md:py-12 bg-white">
                <div className="container mx-auto max-w-7xl">
                    {/* PDF Embed Container */}
                    <div className="w-full bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 mb-8"
                        style={{
                            height: 'calc(100vh - 400px)',
                            minHeight: '700px',
                            maxHeight: '900px'
                        }}>
                        <div className="w-full h-full relative">
                            <iframe
                                src="/ASOWinBook.pdf#toolbar=1&navpanes=1&scrollbar=1&view=FitH"
                                className="w-full h-full"
                                style={{ border: 'none' }}
                                title="ASOWin Book PDF Viewer"
                                allow="fullscreen"
                                loading="lazy"
                            />
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                        <a
                            href="/ASOWinBook.pdf"
                            download="ASOWinBook.pdf"
                            className="inline-flex items-center justify-center bg-[#306777] text-white px-8 py-4 rounded-[3px] font-semibold hover:bg-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-base md:text-lg min-w-[200px]"
                        >
                            <svg
                                className="w-5 h-5 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                />
                            </svg>
                            Download PDF
                        </a>
                        <a
                            href="/ASOWinBook.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center bg-white text-[#306777] border-2 border-[#306777] px-8 py-4 rounded-[3px] font-semibold hover:bg-[#306777] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-base md:text-lg min-w-[200px]"
                        >
                            <svg
                                className="w-5 h-5 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                            </svg>
                            Open in New Tab
                        </a>
                    </div>

                    {/* Chapters and key takeaways */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <section className="bg-gradient-to-br from-[#EEF6FF] to-[#F0F9FF] rounded-2xl p-6 md:p-8 lg:p-10 border border-gray-100" aria-labelledby="book-chapters">
                            <h2 id="book-chapters" className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-6">
                                Chapters
                            </h2>
                            <ol className="space-y-5">
                                {chapters.map((chapter, index) => (
                                    <li key={chapter.title} className="flex gap-4">
                                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#306777] text-white font-semibold flex items-center justify-center">
                                            {index + 1}
                                        </span>
                                        <div>
                                            <h3 className="text-lg font-semibold text-[#1a1a1a]">{chapter.title}</h3>
                                            <p className="text-[#4B5563]">{chapter.topics}</p>
                                        </div>
                                    </li>
                                ))}
                            </ol>
                        </section>
                        <section className="bg-gradient-to-br from-[#EEF6FF] to-[#F0F9FF] rounded-2xl p-6 md:p-8 lg:p-10 border border-gray-100" aria-labelledby="book-takeaways">
                            <h2 id="book-takeaways" className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-6">
                                Key takeaways
                            </h2>
                            <ul className="space-y-4">
                                {takeaways.map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#306777] flex items-center justify-center mt-1">
                                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </span>
                                        <p className="text-[#374151] text-base md:text-lg">{item}</p>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>

                    <section className="mt-8 rounded-2xl border border-gray-200 p-6 md:p-8" aria-labelledby="book-author">
                        <h2 id="book-author" className="text-2xl font-bold text-[#1a1a1a] mb-3">About the author</h2>
                        <p className="text-[#374151] text-base md:text-lg leading-relaxed">
                            The book is written by the team at{" "}
                            <a href="/about/" className="text-[#306777] font-medium hover:underline">ASOWin</a>, a global
                            App Store Optimization agency working with app brands such as Pepperfry, Bybit, Indiabulls
                            Securities, LSM Apps and Viker Games. Questions about the book:{" "}
                            <a href="mailto:support@asowin.com" className="text-[#306777] font-medium hover:underline">support@asowin.com</a>.
                        </p>
                    </section>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default BookPage;

