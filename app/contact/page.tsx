import { ContactForm } from "../components/contact-form";
import { createPageMetadata } from "../lib/seo";

export const metadata = createPageMetadata({ title: "Request a Quote", description: "Tell Mudziyo about your project and request a tailored quotation for a website, software or digital solution.", path: "/contact" });

export default function ContactPage() {
  return (
    <>
      <section className="contact-hero">
        <div className="container">
          <h1>
            <span className="contact-hero-accent">Tell us</span> what
            <br />
            you&apos;re solving.
          </h1>
          <p>Whether the brief is fully formed or still a rough idea, tell us what you&apos;re trying to build, improve or automate.</p>
        </div>
      </section>
      <section className="contact-section">
        <div className="container contact-layout contact-layout-single">
          <div>
            <h2>Request a quote.</h2>
            <p>Share what you know. We&apos;ll review your requirements and respond with the next steps.</p>
            <ContactForm />
            <div className="contact-followup">
              <a href="mailto:hello@mudziyo.co.zw" className="contact-email">hello@mudziyo.co.zw</a>
              <nav className="social-links contact-social-links" aria-label="Social media">
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" /></svg>
                </a>
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 21v-8h2.8l.4-3H14V8.1c0-.9.3-1.5 1.6-1.5H17V3.9c-.3 0-.9-.1-1.8-.1-2.1 0-3.6 1.3-3.6 3.7V10H9v3h2.8v8H14Z" /></svg>
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.3 8.3A1.8 1.8 0 1 0 6.3 4.7a1.8 1.8 0 0 0 0 3.6ZM4.8 19.3h3V9.8h-3v9.5Zm4.9 0h3v-5.2c0-1.4.3-2.8 2-2.8 1.7 0 1.7 1.6 1.7 2.9v5.1h3v-5.7c0-2.8-.6-4.9-3.9-4.9-1.6 0-2.6.9-3 1.7h-.1V9.8H9.6v9.5Z" /></svg>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
