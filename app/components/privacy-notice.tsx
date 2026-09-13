import Link from "next/link";

export function PrivacyNotice() {
  return <p className="privacy-notice">By submitting this form, you agree that Mudziyo may use the information provided to respond to your enquiry and prepare a quotation. Your information is handled in accordance with our <Link href="/privacy-policy">Privacy Policy</Link>.</p>;
}
