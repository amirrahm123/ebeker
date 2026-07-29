import { useState, useEffect, useCallback } from 'react'
import useRevealOnScroll from '../hooks/useRevealOnScroll'
import PageBanner from '../components/PageBanner'
import CTASection from '../components/CTASection'
import ZoomViewer from '../components/ZoomViewer'

const lectures = [
  {
    type: 'image',
    file: 'conference-1.webp',
    title: 'הכנס הארצי בדיני נזיקין וביטוח',
    alt: 'עו״ד ערן בקר נואם מעל דוכן בכנס השנתי בדיני נזיקין וביטוח, על רקע שלטי המדרשה האקדמית של לשכת עורכי הדין',
    desc: 'סופ"ש של הכנס הארצי הגדול בתחום הנזיקין והביטוח שהיה לי העונג לרכזו ולהובילו מבחינה אקדמית כיו"ר פורום נזיקין וביטוח ארצי בלשכת עורכי הדין',
  },
  {
    type: 'image',
    file: 'conference-2.webp',
    title: 'נזיקין וביטוח למתקדמים — לשכת עורכי הדין חיפה',
    alt: 'עו״ד ערן בקר פותח השתלמות מאחורי דוכן לשכת עורכי הדין מחוז חיפה',
    desc: 'מרצה ופותח את ההשתלמות בלשכת עו"ד בחיפה, כמרכז אקדמי וכמ"מ יו"ר לשכת עורכי הדין מחוז חיפה, ויו"ר פורום נזיקין וביטוח ארצי, השתלמות תעודה פרונטלית בנושא "נזיקין וביטוח למתקדמים" בנוכחות מרשימה של כ-200 עורכי דין.',
  },
  {
    type: 'image',
    file: 'conference-3.webp',
    title: 'הכנס השנתי בנזיקין, ביטוח וביטוח לאומי — מלון דן אילת',
    alt: 'עו״ד ערן בקר נואם מעל דוכן לשכת עורכי הדין בישראל בכנס השנתי, על רקע שלטי המדרשה האקדמית',
    desc: 'פותח את הכנס השנתי בתחום הנזיקין, הביטוח והביטוח הלאומי במלון דן אילת, כמרכז אקדמי ויו"ר פורום נזיקין ביטוח ארצי. עו"ד בקר הדגיש בין היתר את פערי הכוחות בין הנפגע / האדם הפרטי לבין חברות הביטוח, המוסד לביטוח לאומי והמדינה, שנהנים מיתרון מובנה מול האדם הפרטי.',
  },
  {
    type: 'image',
    file: 'conference-4.webp',
    title: 'עדות מומחים רפואיים — השתלמות תעודה בנזיקין וביטוח',
    alt: 'עו״ד ערן בקר מרצה מאחורי דוכן לשכת עורכי הדין מחוז חיפה, לצד שלט הלשכה',
    desc: 'איך חוקרים מומחה רפואי בביהמ"ש? האם מותר למומחה רפואי מטעם עו"ד ללחוש באוזנו במהלך חקירה נגדית של מומחה רפואי מטעם הצד השני או מטעם ביהמ"ש? שאלת הקשר הסיבתי הרפואי והמשפטי בין טראומות לבין ארעות של פגימות רפואיות? אלו אחדים מהנושאים הרבים עליהם הרצה עו"ד בקר בנושא "עדות מומחים רפואיים" בפני כ-200 עורכי דין במסגרת השתלמות תעודה בתחום "הנזיקין והביטוח" שנערכת בלשכת עורכי הדין.',
  },
  {
    type: 'image',
    file: 'conference-5.webp',
    title: 'חקירה נגדית של מומחה רפואי מטעם ביהמ"ש',
    alt: 'עו״ד ערן בקר מצביע על שקופית של צילום עמוד שדרה צווארי במהלך הרצאה, על רקע שלטי המדרשה האקדמית',
    desc: 'הרצאתו של עו"ד בקר בפני כ-250 עורכי דין בנושא "חקירה נגדית של מומחה רפואי מטעם ביהמ"ש" במסגרת השתלמות תעודה גדולה בתחום הנזיקין והביטוח שנערכה במדרשה האקדמית של לשכת עורכי הדין בישראל בת"א.',
  },
  {
    type: 'image',
    file: 'conference-6.webp',
    title: 'התקנות לקביעת דרגת נכות — מורה נבוכים רפואי משפטי',
    alt: 'עו״ד ערן בקר מרצה לצד מסך המציג שקופית על תקנות הביטוח הלאומי וועדות רפואיות',
    desc: 'איך קובעים לנפגעי גוף (תאונה / מחלה) אחוזי נכות? זה אחד מהנושאים הרבים עליהם הרצה עו"ד בקר בנושא "התקנות לקביעת דרגת נכות - מורה נבוכים רפואי משפטי" בפני כ-160 עורכי דין במסגרת השתלמות תעודה היברידית (פרונטלית וזום) בתחום "ייצוג נפגעי גוף מול המל"ל ובכלל" שנערכת בלשכת עורכי הדין.',
  },
  { type: 'video', file: 'AQMn3mux1xfR6YFcP5v1bt9cTGgKCv_TZovz7wis8r2zArrC5oP_0RYNAN7cb7sIZ-S_639EsiTD3gYvzAjsctJU5LniIL6VX-sgaFZSXQiOYg.mp4', poster: 'eran-lecture-bar-association-thumb.webp', title: 'ערן נואם בכנס לשכת עורכי הדין בישראל' },
  { type: 'image', file: '480242543_2876988112467686_3438289816952955585_n.webp', title: 'הרצאה בכנס דיני ביטוח ונזיקין' },
  { type: 'image', file: '481776223_1162275738569300_7026142654963745400_n.webp', title: 'פאנל בפיסגת המשפט באילת — פיצויים לנפגעי 7 באוקטובר' },
  { type: 'image', file: '506792206_3013470788819417_5117487290563108114_n.webp', title: 'הרצאה: AI בעולם המשפט' },
  { type: 'image', file: '506927346_3013014352198394_2978095758852121996_n.webp', title: 'פאנל בכנס דיני נזיקין וביטוח' },
  { type: 'image', file: '570503433_3156490081184153_8298336933491686541_n.webp', title: 'הרצאה בפני קהל' },
  { type: 'image', file: '572145089_3156490007850827_6726175283099896459_n.webp', title: 'הרצאה בכנס נזיקין וביטוח — לשכת עורכי הדין מחוז חיפה' },
  { type: 'image', file: '615147239_3235785403254620_303771753383780442_n.webp', title: 'השתלמות ליטיגציה: בניית התיק לבית המשפט — לשכת עורכי הדין חיפה, ינואר 2026' },
  { type: 'image', file: 'הרצאה באוניברסיטה.webp', title: 'כנס חיפה למשפט — אוניברסיטת חיפה' },
  { type: 'image', file: 'הרצאה בטכניון לרופאים.webp', title: 'הרצאה לרופאים בטכניון', imgPosition: 'center center' },
  { type: 'image', file: 'הרצאה הלשכה בחיפה.webp', title: 'הרצאה בלשכת עורכי הדין — מחוז חיפה' },
  { type: 'image', file: 'הרצאה טכניון 2.webp', title: 'הרצאה בטכניון' },
  { type: 'image', file: 'הרצאה רשלנות רפואית במחוז צפון.webp', title: 'הרצאה: רשלנות רפואית בחדרי מיון — מחוז צפון' },
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
  const [zoomItem, setZoomItem] = useState(null)
  const [videoSrc, setVideoSrc] = useState(null)

  const handleClick = useCallback((item) => {
    if (item.type === 'video') {
      setVideoSrc(encodeURI(BASE + item.file))
    } else {
      setZoomItem(item)
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
                      <video src={encodeURI(BASE + item.file)} poster={item.poster ? encodeURI(BASE + item.poster) : undefined} className="lec-video-thumb" muted playsInline preload="metadata" />
                      <span className="lec-play-icon" aria-hidden="true">▶</span>
                    </>
                  ) : (
                    <img src={encodeURI(BASE + item.file)} alt={item.alt || item.title} loading="lazy" style={item.imgPosition ? { objectPosition: item.imgPosition } : undefined} />
                  )}
                </div>
                <div className="press-card-body">
                  <span className="press-card-tag">{item.type === 'video' ? 'וידאו' : 'הרצאה'}</span>
                  <div className="press-card-title">{item.title}</div>
                  {item.desc && <p className="press-card-desc">{item.desc}</p>}
                  <span className="press-card-link">{item.type === 'video' ? 'צפה בוידאו' : 'הגדל תמונה'} &#8592;</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="רוצים לדבר עם עורך דין?" subtitle="ייעוץ ראשוני חינם — ללא עלות וללא התחייבות" />

      {zoomItem && <ZoomViewer src={encodeURI(BASE + zoomItem.file)} caption={zoomItem.desc} onClose={() => setZoomItem(null)} />}
      {videoSrc && <VideoModal src={videoSrc} onClose={() => setVideoSrc(null)} />}
    </>
  )
}
