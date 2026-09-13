import type { MetadataRoute } from "next";
import { siteUrl } from "./lib/site";

const pages = [
  ["/", "weekly", 1],
  ["/solutions", "monthly", 0.9],
  ["/pricing", "monthly", 0.9],
  ["/work", "monthly", 0.8],
  ["/about", "monthly", 0.7],
  ["/contact", "monthly", 0.7],
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(([path, changeFrequency, priority]) => ({ url: siteUrl(path), changeFrequency, priority }));
}
