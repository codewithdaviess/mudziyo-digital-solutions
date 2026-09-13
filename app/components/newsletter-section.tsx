import Link from "next/link";

export function NewsletterSection() {
  return (
    <section className="newsletter-section" aria-labelledby="newsletter-title">
      <div className="container newsletter-content">
        <div>
          <h2 id="newsletter-title">Have a project<br />in mind?</h2>
          <p>Tell us what you&apos;re looking to build, improve or automate and we&apos;ll help you find the right next step.</p>
        </div>
        <Link className="button" href="/contact">Request a Quote</Link>
      </div>
    </section>
  );
}
