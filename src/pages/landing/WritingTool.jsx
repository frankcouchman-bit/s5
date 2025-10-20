// src/pages/landing/WritingTool.jsx
import React from "react";
import HeadTags from "@/components/seo/HeadTags";

export default function WritingTool() {
  const canonicalUrl =
    typeof window !== "undefined" ? `${window.location.origin}/writing-tool` : "/writing-tool";

  const keywords = [
    "writing tool",
    "seo writing tool",
    "content generator",
    "long form writer tool",
    "ai content writing tool",
  ];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "SEOScribe SEO Writing Tool for Authority-Building Content",
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
        title="Writing Tool — SEO Content & Article Generator | SEOScribe"
        description="Plan, draft and optimize long-form content with structure, internal links and on-page metadata designed to rank and convert."
        keywords={keywords}
        canonical={canonicalUrl}
        jsonLd={jsonLd}
      />

      <header className="py-14 border-b">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl sm:text-5xl font-bold">
            SEO Writing Tool for Authority-Building Content
          </h1>
          <p className="mt-4 text-slate-600">
            Plan, draft and optimize long-form content with structure, internal links and on-page metadata designed to
            rank and convert.
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
                q: "Is this a writing tool or full content suite?",
                a: "Both—drafts, outlines, citations, meta, images, internal links, and social snippets in one place.",
              },
              { q: "Does it support teams?", a: "Yes, roles, shared projects, and exports for collaboration." },
              { q: "Is there a free demo?", a: "Yes, one article generation per day on the free plan to test quality before upgrading." },
              {
                q: "What about compliance?",
                a:
                  "You control fact density, link policies, and review workflows to meet brand and legal standards.",
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
                    name: "Is this a writing tool or full content suite?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Both—drafts, outlines, citations, meta, images, internal links, and social snippets in one place.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Does it support teams?",
                    acceptedAnswer: { "@type": "Answer", text: "Yes, roles, shared projects, and exports for collaboration." },
                  },
                  {
                    "@type": "Question",
                    name: "Is there a free demo?",
                    acceptedAnswer: { "@type": "Answer", text: "Yes, one article generation per day on the free plan to test quality before upgrading." },
                  },
                  {
                    "@type": "Question",
                    name: "What about compliance?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "You control fact density, link policies, and review workflows to meet brand and legal standards.",
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
