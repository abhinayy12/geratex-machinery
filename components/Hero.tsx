type HeroProps = {
  t: {
    eyebrow: string;
    title: string;
    subtitle: string;
    button: string;
    secondary: string;
  };
};

export default function Hero({ t }: HeroProps) {
  return (
    <section className="relative isolate h-[calc(100svh-4.5rem)] min-h-[650px] max-h-[820px] overflow-hidden pt-[72px]">
      {/* Crossfade background layers */}
      <div
        className="hero-slide hero-slide-one absolute inset-0"
        aria-hidden="true"
      />

      <div
        className="hero-slide hero-slide-two absolute inset-0"
        aria-hidden="true"
      />

      {/* Dark gradient for text visibility */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(25,22,20,0.78)_0%,rgba(25,22,20,0.52)_43%,rgba(25,22,20,0.12)_76%,rgba(255,250,244,0.06)_100%)]" />

      {/* Subtle decorative lighting */}
      <div className="absolute -left-48 top-28 h-80 w-80 rounded-full bg-[#ef8b3f]/20 blur-3xl" />

      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-[#f7d7bd]/35 blur-3xl" />

      {/* Bottom fade into page */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-[#fffaf4] to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center px-6 md:px-10 lg:px-12">
        <div className="animate-rise w-full max-w-xl rounded-4xl border border-white/15 bg-black/20 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.22)] backdrop-blur-md md:p-8 lg:p-9">
          <p className="mb-5 inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#ffe6d1]">
            {t.eyebrow}
          </p>

          <h1 className="whitespace-pre-line text-5xl font-black leading-[0.96] tracking-[-0.05em] text-white md:text-6xl lg:text-7xl">
            {t.title}
          </h1>

          <p className="mt-6 max-w-lg text-base leading-7 text-white/85 md:text-lg md:leading-8">
            {t.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#products" className="btn-primary">
              {t.button}
            </a>

            <a href="#technology" className="btn-secondary">
              {t.secondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
