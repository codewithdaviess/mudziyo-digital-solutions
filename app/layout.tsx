import type { Metadata } from "next";
import "./globals.css";
import "./typography.css";
import "./theme.css";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { CookieBanner } from "./components/cookie-banner";
import { CookiePreferences } from "./components/cookie-preferences";
import { site } from "./lib/site";
import { organisationStructuredData } from "./lib/structured-data";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Mudziyo Digital Solutions | Web Development & Software | Zimbabwe",
    template: "%s | Mudziyo Digital Solutions",
  },
  description: "Mudziyo Digital Solutions builds modern websites, custom software, web applications, AI solutions and digital tools for businesses in Zimbabwe and beyond.",
  keywords: [
    "Digital Solutions Zimbabwe",
    "Web Development Zimbabwe",
    "Web Developers Victoria Falls",
    "Software Development Zimbabwe",
    "Website Development Victoria Falls",
    "Custom Software Zimbabwe",
    "AI Solutions Zimbabwe",
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: "Digital solutions for real business problems.",
    description: "Websites, software and digital tools built around your business.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mudziyo Digital Solutions",
    description: "Digital solutions for real business problems.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = organisationStructuredData();

  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
        <CookiePreferences />
      </body>
    </html>
  );
}
