export default function LogoBar() {
  const logos = [
    "Brand One",
    "Brand Two",
    "Brand Three",
    "Brand Four",
    "Brand Five",
    "Brand Six",
  ];

  return (
    <section className="max-w-[1200px] mx-auto px-8 md:px-16 py-16 border-y border-navy-light/20">
      <p className="text-center text-xs tracking-[3px] uppercase text-navy-light font-medium mb-10">
        Trusted by brands in orbit
      </p>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
        {logos.map((logo) => (
          <div
            key={logo}
            className="h-12 bg-navy-light/10 border border-navy-light/20 rounded-lg flex items-center justify-center opacity-40 hover:opacity-70 transition-opacity"
          >
            {/* Replace with actual logo images */}
            <span className="text-xs text-navy-light tracking-wider uppercase">
              {logo}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
