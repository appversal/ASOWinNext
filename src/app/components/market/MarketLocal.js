import Link from "next/link";
import { MARKETS } from "./marketContent";

// The market-specific section of a market landing page: how ASO works in that
// market and the local proof behind it.
export default function MarketLocal({ market }) {
  const { local } = MARKETS[market];
  return (
    <section id={local.id} className="py-20" aria-labelledby={`${local.id}-title`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <p className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            {local.badge}
          </p>
          <h2 id={`${local.id}-title`} className="text-3xl sm:text-4xl font-bold mb-4">
            {local.heading}
          </h2>
          <p className="text-lg text-muted-foreground">{local.intro}</p>
        </div>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {local.points.map((point) => (
            <li key={point.title} className="rounded-xl border border-border bg-card/50 p-6">
              <h3 className="text-lg font-semibold mb-2">{point.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{point.text}</p>
              {point.href && (
                <Link href={point.href} className="inline-block mt-4 text-sm font-medium text-primary hover:underline">
                  {point.linkText} →
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
