import { useState, useEffect, useCallback } from 'react'
import useRevealOnScroll from '../hooks/useRevealOnScroll'
import PageBanner from '../components/PageBanner'
import CTASection from '../components/CTASection'
import ZoomViewer from '../components/ZoomViewer'

const lectures = [
  { type: 'video', file: 'AQMn3mux1xfR6YFcP5v1bt9cTGgKCv_TZovz7wis8r2zArrC5oP_0RYNAN7cb7sIZ-S_639EsiTD3gYvzAjsctJU5LniIL6VX-sgaFZSXQiOYg.mp4', title: 'ערן נואם בכנס לשכת עורכי הדין בישראל' },
  { type: 'image', file: '480242543_2876988112467686_3438289816952955585_n.jpg', title: 'הרצאה בכנס דיני ביטוח ונזיקין' },
  { type: 'image', file: '481776223_1162275738569300_7026142654963745400_n.jpg', title: 'פאנל בפיסגת המשפט באילת — פיצויים לנפגעי 7 באוקטובר' },
  { type: 'image', file: '506792206_3013470788819417_5117487290563108114_n.jpg', title: 'הרצאה: AI בעולם המשפט' },
  { type: 'image', file: '506927346_3013014352198394_2978095758852121996_n.jpg', title: 'פאנל בכנס דיני נזיקין וביטוח' },
  { type: 'image', file: '570503433_3156490081184153_8298336933491686541_n.jpg', title: 'הרצאה בפני קהל' },
  { type: 'image', file: '572145089_3156490007850827_6726175283099896459_n.jpg', title: 'הרצאה בכנס נזיקין וביטוח — לשכת עורכי הדין מחוז חיפה' },
  { type: 'image', file: '615147239_3235785403254620_303771753383780442_n.jpg', title: 'השתלמות ליטיגציה: בניית התיק לבית המשפט — לשכת עורכי הדין חיפה, ינואר 2026' },
  { type: 'image', file: 'הרצאה באוניברסיטה.jpg', title: 'כנס חיפה למשפט — אוניברסיטת חיפה' },
  { type: 'image', file: 'הרצאה בטכניון לרופאים.jpg', title: 'הרצאה לרופאים בטכניון', imgPosition: 'center center' },
  { type: 'image', file: 'הרצאה הלשכה בחיפה.jpg', title: 'הרצאה בלשכת עורכי הדין — מחוז חיפה' },
  { type: 'image', file: 'הרצאה טכניון 2.jpg', title: 'הרצאה בטכניון' },
  { type: 'image', file: 'הרצאה רשלנות רפואית במחוז צפון.jpg', title: 'הרצאה: רשלנות רפואית בחדרי מיון — מחוז צפון' },
]

const BASE = '/pics/lectures/'

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

export default function MediaLectures() {
  useRevealOnScroll()
  const [zoomSrc, setZoomSrc] = useState(null)
  const [videoSrc, setVideoSrc] = useState(null)

  const handleClick = useCallback((item) => {
    const src = encodeURI(BASE + item.file)
    if (item.type === 'video') {
      setVideoSrc(src)
    } else {
      setZoomSrc(src)
    }
  }, [])

  return (
    <>
      <PageBanner
        crumbs={[{ label: 'מרכז מדיה' }, { label: 'הרצאות וכנסים' }]}
        title="הרצאות"
        accent="וכנסים"
      />

      <section className="content-section">
        <div className="content-container">
          <div className="reveal" style={{ marginBottom: 32 }}>
            <p>עו״ד ערן בקר נושא הרצאות ומנחה פאנלים מקצועיים בכנסים של לשכת עורכי הדין ובפורומים מובילים בתחום הנזיקין, רשלנות רפואית וביטוח לאומי.</p>
          </div>

          <div className="press-grid lectures-grid reveal">
            {lectures.map((item, i) => (
              <div className="press-clipping" key={i} onClick={() => handleClick(item)}>
                <div className="press-img-wrap">
                  {item.type === 'video' ? (
                    <>
                      <video src={encodeURI(BASE + item.file)} className="lec-video-thumb" muted playsInline preload="metadata" />
                      <span className="lec-play-icon" aria-hidden="true">▶</span>
                    </>
                  ) : (
                    <img src={encodeURI(BASE + item.file)} alt={item.title} loading="lazy" style={item.imgPosition ? { objectPosition: item.imgPosition } : undefined} />
                  )}
                </div>
                <div className="press-card-body">
                  <span className="press-card-tag">{item.type === 'video' ? 'וידאו' : 'הרצאה'}</span>
                  <div className="press-card-title">{item.title}</div>
                  <span className="press-card-link">{item.type === 'video' ? 'צפה בוידאו' : 'הגדל תמונה'} &#8592;</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="רוצים לדבר עם עורך דין?" subtitle="ייעוץ ראשוני חינם — ללא עלות וללא התחייבות" />

      {zoomSrc && <ZoomViewer src={zoomSrc} onClose={() => setZoomSrc(null)} />}
      {videoSrc && <VideoModal src={videoSrc} onClose={() => setVideoSrc(null)} />}
    </>
  )
}
