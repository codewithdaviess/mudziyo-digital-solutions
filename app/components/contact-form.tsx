"use client";

import { FormEvent, useState } from "react";
import { PrivacyNotice } from "./privacy-notice";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      if (!response.ok) throw new Error("Unable to send");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return <form className="contact-form" onSubmit={submit}>
    <div className="form-grid">
      <label>Name<input name="name" required autoComplete="name" maxLength={120} /></label>
      <label>Business / organisation <span className="optional-label">(optional)</span><input name="business" autoComplete="organization" maxLength={160} /></label>
      <label>Email<input name="email" required type="email" autoComplete="email" maxLength={254} /></label>
      <label>Phone / WhatsApp <span className="optional-label">(optional)</span><input name="phone" type="tel" autoComplete="tel" maxLength={40} /></label>
      <label>What do you need?<select name="need" required defaultValue=""><option value="" disabled>Select an option</option>{["Website", "Web Application", "Business System", "AI / Chatbot", "Automation", "E-commerce", "Payment Integration", "Custom Software", "Not Sure Yet"].map((item) => <option key={item}>{item}</option>)}</select></label>
      <label>Optional budget<input name="budget" maxLength={80} placeholder="e.g. USD 2,000–5,000" /></label>
    </div>
    <label>Project description<textarea name="description" required rows={5} maxLength={4000} placeholder="What are you trying to build, improve or automate?" /></label>
    <label>Optional timeline<input name="timeline" maxLength={120} placeholder="e.g. Launching in three months" /></label>
    <div className="honeypot-field" aria-hidden="true"><label>Leave this field empty<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
    <button className="button button-dark" disabled={status === "loading"}>{status === "loading" ? "Sending…" : "Request a Quote"} <span>↗</span></button>
    <PrivacyNotice />
    {status === "success" && <p className="form-success" role="status">Thank you — your request has been received. We&apos;ll be in touch shortly.</p>}
    {status === "error" && <p className="form-error" role="alert">We could not send your request. Please email hello@mudziyo.co.zw directly.</p>}
  </form>;
}
