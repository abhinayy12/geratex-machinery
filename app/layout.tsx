import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Geratex Machinery Pvt. Ltd.",
  description: "Premium ultrasonic textile processing solutions by Geratex Machinery Pvt. Ltd.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
