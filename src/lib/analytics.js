/**
 * Google Analytics, loaded only after the user grants cookie consent.
 * Nothing from googletagmanager.com is requested — and no _ga cookie is
 * written — until `getConsent() === 'granted'`.
 */
import { site } from '../config/site'
import { getConsent, onConsentChange } from './consent'

const ID = site.analytics.gaMeasurementId
let loaded = false
let lastPath = null

function gtag() {
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push(arguments)
}

function load() {
  if (loaded || typeof document === 'undefined') return
  loaded = true
  window.gtag = gtag
  gtag('js', new Date())
  // send_page_view: false — RouteTracker reports SPA page views itself.
  gtag('config', ID, { send_page_view: false, anonymize_ip: true })
  const s = document.createElement('script')
  s.async = true
  s.src = `https://www.googletagmanager.com/gtag/js?id=${ID}`
  document.head.appendChild(s)
  if (lastPath) trackPageView(lastPath)
}

/** Report a page view. Queued until consent is granted, then flushed. */
export function trackPageView(path) {
  lastPath = path
  if (!loaded) return
  window.gtag('config', ID, { page_path: path })
}

/** Call once at startup: loads GA now if consent exists, or when it is granted later. */
export function initAnalytics() {
  if (getConsent() === 'granted') load()
  onConsentChange(v => { if (v === 'granted') load() })
}
