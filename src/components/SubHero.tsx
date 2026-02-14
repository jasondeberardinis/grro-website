export default function SubHero() {
  return (
    <section className="max-w-[1200px] mx-auto px-8 md:px-16 py-28">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-xs tracking-[3px] uppercase text-orange font-medium mb-4">
            The Future of Advertising
          </p>
          <h2 className="font-heading text-3xl md:text-[42px] tracking-wider leading-snug mb-6">
            Ads That Build<br />Themselves.
          </h2>
          <p className="text-base text-gray leading-relaxed mb-8 max-w-[480px]">
            Traditional agencies take weeks. We take days. Our AI pipeline
            generates scroll-stopping video ads, optimized for every platform,
            every audience, every goal.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-orange" />
              <span className="text-sm text-gray-light">10x faster production than traditional agencies</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-orange" />
              <span className="text-sm text-gray-light">AI-generated creative that actually converts</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-orange" />
              <span className="text-sm text-gray-light">Unlimited iterations, zero creative fatigue</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-square bg-navy border border-navy-light/40 rounded-3xl overflow-hidden flex items-center justify-center">
            {/* Placeholder for hero image/3D render */}
            <div className="text-center">
              <div className="text-6xl mb-4">🚀</div>
              <p className="text-sm text-navy-light tracking-wider uppercase">Hero Image / 3D Render</p>
            </div>
          </div>
          {/* Floating accent */}
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-orange/20 to-transparent rounded-2xl blur-xl" />
        </div>
      </div>
    </section>
  );
}
