"use client";

export default function VideoSection() {
  return (
    <section className="max-w-[1200px] mx-auto px-8 md:px-16 py-28">
      <div className="text-center mb-12">
        <p className="text-xs tracking-[3px] uppercase text-orange font-medium mb-4">
          See It In Action
        </p>
        <h2 className="font-heading text-3xl md:text-[38px] tracking-wider mb-4">
          Watch the Launch
        </h2>
        <p className="text-base text-gray max-w-[520px] mx-auto leading-relaxed">
          See how GRRO creates AI-powered ads from concept to conversion in
          under 48 hours.
        </p>
      </div>

      {/* Video Container */}
      <div className="relative aspect-video bg-navy border border-navy-light/40 rounded-3xl overflow-hidden group cursor-pointer">
        {/* Video placeholder / thumbnail */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy-deep/60" />

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 md:w-24 md:h-24 bg-orange/90 rounded-full flex items-center justify-center group-hover:bg-orange group-hover:scale-110 transition-all shadow-2xl shadow-orange/20">
            <svg
              width="28"
              height="32"
              viewBox="0 0 28 32"
              fill="none"
              className="ml-1"
            >
              <path
                d="M28 16L0 32V0L28 16Z"
                fill="#1B263B"
              />
            </svg>
          </div>
        </div>

        {/* Placeholder text */}
        <div className="absolute bottom-8 left-8">
          <p className="text-sm text-navy-light tracking-wider uppercase">
            Video Embed / Showreel
          </p>
        </div>

        {/* Replace with actual video:
        <iframe
          src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        */}
      </div>
    </section>
  );
}
