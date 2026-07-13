import Link from "next/link";
import type { Locale } from "@/data/translations";

type ApplicationItem = {
  title: string;
  description: string;
  slug: string;
};

type ApplicationsProps = {
  locale: Locale;
  data: {
    eyebrow: string;
    title: string;
    subtitle: string;
    viewApplication: string;
    items: ApplicationItem[];
  };
};

export default function Applications({
  locale,
  data,
}: ApplicationsProps) {
  return (
    <section
      id="applications"
      className="section-shell bg-white"
    >
      <div className="mesh-blob -left-40 top-20" />

      <div className="relative z-10">
        <div className="mb-14 max-w-3xl">
          <p className="section-kicker">{data.eyebrow}</p>

          <h2 className="text-5xl font-black tracking-[-0.05em] text-[#20242c] md:text-7xl">
            {data.title}
          </h2>

          <p className="mt-6 max-w-2xl text-xl leading-9 text-[#7b7068]">
            {data.subtitle}
          </p>

          <div className="mt-9 h-1 w-28 rounded-full bg-[#e87524]" />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.items.map((item, index) => (
            <Link
              key={item.slug}
              href={`/${locale}/applications/${item.slug}`}
              className="group block"
            >
              <article className="flex h-full min-h-[260px] flex-col rounded-4xl border border-orange-100 bg-[#fffaf4]/80 p-7 shadow-[0_20px_60px_rgba(64,43,22,0.07)] transition duration-300 hover:-translate-y-2 hover:border-[#e87524]/40 hover:bg-white hover:shadow-[0_30px_80px_rgba(64,43,22,0.13)]">
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#fff1e6] text-sm font-black text-[#e87524]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6 text-[#e87524] transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                    />
                  </svg>
                </div>

                <h3 className="mt-8 text-2xl font-black tracking-[-0.03em] text-[#20242c]">
                  {item.title}
                </h3>

                <p className="mt-4 flex-1 leading-7 text-[#7b7068]">
                  {item.description}
                </p>

                <span className="mt-7 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.12em] text-[#e87524]">
                  {data.viewApplication}
                </span>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}