import Image from "next/image";
import { notFound } from "next/navigation";

import Navbar from "@/components/Navbar";
import {
  translations,
  type Locale,
} from "@/data/translations";

type PageProps = {
  params: Promise<{
    locale: Locale;
    slug: string;
  }>;
};

export default async function ApplicationPage({ params }: PageProps) {
  const { locale, slug } = await params;

  const selectedLocale: Locale =
    locale === "en" || locale === "de" || locale === "pt"
      ? locale
      : "en";

  const t = translations[selectedLocale];

  const application = t.applications.items.find(
    (item) => item.slug === slug,
  );

  if (!application) {
    notFound();
  }

  const diagram =
    "diagram" in application ? application.diagram : undefined;

  const reference =
    "reference" in application ? application.reference : undefined;

  return (
    <main className="min-h-screen bg-[#fffaf4] text-[#232832]">
      <Navbar t={t} locale={selectedLocale} />

      <section className="relative overflow-hidden px-6 pb-28 pt-36 md:px-20">
        <div className="mesh-blob -left-40 top-32" />
        <div className="mesh-blob -right-40 bottom-20" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div
            className={
              diagram
                ? "grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]"
                : "max-w-5xl"
            }
          >
            <div>
              <p className="section-kicker">
                {t.nav.applications}
              </p>

              <h1 className="text-5xl font-black leading-[0.98] tracking-[-0.05em] text-[#20242c] md:text-7xl">
                {application.title}
              </h1>

              <p className="mt-7 max-w-3xl text-xl leading-9 text-[#7b7068]">
                {application.description}
              </p>

              <div className="mt-9 h-1 w-28 rounded-full bg-[#e87524]" />
            </div>

            {diagram && (
              <div className="premium-card bg-white p-5 md:p-8">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={diagram}
                    alt={`${application.title} process diagram`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-contain"
                  />
                </div>
              </div>
            )}
          </div>

          {application.paragraphs.length > 0 && (
            <section className="premium-card mt-16 p-8 md:p-12">
              <div className="space-y-6 text-lg leading-9 text-[#6b625b]">
                {application.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          )}

          <section className="mt-20">
            <div className="mb-12 max-w-3xl">
              <p className="section-kicker">
                {application.featureHeading}
              </p>

              <h2 className="text-4xl font-black tracking-[-0.045em] text-[#20242c] md:text-6xl">
                {application.featureHeading}
              </h2>

              {reference && (
                <p className="mt-4 text-sm font-bold text-[#7b7068]">
                  {reference}
                </p>
              )}

              <div className="mt-8 h-1 w-28 rounded-full bg-[#e87524]" />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {application.features.map((feature, index) => (
                <article key={feature} className="feature-tile">
                  <div className="feature-icon">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <p>{feature}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}