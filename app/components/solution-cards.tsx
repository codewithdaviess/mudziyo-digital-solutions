import Link from "next/link";
import Image from "next/image";

export const solutions = [
  [
    "01",
    "Web Development",
    "High-performance websites and web applications built around your brand, your customers and the way your business works. From company websites and landing pages to custom portals and interactive platforms.",
    "/images/capabilities/web-development-v2.png",
  ],

  [
    "02",
    "Business Systems",
    "Custom software that helps your business run better. We build invoicing, booking, inventory, reporting, customer management, staff portals and internal systems that replace manual processes and scattered spreadsheets.",
    "/images/capabilities/business-systems-v2.png",
  ],

  [
    "03",
    "AI & Automation",
    "Practical AI and automation that saves your team time. From AI assistants and WhatsApp chatbots to automated workflows, notifications, data processing and customer support, we turn repetitive tasks into efficient systems.",
    "/images/capabilities/ai-automation-v2.png",
  ],

  [
    "04",
    "Digital Payments",
    "Secure payment experiences that make it easier for your customers to pay and easier for your business to get paid. We integrate payment gateways, invoices, checkout flows and payment systems into your existing platforms.",
    "/images/capabilities/digital-payments-v2.png",
  ],

  [
    "05",
    "Digital Products",
    "Turn an idea into a working digital product. We design and build SaaS platforms, marketplaces, customer portals, online tools and custom applications — from the first concept to a scalable product.",
    "/images/capabilities/digital-products-v2.png",
  ],

  [
    "06",
    "Integrations",
    "Make your systems work together. We connect CRMs, payment platforms, accounting software, booking systems, APIs and other business tools so information moves automatically between the platforms you already use.",
    "/images/capabilities/integrations-v2.png",
  ],
] as const;

export function SolutionCards({ limit }: { limit?: number }) {
  return (
    <div className="solution-grid">
      {solutions.slice(0, limit).map(([, title, text, image]) => (
        <Link href="/contact" className="solution-card" key={title}>
          <span className="solution-media">
            <Image src={image} alt="" fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" />
          </span>
          <h3>{title}</h3>
          <p>{text}</p>
        </Link>
      ))}
    </div>
  );
}
