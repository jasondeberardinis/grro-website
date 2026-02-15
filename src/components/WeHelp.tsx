"use client";

export default function WeHelp() {
  return (
    <section className="bg-[#EFECE8] py-24 md:py-32 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        {/* Main typographic statement */}
        <div className="flex flex-wrap items-center justify-center gap-x-[0.3em] gap-y-0 leading-[0.95] text-center">
          <span className="font-statement text-[clamp(3rem,10vw,8.5rem)] uppercase text-[#1B263B] tracking-tight">
            We Help
          </span>

          {/* First logo placeholder - circular icon */}
          <span className="inline-flex items-center justify-center border-2 border-dashed border-[#1B263B]/30 rounded-sm px-3 py-2 mx-1 self-center">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              className="w-8 h-8 md:w-12 md:h-12"
            >
              <circle
                cx="24"
                cy="24"
                r="20"
                stroke="#1B263B"
                strokeWidth="3"
                fill="none"
              />
              <line
                x1="24"
                y1="4"
                x2="24"
                y2="18"
                stroke="#1B263B"
                strokeWidth="3"
              />
              <line
                x1="18"
                y1="12"
                x2="30"
                y2="12"
                stroke="#1B263B"
                strokeWidth="3"
              />
            </svg>
          </span>

          <span className="font-statement text-[clamp(3rem,10vw,8.5rem)] uppercase text-[#1B263B] tracking-tight">
            Create
          </span>

          <span className="font-statement text-[clamp(3rem,10vw,8.5rem)] uppercase text-[#1B263B] tracking-tight">
            Moments, Design Places
          </span>

          <span className="font-statement text-[clamp(3rem,10vw,8.5rem)] uppercase text-[#1B263B] tracking-tight">
            For
          </span>

          {/* Epochal logo placeholder */}
          <span className="inline-flex items-center justify-center border-2 border-dashed border-[#1B263B]/30 rounded-sm px-4 py-2 mx-1 self-center">
            <span className="font-body text-[#1B263B] text-lg md:text-2xl font-bold tracking-wider lowercase">
              epochal
            </span>
          </span>

          <span className="font-statement text-[clamp(3rem,10vw,8.5rem)] uppercase text-[#1B263B] tracking-tight">
            And Amplify
          </span>

          <span className="font-statement text-[clamp(3rem,10vw,8.5rem)] uppercase text-[#1B263B] tracking-tight">
            Experiences For
          </span>

          {/* The Standard logo placeholder - upside down */}
          <span className="inline-flex items-center justify-center border-2 border-dashed border-[#1B263B]/30 rounded-sm px-4 py-2 mx-1 self-center rotate-180">
            <span className="font-body text-[#1B263B] text-lg md:text-2xl font-bold tracking-wide">
              The Standard
            </span>
          </span>
        </div>

        {/* Bottom tagline */}
        <p className="text-center mt-16 md:mt-20 text-lg md:text-xl text-[#1B263B]/70 italic font-body">
          And We&apos;re Clued Up on Culture...
        </p>
      </div>
    </section>
  );
}
