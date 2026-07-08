import Image from "next/image";
import Link from "next/link";
import { Locale, Translation } from "@/data/translations";

type NavbarProps = { t: Translation; locale: Locale };

export default function Navbar({ t, locale }: NavbarProps) {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/70 bg-[#fffaf4]/82 shadow-[0_18px_45px_rgba(53,45,35,0.08)] backdrop-blur-xl">
      <div className="mx-auto flex h-28 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link href={`/${locale}`} className="group flex items-center">
          <Image src="/images/logo.png" alt="Geratex Machinery Pvt. Ltd." width={420} height={100} priority className="h-20 w-auto object-contain transition duration-300 group-hover:scale-[1.025]" />
        </Link>

        <nav className="hidden items-center gap-8 text-[17px] font-medium tracking-[-0.01em] text-[#222936] md:flex">
          <a href="#products" className="nav-link">{t.nav.products}</a>
          <a href="#technology" className="nav-link">{t.nav.technology}</a>
          <a href="#installations" className="nav-link">{t.nav.installations}</a>
          <a href="#contact" className="nav-link">{t.nav.contact}</a>

          <div className="group relative pl-2">
            <button className="rounded-full border border-[#f2dcc9] bg-white/70 px-4 py-2 text-sm font-semibold text-[#222936] shadow-sm transition duration-300 hover:border-[#e87f36]/50 hover:bg-white">
              {t.nav.language}
            </button>
            <div className="invisible absolute right-0 top-12 w-52 translate-y-2 rounded-2xl border border-[#f2dcc9] bg-white/95 p-2 opacity-0 shadow-[0_24px_80px_rgba(64,43,22,0.14)] backdrop-blur-xl transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <Link href="/en" className="lang-item">{t.languageMenu.english}</Link>
              <Link href="/de" className="lang-item">{t.languageMenu.german}</Link>
              <Link href="/pt" className="lang-item">{t.languageMenu.portuguese}</Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
