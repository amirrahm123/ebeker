import { useEffect, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import useRevealOnScroll from '../hooks/useRevealOnScroll'
import TestimonialsCarousel from '../components/TestimonialsCarousel'
import ContactForm from '../components/ContactForm'
import ZoomViewer from '../components/ZoomViewer'
import MediaCards from '../components/MediaCards'

// Inline SVG icon content per practice area — uses currentColor so card hover
// restyles it from gold to white. Common viewBox of 0 0 40 40.
const areaIconPaths = {
  // נזיקין כללי — stick figure tilted 45° falling above 3 L-shaped stairs
  fall: (
    <>
      {/* 3 ascending stair steps (profile line) */}
      <path d="M4 34 L14 34 L14 28 L22 28 L22 22 L30 22 L30 16 L38 16" />
      {/* falling figure, body rotated ~45° */}
      <circle cx="9" cy="9" r="3" />
      <path d="M11 11 L17 18" />
      <path d="M10 13 L5 11" />
      <path d="M13 11 L17 6" />
      <path d="M17 18 L12 24" />
      <path d="M17 18 L21 24" />
    </>
  ),
  // רשלנות רפואית — medical plus inside a circle (universal symbol)
  doctor: (
    <>
      <circle cx="20" cy="20" r="14" />
      <path d="M20 11 L20 29" />
      <path d="M11 20 L29 20" />
    </>
  ),
  // ביטוח — shield
  shield: (
    <path d="M20 4 L32 8 V19 C32 27, 27 33, 20 36 C13 33, 8 27, 8 19 V8 Z" />
  ),
  // תאונות עבודה — clear ladder (2 rails, 4 rungs) with figure falling off the left
  ladder: (
    <>
      <path d="M22 5 L22 35" />
      <path d="M32 5 L32 35" />
      <path d="M22 12 L32 12" />
      <path d="M22 19 L32 19" />
      <path d="M22 26 L32 26" />
      <path d="M22 33 L32 33" />
      <circle cx="9" cy="12" r="3" />
      <path d="M11 15 L15 22" />
      <path d="M9 17 L4 19" />
      <path d="M13 18 L18 14" />
      <path d="M15 22 L11 30" />
      <path d="M15 22 L18 30" />
    </>
  ),
  // תאונות דרכים — car side view with larger wheels
  car: (
    <>
      <path d="M3 26 L3 20 L9 20 L14 11 L28 11 L33 20 L37 20 L37 26" />
      <path d="M3 26 L37 26" />
      <path d="M18 11 L18 20" />
      <circle cx="11" cy="28" r="6" />
      <circle cx="29" cy="28" r="6" />
    </>
  ),
  // תאונות ימיות — bolder anchor (strokeWidth 2.5)
  anchor: (
    <g strokeWidth="2.5">
      <circle cx="20" cy="7" r="2.8" />
      <path d="M20 10 L20 34" />
      <path d="M13 14 L27 14" />
      <path d="M6 22 C6 30, 13 35, 20 35" />
      <path d="M34 22 C34 30, 27 35, 20 35" />
    </g>
  ),
  // תאונות תלמידים — child figure with big backpack
  student: (
    <>
      <circle cx="14" cy="9" r="3" />
      <path d="M14 12 L14 26" />
      <path d="M14 16 L9 22" />
      <path d="M14 16 L19 22" />
      <path d="M14 26 L10 34" />
      <path d="M14 26 L18 34" />
      {/* backpack (large rect on back/right) */}
      <path d="M21 13 L32 13 L32 27 L21 27 Z" />
      {/* straps */}
      <path d="M21 13 L15 14" />
      <path d="M21 27 L15 25" />
    </>
  ),
  // תאונות קטלניות — heart with plus inside
  cpr: (
    <>
      <path d="M20 34 C4 22, 4 10, 12 10 C16 10, 19 12, 20 15 C21 12, 24 10, 28 10 C36 10, 36 22, 20 34 Z" />
      <path d="M20 17 L20 27" />
      <path d="M15 22 L25 22" />
    </>
  ),
  // מחלות מקצוע — two clear lung blobs with trachea on top
  lungs: (
    <>
      <path d="M20 5 L20 14" />
      <path d="M14 14 L26 14" />
      {/* left lung */}
      <path d="M16 14 C9 16, 6 22, 7 28 C8 34, 13 35, 16 33 Z" />
      {/* right lung */}
      <path d="M24 14 C31 16, 34 22, 33 28 C32 34, 27 35, 24 33 Z" />
    </>
  ),
  // פטור ממס הכנסה — bold scissors (no document)
  scissors: (
    <>
      <circle cx="10" cy="30" r="4" />
      <circle cx="28" cy="30" r="4" />
      <path d="M13 28 L32 8" />
      <path d="M25 28 L6 8" />
    </>
  ),
  // צוואות וירושות — document with folded corner and 3 lines
  contract: (
    <>
      <path d="M8 4 L24 4 L32 12 L32 36 L8 36 Z" />
      <path d="M24 4 L24 12 L32 12" />
      <path d="M12 20 L28 20" />
      <path d="M12 26 L28 26" />
      <path d="M12 32 L24 32" />
    </>
  ),
  // ייפוי כוח מתמשך — simple scroll/document (kept)
  scroll: (
    <>
      <path d="M12 6 L28 6 L28 34 L12 34 Z" />
      <path d="M16 13 L24 13" />
      <path d="M16 19 L24 19" />
      <path d="M16 25 L21 25" />
    </>
  ),
  // חקירת סיבות מוות — larger magnifying glass (strokeWidth 2.5)
  magnifier: (
    <g strokeWidth="2.5">
      <circle cx="17" cy="17" r="10" />
      <path d="M25 25 L34 34" />
    </g>
  ),
  // נכות כללית וניידות — bolder wheelchair (strokeWidth 2.5)
  wheelchair: (
    <g strokeWidth="2.5">
      <circle cx="17" cy="6" r="2.8" />
      <path d="M17 9 L19 17" />
      <path d="M19 15 L26 13" />
      <path d="M19 17 L30 22" />
      <circle cx="15" cy="28" r="8" />
      <circle cx="30" cy="33" r="2.5" />
      <path d="M23 28 L28 33" />
    </g>
  ),
  // נכי צה"ל — Star of David (two overlapping triangles)
  soldier: (
    <>
      <path d="M20 4 L34 28 L6 28 Z" />
      <path d="M20 36 L34 12 L6 12 Z" />
    </>
  ),
}

function AreaIcon({ iconKey, size = 56 }) {
  const content = areaIconPaths[iconKey]
  if (!content) return null
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {content}
    </svg>
  )
}

