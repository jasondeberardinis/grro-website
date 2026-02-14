const services = [
  {
    icon: "🚀",
    title: "AI Ads",
    description:
      "End-to-end AI video ads powered by Higgsfield. From script to screen in days, not weeks. Scroll-stopping creative at scale.",
  },
  {
    icon: "🔗",
    title: "CRM Connect",
    description:
      "Custom integrations that connect every piece of your software stack. Your CRM, email, analytics — all talking to each other.",
  },
  {
    icon: "🔍",
    title: "AI Search",
    description:
      "SEO built for the AI era. Optimize for how people actually search now — through AI, LLMs, and conversational discovery.",
  },
];

export default function Services() {
  return (
    <section id="services" className="max-w-[1200px] mx-auto px-8 md:px-16 py-28">
      <p className="text-xs tracking-[3px] uppercase text-orange font-medium mb-4">
        What We Do
      </p>
      <h2 className="font-heading text-3xl md:text-[38px] tracking-wider mb-4 leading-snug">
        Three Engines.<br />One Mission.
      </h2>
      <p className="text-base text-gray max-w-[520px] leading-relaxed mb-16">
        Full-stack AI marketing for brands that want to move faster than the
        competition.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-navy border border-navy-light/40 rounded-2xl p-10 hover:border-orange-deep hover:-translate-y-1 transition-all"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-orange-dark to-orange rounded-xl flex items-center justify-center text-xl mb-6">
              {service.icon}
            </div>
            <h3 className="font-heading text-sm tracking-[2px] mb-3">
              {service.title}
            </h3>
            <p className="text-sm text-gray leading-relaxed">
              {service.description}
            </p>
            <a
              href="#contact"
              className="inline-block mt-6 text-xs tracking-wider text-orange font-semibold hover:text-orange/80 transition-colors"
            >
              Learn More →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
