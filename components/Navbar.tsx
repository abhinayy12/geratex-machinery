import Image from "next/image";
import Link from "next/link";
import type { Locale, Translation } from "@/data/translations";

type NavbarProps = {
  t: Translation;
  locale: Locale;
};

export default function Navbar({ t, locale }: NavbarProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-orange-100 bg-[#fffaf4]/95 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">
      <Link
        href={`/${locale}`}
        aria-label="Geratex home"
        className="flex items-center"
      >
        <Image
          src="/images/logo.png"
          alt="Geratex Machinery Pvt. Ltd."
          width={300}
          height={64}
          priority
          className="h-21 w-auto object-contain"
        />
        </Link>

        <nav className="hidden items-center gap-6 text-[17px] font-medium text-[#20242c] md:flex">
          <Link href={`/${locale}#about`} className="nav-link">
            {t.nav.about}
          </Link>

          <div className="group relative">
            <button
              type="button"
              className="nav-link flex items-center gap-1.5 py-5"
              aria-haspopup="true"
            >
              {t.nav.products}

              <svg
                viewBox="0 0 20 20"
                className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180"
                aria-hidden="true"
              >
                <path
                  d="m5 7.5 5 5 5-5"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.7"
                />
              </svg>
            </button>

            <div className="invisible absolute left-1/2 top-full w-60 -translate-x-1/2 translate-y-2 rounded-2xl border border-orange-100 bg-white p-3 opacity-0 shadow-[0_24px_70px_rgba(64,43,22,0.14)] transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <Link
                href={`/${locale}/products/sonicwash`}
                className="block rounded-xl px-4 py-3 transition duration-200 hover:bg-[#fff1e6]"
              >
                <span className="block font-black text-[#20242c]">
                  SonicWASH™
                </span>
                <span className="mt-1 block text-sm font-normal text-[#7b7068]">
                {t.products.washingLabel}
                </span>
              </Link>

              <Link
                href={`/${locale}/products/sonicpreg`}
                className="mt-1 block rounded-xl px-4 py-3 transition duration-200 hover:bg-[#fff1e6]"
              >
                <span className="block font-black text-[#20242c]">
                  SonicPREG™
                </span>
                <span className="mt-1 block text-sm font-normal text-[#7b7068]">
                <span className="mt-1 block text-sm font-normal text-[#7b7068]">
                  {t.products.chemicalLabel}
                </span>
                </span>
              </Link>

              <Link
                href={`/${locale}#products`}
                className="mt-2 block border-t border-orange-100 px-4 pt-3 text-sm font-bold text-[#e87524]"
              >
                {t.products.title}
              </Link>
            </div>
          </div>

          <div className="group relative">
            <button
              type="button"
              className="nav-link flex items-center gap-2 py-7"
              aria-haspopup="true"
            >
              {t.nav.applications}

              <svg
                viewBox="0 0 20 20"
                className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180"
                aria-hidden="true"
              >
                <path
                  d="m5 7.5 5 5 5-5"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.7"
                />
              </svg>
            </button>

            <div className="invisible absolute left-1/2 top-full w-72 -translate-x-1/2 translate-y-2 rounded-2xl border border-orange-100 bg-white p-3 opacity-0 shadow-[0_24px_70px_rgba(64,43,22,0.14)] transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              {t.applications.items.map((item) => (
                <Link
                  key={item.slug}
                  href={`/${locale}/applications/${item.slug}`}
                  className="block rounded-xl px-4 py-3 transition duration-200 hover:bg-[#fff1e6]"
                >
                  <span className="block font-bold text-[#20242c]">
                    {item.title}
                  </span>
                </Link>
              ))}

              <Link
                href={`/${locale}#applications`}
                className="mt-2 block border-t border-orange-100 px-4 pt-3 text-sm font-bold text-[#e87524]"
              >
                {t.applications.title}
              </Link>
            </div>
          </div>

          <Link href={`/${locale}#technology`} className="nav-link">
            {t.nav.technology}
          </Link>

          <Link href={`/${locale}#installations`} className="nav-link">
            {t.nav.installations}
          </Link>

          <Link href={`/${locale}#testimonials`} className="nav-link">
            Testimonials
          </Link>

          <Link href={`/${locale}#contact`} className="nav-link">
            {t.nav.contact}
          </Link>

          <div className="group relative">
            <button
              type="button"
              className="flex items-center gap-2 rounded-full border border-orange-100 bg-white px-4 py-2 shadow-sm transition duration-200 hover:border-[#e87524]/40 hover:shadow-md"
            >
              {t.nav.language}

              <svg
                viewBox="0 0 20 20"
                className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180"
                aria-hidden="true"
              >
                <path
                  d="m5 7.5 5 5 5-5"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.7"
                />
              </svg>
            </button>

            <div className="invisible absolute right-0 top-full mt-2 w-48 translate-y-2 rounded-2xl border border-orange-100 bg-white p-2 opacity-0 shadow-[0_24px_70px_rgba(64,43,22,0.14)] transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <Link href="/en" className="lang-item">
                {t.languageMenu.english}
              </Link>

              <Link href="/de" className="lang-item">
                {t.languageMenu.german}
              </Link>

              <Link href="/pt" className="lang-item">
                {t.languageMenu.portuguese}
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}