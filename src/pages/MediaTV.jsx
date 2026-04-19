import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import useRevealOnScroll from '../hooks/useRevealOnScroll'
import PageBanner from '../components/PageBanner'
import CTASection from '../components/CTASection'

const videos = [
  { type: 'mp4', file: 'ראיון_ערן_בערוץ_12_ועדת_חקירה_אסון_מירון.mp4', poster: 'ראיון_ערן_ערוץ_12-thumb.webp', title: 'ראיון ערוץ 12 — ועדת חקירה אסון מירון' },
  { type: 'mp4', file: 'ראיון_ערן_ערוץ_14_אסון_מירון.mp4', poster: 'ראיון_ערן_ערוץ_14-thumb.webp', title: 'ראיון ערוץ 14 — אסון מירון' },
  { type: 'mp4', file: 'יצוג_משפחות_חטופים_בכנסת.mp4', poster: 'ייצוג_משפחות_חטופים_בכנסת-thumb.webp', title: 'ייצוג משפחות חטופים בכנסת' },
  { type: 'mp4', file: 'הצהרה_אסון_מירון_מסיבת_עיתונאים.mp4', poster: 'הצהרה_מסיבת_עיתונאים-thumb.webp', title: 'מסיבת עיתונאים — הצהרה בנושא אסון מירון' },
  { type: 'mp4', file: 'הצהרה_באנדלית_אסון_מירון.mp4', poster: 'הצהרה_באנגלית_מירון-thumb.webp', title: 'הצהרה באנגלית — אסון מירון' },
  { type: 'youtube', src: 'https://www.youtube.com/embed/N5AAJ29ir4c', title: 'תחקיר מותו של הנער יפתח ספיר בטיול שנתי של בית הספר בערבה' },
  { type: 'youtube', src: 'https://www.youtube.com/embed/8CbYTSP0Y7A', title: '2.3 מיליון ש״ח פיצויים להורי הנער שנהרג בטיול שנתי' },
  { type: 'youtube', src: 'https://www.youtube.com/embed/JSB1z-yH85A', title: 'אבחון שגוי וכריתת שד מיותרת (רשלנות רפואית)' },
  { type: 'youtube', src: 'https://www.youtube.com/embed/-cUeFROaKK0', title: 'תביעת נזיקין נגד הרשויות בגין רשלנות מותם של אזרחים במערת המוות באכזיב' },
]

function getYouTubeId(embedUrl) {
  return embedUrl.split('/embed/')[1]
}

function MediaModal({ item, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return createPortal(
    <div className="lec-video-overlay" onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <div className="lec-video-modal">
        <button className="lec-video-close" onClick={onClose} aria-label="סגור">&times;</button>
        {item.type === 'mp4' ? (
          <video src={encodeURI('/videos/' + item.file)} controls autoPlay playsInline className="lec-video-player" />
        ) : (
          <iframe
            src={item.src + '?autoplay=1'}
            title={item.title}
            className="tv-yt-iframe"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
    </div>,
    document.body
  )
}

export default function MediaTV() {
  useRevealOnScroll()
  const [openVideo, setOpenVideo] = useState(null)

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
              <div className="press-clipping" key={i} onClick={() => setOpenVideo(item)}>
                <div className="press-img-wrap">
                  {item.type === 'mp4' ? (
                    <video src={encodeURI('/videos/' + item.file)} poster={encodeURI('/pics/' + item.poster)} className="lec-video-thumb" muted playsInline preload="metadata" />
                  ) : (
                    <img src={`https://img.youtube.com/vi/${getYouTubeId(item.src)}/hqdefault.jpg`} alt={item.title} className="lec-video-thumb" loading="lazy" />
                  )}
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

      {openVideo && <MediaModal item={openVideo} onClose={() => setOpenVideo(null)} />}
    </>
  )
}
