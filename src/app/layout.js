import { Manrope } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import GoogleAnalytics from "./components/GoogleAnalytics";
import IntercomProvider from "./components/IntercomProvider";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata = {
  metadataBase: new URL('https://www.asowin.com'),
  title: "ASOWin | App Store Optimization for Apps - Leading Global Company",
  description:
    "Discover how ASOWin helps you optimize your app store presence and increase visibility. Learn more about our services and case studies.",
  keywords:
    "SEO Agency, ASO, ASOWin, App Store Optimization, Mobile Growth, App Marketing",
  authors: [{ name: "ASOWin", url: "https://www.asowin.com" }],
  robots: "index, follow",
  verification: {
    google: "jFrU4l9VGcxAohmVU58CDZ8foUe4kut1jfkboO6jH64",
    other: {
      "msvalidate.01": "5A98719081CF0CE62636F6DFD1B3D94A",
    },
  },
  openGraph: {
    title: "ASOWin | App Store Optimization for Apps - Leading Global Company",
    description:
      "Discover how ASOWin helps you optimize your app store presence and increase visibility.",
    url: "https://www.asowin.com",
    siteName: "ASOWin",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ASOWin Banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ASOWin | App Store Optimization for Apps - Leading Global Company",
    description:
      "Discover how ASOWin helps you optimize your app store presence and increase visibility.",
    images: ["/og-image.jpg"],
    site: "@asowin",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={manrope.variable} suppressHydrationWarning>
      <head>
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "ASOWin",
              "url": "https://asowin.com/",
              "logo": "https://asowin.com/ASOWin.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-510-365-7173",
                "contactType": "customer service",
                "email": "support@asowin.com",
                "areaServed": "Worldwide",
              },
              "address": [
                {
                  "@type": "PostalAddress",
                  "streetAddress": "16192 Coastal Hwy",
                  "addressLocality": "Lewes",
                  "addressRegion": "DE",
                  "postalCode": "19958",
                  "addressCountry": "USA",
                },
              ],
              "sameAs": ["https://www.linkedin.com/company/asowin/"],
            }),
          }}
        />

        {/* Resource hints for performance */}
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//code.tidio.co" />
        <link rel="dns-prefetch" href="//api.web3forms.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />

        {/* Preload ONLY small critical assets */}
        <link rel="preload" as="image" href="/ASOWin.png" />

        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-58866TH2');`}
        </Script>
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-58866TH2"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {children}
        <GoogleAnalytics />
        <IntercomProvider />

        {/* Tidio Live Chat */}
        <Script
          src="//code.tidio.co/tpwli8xgiscw8xqzsn6xum0xy8pn2dnh.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}