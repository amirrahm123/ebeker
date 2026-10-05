/**
 * Google Analytics 4 with Consent Mode v2.
 *
 * - Consent defaults to "denied" for every signal before anything else runs.
 * - gtag.js (googletagmanager.com) is only requested once the user grants
 *   consent, so no _ga cookie is written and no request is made before then.
 * - Accept → consent 'update' granted; reject or later withdrawal → 'update'
 *   denied (the footer's "הגדרות עוגיות" link re-opens the banner).
 * - trackEvent() is a no-op unless consent is granted.
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

function consentState(value) {
  return {
    ad_storage: value,
    ad_user_data: value,
    ad_personalization: value,
    analytics_storage: value,
  }
}

function load() {
  if (loaded || typeof document === 'undefined') return
  loaded = true
  gtag('js', new Date())
  // send_page_view: false — RouteTracker reports SPA page views itself.
  gtag('config', ID, { send_page_view: false, anonymize_ip: true })
  const s = document.createElement('script')
  s.async = true
  s.src = `https://www.googletagmanager.com/gtag/js?id=${ID}`
  document.head.appendChild(s)
  if (lastPath) trackPageView(lastPath)
}

function isGranted() {
  return loaded && getConsent() === 'granted'
}

/** Report a page view. Remembered until consent is granted, then flushed by load(). */
export function trackPageView(path) {
  lastPath = path
  if (!isGranted()) return
  window.gtag('config', ID, { page_path: path })
}

/** Send a GA4 event. Does nothing unless consent has been granted. */
export function trackEvent(name, params = {}) {
  if (!isGranted()) return
  window.gtag('event', name, { page_path: window.location.pathname, ...params })
}

/** Contact-link clicks, detected centrally so every tel:/mailto:/WhatsApp link is covered. */
function eventForLink(href) {
  if (href.startsWith('tel:')) return 'phone_click'
  if (href.startsWith('mailto:')) return 'email_click'
  if (/^https?:\/\/(wa\.me|api\.whatsapp\.com)\//.test(href)) return 'whatsapp_click'
  return null
}

function onDocumentClick(e) {
  const a = e.target instanceof Element ? e.target.closest('a[href]') : null
  if (!a) return
  const href = a.getAttribute('href') || ''
  const name = eventForLink(href)
  if (!name) return
  // Strip the pre-filled WhatsApp text and mailto subject/body: don't send message content to GA.
  trackEvent(name, { link_url: href.split('?')[0] })
}

/** Call once at startup. */
export function initAnalytics() {
  if (typeof window === 'undefined') return
  window.gtag = gtag
  gtag('consent', 'default', { ...consentState('denied'), wait_for_update: 500 })
  if (getConsent() === 'granted') {
    gtag('consent', 'update', consentState('granted'))
    load()
  }
  onConsentChange(v => {
    if (v === 'granted') {
      gtag('consent', 'update', consentState('granted'))
      load()
    } else {
      // 'denied', or null (choice cleared): stop collecting.
      gtag('consent', 'update', consentState('denied'))
    }
  })
  document.addEventListener('click', onDocumentClick)
}
