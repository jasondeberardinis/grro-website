"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-32 pb-20 overflow-hidden">
      {/* Radial glow */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(245,166,35,0.1)_0%,transparent_70%)] pointer-events-none" />

      {/* Star field placeholder */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        {/* Stars would be rendered here — can add a canvas or SVG star field */}
      </div>

      <p className="text-sm tracking-[3px] uppercase text-orange font-medium mb-8 relative z-10">
        AI-Powered Creative Agency
      </p>

      <h1 className="font-heading text-[80px] md:text-[130px] tracking-[16px] md:tracking-[24px] leading-none mb-6 relative z-10">
        GRRO<span className="text-orange">.</span>
      </h1>

      <p className="text-lg md:text-xl text-gray-light font-light max-w-[560px] leading-relaxed mb-12 relative z-10">
        We launch brands into orbit with AI-generated ads, custom CRM
        integrations, and next-gen SEO.
      </p>

      <div className="flex gap-4 relative z-10">
        <a
          href="#contact"
          className="bg-orange text-navy-deep px-10 py-4 rounded-xl font-semibold text-base hover:brightness-110 transition-all hover:-translate-y-0.5"
        >
          Get Started
        </a>
        <a
          href="#work"
          className="border border-navy-light text-white px-10 py-4 rounded-xl font-medium text-base hover:border-orange hover:text-orange transition-all"
        >
          See Our Work
        </a>
      </div>
    </section>
  );
}