// Small "ביטוח לאומי" mark — two overlapping arcs (second dashed).
// Uses currentColor so it inherits the gold .area-sub color.
function BlSymbol() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: 4, flexShrink: 0 }}
    >
      <path d="M12 3 C7 3 3 7 3 12 C3 17 7 21 12 21 C17 21 21 17 21 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 21 C17 21 21 17 21 12 C21 7 17 3 12 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 3" />
    </svg>
  )
}

const practiceAreas = [
  {
    iconKey: 'fall', label: 'נזיקין כללי', desc: 'ייצוג נפגעי גוף בתביעות פיצויים בגין נזקי גוף מכל סוג — עם ניסיון של עשרות שנים.', to: '/damages',
    points: ['תאונות דרכים ונזקי גוף', 'נפילות ברחוב ובמקום הציבורי', 'תאונות עבודה ומחלות מקצוע', 'פיצויים על כאב וסבל, אובדן שכר ונכות'],
  },
  {
    iconKey: 'doctor', label: 'רשלנות רפואית', desc: 'תביעות כנגד בתי חולים, רופאים וגורמים רפואיים בגין טיפול רשלני שגרם לנזק.', to: '/medical-malpractice',
    points: ['אבחון שגוי או מאוחר', 'רשלנות בניתוח או בטיפול', 'חוסר במתן מידע והסכמה מדעת', 'נזק ליילוד ורשלנות בלידה'],
  },
  {
    iconKey: 'shield', label: 'ביטוח', desc: 'תביעות מול חברות ביטוח בנושאי נכות, תאונות ואובדן כושר עבודה.', to: '/insurance',
    points: ['תביעות אובדן כושר עבודה', 'ביטוח חיים ומחלות קשות', 'ביטוח תאונות אישיות', 'דחיית תביעת ביטוח'],
  },
  {
    iconKey: 'ladder', label: 'תאונות עבודה', sub: 'ביטוח לאומי', desc: 'מיצוי זכויות עובדים שנפגעו בתאונת עבודה מול המוסד לביטוח לאומי וגורמים נוספים.', to: '/damages',
    points: ['הכרה בתאונת עבודה', 'קצבאות נכות מעבודה', 'תביעות נגד מעסיקים', 'ועדות רפואיות'],
  },
  {
    iconKey: 'car', label: 'תאונות דרכים', desc: 'מיצוי פיצויים מחברות הביטוח לנפגעי תאונות דרכים — גם בתיקים מורכבים.', to: '/damages',
    points: ['נפגעי גוף בתאונות דרכים', 'תביעות לפי חוק הפיצויים', 'ייצוג מול חברות ביטוח', 'תאונות קטלניות'],
  },
  {
    iconKey: 'anchor', label: 'תאונות ימיות', desc: 'מומחיות ייחודית בתביעות נפגעים בים — מדריכים, חובבים, עובדים ימיים ועוד.', to: '/marine-accidents',
    points: ['תאונות ספורט ימי', 'פגיעות בחופי רחצה', 'תאונות צלילה וגלישה', 'אחריות מפעילי פעילות ימית'],
  },
  {
    iconKey: 'student', label: 'תאונות תלמידים', desc: 'ייצוג ילדים ומשפחותיהם שנפגעו בתאונות בבית הספר או בפעילויות חינוכיות.', to: '/student-accidents',
    points: ['פגיעות בשטח בית הספר', 'טיולים ופעילויות חוץ', 'ביטוח תלמידים', 'אחריות מוסדות חינוך'],
  },
  {
    iconKey: 'cpr', label: 'תאונות קטלניות', sub: 'נזיקין', desc: 'ייצוג משפחות שכולות ותובעים בתאונות שגרמו לאובדן חיים — בנחישות ובמקצועיות.', to: '/damages',
    points: ['תביעות תלויים', 'פיצוי על אובדן חיים', 'ייצוג משפחות שכולות', 'חקירת נסיבות המוות'],
  },
  {
    iconKey: 'lungs', label: 'מחלות מקצוע', sub: 'ביטוח לאומי', desc: 'הכרה במחלות שנגרמו עקב תנאי עבודה ומיצוי זכויות מהמוסד לביטוח לאומי.', to: '/damages',
    points: ['מחלות ריאה תעסוקתיות', 'חשיפה לחומרים מסוכנים', 'לחץ ושחיקה בעבודה', 'ועדות רפואיות'],
  },
  {
    iconKey: 'scissors', label: 'פטור ממס הכנסה', desc: 'קבלת פטור ממס הכנסה על פיצויים ומענקים לנפגעים — חסכון כספי משמעותי.', to: '/tax-exemption',
    points: ['פטור לנכי עבודה', 'פטור לנכי תאונות דרכים', 'ערעור על החלטות', 'חישוב הטבות מס'],
  },
  {
    iconKey: 'contract', label: 'צוואות וירושות', desc: 'עריכת צוואות, ניהול עיזבונות וייצוג בסכסוכי ירושה בצורה מקצועית ורגישה.', to: '/wills',
    points: ['עריכת צוואה', 'קיום צוואה', 'סכסוכי ירושה', 'ניהול עיזבונות'],
  },
  {
    iconKey: 'scroll', label: 'ייפוי כוח מתמשך', sub: 'וצו אפוטרופסות', desc: 'ליווי משפטי מלא בהכנת מסמכים וניהול הליכים בנושאי כשרות משפטית.', to: '/power-of-attorney',
    points: ['ייפוי כוח מתמשך', 'צווי אפוטרופסות', 'הנחיות רפואיות מקדימות', 'הגנה על הזכויות שלכם'],
  },
  {
    iconKey: 'magnifier', label: 'חקירת סיבות מוות', desc: 'ייצוג משפחות בהליכי חקירת סיבות מוות בפני השופט החוקר, בסמכות חוק ייחודי.', to: '/causes-of-death',
    points: ['חקירות בפני שופט חוקר', 'בירור נסיבות מוות', 'ייצוג משפחות', 'הליכים לפי חוק חקירת סיבות מוות'],
  },
  {
    iconKey: 'wheelchair', label: 'נכות כללית וניידות', sub: 'ביטוח לאומי', desc: 'ייצוג מול ועדות רפואיות לקביעת נכות ומיצוי קצבאות ניידות.', to: '/damages',
    points: ['ועדות רפואיות', 'קצבת ניידות', 'נכות כללית', 'ערעורים על החלטות'],
  },
  {
    iconKey: 'soldier', label: 'נכי צה"ל', sub: 'ומשרד הביטחון', desc: 'ייצוג חיילים ומשוחררים מול משרד הביטחון לקביעת נכות ומיצוי קצבאות.', to: '/damages',
    points: ['תביעות למשרד הביטחון', 'ועדות רפואיות צבאיות', 'קצבאות ומענקים', 'הכרה בנכות'],
  },
]

