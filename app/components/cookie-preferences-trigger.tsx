"use client";

export function CookiePreferencesTrigger() {
  return <button className="footer-link-button" type="button" onClick={() => window.dispatchEvent(new Event("openCookiePreferences"))}>Cookie Preferences</button>;
}
