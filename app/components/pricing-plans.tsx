import Link from "next/link";
import styles from "../pricing/pricing.module.css";

const packages = [
  { name: "Starter", number: "01", price: "$350", description: "For individuals and small businesses getting online.", cta: "Request a Quote", features: ["1-5 page website", "Responsive design", "Mobile optimisation", "Modern UI", "Contact form", "WhatsApp integration", "Social media integration", "Google Maps integration", "Basic SEO", "SSL configuration", "Website deployment", "1 revision round"] },
  { name: "Business", number: "02", price: "$750", description: "For businesses that need a stronger digital presence.", cta: "Request a Quote", popular: true, features: ["Everything in Starter", "Up to 10 pages", "Custom UI/UX design", "CMS integration", "Blog / News section", "Advanced SEO", "Advanced contact forms", "Third-party integrations", "2 revision rounds", "Post-launch support"] },
  { name: "Professional", number: "03", price: "$1,500", description: "For businesses that need more than a website.", cta: "Request a Quote", features: ["Everything in Business", "Custom web application features", "Booking / enquiry systems", "Payment integration", "Customer portals", "Database functionality", "Admin dashboard", "Business automation", "API integrations", "Advanced functionality", "Priority support"] },
  { name: "Custom", number: "04", price: "Let’s talk", description: "For complex digital products, software and business systems.", cta: "Request a Quote", features: ["SaaS platforms", "Custom software", "AI solutions", "WhatsApp chatbots", "Business management systems", "E-commerce platforms", "Custom dashboards", "API integrations", "Workflow automation", "Bespoke digital products"] },
];

export function PricingPlans() {
  return (
    <div className={styles.page}>
      <section className="section pricing-section" id="pricing">
        <div className="container">
          <div className="section-intro">
            <h2>Simple pricing.<br /><em>Serious solutions.</em></h2>
            <p>Choose a starting point or tell us what you&apos;re trying to solve. We&apos;ll recommend the right digital solution for your business.</p>
          </div>
          <div className="pricing-grid">
            {packages.map((item) => (
              <article className={`pricing-card${item.popular ? " popular" : ""}`} key={item.name}>
                {item.popular && <span className="popular-badge">Most popular</span>}
                <div className="pricing-card-top">
                  <h2>{item.name}</h2>
                  <div className="price">{item.price === "Let’s talk" ? item.price : <><small>From</small>{item.price}</>}</div>
                  <p>{item.description}</p>
                </div>
                <ul>{item.features.map((feature) => <li key={feature}><span>✓</span>{feature}</li>)}</ul>
                <Link className={`button ${item.popular ? "button-dark" : "button-quiet"}`} href="/contact">{item.cta}</Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
