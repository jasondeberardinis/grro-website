const steps = [
  {
    number: "01",
    title: "Brief",
    description:
      "Tell us about your brand, your audience, and your goals. We'll build a strategy around your specific market.",
  },
  {
    number: "02",
    title: "Build",
    description:
      "Our AI pipeline generates high-converting video ads, integrates your CRM stack, and optimizes your search presence.",
  },
  {
    number: "03",
    title: "Launch",
    description:
      "Ads go live, systems connect, and your brand enters orbit. We monitor, iterate, and scale what works.",
  },
];

export default function HowItWorks() {
  return (
    <section className="max-w-[1200px] mx-auto px-8 md:px-16 py-28">
      <p className="text-xs tracking-[3px] uppercase text-orange font-medium mb-4">
        How It Works
      </p>
      <h2 className="font-heading text-3xl md:text-[38px] tracking-wider mb-4">
        Launch Sequence
      </h2>
      <p className="text-base text-gray max-w-[520px] leading-relaxed mb-16">
        Three steps from brief to blast-off.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {steps.map((step) => (
          <div key={step.number}>
            <div className="font-heading text-6xl text-navy-light/60 mb-4 leading-none">
              {step.number}
            </div>
            <h3 className="font-heading text-sm tracking-[2px] mb-3">
              {step.title}
            </h3>
            <p className="text-sm text-gray leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
