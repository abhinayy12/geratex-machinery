import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Geratex Machinery Pvt. Ltd.",
  description: "Premium ultrasonic textile processing solutions by Geratex Machinery Pvt. Ltd.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
