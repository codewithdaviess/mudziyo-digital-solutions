"use client";

import { useEffect, useState } from "react";

const consentKey = "mudziyo_cookie_preferences";

function saveConsent(analytics: boolean, marketing: boolean) {
  const value = JSON.stringify({ necessary: true, analytics, marketing });
  localStorage.setItem(consentKey, value);
  document.cookie = `${consentKey}=${encodeURIComponent(value)}; path=/; max-age=31536000; samesite=lax`;
  window.dispatchEvent(new Event("cookiePreferencesSaved"));
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => setVisible(!localStorage.getItem(consentKey)), []);
  if (!visible) return null;

  return (
    <aside className="cookie-banner" aria-label="Cookie notice">
      <p>We use an essential cookie to remember your cookie preference. Optional analytics and marketing cookies are not currently in use.</p>
      <div className="cookie-actions">
        <button className="button button-dark" onClick={() => { saveConsent(true, false); setVisible(false); }}>Accept All</button>
        <button className="button button-quiet" onClick={() => { saveConsent(false, false); setVisible(false); }}>Reject Non-Essential</button>
        <button className="cookie-text-button" onClick={() => { setVisible(false); window.dispatchEvent(new Event("openCookiePreferences")); }}>Manage Preferences</button>
      </div>
    </aside>
  );
}
