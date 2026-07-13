import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import WhyGeratex from "@/components/WhyGeratex";
import Installations from "@/components/Installations";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Applications from "@/components/Applications";
import { translations, Locale } from "@/data/translations";

type PageProps = { params: Promise<{ locale: Locale }> };

export default async function Home({ params }: PageProps) {
  const { locale } = await params;
  const selectedLocale: Locale = locale === "de" || locale === "pt" || locale === "en" ? locale : "en";
  const t = translations[selectedLocale];

  return (
    <main className="min-h-screen bg-[#fffaf4] text-[#1e232b]">
      <Navbar t={t} locale={selectedLocale} />
      <Hero t={t.hero} />
      <About data={t.about} />
      <Products data={t.products} locale={selectedLocale} />
      <Applications
        data={t.applications}
        locale={selectedLocale}
      />
      <WhyGeratex data={t.why} />
      <Installations data={t.installations} />
      <Testimonials data={t.testimonials} />
      <Contact data={t.contact} />
      <Footer locale={selectedLocale} />
    </main>
  );
}
