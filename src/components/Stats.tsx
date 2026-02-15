const stats = [
  { number: "10x", label: "Faster Ad Production" },
  { number: "3.2%", label: "Average CTR" },
  { number: "48hr", label: "Turnaround Time" },
  { number: "100+", label: "Brands Launched" },
];

export default function Stats() {
  return (
    <section className="max-w-[1200px] mx-auto px-8 md:px-16 py-20 border-y border-gray-200">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            <div className="font-heading text-4xl md:text-[44px] text-[#1B263B] mb-2">
              {stat.number}
            </div>
            <div className="text-sm text-gray-500 font-medium tracking-wider">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
