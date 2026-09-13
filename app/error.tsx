"use client";

import Link from "next/link";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <section className="status-page"><div className="container"><span className="eyebrow">Something went wrong</span><h1>We could not load this page.</h1><p>Please try again, or contact us if the problem continues.</p><div className="status-page-actions"><button className="button button-dark" onClick={reset}>Try again</button><Link href="/contact" className="button button-outline">Contact us</Link></div></div></section>;
}
