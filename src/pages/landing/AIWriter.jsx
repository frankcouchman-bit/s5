// src/pages/landing/AIWriter.jsx
import React from "react";
import HeadTags from "@/components/seo/HeadTags";

export default function AIWriter() {
  const canonicalUrl =
    typeof window !== "undefined" ? `${window.location.origin}/ai-writer` : "/ai-writer";

  const keywords = [
    "ai writer",
    "ai article writer",
    "seo writer",
    "content writer ai",
    "long form ai content",
  ];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "SEOScribe AI Writer that Mirrors Search Intent",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: { "@type": "Offer", price: "24.00", priceCurrency: "USD" },
      aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "187" },
      areaServed: "US, Global",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <HeadTags
        title="AI Writer — Long-Form SEO Content Generator | SEOScribe"
        description="Turn a topic into a comprehensive, citation-backed article with meta, images and social cards in minutes. Built for U.S. and global search markets."
        keywords={keywords}
        canonical={canonicalUrl}
        jsonLd={jsonLd}
      />

      <header className="py-14 border-b">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl sm:text-5xl font-bold">AI Writer that Mirrors Search Intent</h1>
          <p className="mt-4 text-slate-600">
            Turn a topic into a comprehensive, citation-backed article with meta, images and social cards in minutes.
            Built for U.S. and global search markets.
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-10 space-y-14">
        <section>
          <h2 className="text-2xl font-semibold">Why SEOScribe?</h2>
          <p className="mt-3 text-slate-700">
            Create deeply researched, SEO-optimized long-form articles with citations, meta, internal links, and social
            snippets. Our pipeline mirrors search intent using real-time SERP insights to maximize topical coverage and
            ranking potential.
          </p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            <li className="p-4 rounded-xl border">Long-form drafts (2,000–6,000+ words)</li>
            <li className="p-4 rounded-xl border">Automatic meta titles, descriptions & headings</li>
            <li className="p-4 rounded-xl border">Citations & outbound links to sources</li>
            <li className="p-4 rounded-xl border">Image suggestions + social cards</li>
            <li className="p-4 rounded-xl border">Internal linking suggestions</li>
            <li className="p-4 rounded-xl border">US & global geo-language support</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Use cases</h2>
          <div className="mt-4 grid sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl border">Agencies scaling content ops</div>
            <div className="p-4 rounded-xl border">Bloggers building topical authority</div>
            <div className="p-4 rounded-xl border">Ecommerce brands targeting high-intent keywords</div>
          </div>
        </section>

        <section id="faqs">
          <h2 className="text-2xl font-semibold mb-4">Frequently asked questions</h2>
          <div className="space-y-3">
            {[
              {
                q: "What is an AI Writer?",
                a:
                  "An AI-driven assistant that generates SEO-ready long-form content, titles, descriptions, FAQs and social posts.",
              },
              { q: "Can I include sources?", a: "Yes, enable citations and add curated outbound links to authoritative sources." },
              { q: "Does it help with internal links?", a: "Yes, it suggests internal links to improve crawlability and topical clusters." },
              {
                q: "Will it help rankings?",
                a:
                  "It aligns content to search intent and improves comprehensiveness—the fundamentals for ranking. Results vary by niche and competition.",
              },
            ].map((qa, i) => (
              <details key={i} className="p-4 rounded-xl border">
                <summary className="font-medium cursor-pointer">{qa.q}</summary>
                <p className="mt-2 text-slate-700">{qa.a}</p>
              </details>
            ))}
          </div>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "What is an AI Writer?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "An AI-driven assistant that generates SEO-ready long-form content, titles, descriptions, FAQs and social posts.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can I include sources?",
                    acceptedAnswer: { "@type": "Answer", text: "Yes, enable citations and add curated outbound links to authoritative sources." },
                  },
                  {
                    "@type": "Question",
                    name: "Does it help with internal links?",
                    acceptedAnswer: { "@type": "Answer", text: "Yes, it suggests internal links to improve crawlability and topical clusters." },
                  },
                  {
                    "@type": "Question",
                    name: "Will it help rankings?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "It aligns content to search intent and improves comprehensiveness—the fundamentals for ranking. Results vary by niche and competition.",
                    },
                  },
                ],
              }),
            }}
          />
        </section>
      </main>
    </div>
  );
}
