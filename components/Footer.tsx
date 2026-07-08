import { Locale } from "@/data/translations";

export default function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="border-t border-[#f0dfcf] bg-[#fffaf4] px-6 py-8 text-center text-sm text-[#746b63]">
      <p>© Geratex Machinery Pvt. Ltd. · {locale.toUpperCase()}</p>
    </footer>
  );
}
