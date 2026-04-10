import { useEffect, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import useRevealOnScroll from '../hooks/useRevealOnScroll'
import TestimonialsCarousel from '../components/TestimonialsCarousel'
import ContactForm from '../components/ContactForm'
import ZoomViewer from '../components/ZoomViewer'

// Clean SVG icons for each practice area
const Icon = ({ d, size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />
  </svg>
)

const icons = {
  scale: 'M12 3v18m-7-7l7-7 7 7M3 13h4m10 0h4M5 21h14',
  medical: 'M12 2a5 5 0 015 5v1H7V7a5 5 0 015-5zM7 8h10v6a5 5 0 01-10 0V8zm5 14v-4m-3 0h6',
  shield: 'M12 2l8 4v6c0 5.25-3.5 10-8 12-4.5-2-8-6.75-8-12V6l8-4z',
  hardhat: 'M4 18v-1a8 8 0 0116 0v1M2 18h20M12 2v5M7.5 4.2L9 8m7-3.8L15 8',
  car: 'M5 17h14M5 17a2 2 0 01-2-2V9l3-5h12l3 5v6a2 2 0 01-2 2M5 17a2 2 0 002 2h1a2 2 0 002-2m4 0a2 2 0 002 2h1a2 2 0 002-2M7 9h10',
  anchor: 'M12 2a3 3 0 100 6 3 3 0 000-6zm0 6v14m-7-4a7 7 0 0014 0M5 12H2m20 0h-3',
  book: 'M4 4h16v16H4zM4 4l8 4 8-4M12 8v12',
  alert: 'M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z',
  lungs: 'M12 4v8m-4-4C5 8 3 11 3 14s2 6 5 6 4-2 4-4V8m0 8c0 2 1 4 4 4s5-3 5-6-2-6-5-6',
  coins: 'M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83',
  document: 'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-2 0v6h6M8 13h8m-8 4h8m-8-8h2',
  scroll: 'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zM8 13h8m-8 4h4',
  search: 'M11 4a7 7 0 100 14 7 7 0 000-14zm10 17l-4.35-4.35',
  wheelchair: 'M12 8a2 2 0 100-4 2 2 0 000 4zm-2 4v6a4 4 0 008 0m-6-8l6 2m-10 0h4',
  medal: 'M12 2l2 4 4.5.7-3.3 3.1.8 4.5L12 12.3 8 14.3l.8-4.5L5.5 6.7 10 6l2-4zm-4 14l-4 6h16l-4-6',
}

const practiceAreas = [
  {
    iconKey: 'scale', label: 'נזיקין כללי', desc: 'ייצוג נפגעי גוף בתביעות פיצויים בגין נזקי גוף מכל סוג — עם ניסיון של עשרות שנים.', to: '/damages',
    points: ['תאונות דרכים ונזקי גוף', 'נפילות ברחוב ובמקום הציבורי', 'תאונות עבודה ומחלות מקצוע', 'פיצויים על כאב וסבל, אובדן שכר ונכות'],
  },
  {
    iconKey: 'medical', label: 'רשלנות רפואית', desc: 'תביעות כנגד בתי חולים, רופאים וגורמים רפואיים בגין טיפול רשלני שגרם לנזק.', to: '/medical-malpractice',
    points: ['אבחון שגוי או מאוחר', 'רשלנות בניתוח או בטיפול', 'חוסר במתן מידע והסכמה מדעת', 'נזק ליילוד ורשלנות בלידה'],
  },
  {
    iconKey: 'shield', label: 'ביטוח', desc: 'תביעות מול חברות ביטוח בנושאי נכות, תאונות ואובדן כושר עבודה.', to: '/insurance',
    points: ['תביעות אובדן כושר עבודה', 'ביטוח חיים ומחלות קשות', 'ביטוח תאונות אישיות', 'דחיית תביעת ביטוח'],
  },
  {
    iconKey: 'hardhat', label: 'תאונות עבודה', sub: 'ביטוח לאומי', desc: 'מיצוי זכויות עובדים שנפגעו בתאונת עבודה מול המוסד לביטוח לאומי וגורמים נוספים.', to: '/damages',
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
    iconKey: 'book', label: 'תאונות תלמידים', desc: 'ייצוג ילדים ומשפחותיהם שנפגעו בתאונות בבית הספר או בפעילויות חינוכיות.', to: '/student-accidents',
    points: ['פגיעות בשטח בית הספר', 'טיולים ופעילויות חוץ', 'ביטוח תלמידים', 'אחריות מוסדות חינוך'],
  },
  {
    iconKey: 'alert', label: 'תאונות קטלניות', desc: 'ייצוג משפחות שכולות ותובעים בתאונות שגרמו לאובדן חיים — בנחישות ובמקצועיות.', to: '/damages',
    points: ['תביעות תלויים', 'פיצוי על אובדן חיים', 'ייצוג משפחות שכולות', 'חקירת נסיבות המוות'],
  },
  {
    iconKey: 'lungs', label: 'מחלות מקצוע', sub: 'ביטוח לאומי', desc: 'הכרה במחלות שנגרמו עקב תנאי עבודה ומיצוי זכויות מהמוסד לביטוח לאומי.', to: '/damages',
    points: ['מחלות ריאה תעסוקתיות', 'חשיפה לחומרים מסוכנים', 'לחץ ושחיקה בעבודה', 'ועדות רפואיות'],
  },
  {
    iconKey: 'coins', label: 'פטור ממס הכנסה', desc: 'קבלת פטור ממס הכנסה על פיצויים ומענקים לנפגעים — חסכון כספי משמעותי.', to: '/tax-exemption',
    points: ['פטור לנכי עבודה', 'פטור לנכי תאונות דרכים', 'ערעור על החלטות', 'חישוב הטבות מס'],
  },
  {
    iconKey: 'document', label: 'צוואות וירושות', desc: 'עריכת צוואות, ניהול עיזבונות וייצוג בסכסוכי ירושה בצורה מקצועית ורגישה.', to: '/wills',
    points: ['עריכת צוואה', 'קיום צוואה', 'סכסוכי ירושה', 'ניהול עיזבונות'],
  },
  {
    iconKey: 'scroll', label: 'ייפוי כוח מתמשך', sub: 'וצו אפוטרופסות', desc: 'ליווי משפטי מלא בהכנת מסמכים וניהול הליכים בנושאי כשרות משפטית.', to: '/power-of-attorney',
    points: ['ייפוי כוח מתמשך', 'צווי אפוטרופסות', 'הנחיות רפואיות מקדימות', 'הגנה על הזכויות שלכם'],
  },
  {
    iconKey: 'search', label: 'חקירת סיבות מוות', desc: 'ייצוג משפחות בהליכי חקירת סיבות מוות בפני השופט החוקר, בסמכות חוק ייחודי.', to: '/causes-of-death',
    points: ['חקירות בפני שופט חוקר', 'בירור נסיבות מוות', 'ייצוג משפחות', 'הליכים לפי חוק חקירת סיבות מוות'],
  },
  {
    iconKey: 'wheelchair', label: 'נכות כללית וניידות', sub: 'ביטוח לאומי', desc: 'ייצוג מול ועדות רפואיות לקביעת נכות ומיצוי קצבאות ניידות.', to: '/damages',
    points: ['ועדות רפואיות', 'קצבת ניידות', 'נכות כללית', 'ערעורים על החלטות'],
  },
  {
    iconKey: 'medal', label: 'נכי צה"ל', sub: 'ומשרד הביטחון', desc: 'ייצוג חיילים ומשוחררים מול משרד הביטחון לקביעת נכות ומיצוי קצבאות.', to: '/damages',
    points: ['תביעות למשרד הביטחון', 'ועדות רפואיות צבאיות', 'קצבאות ומענקים', 'הכרה בנכות'],
  },
]

const heroSliderArticles = [
  {
    img: '/pics/04_מהעיתונות_נזיקין_וביטוח/01_dcd181_04c73d6853ee4c34aa6db355bba3e575~mv2.jpg',
    source: 'ישראל היום',
    title: 'אופניים חשמליים אינם רכב מנועי — הלכה חדשה של בית המשפט העליון',
  },
  {
    img: '/pics/04_מהעיתונות_נזיקין_וביטוח/02_dcd181_304013a8411f44b2a67328cdc4c9dab6~mv2.jpg',
    source: 'ידיעות אחרונות',
    title: 'כ-6.5 מיליון ₪ לתושב הצפון שנפגע במהלך עבודתו',
  },
  {
    img: '/pics/05_מהעיתונות_ביטוח_לאומי/01_dcd181_f5556a8462a5469fa41dcfe72a181f84~mv2.jpg',
    source: 'כלכליסט',
    title: 'מדריך גלישה לקה באירוע מוחי בים — הוכר כנפגע עבודה',
  },
  {
    img: '/pics/05_מהעיתונות_ביטוח_לאומי/02_dcd181_a39280f18b0040fc843753ba4d8b0437~mv2.jpg',
    source: 'גלובס',
    title: 'פסיקה תקדימית בנושא הכרה בנכות מעבודה וקצבה חודשית',
  },
  {
    img: '/pics/06_מהעיתונות_משרד_הביטחון/01_dcd181_fb841f1cf79a404cac7f555193af5a63~mv2.jpg',
    source: 'משרד הביטחון',
    title: 'נכי צה"ל — הכרה מורחבת בזכויות ובמימוש קצבאות',
  },
  {
    img: '/pics/06_מהעיתונות_משרד_הביטחון/02_dcd181_7f27376b889d46d097bfb7456a291a33~mv2.jpg',
    source: 'מעריב',
    title: 'עו"ד ערן בקר מרצה בלשכת עורכי הדין בחיפה — פורום נזיקין וביטוח',
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

  // Hero article slider
  const [heroSlide, setHeroSlide] = useState(0)
  const [slidesPerView, setSlidesPerView] = useState(3)
  const heroTotal = heroSliderArticles.length
  const heroMaxIndex = Math.max(0, heroTotal - slidesPerView)

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth
      if (w < 640) setSlidesPerView(1)
      else if (w < 968) setSlidesPerView(2)
      else setSlidesPerView(3)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  useEffect(() => {
    if (heroSlide > heroMaxIndex) setHeroSlide(heroMaxIndex)
  }, [heroMaxIndex, heroSlide])

  useEffect(() => {
    const id = setInterval(() => {
      setHeroSlide(i => (i >= heroMaxIndex ? 0 : i + 1))
    }, 5000)
    return () => clearInterval(id)
  }, [heroMaxIndex])

  const heroPrev = useCallback(() => {
    setHeroSlide(i => (i <= 0 ? heroMaxIndex : i - 1))
  }, [heroMaxIndex])
  const heroNext = useCallback(() => {
    setHeroSlide(i => (i >= heroMaxIndex ? 0 : i + 1))
  }, [heroMaxIndex])

  const activeSlideIdx = heroSlide + Math.floor(slidesPerView / 2)

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
      {/* HERO — solid navy + article slider */}
      <section className="hero hero-home" id="home">
        <div className="hero-inner hero-inner-center">
          <h1 className="hero-firm-title">ערן בקר</h1>
          <p className="hero-firm-sub">חברת עורכי דין</p>
          <div className="hero-firm-divider" aria-hidden="true"></div>
          <p className="hero-tagline-gold">נפגעתם? חליתם? תנו לנו להילחם בנחישות למיצוי כל זכויותיכם!</p>

          <div className="hero-slider-wrap">
            <button className="slider-arrow prev" onClick={heroPrev} aria-label="הקודם">&#8594;</button>
            <button className="slider-arrow next" onClick={heroNext} aria-label="הבא">&#8592;</button>

            <div className="article-slider-viewport">
              <div
                className="article-slider-track"
                style={{
                  '--total-slides': heroTotal,
                  '--slides-per-view': slidesPerView,
                  transform: `translateX(calc(${heroSlide} * (100% / ${heroTotal})))`,
                }}
              >
                {heroSliderArticles.map((a, i) => (
                  <div key={i} className={`article-slide${i === activeSlideIdx ? ' active' : ''}`}>
                    <div className="article-slide-inner">
                      <div className="article-slide-img">
                        <img src={a.img} alt={a.title} loading="lazy" />
                      </div>
                      <div className="article-slide-body">
                        <span className="article-slide-source">{a.source}</span>
                        <h3 className="article-slide-title">{a.title}</h3>
                        <a href="#news" className="article-slide-link">צפה בכתבה &#8592;</a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="slider-dots">
              {Array.from({ length: heroMaxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  className={`slider-dot${i === heroSlide ? ' active' : ''}`}
                  onClick={() => setHeroSlide(i)}
                  aria-label={`עבור לשקף ${i + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="hero-btns">
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
                <span className="area-icon"><Icon d={icons[area.iconKey]} /></span>
                <div className="area-label">{area.label}</div>
                {area.sub && <div className="area-sub">{area.sub}</div>}
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
            <span className="area-popup-icon"><Icon d={icons[areaPopup.iconKey]} size={40} /></span>
            <h3 className="area-popup-title">{areaPopup.label}</h3>
            {areaPopup.sub && <div className="area-popup-sub">{areaPopup.sub}</div>}
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
