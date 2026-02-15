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
    <section className="max-w-[1200px] mx-auto px-8 md:px-16 py-16 border-y border-gray-200">
      <p className="text-center text-xs tracking-[3px] uppercase text-gray-400 font-medium mb-10">
        Trusted by brands in orbit
      </p>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
        {logos.map((logo) => (
          <div
            key={logo}
            className="h-12 bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-center opacity-50 hover:opacity-80 transition-opacity"
          >
            <span className="text-xs text-gray-400 tracking-wider uppercase">
              {logo}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
