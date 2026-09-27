import { useState, useEffect } from 'react'
import { whatsappLink } from '../config/site'

export default function StickyCTA() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (dismissed) return null

  return (
    <div id="stickyCta" className={visible ? 'visible' : ''}>
      <span className="sticky-text">נפגעתם? הייעוץ הראשון חינם</span>
      <a href="/#contact" className="sticky-btn">קבעו ייעוץ חינם</a>
      <a href={whatsappLink()} target="_blank" rel="noopener" className="sticky-wa">💬 וואטסאפ</a>
      <button className="sticky-close" onClick={() => setDismissed(true)} aria-label="סגור">✕</button>
    </div>
  )
}
