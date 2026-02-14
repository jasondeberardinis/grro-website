export default function CTA() {
  return (
    <section
      id="contact"
      className="mx-8 md:mx-16 max-w-[1080px] xl:mx-auto my-16 bg-gradient-to-br from-orange-dark via-orange-deep to-orange rounded-3xl p-16 md:p-20 text-center relative overflow-hidden"
    >
      <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,transparent_70%)] pointer-events-none" />

      <h2 className="font-heading text-3xl md:text-[44px] tracking-wider mb-4 leading-snug relative z-10">
        Ready for<br />Liftoff?
      </h2>
      <p className="text-lg text-white/80 mb-10 relative z-10">
        Book a free strategy call and see what AI-powered ads can do for your
        brand.
      </p>
      <a
        href="mailto:hello@grro.io"
        className="inline-block bg-white text-navy-deep px-12 py-5 rounded-xl font-semibold text-base hover:-translate-y-0.5 hover:shadow-2xl transition-all relative z-10"
      >
        Book a Launch Call
      </a>
    </section>
  );
}
