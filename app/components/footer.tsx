import Link from "next/link";
import { CookiePreferencesTrigger } from "./cookie-preferences-trigger";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div>
          <Logo variant="dark" />
          <p>Digital solutions for modern businesses.</p>
          <span className="location">Zimbabwe <b>ZW</b></span>
          <a className="footer-email" href="mailto:hello@mudziyo.co.zw">hello@mudziyo.co.zw</a>
        </div>
        <nav className="footer-links" aria-label="Explore">
          <span>Explore</span>
          <Link href="/solutions">Services</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <nav className="footer-links" aria-label="Services">
          <span>Services</span>
          <Link href="/solutions">Web development</Link>
          <Link href="/solutions">Business systems</Link>
          <Link href="/solutions">Digital products</Link>
          <Link href="/solutions">AI &amp; automation</Link>
        </nav>
        <nav className="footer-links" aria-label="Policies">
          <span>Policies</span>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms">Terms &amp; Conditions</Link>
          <Link href="/refund-policy">Refund &amp; Cancellation Policy</Link>
          <Link href="/cookies">Cookie Policy</Link>
          <CookiePreferencesTrigger />
        </nav>
      </div>
      <div className="container footer-bottom">
        <span>&copy; 2026 Mudziyo Digital Solutions. All rights reserved.</span>
      </div>
    </footer>
  );
}
