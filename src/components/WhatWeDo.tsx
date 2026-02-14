const features = [
  {
    title: "AI Video Ads",
    subtitle: "Powered by Higgsfield",
    description:
      "From script to screen in days. Our AI generates scroll-stopping video creative tailored to your brand, audience, and platform. TikTok, Meta, YouTube — we cover them all.",
    tag: "Core Offer",
    large: true,
  },
  {
    title: "CRM Connect",
    subtitle: "Seamless Integrations",
    description:
      "Connect your entire software stack. HubSpot, Salesforce, Klaviyo, Shopify — we build custom pipelines so your data flows where it needs to go.",
    tag: "Integration",
    large: false,
  },
  {
    title: "AI Search & SEO",
    subtitle: "New Age Discovery",
    description:
      "SEO isn't just keywords anymore. We optimize for AI-powered search, LLM citations, and conversational discovery so your brand shows up everywhere.",
    tag: "Growth",
    large: false,
  },
];

export default function WhatWeDo() {
  return (
    <section id="services" className="max-w-[1200px] mx-auto px-8 md:px-16 py-28">
      <div className="mb-16">
        <p className="text-xs tracking-[3px] uppercase text-orange font-medium mb-4">
          What We Do
        </p>
        <h2 className="font-heading text-3xl md:text-[42px] tracking-wider mb-4 leading-snug">
          Full-Stack AI Marketing
        </h2>
        <p className="text-base text-gray max-w-[560px] leading-relaxed">
          Three services. One mission. We handle the creative, the connections,
          and the discovery — so you can focus on scaling.
        </p>
      </div>

      {/* Bento grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Large feature card */}
        <div className="md:row-span-2 bg-navy border border-navy-light/40 rounded-3xl overflow-hidden group hover:border-orange-deep transition-all">
          {/* Large image area */}
          <div className="aspect-[4/3] bg-gradient-to-br from-navy-deep via-navy to-navy-light/20 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy/80" />
            <div className="text-center relative z-10">
              <div className="text-7xl mb-4">🚀</div>
              <p className="text-sm text-navy-light tracking-wider uppercase">
                Featured Image / Ad Showreel
              </p>
            </div>
          </div>
          <div className="p-8 md:p-10">
            <span className="inline-block text-[10px] tracking-[2px] uppercase text-orange font-semibold mb-3 bg-orange/10 px-3 py-1 rounded-full">
              {features[0].tag}
            </span>
            <h3 className="font-heading text-xl md:text-2xl tracking-wider mb-2">
              {features[0].title}
            </h3>
            <p className="text-sm text-orange mb-4">{features[0].subtitle}</p>
            <p className="text-sm text-gray leading-relaxed">
              {features[0].description}
            </p>
          </div>
        </div>

        {/* Smaller feature cards */}
        {features.slice(1).map((feature) => (
          <div
            key={feature.title}
            className="bg-navy border border-navy-light/40 rounded-3xl overflow-hidden group hover:border-orange-deep transition-all"
          >
            {/* Image area */}
            <div className="aspect-[16/9] bg-gradient-to-br from-navy-deep to-navy-light/10 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy/60" />
              <div className="text-center relative z-10">
                <div className="text-4xl mb-2">
                  {feature.title === "CRM Connect" ? "🔗" : "🔍"}
                </div>
                <p className="text-xs text-navy-light tracking-wider uppercase">
                  Feature Image
                </p>
              </div>
            </div>
            <div className="p-8">
              <span className="inline-block text-[10px] tracking-[2px] uppercase text-orange font-semibold mb-3 bg-orange/10 px-3 py-1 rounded-full">
                {feature.tag}
              </span>
              <h3 className="font-heading text-base tracking-wider mb-2">
                {feature.title}
              </h3>
              <p className="text-xs text-orange mb-3">{feature.subtitle}</p>
              <p className="text-sm text-gray leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
