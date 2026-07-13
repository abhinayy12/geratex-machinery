import Navbar from "@/components/Navbar";
import { translations, Locale } from "@/data/translations";
import Image from "next/image";

type PageProps = {
  params: Promise<{
    locale: Locale;
  }>;
};

export default async function SonicWashPage({ params }: PageProps) {
  const { locale } = await params;

  const selectedLocale: Locale =
    locale === "de" || locale === "pt" || locale === "en" ? locale : "en";

  const t = translations[selectedLocale];

  return (
    <main className="bg-[#fffaf4] text-[#232832]">
      <Navbar t={t} locale={selectedLocale} />

      <section className="px-6 pb-24 pt-40 md:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-5 text-sm font-black uppercase tracking-[0.35em] text-[#e87524]">
                SonicWASH™
              </p>

              <h1 className="text-5xl font-black leading-[0.95] tracking-[-0.05em] text-[#20242c] md:text-7xl">
                {t.sonicwash.heroTitle}
              </h1>

              <p className="mt-6 max-w-2xl text-xl leading-9 text-[#7b7068]">
                {t.sonicwash.heroSubtitle}
              </p>

              <div className="mt-8 inline-flex rounded-xl bg-[#e87524] px-6 py-3 text-2xl font-black text-white shadow-lg">
                {t.sonicwash.savings}
              </div>

              <p className="mt-3 font-bold uppercase tracking-wide text-[#20242c]">
                {t.sonicwash.savingsSubtitle}
              </p>
            </div>

            <div className="premium-card p-8">
              <Image
                src="/images/sonicwash.png"
                alt="SonicWASH"
                width={700}
                height={500}
                className="h-auto w-full object-contain"
                priority
              />
            </div>
          </div>

          <section className="mt-20 grid gap-6 md:grid-cols-3">
            {t.sonicwash.highlights.map((item) => (
              <div key={item.title} className="feature-tile">
                <div className="feature-icon">✓</div>
                <h3 className="mt-4 text-2xl font-black text-[#20242c]">
                  {item.title}
                </h3>
                <p>{item.text}</p>
              </div>
            ))}
          </section>

          <section className="mt-20 space-y-8">
            {t.sonicwash.sections.map((section) => (
              <div key={section.title} className="premium-card p-8 md:p-10">
                <h2 className="text-3xl font-black tracking-[-0.03em] text-[#20242c]">
                  {section.title}
                </h2>

                <div className="mt-5 space-y-5 text-lg leading-9 text-[#6b625b]">
                  {section.paragraphs.map((para) => (
                    <p key={para}>{para}</p>
                  ))}
                </div>
              </div>
            ))}
          </section>
        </div>
      </section>
    </main>
  );
}