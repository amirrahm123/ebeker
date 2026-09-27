import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getConsent, setConsent, onConsentChange, OPEN_COOKIE_SETTINGS_EVENT } from '../lib/consent'

/**
 * Bottom-of-screen cookie banner. Shows until the user decides; the footer's
 * "הגדרות עוגיות" link re-opens it via openCookieSettings() in lib/consent.js.
 * While visible it sets `body.cookie-banner-open` so the sticky CTA and
 * floating buttons can stack above it (see --floating-bottom in style.css).
 */
export default function CookieBanner() {
  const [open, setOpen] = useState(() => getConsent() === null)

  useEffect(() => {
    const show = () => setOpen(true)
    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, show)
    const off = onConsentChange(() => setOpen(false))
    return () => { window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, show); off() }
  }, [])

  useEffect(() => {
    document.body.classList.toggle('cookie-banner-open', open)
    if (!open) { document.body.style.removeProperty('--cookie-banner-h'); return }
    const el = document.querySelector('.cookie-banner')
    const measure = () => { if (el) document.body.style.setProperty('--cookie-banner-h', `${el.offsetHeight}px`) }
    measure()
    const ro = typeof ResizeObserver !== 'undefined' && el ? new ResizeObserver(measure) : null
    ro?.observe(el)
    return () => { ro?.disconnect(); document.body.classList.remove('cookie-banner-open'); document.body.style.removeProperty('--cookie-banner-h') }
  }, [open])

  if (!open) return null

  return (
    <section className="cookie-banner" role="region" aria-labelledby="cookie-banner-title" dir="rtl">
      <div className="cookie-banner-inner">
        <p id="cookie-banner-title" className="cookie-banner-text">
          האתר משתמש בעוגיות לצורכי סטטיסטיקה (Google Analytics) רק בהסכמתכם.{' '}
          <Link to="/privacy">למדיניות הפרטיות והעוגיות</Link>
        </p>
        <div className="cookie-banner-actions">
          <button type="button" className="cookie-btn" onClick={() => setConsent('granted')}>אישור</button>
          <button type="button" className="cookie-btn" onClick={() => setConsent('denied')}>דחייה</button>
        </div>
      </div>
    </section>
  )
}
