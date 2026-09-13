import Link from "next/link";
import { createPageMetadata } from "./lib/seo";

export const metadata = createPageMetadata({ title: "Page Not Found", description: "The page you requested could not be found.", path: "/404", noIndex: true });

export default function NotFound() {
  return <section className="status-page"><div className="container"><span className="eyebrow">Error 404</span><h1>That page could not be found.</h1><p>The link may be out of date, or the page may have moved.</p><Link href="/" className="button button-dark">Return home</Link></div></section>;
}
