import Navbar from "@/components/Navbar";
import { translations, Locale } from "@/data/translations";
import Image from "next/image";

type PageProps = {
  params: Promise<{
    locale: Locale;
  }>;
};

export default async function SonicPregPage({ params }: PageProps) {
  const { locale } = await params;

  const selectedLocale: Locale =
    locale === "de" || locale === "pt" || locale === "en" ? locale : "en";

  const t = translations[selectedLocale];

  return (
    <main className="bg-[#fffaf4] text-[#232832]">
      <Navbar t={t} locale={selectedLocale} />

      <section className="px-6 pb-24 pt-36 md:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-5 text-sm font-black uppercase tracking-[0.35em] text-[#e87524]">
                SonicPREG™
              </p>

              <h1 className="whitespace-pre-line text-5xl font-black leading-[0.95] tracking-[-0.05em] text-[#20242c] md:text-7xl">
                {t.sonicpreg.heroTitle}
              </h1>

              <p className="mt-6 max-w-2xl text-xl leading-9 text-[#7b7068]">
                {t.sonicpreg.heroSubtitle}
              </p>

              <div className="mt-9 h-1 w-28 rounded-full bg-[#e87524]" />
            </div>

            <div className="premium-card p-8">
              <Image
                src="/images/sonicpreg.png"
                alt="SonicPREG"
                width={800}
                height={600}
                className="h-auto w-full object-contain"
                priority
              />
            </div>
          </div>

          <section className="mt-20 space-y-8">
            {t.sonicpreg.sections.map((section) => (
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

          <section className="mt-20">
            <div className="mb-10 max-w-3xl">
              <p className="mb-5 text-sm font-black uppercase tracking-[0.35em] text-[#e87524]">
                Technology Benefits
              </p>

              <h2 className="text-4xl font-black tracking-[-0.04em] text-[#20242c] md:text-6xl">
                {t.sonicpreg.benefitsTitle}
              </h2>

              <div className="mt-8 h-1 w-28 rounded-full bg-[#e87524]" />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {t.sonicpreg.benefits.map((benefit, index) => (
                <div key={benefit} className="feature-tile">
                  <div className="feature-icon">{index + 1}</div>
                  <p>{benefit}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}