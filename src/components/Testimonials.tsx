const testimonials = [
  {
    quote:
      "GRRO turned our ad production timeline from 3 weeks to 3 days. The AI-generated creatives outperformed our traditional agency by 4x.",
    name: "Sarah Chen",
    role: "Head of Growth",
    company: "Example Brand",
  },
  {
    quote:
      "The CRM integration alone saved us 20 hours a week. Everything just talks to each other now. It's like magic.",
    name: "Marcus Rivera",
    role: "CEO",
    company: "Example DTC",
  },
  {
    quote:
      "We started showing up in AI search results within weeks. Our organic traffic doubled in the first quarter.",
    name: "Aisha Patel",
    role: "Marketing Director",
    company: "Example SaaS",
  },
];

export default function Testimonials() {
  return (
    <section className="max-w-[1200px] mx-auto px-8 md:px-16 py-28">
      <div className="text-center mb-16">
        <p className="text-xs tracking-[3px] uppercase text-orange font-medium mb-4">
          What They Say
        </p>
        <h2 className="font-heading text-3xl md:text-[38px] tracking-wider text-[#1B263B]">
          Mission Reports
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="bg-gray-50 border border-gray-200 rounded-2xl p-8 flex flex-col justify-between hover:border-gray-300 transition-all"
          >
            <blockquote className="text-base text-gray-600 leading-relaxed mb-8 italic">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-xs font-semibold text-[#1B263B]">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1B263B]">{t.name}</p>
                  <p className="text-xs text-gray-400">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
