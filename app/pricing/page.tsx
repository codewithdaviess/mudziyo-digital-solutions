import Link from "next/link";
import styles from "./pricing.module.css";
import { createPageMetadata } from "../lib/seo";

export const metadata = createPageMetadata({ title: "Website & Digital Solution Pricing", description: "Explore clear starting packages for websites, digital products and custom software from Mudziyo Digital Solutions in Zimbabwe.", path: "/pricing" });

const packages = [
  {
    name: "Starter",
    price: "$350",
    description: "For individuals and small businesses getting online.",
    cta: "Request a Quote",
    features: [
      "1–5 page website",
      "Responsive design",
      "Mobile optimisation",
      "Modern UI",
      "Contact form",
      "WhatsApp integration",
      "Social media integration",
      "Google Maps integration",
      "Basic SEO",
      "SSL configuration",
      "Website deployment",
      "1 revision round",
    ],
  },
  {
    name: "Business",
    price: "$750",
    description: "For businesses that need a stronger digital presence.",
    cta: "Request a Quote",
    popular: true,
    features: [
      "Everything in Starter",
      "Up to 10 pages",
      "Custom UI/UX design",
      "CMS integration",
      "Blog / News section",
      "Advanced SEO",
      "Analytics-ready setup",
      "Advanced contact forms",
      "Third-party integrations",
      "2 revision rounds",
      "Post-launch support",
    ],
  },
  {
    name: "Professional",
    price: "$1,500",
    description: "For businesses that need more than a website.",
    cta: "Request a Quote",
    features: [
      "Everything in Business",
      "Custom web application features",
      "Booking / enquiry systems",
      "Payment integration",
      "Customer portals",
      "Database functionality",
      "Admin dashboard",
      "Business automation",
      "API integrations",
      "Advanced functionality",
      "Priority support",
    ],
  },
  {
    name: "Custom",
    price: "Let’s talk",
    description: "For complex digital products, software and business systems.",
    cta: "Request a Quote",
    custom: true,
    features: [
      "SaaS platforms",
      "Custom software",
      "AI solutions",
      "WhatsApp chatbots",
      "Business management systems",
      "E-commerce platforms",
      "Custom dashboards",
      "API integrations",
      "Workflow automation",
      "Bespoke digital products",
    ],
  },
];

const comparisons = [
  ["Responsive website", "✓", "✓", "✓", "✓"],
  ["Custom design", "—", "✓", "✓", "✓"],
  ["CMS", "—", "✓", "✓", "✓"],
  ["SEO", "Basic", "Advanced", "Advanced", "Custom"],
  ["Integrations", "Basic", "✓", "Advanced", "Custom"],
  ["Payments", "—", "Optional", "✓", "✓"],
  ["Booking system", "—", "Optional", "✓", "✓"],
  ["Admin dashboard", "—", "—", "✓", "✓"],
  ["Automation", "—", "Optional", "✓", "✓"],
  ["AI solutions", "—", "—", "Optional", "✓"],
  ["Custom software", "—", "—", "Optional", "✓"],
  ["Support", "Standard", "Standard", "Priority", "Dedicated"],
];

const addons = [
  "Additional pages",
  "Copywriting",
  "Professional photography",
  "Advanced SEO",
  "E-commerce",
  "Payment integration",
  "Booking system",
  "CMS",
  "AI chatbot",
  "WhatsApp automation",
  "Additional integrations",
  "Ongoing maintenance",
  "Hosting & deployment",
];

export default function PricingPage() {
  return (
    <div className={styles.page}>
      <section className="pricing-hero">
        <div className="container">
          <h1>
            Simple pricing.
            <br />
            <em>Serious solutions.</em>
          </h1>
          <p>
            Choose a starting point or tell us what you&apos;re trying to solve.
            We&apos;ll recommend the right digital solution for your business.
          </p>
          <span className="pricing-hero-note">
            Final pricing depends on your requirements and will be confirmed
            before work begins.
          </span>
        </div>
      </section>
      <section className="section pricing-section">
        <div className="container">
          <div className="pricing-grid">
            {packages.map((item) => (
              <article
                className={`pricing-card${item.popular ? " popular" : ""}${item.custom ? " custom" : ""}`}
                key={item.name}
              >
                {item.popular && (
                  <span className="popular-badge">Most popular</span>
                )}
                <div className="pricing-card-top">
                  <h2>{item.name}</h2>
                  <div className="price">
                    {item.price === "Let’s talk" ? (
                      item.price
                    ) : (
                      <>
                        <small>From</small>
                        {item.price}
                      </>
                    )}
                  </div>
                  <p>{item.description}</p>
                </div>
                <ul>
                  {item.features.map((feature) => (
                    <li key={feature}>
                      <span>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  className={`button ${item.popular ? "button-dark" : "button-quiet"}`}
                  href="/contact"
                >
                  {item.cta}
                </Link>
              </article>
            ))}
          </div>
          <div className="pricing-note">
            <span className="eyebrow">A useful starting point</span>
            <div>
              <h2>Every project is different.</h2>
              <p>
                Our packages provide a starting point, not a limitation. Final
                pricing depends on the scope, functionality, integrations and
                complexity of your project.
              </p>
              <strong>
                Need something specific? <em>We can build it.</em>
              </strong>
              <p className="pricing-terms-note">Package prices cover the listed scope only. Domain registration, hosting, paid third-party software, premium plugins, payment gateway charges, content creation and additional revisions or functionality are quoted separately where needed.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section comparison-section">
        <div className="container">
          <div className="section-intro">
            <span className="eyebrow">Compare packages</span>
            <h2>A clearer way to choose.</h2>
            <p>
              Compare the typical scope of each starting point. We&apos;ll
              always tailor the final solution to what will be most useful.
            </p>
          </div>
          <div className="comparison-wrap">
            <table>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Starter</th>
                  <th>Business</th>
                  <th>Professional</th>
                  <th>Custom</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell, index) => (
                      <td
                        key={`${cell}-${index}`}
                        className={cell === "✓" ? "check" : ""}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="section addons-section">
        <div className="container">
          <div className="addons-intro">
            <span className="eyebrow">Extend your package</span>
            <h2>
              Need <em>more?</em>
            </h2>
            <p>
              Build on any starting package with the additional support and
              functionality your project needs.
            </p>
            <Link className="button button-dark" href="/contact">
              Request a Quote
            </Link>
          </div>
          <div className="addons-list">
            {addons.map((item, index) => (
              <div key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item}</strong>
                <b>↗</b>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="container cta-inner">
          <span className="eyebrow">Let&apos;s find the fit</span>
          <h2>
            Not sure which package
            <br />
            is right <em>for you?</em>
          </h2>
          <p>
            Tell us what you&apos;re trying to build, improve or automate and
            we&apos;ll recommend the right solution.
          </p>
          <div>
            <Link className="button" href="/contact">
              Request a Quote
            </Link>
            <a
              className="button button-outline"
              href="mailto:hello@mudziyo.co.zw"
            >
              Email us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
