"use client";

import { useEffect, useState } from "react";

const consentKey = "mudziyo_cookie_preferences";
type Preferences = { necessary: true; analytics: boolean; marketing: boolean };
const defaults: Preferences = { necessary: true, analytics: false, marketing: false };

function readPreferences(): Preferences {
  try { return { ...defaults, ...JSON.parse(localStorage.getItem(consentKey) ?? "{}") }; } catch { return defaults; }
}

export function CookiePreferences() {
  const [open, setOpen] = useState(false);
  const [preferences, setPreferences] = useState<Preferences>(defaults);

  useEffect(() => {
    const show = () => { setPreferences(readPreferences()); setOpen(true); };
    window.addEventListener("openCookiePreferences", show);
    return () => window.removeEventListener("openCookiePreferences", show);
  }, []);

  function save() {
    const value = JSON.stringify(preferences);
    localStorage.setItem(consentKey, value);
    document.cookie = `${consentKey}=${encodeURIComponent(value)}; path=/; max-age=31536000; samesite=lax`;
    setOpen(false);
    window.dispatchEvent(new Event("cookiePreferencesSaved"));
  }

  if (!open) return null;
  return (
    <div className="cookie-modal-backdrop" role="presentation" onMouseDown={() => setOpen(false)}>
      <section className="cookie-modal" role="dialog" aria-modal="true" aria-labelledby="cookie-preferences-title" onMouseDown={(event) => event.stopPropagation()}>
        <h2 id="cookie-preferences-title">Cookie preferences</h2>
        <p>Choose which optional technologies you allow. Your choice is saved on this device.</p>
        <label className="cookie-option"><span><strong>Necessary</strong><small>Required to remember your preferences.</small></span><input type="checkbox" checked disabled /></label>
        <label className="cookie-option"><span><strong>Analytics</strong><small>Not currently used.</small></span><input type="checkbox" checked={preferences.analytics} onChange={(event) => setPreferences({ ...preferences, analytics: event.target.checked })} /></label>
        <label className="cookie-option"><span><strong>Marketing</strong><small>Not currently used.</small></span><input type="checkbox" checked={preferences.marketing} onChange={(event) => setPreferences({ ...preferences, marketing: event.target.checked })} /></label>
        <div className="cookie-actions"><button className="button button-dark" onClick={save}>Save preferences</button><button className="button button-quiet" onClick={() => setOpen(false)}>Cancel</button></div>
      </section>
    </div>
  );
}
