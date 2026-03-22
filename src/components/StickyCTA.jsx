import { useState, useEffect } from 'react'

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
      <a href="https://wa.me/9720522611850?text=%D7%A9%D7%9C%D7%95%D7%9D%2C%20%D7%90%D7%A0%D7%99%20%D7%9E%D7%A2%D7%95%D7%A0%D7%99%D7%99%D7%9F%2F%D7%AA%20%D7%91%D7%99%D7%99%D7%A2%D7%95%D7%A5%20%D7%9E%D7%A9%D7%A4%D7%98%D7%99" target="_blank" rel="noopener" className="sticky-wa">💬 וואטסאפ</a>
      <button className="sticky-close" onClick={() => setDismissed(true)} aria-label="סגור">✕</button>
    </div>
  )
}
