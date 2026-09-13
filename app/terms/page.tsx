import type { Metadata } from "next";
import Link from "next/link";
import { LegalPageLayout } from "../components/legal-page-layout";
import { createPageMetadata } from "../lib/seo";

export const metadata: Metadata = createPageMetadata({ title: "Terms & Conditions", description: "Terms for using the Mudziyo website and requesting digital services.", path: "/terms", noIndex: true });

export default function TermsPage() {
  return <LegalPageLayout title="Terms & Conditions" intro="Clear terms for using our website and working with Mudziyo." lastUpdated="10 September 2026">
    <section><h2>Using this website</h2><p>You may use this website to learn about Mudziyo and request information or a quotation. Do not misuse the website, interfere with its operation, or use it for unlawful purposes.</p></section>
    <section><h2>Services</h2><p>Mudziyo provides agreed digital services, which may include website development, web applications, business systems, AI and automation, digital payments and integrations, digital products, API integrations and other agreed digital solutions.</p></section>
    <section><h2>Enquiries and quotations</h2><p>Submitting an enquiry or receiving a quotation does not create a contract. A project becomes an agreed engagement only when Mudziyo and the client agree on the scope, price, timeline and applicable terms.</p></section>
    <section><h2>Pricing and scope</h2><p>Published prices are package or starting prices. Final pricing depends on the project requirements and is confirmed before work begins. Unless expressly included in a quotation, costs such as domain registration, hosting, paid third-party software, premium plugins, payment gateway charges, content creation, additional revisions and additional functionality are not included.</p><p>Work outside the agreed scope may require a further quotation. Clients are responsible for supplying accurate information, content, logos, images and approvals needed for the project. Delays in receiving these materials or approvals may affect delivery timelines.</p></section>
    <section><h2>Third-party services</h2><p>Where required, a project may use third-party services, APIs, payment providers, hosting providers or other platforms. Those providers may have their own terms, privacy practices and fees.</p></section>
    <section><h2>Intellectual property</h2><p>Clients retain ownership of their own content and materials. Ownership and licensing for custom work are set out in the applicable project agreement. Mudziyo retains its pre-existing code, components, tools and know-how, while third-party software remains subject to its own licences.</p></section>
    <section><h2>Payments, cancellation and liability</h2><p>Payment terms for a project are set out in the quotation or invoice. Cancellation and refunds are addressed in our <Link href="/refund-policy">Refund &amp; Cancellation Policy</Link> and the applicable project agreement. To the extent permitted by applicable law, Mudziyo is not liable for indirect or consequential loss. Nothing in these terms excludes liability that cannot legally be excluded under Zimbabwean law.</p></section>
    <section><h2>Changes</h2><p>We may update these terms from time to time. The latest version is published on this page with its update date.</p></section>
  </LegalPageLayout>;
}
