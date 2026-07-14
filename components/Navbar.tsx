"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import type { Locale, Translation } from "@/data/translations";

type NavbarProps = {
  t: Translation;
  locale: Locale;
};

type MobileDropdown = "products" | "applications" | "language" | null;

export default function Navbar({ t, locale }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] =
    useState<MobileDropdown>(null);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileDropdown(null);
  };

  const toggleMobileDropdown = (
    dropdown: Exclude<MobileDropdown, null>,
  ) => {
    setMobileDropdown((current) =>
      current === dropdown ? null : dropdown,
    );
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-orange-100 bg-[#fffaf4]/95 shadow-sm backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 sm:px-6 lg:px-10">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            aria-label="Geratex home"
            className="flex shrink-0 items-center"
            onClick={closeMobileMenu}
          >
            <Image
              src="/images/logo.png"
              alt="Geratex Machinery Pvt. Ltd."
              width={360}
              height={90}
              priority
              className="h-[46px] w-auto object-contain sm:h-[52px]"
            />
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-6 text-[16px] font-medium text-[#20242c] lg:flex">
            <Link href={`/${locale}#about`} className="nav-link">
              {t.nav.about}
            </Link>

            {/* Products dropdown */}
            <div className="group relative">
              <button
                type="button"
                className="nav-link flex items-center gap-1.5 py-7"
                aria-haspopup="true"
              >
                {t.nav.products}

                <Chevron
                  className="transition-transform duration-200 group-hover:rotate-180"
                />
              </button>

              <div className="invisible absolute left-1/2 top-full w-64 -translate-x-1/2 translate-y-2 rounded-2xl border border-orange-100 bg-white p-3 opacity-0 shadow-[0_24px_70px_rgba(64,43,22,0.14)] transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
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
                    {t.products.chemicalLabel}
                  </span>
                </Link>

                <Link
                  href={`/${locale}#products`}
                  className="mt-2 block border-t border-orange-100 px-4 pt-3 text-sm font-bold text-[#e87524] transition hover:text-[#c95f1c]"
                >
                  {t.products.title}
                </Link>
              </div>
            </div>

            {/* Applications dropdown */}
            <div className="group relative">
              <button
                type="button"
                className="nav-link flex items-center gap-1.5 py-7"
                aria-haspopup="true"
              >
                {t.nav.applications}

                <Chevron
                  className="transition-transform duration-200 group-hover:rotate-180"
                />
              </button>

              <div className="invisible absolute left-1/2 top-full w-80 -translate-x-1/2 translate-y-2 rounded-2xl border border-orange-100 bg-white p-3 opacity-0 shadow-[0_24px_70px_rgba(64,43,22,0.14)] transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
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
                  className="mt-2 block border-t border-orange-100 px-4 pt-3 text-sm font-bold text-[#e87524] transition hover:text-[#c95f1c]"
                >
                  {t.applications.title}
                </Link>
              </div>
            </div>

            <Link
              href={`/${locale}#technology`}
              className="nav-link"
            >
              {t.nav.technology}
            </Link>

            <Link
              href={`/${locale}#installations`}
              className="nav-link"
            >
              {t.nav.installations}
            </Link>

            <Link
              href={`/${locale}#testimonials`}
              className="nav-link"
            >
              {t.nav.testimonials}
            </Link>

            <Link href={`/${locale}#contact`} className="nav-link">
              {t.nav.contact}
            </Link>

            {/* Desktop language dropdown */}
            <div className="group relative">
              <button
                type="button"
                className="flex items-center gap-2 rounded-full border border-orange-100 bg-white px-4 py-2.5 shadow-sm transition duration-200 hover:border-[#e87524]/40 hover:shadow-md"
              >
                {t.nav.language}

                <Chevron
                  className="transition-transform duration-200 group-hover:rotate-180"
                />
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

          {/* Mobile burger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-orange-100 bg-white text-[#20242c] shadow-sm transition hover:border-[#e87524]/40 hover:text-[#e87524] lg:hidden"
            aria-label="Open navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path
                d="M4 7h16M4 12h16M4 17h16"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="1.8"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Dark mobile overlay */}
      <button
        type="button"
        aria-label="Close navigation menu"
        onClick={closeMobileMenu}
        className={`fixed inset-0 z-[60] bg-black/45 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* Mobile side drawer */}
      <aside
        className={`fixed right-0 top-0 z-[70] flex h-dvh w-[88%] max-w-[390px] flex-col bg-[#fffaf4] shadow-[-20px_0_70px_rgba(35,24,15,0.22)] transition-transform duration-300 ease-out lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        {/* Mobile drawer header */}
        <div className="flex h-20 items-center justify-between border-b border-orange-100 px-5">
          <Image
            src="/images/logo.png"
            alt="Geratex Machinery Pvt. Ltd."
            width={260}
            height={62}
            className="h-10 w-auto object-contain"
          />

          <button
            type="button"
            onClick={closeMobileMenu}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-orange-100 bg-white text-[#20242c] shadow-sm transition hover:text-[#e87524]"
            aria-label="Close navigation menu"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path
                d="m6 6 12 12M18 6 6 18"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="1.8"
              />
            </svg>
          </button>
        </div>

        {/* Mobile navigation */}
        <nav className="flex-1 overflow-y-auto px-5 py-5">
          <MobileLink
            href={`/${locale}#about`}
            onClick={closeMobileMenu}
          >
            {t.nav.about}
          </MobileLink>

          {/* Mobile Products accordion */}
          <MobileAccordionButton
            label={t.nav.products}
            open={mobileDropdown === "products"}
            onClick={() => toggleMobileDropdown("products")}
          />

          <div
            className={`grid transition-all duration-300 ${
              mobileDropdown === "products"
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="mb-2 ml-3 border-l border-orange-200 pl-4">
                <MobileSubLink
                  href={`/${locale}/products/sonicwash`}
                  onClick={closeMobileMenu}
                  title="SonicWASH™"
                  description={t.products.washingLabel}
                />

                <MobileSubLink
                  href={`/${locale}/products/sonicpreg`}
                  onClick={closeMobileMenu}
                  title="SonicPREG™"
                  description={t.products.chemicalLabel}
                />

                <Link
                  href={`/${locale}#products`}
                  onClick={closeMobileMenu}
                  className="block py-3 text-sm font-bold text-[#e87524]"
                >
                  {t.products.title}
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Applications accordion */}
          <MobileAccordionButton
            label={t.nav.applications}
            open={mobileDropdown === "applications"}
            onClick={() =>
              toggleMobileDropdown("applications")
            }
          />

          <div
            className={`grid transition-all duration-300 ${
              mobileDropdown === "applications"
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="mb-2 ml-3 border-l border-orange-200 pl-4">
                {t.applications.items.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/${locale}/applications/${item.slug}`}
                    onClick={closeMobileMenu}
                    className="block rounded-xl py-3 pr-2 text-[15px] font-semibold leading-6 text-[#343942] transition hover:text-[#e87524]"
                  >
                    {item.title}
                  </Link>
                ))}

                <Link
                  href={`/${locale}#applications`}
                  onClick={closeMobileMenu}
                  className="block border-t border-orange-100 py-3 text-sm font-bold text-[#e87524]"
                >
                  {t.applications.title}
                </Link>
              </div>
            </div>
          </div>

          <MobileLink
            href={`/${locale}#technology`}
            onClick={closeMobileMenu}
          >
            {t.nav.technology}
          </MobileLink>

          <MobileLink
            href={`/${locale}#installations`}
            onClick={closeMobileMenu}
          >
            {t.nav.installations}
          </MobileLink>

          <MobileLink
            href={`/${locale}#testimonials`}
            onClick={closeMobileMenu}
          >
            {t.nav.testimonials}
          </MobileLink>

          <MobileLink
            href={`/${locale}#contact`}
            onClick={closeMobileMenu}
          >
            {t.nav.contact}
          </MobileLink>

          {/* Mobile language accordion */}
          <div className="mt-4 border-t border-orange-100 pt-4">
            <MobileAccordionButton
              label={t.nav.language}
              open={mobileDropdown === "language"}
              onClick={() => toggleMobileDropdown("language")}
            />

            <div
              className={`grid transition-all duration-300 ${
                mobileDropdown === "language"
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="ml-3 border-l border-orange-200 pl-4">
                  <Link
                    href="/en"
                    onClick={closeMobileMenu}
                    className="block py-3 text-[#343942] transition hover:text-[#e87524]"
                  >
                    {t.languageMenu.english}
                  </Link>

                  <Link
                    href="/de"
                    onClick={closeMobileMenu}
                    className="block py-3 text-[#343942] transition hover:text-[#e87524]"
                  >
                    {t.languageMenu.german}
                  </Link>

                  <Link
                    href="/pt"
                    onClick={closeMobileMenu}
                    className="block py-3 text-[#343942] transition hover:text-[#e87524]"
                  >
                    {t.languageMenu.portuguese}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div className="border-t border-orange-100 px-5 py-5">
          <Link
            href={`/${locale}#contact`}
            onClick={closeMobileMenu}
            className="flex w-full items-center justify-center rounded-full bg-[#e87524] px-5 py-3.5 font-bold text-white shadow-[0_14px_30px_rgba(232,117,42,0.28)] transition hover:bg-[#d96922]"
          >
            {t.nav.contact}
          </Link>
        </div>
      </aside>
    </>
  );
}

type ChevronProps = {
  className?: string;
};

function Chevron({ className = "" }: ChevronProps) {
  return (
    <svg
      viewBox="0 0 20 20"
      className={`h-4 w-4 ${className}`}
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
  );
}

type MobileLinkProps = {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
};

function MobileLink({
  href,
  children,
  onClick,
}: MobileLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="flex min-h-14 items-center border-b border-orange-100 text-lg font-semibold text-[#20242c] transition hover:text-[#e87524]"
    >
      {children}
    </Link>
  );
}

type MobileAccordionButtonProps = {
  label: string;
  open: boolean;
  onClick: () => void;
};

function MobileAccordionButton({
  label,
  open,
  onClick,
}: MobileAccordionButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex min-h-14 w-full items-center justify-between border-b border-orange-100 text-left text-lg font-semibold text-[#20242c]"
      aria-expanded={open}
    >
      {label}

      <Chevron
        className={`transition-transform duration-200 ${
          open ? "rotate-180 text-[#e87524]" : ""
        }`}
      />
    </button>
  );
}

type MobileSubLinkProps = {
  href: string;
  title: string;
  description: string;
  onClick: () => void;
};

function MobileSubLink({
  href,
  title,
  description,
  onClick,
}: MobileSubLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block rounded-xl py-3 pr-2 transition hover:text-[#e87524]"
    >
      <span className="block font-bold text-[#20242c]">
        {title}
      </span>

      <span className="mt-1 block text-sm leading-5 text-[#7b7068]">
        {description}
      </span>
    </Link>
  );
}