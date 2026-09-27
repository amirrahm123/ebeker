/**
 * Cookie-consent state. Stored in localStorage under `ebeker-consent` as
 * 'granted' | 'denied'. null means the user has not decided yet.
 */
const KEY = 'ebeker-consent'
const listeners = new Set()

export function getConsent() {
  try {
    const v = localStorage.getItem(KEY)
    return v === 'granted' || v === 'denied' ? v : null
  } catch {
    return null
  }
}

export function setConsent(value) {
  try {
    if (value === null) localStorage.removeItem(KEY)
    else localStorage.setItem(KEY, value)
  } catch {
    /* private mode / storage blocked — the choice just won't persist */
  }
  listeners.forEach(fn => fn(value))
}

/** Subscribe to consent changes. Returns an unsubscribe function. */
export function onConsentChange(fn) {
  listeners.add(fn)
  return () => listeners.delete(fn)
}

/** Fired by openCookieSettings(); CookieBanner listens and re-opens. */
export const OPEN_COOKIE_SETTINGS_EVENT = 'ebeker:open-cookie-settings'

export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS_EVENT))
}
