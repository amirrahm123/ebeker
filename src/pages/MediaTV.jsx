import { useState, useEffect } from 'react'
import useRevealOnScroll from '../hooks/useRevealOnScroll'
import PageBanner from '../components/PageBanner'
import CTASection from '../components/CTASection'

const videos = [
  { file: 'ראיון_ערן_בערוץ_12_ועדת_חקירה_אסון_מירון.mp4', title: 'ראיון ערוץ 12 — ועדת חקירה אסון מירון' },
  { file: 'ראיון_ערן_ערוץ_14_אסון_מירון.mp4', title: 'ראיון ערוץ 14 — אסון מירון' },
  { file: 'יצוג_משפחות_חטופים_בכנסת.mp4', title: 'ייצוג משפחות חטופים בכנסת' },
  { file: 'הצהרה_אסון_מירון_מסיבת_עיתונאים.mp4', title: 'מסיבת עיתונאים — הצהרה בנושא אסון מירון' },
  { file: 'הצהרה_באנדלית_אסון_מירון.mp4', title: 'הצהרה באנגלית — אסון מירון' },
]

const BASE = '/videos/'

function VideoModal({ src, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="lec-video-overlay" onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <div className="lec-video-modal">
        <button className="lec-video-close" onClick={onClose} aria-label="סגור">&times;</button>
        <video src={src} controls autoPlay playsInline className="lec-video-player" />
      </div>
    </div>
  )
}

export default function MediaTV() {
  useRevealOnScroll()
  const [videoSrc, setVideoSrc] = useState(null)

  return (
    <>
      <PageBanner
        crumbs={[{ label: 'מרכז מדיה' }, { label: 'כתבות בטלוויזיה' }]}
        title="כתבות"
        accent="בטלוויזיה"
      />

      <section className="content-section">
        <div className="content-container">
          <div className="reveal" style={{ marginBottom: 32 }}>
            <p>מבחר כתבות, ראיונות והצהרות בטלוויזיה — ערוץ 12, ערוץ 14 וכנסת ישראל. עו״ד ערן בקר מייצג נפגעים ומשפחות בתיקים מרכזיים בתחומי הנזיקין.</p>
          </div>

          <div className="press-grid tv-grid reveal">
            {videos.map((item, i) => (
              <div className="press-clipping" key={i} onClick={() => setVideoSrc(encodeURI(BASE + item.file))}>
                <div className="press-img-wrap">
                  <video src={encodeURI(BASE + item.file)} className="lec-video-thumb" muted playsInline preload="metadata" />
                  <span className="lec-play-icon" aria-hidden="true">▶</span>
                </div>
                <div className="press-card-body">
                  <span className="press-card-tag">וידאו</span>
                  <div className="press-card-title">{item.title}</div>
                  <span className="press-card-link">צפה בוידאו &#8592;</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="רוצים לדבר עם עורך דין?" subtitle="ייעוץ ראשוני חינם — ללא עלות וללא התחייבות" />

      {videoSrc && <VideoModal src={videoSrc} onClose={() => setVideoSrc(null)} />}
    </>
  )
}
