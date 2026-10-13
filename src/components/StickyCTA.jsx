import { useState, useEffect, useRef } from 'react'
import { whatsappLink, CONSULT_PHRASE } from '../config/site'

export default function StickyCTA() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const barRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Tell the floating buttons whether the bar is up and how tall it is, so on
  // mobile they sit just above it and drop to the corner when it's gone.
  const shown = visible && !dismissed
  useEffect(() => {
    document.body.classList.toggle('sticky-cta-on', shown)
    return () => document.body.classList.remove('sticky-cta-on')
  }, [shown])
  useEffect(() => {
    const el = barRef.current
    if (!el || typeof ResizeObserver === 'undefined') return
    const ro = new ResizeObserver(() => {
      document.documentElement.style.setProperty('--sticky-cta-h', `${el.offsetHeight}px`)
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [dismissed])

  if (dismissed) return null

  return (
    <div id="stickyCta" ref={barRef} className={visible ? 'visible' : ''}>
      <span className="sticky-text">נפגעתם? {CONSULT_PHRASE}</span>
      <a href="/#contact" className="sticky-btn">קבעו ייעוץ</a>
      <a href={whatsappLink()} target="_blank" rel="noopener" className="sticky-wa">💬 וואטסאפ</a>
      <button className="sticky-close" onClick={() => setDismissed(true)} aria-label="סגור">✕</button>
    </div>
  )
}
