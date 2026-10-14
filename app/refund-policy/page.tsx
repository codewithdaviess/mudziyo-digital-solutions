import type { Metadata } from "next";
import { LegalPageLayout } from "../components/legal-page-layout";
import { createPageMetadata } from "../lib/seo";

export const metadata: Metadata = createPageMetadata({ title: "Refund & Cancellation Policy", description: "How Mudziyo handles cancellations and refunds for digital services.", path: "/refund-policy", noIndex: true });

export default function RefundPolicyPage() {
  return <LegalPageLayout title="Refund & Cancellation Policy" intro="A straightforward policy for quotations and agreed digital projects." lastUpdated="10 September 2026">
    <section><h2>Enquiries and quotations</h2><p>Enquiries are free unless we state otherwise. A quotation is not a purchase and does not create an obligation to proceed.</p></section>
    <section><h2>Projects in progress</h2><p>Once a project has begun, cancellation and any refund treatment depend on the work completed and the terms agreed for that project. Deposits and payments are governed by the quotation, invoice or project agreement.</p></section>
    <section><h2>Third-party costs</h2><p>Where costs have already been incurred on a client&apos;s behalf, such as domain registration, hosting, software licences, payment gateway charges or other third-party services, they may not be recoverable.</p></section>
    <section><h2>Unable to deliver</h2><p>If Mudziyo cannot deliver an agreed service, the applicable resolution will be determined under the project agreement and applicable law. Nothing in this policy limits mandatory consumer protections.</p></section>
    <section><h2>Questions</h2><p>To discuss a cancellation or a payment, email <a href="mailto:hello@mudziyo.co.zw">hello@mudziyo.co.zw</a> with the relevant project details.</p></section>
  </LegalPageLayout>;
}
