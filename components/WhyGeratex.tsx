type WhyGeratexProps = { data: { eyebrow: string; title: string; subtitle: string; points: string[] } };

const icons = ["◌", "◇", "✦", "◎", "→", "✓"];

export default function WhyGeratex({ data }: WhyGeratexProps) {
  return (
    <section id="technology" className="relative overflow-hidden bg-[#f7efe7] px-6 py-28 md:px-20">
      <div className="absolute right-[-12rem] top-[-12rem] h-[32rem] w-[32rem] rounded-full bg-[#f0a15e]/20 blur-3xl" />
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="animate-fade-up">
          <p className="section-kicker">{data.eyebrow}</p>
          <h2 className="text-5xl font-black tracking-[-0.055em] text-[#232832] md:text-6xl">{data.title}</h2>
          <p className="mt-6 text-lg leading-8 text-[#6b625b]">{data.subtitle}</p>
          <div className="mt-8 h-1 w-24 rounded-full bg-gradient-to-r from-[#e8752a] to-[#f3b47c]" />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {data.points.map((point, index) => (
            <div key={point} className="feature-tile group animate-fade-up" style={{ animationDelay: `${index * 70}ms` }}>
              <span className="feature-icon">{icons[index]}</span>
              <p>{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
