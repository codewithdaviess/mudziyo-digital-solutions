export type ContactEnquiry = {
  name: string;
  business: string;
  email: string;
  phone: string;
  need: string;
  budget: string;
  timeline: string;
  description: string;
};

const emailPattern = /^\S+@\S+\.\S+$/;

function isRecord(value: unknown): value is Record<string, unknown> {
  return !!value && typeof value === "object" && !Array.isArray(value);
}

function cleanText(value: unknown, maximum: number) {
  return typeof value === "string" ? value.trim().replace(/[\u0000-\u001F\u007F]/g, " ").slice(0, maximum) : "";
}

export function isHoneypotSubmission(value: unknown) {
  return isRecord(value) && !!cleanText(value.website, 160);
}

export function parseContactEnquiry(value: unknown): ContactEnquiry | null {
  if (!isRecord(value)) return null;
  const enquiry = {
    name: cleanText(value.name, 120),
    business: cleanText(value.business, 160),
    email: cleanText(value.email, 254),
    phone: cleanText(value.phone, 40),
    need: cleanText(value.need, 100),
    budget: cleanText(value.budget, 80),
    timeline: cleanText(value.timeline, 120),
    description: cleanText(value.description, 4000),
  };
  return enquiry.name && enquiry.email && enquiry.need && enquiry.description && emailPattern.test(enquiry.email) ? enquiry : null;
}

export function contactWebhookUrl() {
  const value = process.env.CONTACT_FORM_WEBHOOK_URL?.trim();
  if (!value) return null;
  try {
    const url = new URL(value);
    return url.protocol === "https:" ? url.toString() : null;
  } catch {
    return null;
  }
}
