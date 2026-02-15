"use client";

export default function VideoSection() {
  return (
    <section className="max-w-[1200px] mx-auto px-8 md:px-16 py-28">
      <div className="text-center mb-12">
        <p className="text-xs tracking-[3px] uppercase text-orange font-medium mb-4">
          See It In Action
        </p>
        <h2 className="font-heading text-3xl md:text-[38px] tracking-wider mb-4 text-[#1B263B]">
          Watch the Launch
        </h2>
        <p className="text-base text-gray-500 max-w-[520px] mx-auto leading-relaxed">
          See how GRRO creates AI-powered ads from concept to conversion in
          under 48 hours.
        </p>
      </div>

      <div className="relative aspect-video bg-gray-50 border border-gray-200 rounded-3xl overflow-hidden group cursor-pointer">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/60" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 md:w-24 md:h-24 bg-[#1B263B] rounded-full flex items-center justify-center group-hover:bg-[#2c3e56] group-hover:scale-110 transition-all shadow-2xl shadow-[#1B263B]/20">
            <svg
              width="28"
              height="32"
              viewBox="0 0 28 32"
              fill="none"
              className="ml-1"
            >
              <path d="M28 16L0 32V0L28 16Z" fill="white" />
            </svg>
          </div>
        </div>

        <div className="absolute bottom-8 left-8">
          <p className="text-sm text-gray-400 tracking-wider uppercase">
            Video Embed / Showreel
          </p>
        </div>
      </div>
    </section>
  );
}
