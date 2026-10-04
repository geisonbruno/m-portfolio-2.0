import type { Metadata } from "next";
import { portfolio } from "@/content/portfolio";
import "./globals.css";

export const metadata: Metadata = {
  title: `${portfolio.name} | ${portfolio.experience.role}`,
  description: portfolio.about.en[0],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="dark">
      <body>{children}</body>
    </html>
  );
}
