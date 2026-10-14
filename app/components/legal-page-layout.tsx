import type { ReactNode } from "react";

type LegalPageLayoutProps = { title: string; intro: string; lastUpdated: string; children: ReactNode };

export function LegalPageLayout({ title, intro, lastUpdated, children }: LegalPageLayoutProps) {
  return <article className="legal-page"><header className="legal-hero"><div className="container"><span className="eyebrow">Mudziyo Digital Solutions</span><h1>{title}</h1><p>{intro}</p><small>Last updated: {lastUpdated}</small></div></header><div className="container legal-content">{children}</div></article>;
}
