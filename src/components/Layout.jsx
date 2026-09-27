import { Outlet, useLocation } from 'react-router-dom'
import { useEffect, useRef, Suspense } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import WhatsAppFloat from './WhatsAppFloat'
import FacebookFloat from './FacebookFloat'
import ScrollTopButton from './ScrollTopButton'
import AccessibilityWidget from './AccessibilityWidget'
import StickyCTA from './StickyCTA'
import ProgressBar from './ProgressBar'
import CookieBanner from './CookieBanner'
import useCounterAnimation from '../hooks/useCounterAnimation'
import usePageMeta from '../hooks/usePageMeta'

export default function Layout() {
  useCounterAnimation()
  usePageMeta()
  const { pathname, hash } = useLocation()
  const mainRef = useRef(null)
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  // On client-side navigation move focus to <main> so screen readers announce
  // the new page. Skipped on first load so the skip link stays first in tab order.
  useEffect(() => {
    if (isFirstRender.current) { isFirstRender.current = false; return }
    if (hash) return
    mainRef.current?.focus({ preventScroll: true })
  }, [pathname, hash])

  useEffect(() => {
    document.body.classList.add('page-loaded')
  }, [])

  return (
    <>
      <a href="#main-content" className="skip-link">דלג לתוכן המרכזי</a>
      <ProgressBar />
      <header>
        <Navbar />
      </header>
      <section className="trust-section">
        <div className="trust-strip">
          <div className="trust-strip-item">
            <span className="trust-strip-icon">&#127942;</span>
            <div className="trust-strip-text">
              <span className="trust-strip-num">DUNS 100</span>
              <span className="trust-strip-label">מדורג בין המובילים בישראל</span>
            </div>
          </div>
          <div className="trust-strip-item">
            <span className="trust-strip-icon">&#11088;</span>
            <div className="trust-strip-text">
              <span className="trust-strip-num">BDi CODE</span>
              <span className="trust-strip-label">ציון מצוינות משפטית</span>
            </div>
          </div>
          <div className="trust-strip-item">
            <span className="trust-strip-icon">&#9878;&#65039;</span>
            <div className="trust-strip-text">
              <span className="trust-strip-num" data-target="25">0</span>
              <span className="trust-strip-label">שנות ניסיון</span>
            </div>
          </div>
        </div>
      </section>
      <main id="main-content" tabIndex={-1} ref={mainRef}>
        <Suspense fallback={<div className="route-loading" aria-busy="true" />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <StickyCTA />
      <CookieBanner />
      <WhatsAppFloat />
      <FacebookFloat />
      <AccessibilityWidget />
      <ScrollTopButton />
    </>
  )
}
