import Link from "next/link";
import { createPageMetadata } from "../lib/seo";

export const metadata = createPageMetadata({ title: "About Mudziyo", description: "Learn how Mudziyo Digital Solutions approaches practical websites, software and digital tools for businesses and organisations.", path: "/about" });

export default function AboutPage() {
  return (
    <>
      <section className="page-hero about-hero">
        <div className="container">
          <h1>
            <span className="about-hero-accent">Technology</span> with
            <br />
            purpose.
          </h1>
          <p>Mudziyo is a digital solutions brand operating in Zimbabwe. We design and build websites, software and digital tools that solve real problems for businesses and organisations.</p>
        </div>
      </section>
      <section className="section">
        <div className="container split-statement about-statement">
          <span className="eyebrow">Why Mudziyo</span>
          <div>
            <h2>Useful technology starts with <em>understanding.</em></h2>
            <p>From a simple website to a custom business system, our focus is on creating technology that is clean, practical and built to scale. We don&apos;t begin with a platform or a feature list. We begin with your business, the people you serve and the obstacle in front of you.</p>
            <p>That lets us create solutions with a clear job to do — and the craft to keep doing it well as you grow.</p>
          </div>
        </div>
      </section>
      <section className="section principles-section">
        <div className="container">
          <span className="eyebrow">What guides us</span>
          <h2>Good systems make<br /><em>space for good work.</em></h2>
          <div className="principle-grid about-values">
            <article><span>01</span><h3>Curiosity</h3><p>We ask the extra question to get beneath the brief and find the real need.</p></article>
            <article><span>02</span><h3>Clarity</h3><p>We make complex things easier to understand, use and maintain.</p></article>
            <article><span>03</span><h3>Care</h3><p>We sweat the useful details, from the first interaction to the last handover.</p></article>
            <article><span>04</span><h3>Momentum</h3><p>We create solutions that are ready for where your business is heading next.</p></article>
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="container cta-inner">
          <span className="eyebrow">Work with us</span>
          <h2>Let&apos;s make your<br />next move <em>useful.</em></h2>
          <Link className="button" href="/contact">Request a Quote</Link>
        </div>
      </section>
    </>
  );
}
