import type { Metadata } from "next";
import { LegalPageLayout } from "../components/legal-page-layout";
import { createPageMetadata } from "../lib/seo";

export const metadata: Metadata = createPageMetadata({ title: "Privacy Policy", description: "How Mudziyo handles information submitted through its website and enquiry forms.", path: "/privacy-policy", noIndex: true });

export default function PrivacyPolicyPage() {
  return <LegalPageLayout title="Privacy Policy" intro="How Mudziyo handles the information you share with us." lastUpdated="13 September 2026">
    <section><h2>Overview</h2><p>Mudziyo Digital Solutions is a digital solutions brand operating in Zimbabwe. This policy explains how we handle personal information provided through this website, including when you request a quote or contact us.</p></section>
    <section><h2>Information we collect</h2><p>We collect only the information needed to respond to your enquiry and discuss or deliver requested services. This may include your name, email address, phone number, business or organisation name, project requirements, timeline and budget information you choose to provide.</p></section>
    <section><h2>How we use information</h2><p>We use your information to respond to enquiries, prepare quotations, communicate about requested services, deliver agreed services, improve the website and services, maintain website security, and meet applicable legal obligations.</p></section>
    <section><h2>Sharing information</h2><p>We do not sell personal information. We do not currently use third-party analytics, advertising or payment services on this website. If you contact us by email, your message may be processed by the email service used to operate our mailbox. If a future project requires a service provider to operate the website or deliver services, information will be shared only where necessary and the relevant terms will apply.</p></section>
    <section><h2>Security and retention</h2><p>We use reasonable technical and organisational measures to protect information submitted to us. No internet transmission or storage system can be guaranteed completely secure. We retain personal information only for as long as reasonably necessary for the purpose it was collected, legitimate business requirements, or applicable legal obligations.</p></section>
    <section><h2>Your rights</h2><p>You may contact us to request access to, correction of, or to otherwise exercise applicable rights regarding your personal information under Zimbabwean data-protection law.</p></section>
    <section><h2>Contact</h2><p>For privacy questions or requests, email <a href="mailto:hello@mudziyo.co.zw">hello@mudziyo.co.zw</a>.</p></section>
  </LegalPageLayout>;
}
