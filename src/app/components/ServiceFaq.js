import { SERVICE_FAQS } from "../(site)/services/service-faqs";

const SITE = "https://www.asowin.com";

// Visible FAQ plus Service, BreadcrumbList and FAQPage schema for a service page.
// Uses <details> so every answer is in the server HTML and works without JavaScript.
const ServiceFaq = ({ slug }) => {
  const service = SERVICE_FAQS[slug];
  if (!service) return null;

  const url = `${SITE}${service.path}`;
  const crumbs = [{ name: "Home", item: `${SITE}/` }];
  if (service.path.startsWith("/services/")) {
    crumbs.push({ name: "Services", item: `${SITE}/services/` });
  }
  crumbs.push({ name: service.name, item: url });

  const graph = [
    {
      "@type": "Service",
      "@id": `${url}#service`,
      name: service.name,
      serviceType: service.serviceType,
      description: service.description,
      url,
      provider: { "@id": `${SITE}/#organization` },
      areaServed: "Worldwide",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: crumbs.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.name,
        item: c.item,
      })),
    },
  ];
  if (service.faqs.length) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: service.faqs.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    });
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
        }}
      />
      {service.faqs.length > 0 && (
        <section
          className="w-full bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8"
          aria-labelledby={`${slug}-faq-title`}
        >
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2
                id={`${slug}-faq-title`}
                className="text-4xl sm:text-5xl font-bold text-[#111111] mb-4"
              >
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Common questions about {service.name}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 items-start">
              {service.faqs.map((faq, index) => (
                <details key={faq.q} className="group border-b border-gray-200 py-6">
                  <summary className="flex justify-between items-start gap-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                    <span className="flex items-start gap-4 flex-1">
                      <span className="text-[#fdb124] font-bold text-lg flex-shrink-0">
                        {index + 1}.
                      </span>
                      <h3 className="text-gray-800 font-semibold text-base group-hover:text-[#fdb124] transition-colors">
                        {faq.q}
                      </h3>
                    </span>
                    <span
                      aria-hidden="true"
                      className="text-[#fdb124] text-xl flex-shrink-0 transition-transform duration-300 group-open:rotate-180"
                    >
                      ▼
                    </span>
                  </summary>
                  <p className="mt-4 ml-9 text-gray-600 text-base leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ServiceFaq;
