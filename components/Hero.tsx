type HeroProps = { t: { eyebrow: string; title: string; subtitle: string; button: string; secondary: string } };

export default function Hero({ t }: HeroProps) {
  return (
    <section className="relative isolate min-h-screen overflow-hidden pt-28">
      <div className="absolute inset-0 animate-slideshow bg-cover bg-center" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(35,29,24,0.78),rgba(35,29,24,0.38),rgba(255,250,244,0.10))]" />
      <div className="absolute -left-48 top-32 h-96 w-96 rounded-full bg-[#ef8b3f]/30 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-120 w-120 rounded-full bg-[#f7d7bd]/50 blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-[#fffaf4] to-transparent" />

      <div className="relative z-10 flex min-h-[calc(100vh-7rem)] items-center justify-start px-8 lg:px-10">
        <div className="max-w-3xl animate-rise rounded-[2rem] border border-white/16 bg-white/[0.08] p-7 shadow-[0_30px_90px_rgba(0,0,0,0.18)] backdrop-blur-sm md:p-10">
          <p className="mb-5 inline-flex rounded-full border border-white/25 bg-white/15 px-4 py-2 text-sm font-semibold uppercase tracking-[0.22em] text-[#ffe6d1]">
            {t.eyebrow}
          </p>
          <h1 className="whitespace-pre-line text-6xl font-black leading-[0.96] tracking-[-0.055em] text-white md:text-8xl">
            {t.title}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/84 md:text-xl">
            {t.subtitle}
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#products" className="btn-primary">{t.button}</a>
            <a href="#technology" className="btn-secondary">{t.secondary}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
