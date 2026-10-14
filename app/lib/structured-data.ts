import { site } from "./site";

export function organisationStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Organization", name: site.name, url: site.url, email: site.email, description: site.description },
      { "@type": "WebSite", name: site.name, url: site.url, inLanguage: "en-ZW" },
    ],
  };
}
