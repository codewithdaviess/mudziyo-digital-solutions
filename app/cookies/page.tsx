import type { Metadata } from "next";
import { CookiePreferencesTrigger } from "../components/cookie-preferences-trigger";
import { LegalPageLayout } from "../components/legal-page-layout";
import { createPageMetadata } from "../lib/seo";

export const metadata: Metadata = createPageMetadata({ title: "Cookie Policy", description: "How Mudziyo uses cookies and how to manage your preferences.", path: "/cookies", noIndex: true });

export default function CookiePolicyPage() {
  return <LegalPageLayout title="Cookie Policy" intro="A simple explanation of the limited cookie use on this website." lastUpdated="10 September 2026">
    <section><h2>What cookies are</h2><p>Cookies are small pieces of data that a website can store in your browser. They can support essential site functions or optional measurement and advertising tools.</p></section>
    <section><h2>Cookies we use</h2><p>Mudziyo currently uses one necessary cookie, <code>mudziyo_cookie_preferences</code>, to remember your cookie choice on this device. It does not contain your enquiry details or other personal information.</p></section>
    <section><h2>Optional cookies</h2><p>We do not currently load analytics or marketing cookies. If this changes, we will update this policy and ask for the relevant permission before loading those technologies.</p></section>
    <section><h2>Manage your choice</h2><p>You can change your preferences at any time. Necessary cookies remain enabled because they remember the choice you make.</p><CookiePreferencesTrigger /></section>
  </LegalPageLayout>;
}