const newsItems = [
  {
    img: '/pics/01_דף_הבית/01_dcd181_5c5efc732261430f88836392a1f161f7~mv2.jpg',
    tag: 'ביטוח לאומי · תאונות עבודה',
    title: 'מדריך גלישה לקה באירוע מוחי בים — הוכר כנפגע עבודה',
    text: 'בית הדין לעבודה קבע כי יש להכיר באירוע מוחי שנגרם למדריך גלישה כתאונת עבודה. ועדה רפואית קבעה נכות רפואית צמיתה בשיעור 64% המזכה אותו בקצבה חודשית.',
  },
  {
    img: '/pics/01_דף_הבית/02_dcd181_de7fc8d3ea464a6bbb9fc16ccb194920~mv2.jpeg',
    tag: 'פסק דין תקדימי · בית המשפט העליון',
    title: 'אופניים חשמליים אינם רכב מנועי — הלכה חדשה!',
    text: 'בית המשפט העליון קיבל את טענותינו וקבע הלכה חדשה: רוכבים שנפגעו מרכב יוכלו לתבוע פיצויים ישירות מחברות הביטוח של הרכב הפוגע. פורסם בישראל היום.',
  },
  {
    img: '/pics/01_דף_הבית/03_dcd181_1b2acefdc90d4a6baa839e1f40abbae4~mv2.jpg',
    tag: 'הרצאה · לשכת עורכי הדין חיפה',
    title: 'עו"ד ערן בקר מרצה בנושא רשלנות רפואית בפני 200 עו"ד',
    text: 'עו"ד בקר הרצה בהשתלמות "תביעות נזיקין — רשלנות רפואית בחדרי מיון" בלשכת עורכי הדין בחיפה, בריכוזו כיו"ר פורום נזיקין, ביטוח וביטוח לאומי.',
  },
  {
    img: '/pics/01_דף_הבית/04_dcd181_ec5e655e9db04fc2841312e8a4fbe6eb~mv2.jpg',
    tag: 'פיצויים · תאונות עבודה',
    title: 'כ-6.5 מיליון ₪ לתושב הצפון שנפגע במהלך עבודתו',
    text: 'בית המשפט המחוזי קיבל את דרישתנו לחשוף את כל חומר החקירה שנאסף על ידי אגף הפיקוח על העבודה — בניגוד לעמדת המדינה — ופסק פיצויים חריגים.',
  },
]

