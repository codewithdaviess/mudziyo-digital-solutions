const fallbackSiteUrl = "https://mudziyo.co.zw";

function configuredSiteUrl() {
  const candidate = process.env.NEXT_PUBLIC_SITE_URL?.trim() || fallbackSiteUrl;
  try {
    return new URL(candidate).origin;
  } catch {
    return fallbackSiteUrl;
  }
}

export const site = {
  name: "Mudziyo Digital Solutions",
  description: "Digital solutions for real business problems.",
  url: configuredSiteUrl(),
  email: "hello@mudziyo.co.zw",
  locale: "en_ZW",
} as const;

export function siteUrl(path = "/") {
  return new URL(path, site.url).toString();
}
