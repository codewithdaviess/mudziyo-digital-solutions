import type { Metadata } from "next";
import { site, siteUrl } from "./site";

type PageMetadata = {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
};

export function createPageMetadata({ title, description, path, noIndex = false }: PageMetadata): Metadata {
  const url = siteUrl(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { type: "website", locale: site.locale, url, siteName: site.name, title, description },
    twitter: { card: "summary_large_image", title, description },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
  };
}