export default function Home() {
  useRevealOnScroll()

  const [areaPopup, setAreaPopup] = useState(null)
  const [articleIndex, setArticleIndex] = useState(null)
  const [zoomImg, setZoomImg] = useState(null)

  // Escape key closes modals
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') {
        if (zoomImg) setZoomImg(null)
        else if (areaPopup) setAreaPopup(null)
        else setArticleIndex(null)
      }
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [])

  // Lock body scroll when modal open
  useEffect(() => {
    document.body.style.overflow = (areaPopup !== null || articleIndex !== null || zoomImg !== null) ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [areaPopup, articleIndex])

  const openArticle = useCallback((i) => setArticleIndex(i), [])
  const closeArticle = useCallback(() => setArticleIndex(null), [])
  const prevArticle = useCallback(() => setArticleIndex(prev => prev > 0 ? prev - 1 : newsItems.length - 1), [])
  const nextArticle = useCallback(() => setArticleIndex(prev => prev < newsItems.length - 1 ? prev + 1 : 0), [])

  const currentArticle = articleIndex !== null ? newsItems[articleIndex] : null

  return (
    <>
      {/* HERO — framed dark navy with gold corner brackets */}
      <section className="hero-framed" id="home">
        <svg className="hero-framed-svg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
          <rect className="hero-border-outer" fill="none" stroke="rgba(201,168,76,0.22)" strokeWidth="1" />
          <rect className="hero-border-inner" fill="none" stroke="rgba(201,168,76,0.14)" strokeWidth="1" />
          <circle className="hero-center-glow" fill="rgba(201,168,76,0.04)" />
          <path className="hero-corner hero-corner-tl" d="M0 45 L0 0 L45 0" stroke="rgba(201,168,76,0.7)" strokeWidth="2" fill="none" strokeLinecap="square" strokeLinejoin="miter" />
          <path className="hero-corner hero-corner-tr" d="M0 0 L45 0 L45 45" stroke="rgba(201,168,76,0.7)" strokeWidth="2" fill="none" strokeLinecap="square" strokeLinejoin="miter" />
          <path className="hero-corner hero-corner-bl" d="M0 0 L0 45 L45 45" stroke="rgba(201,168,76,0.7)" strokeWidth="2" fill="none" strokeLinecap="square" strokeLinejoin="miter" />
          <path className="hero-corner hero-corner-br" d="M0 45 L45 45 L45 0" stroke="rgba(201,168,76,0.7)" strokeWidth="2" fill="none" strokeLinecap="square" strokeLinejoin="miter" />
        </svg>

        <div className="hero-framed-content">
          <p className="hero-framed-intro">נפגעתם? חליתם?</p>
          <h1 className="hero-framed-headline">
            תנו לנו להילחם בנחישות
            <br />
            <span className="accent">למיצוי כל זכויותיכם!</span>
          </h1>
          <div className="hero-framed-divider" aria-hidden="true"></div>
          <p className="hero-framed-sub">משרד בוטיק מוביל מאז 2003 &middot; נזיקין, ביטוח, רשלנות רפואית וביטוח לאומי &middot; ליווי אישי בכל תיק</p>
          <div className="hero-framed-btns">
            <a href="#contact" className="btn-teal">קבעו ייעוץ חינם &#8592;</a>
            <a href="tel:049001056" className="btn-outline-white">&#128222; 04-9001056</a>
          </div>
        </div>
      </section>

      {/* NEWS — directly below hero */}
      <section className="section section-alt news-section" id="news">
        <div className="container">
          <div className="reveal">
            <div className="teal-rule"></div>
          </div>
          <div className="news-grid">
            {newsItems.map((item, i) => (
              <div className="news-card reveal" key={i} style={{ transitionDelay: `${i * 0.1}s`, cursor: 'pointer' }} onClick={() => openArticle(i)}>
                <div className="news-img"><img src={item.img} alt={item.title} /></div>
                <div className="news-body">
                  <p className="news-tag">{item.tag}</p>
                  <h3 className="news-title">{item.title}</h3>
                  <p className="news-text">{item.text}</p>
                  <span className="news-link">צפה בכתבה &#8592;</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEDIA CARDS — סיקור תקשורתי */}
      <MediaCards />

      {/* PRACTICE AREAS */}
      <section className="section section-light" id="areas">
        <div className="container">
          <div className="areas-intro reveal">
            <div className="areas-intro-text">
              <h2 className="section-title">תחומי עיסוק</h2>
              <p className="section-sub">כיסוי משפטי מקיף לכל נפגע גוף — אנחנו כאן בכל שלב של הדרך.</p>
              <div className="teal-rule"></div>
            </div>
            <a href="#contact" className="areas-intro-cta">לייעוץ ראשוני חינם &#8592;</a>
          </div>
          <div className="areas-grid stagger-reveal">
            {practiceAreas.map((area, i) => (
              <div className="area-card" key={i} onClick={() => setAreaPopup(area)} style={{ cursor: 'pointer' }}>
                <span className="area-icon"><AreaIcon iconKey={area.iconKey} /></span>
                <div className="area-label">{area.label}</div>
                {area.sub && (
                  <div className="area-sub">
                    {area.sub === 'ביטוח לאומי' && <BlSymbol />}
                    {area.sub}
                  </div>
                )}
                <div className="area-desc">{area.desc}</div>
                <span className="area-link">למידע נוסף &#8592;</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRACTICE AREA POPUP */}
      {areaPopup && (
        <div className="area-popup-overlay active" onClick={(e) => { if (e.target === e.currentTarget) setAreaPopup(null) }}>
          <div className="area-popup">
            <button className="area-popup-close" onClick={() => setAreaPopup(null)} aria-label="סגור">&times;</button>
            <span className="area-popup-icon"><AreaIcon iconKey={areaPopup.iconKey} size={40} /></span>
            <h3 className="area-popup-title">{areaPopup.label}</h3>
            {areaPopup.sub && (
              <div className="area-popup-sub">
                {areaPopup.sub === 'ביטוח לאומי' && <BlSymbol />}
                {areaPopup.sub}
              </div>
            )}
            <p className="area-popup-desc">{areaPopup.desc}</p>
            <ul className="area-popup-points">
              {areaPopup.points.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
            <div className="area-popup-actions">
              <Link to={areaPopup.to} className="btn-teal" onClick={() => setAreaPopup(null)}>למידע המלא &#8592;</Link>
              <a
                href={`https://wa.me/9720522611850?text=${encodeURIComponent('שלום, אני מעוניין/ת בייעוץ בנושא ' + areaPopup.label)}`}
                target="_blank" rel="noopener noreferrer"
                className="btn-outline-white"
                style={{ background: 'var(--color-surface)', border: '2px solid var(--color-border)', color: 'var(--color-text)' }}
              >💬 וואטסאפ</a>
            </div>
          </div>
        </div>
      )}

      {/* ARTICLE POPUP */}
      {currentArticle && (
        <div className="article-popup-overlay" onClick={(e) => { if (e.target === e.currentTarget) closeArticle() }}>
          <div className="article-popup">
            <button className="article-popup-close" onClick={closeArticle} aria-label="סגור">&times;</button>
            <div className="article-popup-image-wrap">
              <img src={currentArticle.img} alt={currentArticle.title} className="article-popup-img" onClick={() => setZoomImg(currentArticle.img)} />
            </div>
            <div className="article-popup-footer">
              <div className="article-popup-info">
                <span className="article-popup-tag">{currentArticle.tag}</span>
                <h3 className="article-popup-title">{currentArticle.title}</h3>
              </div>
              <div className="article-popup-nav">
                <button className="article-nav-btn" onClick={nextArticle}>&#8594;</button>
                <span className="article-popup-counter">{articleIndex + 1} / {newsItems.length}</span>
                <button className="article-nav-btn" onClick={prevArticle}>&#8592;</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ZOOM VIEWER */}
      {zoomImg && <ZoomViewer src={zoomImg} onClose={() => setZoomImg(null)} />}

      {/* TESTIMONIALS */}
      <TestimonialsCarousel />

      {/* ABOUT */}
      <section className="section" id="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-text reveal-right">
              <p className="section-eyebrow">אודות הפירמה</p>
              <h2 className="section-title">מעל 21 שנה של נחישות משפטית</h2>
              <div className="teal-rule" style={{ marginBottom: 28 }}></div>
              <p>ערן בקר חברת עורכי-דין הינו משרד בוטיק מוביל ומוכר שנוסד בשנת 2003, המתמחה במימוש זכויות נפגעי גוף — נזיקין, ביטוח, רשלנות רפואית וביטוח לאומי.</p>
              <p>המשרד מלווה את לקוחותיו החל משלב בדיקת היתכנות הגשת התביעה, דרך מיצוי ומימוש זכויותיהם, ניהול משא ומתן מקצועי ועיקש, וכלה בייצוג בפני הערכאות המשפטיות.</p>
              <p>לעו"ד ערן בקר תפקיד משמעותי כמרצה ורכז אקדמי בפיתוח תוכניות הכשרה לעורכי דין, כיו"ר פורום נזיקין, ביטוח וביטוח לאומי ומשנה ליו"ר לשכת עורכי הדין מחוז חיפה.</p>
              <div className="badges-row">
                <span className="badge-chip">DUNS 100</span>
                <span className="badge-chip">BDi CODE</span>
                <span className="badge-chip">מוביל בישראל</span>
                <span className="badge-chip">משרד בוטיק</span>
              </div>
              <div style={{ marginTop: 28 }}>
                <Link to="/about" className="btn-teal">קראו עוד אודות הפירמה &#8592;</Link>
              </div>
            </div>
            <div className="about-visual reveal-left" style={{ transitionDelay: '.15s' }}>
              <img src="/pics/03_הצוות_המשפטי/03_dcd181_6838d586917e45cd9c3647aa83459cbe~mv2.jpg" alt='עו"ד ערן בקר — מייסד ושותף בכיר' style={{ width: '100%', maxWidth: 350, borderRadius: 16, border: '2px solid var(--border2)', boxShadow: '0 8px 32px rgba(0,0,0,.2)' }} />
              <div className="big-text" style={{ marginTop: 16 }}>ערן בקר — חברת עורכי דין</div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section section-alt" id="contact">
        <div className="container">
          <div className="reveal">
            <h2 className="section-title">צרו קשר — הייעוץ הראשון חינם</h2>
            <p className="section-sub">מלאו את הטופס ונחזור אליכם בהקדם, או התקשרו ישירות.</p>
            <div className="teal-rule"></div>
          </div>
          <div className="contact-wrap">
            <div className="contact-info-box reveal">
              <h3>פרטי המשרד</h3>
              <div className="contact-item">
                <div className="contact-icon">&#128205;</div>
                <div className="contact-detail">
                  <span className="clabel">כתובת</span>
                  <span className="cvalue">רח' הרצל 75, נהריה 22446<br />בסמוך לעיריית נהריה</span>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">&#128222;</div>
                <div className="contact-detail">
                  <span className="clabel">טלפון רב קווי</span>
                  <a href="tel:049001056" className="cvalue">04-9001056</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">&#128172;</div>
                <div className="contact-detail">
                  <span className="clabel">וואטסאפ</span>
                  <a href="https://wa.me/9720522611850" target="_blank" rel="noopener noreferrer" className="cvalue">052-2611850</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">&#128224;</div>
                <div className="contact-detail">
                  <span className="clabel">פקס</span>
                  <span className="cvalue">04-9001057</span>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">&#9993;&#65039;</div>
                <div className="contact-detail">
                  <span className="clabel">דוא"ל</span>
                  <a href="mailto:office@ebeker.co.il" className="cvalue">office@ebeker.co.il</a>
                </div>
              </div>
            </div>
            <div className="contact-form-box reveal" style={{ transitionDelay: '.15s' }}>
              <h3>שלחו הודעה</h3>
              <ContactForm />
            </div>
          </div>
          <div className="map-wrap reveal" style={{ marginTop: 48, background: '#1B3A5C', borderRadius: 16, padding: 32, boxShadow: '0 4px 24px rgba(0,0,0,.12)' }}>
            <p style={{ textAlign: 'center', marginBottom: 6, fontSize: '0.85rem', color: '#6BAAF0', fontWeight: 600, letterSpacing: 1 }}>מיקום המשרד</p>
            <h3 style={{ textAlign: 'center', marginBottom: 20, fontSize: '1.5rem', color: '#fff', fontWeight: 800 }}>המשרד שלנו</h3>
            <div style={{ width: 60, height: 3, background: '#4A90D9', borderRadius: 2, margin: '0 auto 24px' }}></div>
            <div className="map-container">
              <iframe src="https://maps.google.com/maps?q=%D7%94%D7%A8%D7%A6%D7%9C+75+%D7%A0%D7%94%D7%A8%D7%99%D7%94&t=&z=16&ie=UTF8&iwloc=&output=embed" width="100%" height="350" style={{ border: 0, borderRadius: 12 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="מפת המשרד"></iframe>
            </div>
            <p style={{ textAlign: 'center', marginTop: 16, color: '#94a3b8', fontSize: '0.95rem' }}>&#128205; רח' הרצל 75, נהריה 22446 — בסמוך לעיריית נהריה</p>
          </div>
        </div>
      </section>
    </>
  )
}
