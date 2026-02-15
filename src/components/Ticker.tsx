"use client";

const items = [
  "AI Video Ads",
  "Higgsfield",
  "CRM Integration",
  "AI Search & SEO",
  "Ecommerce",
  "Performance Marketing",
  "Creative Strategy",
];

export default function Ticker() {
  return (
    <div className="py-9 border-y border-gray-200 overflow-hidden">
      <div className="flex gap-16 items-center animate-[scroll_25s_linear_infinite]">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="font-heading text-xs tracking-[4px] text-gray-300 uppercase whitespace-nowrap"
          >
            {item} <span className="text-orange">&bull;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
