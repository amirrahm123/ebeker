import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import WhatsAppFloat from './WhatsAppFloat'
import ScrollTopButton from './ScrollTopButton'
import StickyCTA from './StickyCTA'
import ProgressBar from './ProgressBar'
import useCounterAnimation from '../hooks/useCounterAnimation'

export default function Layout() {
  useCounterAnimation()
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  useEffect(() => {
    document.body.classList.add('page-loaded')
  }, [])

  return (
    <>
      <ProgressBar />
      <Navbar />
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
              <span className="trust-strip-num" data-target="25">0+</span>
              <span className="trust-strip-label">שנות ניסיון</span>
            </div>
          </div>
        </div>
      </section>
      <Outlet />
      <Footer />
      <StickyCTA />
      <WhatsAppFloat />
      <ScrollTopButton />
    </>
  )
}
