import { useState, useEffect, useCallback, useRef } from 'react'
import ZoomViewer from './ZoomViewer'

const cards = [
  {
    id: 1,
    cat: 'נזיקין · אוקטובר השחור',
    title: 'ייצוג משפחות חטופים בכנסת',
    source: 'כנסת ישראל',
    type: 'videoImage',
    thumbnail: '/videos/יצוג_משפחות_חטופים_בכנסת.mp4',
    thumbKind: 'video',
    extraImage: '/pics/549888778_3116542425178919_1714678307204409653_n.jpg',
    description: 'עו״ד ערן בקר ייצג משפחות חטופים בכנסת ישראל ונאם באירוע תמיכה בחטופים ומשפחותיהם בלשכת עורכי הדין מחוז חיפה',
  },
  {
    id: 2,
    cat: 'נזיקין · אסון מירון',
    title: 'ייצוג משפחות נפגעי אסון מירון',
    source: 'ערוץ 12 / ערוץ 14 / הצהרה',
    type: 'videoCarousel',
    thumbnail: '/pics/WhatsApp_Image_2026-04-10_at_11_10_25.jpeg',
    thumbKind: 'image',
    description: 'עו״ד ערן בקר מייצג משפחות נפגעי אסון מירון — ראיונות בערוץ 12 ו-14 על מסקנות ועדת החקירה הממלכתית, והצהרות לעיתונות מחוץ לבית המשפט',
    videos: [
      { src: '/videos/ראיון_ערן_בערוץ_12_ועדת_חקירה_אסון_מירון.mp4', label: 'ראיון ערוץ 12 — ועדת חקירה' },
      { src: '/videos/ראיון_ערן_ערוץ_14_אסון_מירון.mp4', label: 'ראיון ערוץ 14' },
      { src: '/videos/fixed.mp4', label: 'הצהרה — מסיבת עיתונאים' },
      { src: '/videos/הצהרה_באנדלית_אסון_מירון.mp4', label: 'הצהרה באנגלית' },
    ],
    images: [
      '/pics/WhatsApp_Image_2026-04-10_at_11_10_25.jpeg',
      '/pics/תמונה-_הצהרה_מסיבת_עיתונאים_אסון_מירון.png',
    ],
  },
  {
    id: 3,
    cat: 'נזיקין · פסיקה תקדימית',
    title: 'תקדים בעליון: אופניים חשמליים אינם רכב מנועי',
    source: 'גלובס',
    date: 'אוקטובר 2020',
    type: 'article',
    thumbnail: '/pics/5-550x880.20201014T171252.png',
    thumbKind: 'image',
    thumbBg: '#ffffff',
    articleImage: '/pics/כתבה_גלובס_תקדים_בעליון_-_אופניים_חשמליים_אינם_רכב_מנועי.jpg',
    description: 'בית המשפט העליון קבע בהלכה תקדימית כי אופניים חשמליים אינם רכב מנועי — פסיקה שמשנה את מצב הרוכבים הנפגעים לטובה ומאפשרת פיצוי מלא כמו הולכי רגל. עו״ד ערן בקר ייצג בתיק התקדימי.',
    badges: ['כתבה', 'תקדים'],
    links: [
      { label: 'ישראל היום', url: 'https://www.israelhayom.co.il/article/809325' },
      { label: 'וואלה חדשות', url: 'https://news.walla.co.il/item/3391989' },
      { label: 'גלובס', url: 'https://www.globes.co.il/news/article.aspx?did=1001345714' },
      { label: 'ynet', url: 'https://www.ynet.co.il/wheels/news/article/r17ifJfwP' },
      { label: 'פוסטה', url: 'https://posta.co.il/article/89780787-2/' },
    ],
  },
  {
    id: 4,
    cat: 'נזיקין · תאונה אישית',
    title: 'בת 70 שהחליקה על תרמיל פול — פוצתה ב-165,000 ₪',
    source: 'וואלה חדשות',
    date: '2024',
    type: 'article',
    description: 'תביעה מאתגרת נגד חברת הביטוח הסתיימה בפיצוי של 165,000 ₪. המשרד פועל למקסם את הפיצוי ללקוחות ובמקביל להביא את המזיק להכרה ברשלנותו — כדי למנוע פגיעה באנשים נוספים.',
    badges: ['כתבה'],
    primaryLink: { label: 'לכתבה המלאה ←', url: 'https://news.walla.co.il/item/3560494' },
  },
]

const typeBadges = {
  article: ['כתבה'],
  video: ['וידאו'],
  audio: ['רדיו'],
  both: ['וידאו', 'כתבה'],
  videoImage: ['וידאו', 'תמונה'],
  videoCarousel: ['וידאו', 'תמונות'],
}

function ThumbSvg({ type }) {
  if (type === 'article') {
    return (
      <svg className="mc-thumb-svg" viewBox="0 0 320 160" preserveAspectRatio="none" aria-hidden="true">
        <rect x="30" y="14" width="130" height="12" rx="2" fill="rgba(201,168,76,0.28)" />
        <g stroke="rgba(201,168,76,0.2)" strokeWidth="2" strokeLinecap="round">
          <line x1="30" y1="42" x2="270" y2="42" />
          <line x1="30" y1="57" x2="286" y2="57" />
          <line x1="30" y1="72" x2="250" y2="72" />
          <line x1="30" y1="94" x2="290" y2="94" />
          <line x1="30" y1="109" x2="276" y2="109" />
          <line x1="30" y1="124" x2="230" y2="124" />
        </g>
      </svg>
    )
  }
  if (type === 'video' || type === 'both') {
    return (
      <svg className="mc-thumb-svg" viewBox="0 0 320 160" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <circle cx="160" cy="80" r="44" fill="none" stroke="rgba(201,168,76,0.35)" strokeWidth="2" />
        <circle cx="160" cy="80" r="30" fill="rgba(201,168,76,0.08)" />
        <polygon points="152,63 152,97 184,80" fill="rgba(201,168,76,0.55)" />
        <line x1="30" y1="138" x2="290" y2="138" stroke="rgba(201,168,76,0.14)" strokeWidth="2" strokeLinecap="round" />
        <line x1="50" y1="148" x2="270" y2="148" stroke="rgba(201,168,76,0.1)" strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  }
  if (type === 'audio') {
    const bars = Array.from({ length: 14 }).map((_, i) => {
      const x = 50 + i * 16
      const h = 18 + Math.abs(Math.sin(i * 0.85)) * 54
      return <rect key={i} x={x} y={80 - h / 2} width="6" height={h} rx="2" />
    })
    return (
      <svg className="mc-thumb-svg" viewBox="0 0 320 160" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <g fill="rgba(201,168,76,0.38)">{bars}</g>
        <circle cx="160" cy="80" r="22" fill="none" stroke="rgba(201,168,76,0.25)" strokeWidth="1.5" />
      </svg>
    )
  }
  return null
}

function VideoCarousel({ videos }) {
  const [i, setI] = useState(0)
  const videoRef = useRef(null)
  const current = videos[i]

  useEffect(() => {
    const v = videoRef.current
    if (v) {
      try { v.pause() } catch {}
      v.currentTime = 0
      try { v.load() } catch {}
    }
  }, [i])

  const goPrev = () => setI((n) => (n === 0 ? videos.length - 1 : n - 1))
  const goNext = () => setI((n) => (n === videos.length - 1 ? 0 : n + 1))

  return (
    <div className="mc-vc">
      <div className="mc-vc-stage">
        <button type="button" className="mc-arr-btn mc-arr-prev" onClick={goPrev} aria-label="הקודם">&#8594;</button>
        <button type="button" className="mc-arr-btn mc-arr-next" onClick={goNext} aria-label="הבא">&#8592;</button>
        <video ref={videoRef} key={current.src} src={current.src} controls autoPlay playsInline className="mc-vplayer-real" />
      </div>
      <p className="mc-vc-label">{current.label} <span className="mc-vc-count">({i + 1}/{videos.length})</span></p>
    </div>
  )
}

function Modal({ card, activeTab, setActiveTab, onClose }) {
  const isCombo = card.type === 'videoImage'
  const isCarousel = card.type === 'videoCarousel'
  const showVideo = card.type === 'video' || card.type === 'audio' || isCombo || (card.type === 'both' && activeTab === 'video')
  const showArticle = card.type === 'article' || (card.type === 'both' && activeTab === 'article')
  const [zoomSrc, setZoomSrc] = useState(null)

  return (
    <div className="mc-modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <div className="mc-modal" role="dialog" aria-modal="true">
        <div className="mc-modal-header">
          <div>
            <p className="mc-modal-cat">{card.cat}</p>
            <h3 className="mc-modal-title">{card.title}</h3>
          </div>
          <button className="mc-modal-close" onClick={onClose} aria-label="סגור">×</button>
        </div>

        {card.type === 'both' && (
          <div className="mc-modal-tabs">
            <button className={`mc-tab${activeTab === 'video' ? ' active' : ''}`} onClick={() => setActiveTab('video')}>צפה בוידאו</button>
            <button className={`mc-tab${activeTab === 'article' ? ' active' : ''}`} onClick={() => setActiveTab('article')}>קרא כתבה</button>
          </div>
        )}

        <div className="mc-modal-body">
          {isCarousel && (
            <>
              <VideoCarousel videos={card.videos} />
              {card.images && card.images.length > 0 && (
                <div className="mc-photos-row">
                  {card.images.map((src) => (
                    <img key={src} src={src} alt={card.title} className="mc-photos-item" />
                  ))}
                </div>
              )}
              {card.description && (
                <p className="mc-article-desc" style={{ marginTop: 14 }}>{card.description}</p>
              )}
            </>
          )}
          {!isCarousel && showVideo && (
            card.thumbKind === 'video' && card.thumbnail ? (
              <video src={card.thumbnail} controls autoPlay playsInline className="mc-vplayer-real" />
            ) : (
              <div className="mc-vplayer">
                <div className="mc-vplayer-play" aria-hidden="true">▶</div>
                <div className="mc-vplayer-info">
                  <h4>{card.title}</h4>
                  <p>{card.source} {card.duration && `· ${card.duration}`}</p>
                </div>
              </div>
            )
          )}
          {isCombo && card.extraImage && (
            <img src={card.extraImage} alt={card.title} className="mc-article-image" style={{ marginTop: 14 }} />
          )}
          {isCombo && card.description && (
            <p className="mc-article-desc" style={{ marginTop: 14 }}>{card.description}</p>
          )}
          {showArticle && (
            card.thumbKind === 'image' && card.thumbnail ? (
              <div className="mc-article-real">
                <img
                  src={card.articleImage || card.thumbnail}
                  alt={card.title}
                  className="mc-article-image mc-article-image-zoom"
                  onClick={() => setZoomSrc(card.articleImage || card.thumbnail)}
                />
                {card.description && <p className="mc-article-desc">{card.description}</p>}
                {card.links && card.links.length > 0 && (
                  <div className="mc-article-links">
                    <p className="mc-article-links-title">כיסוי תקשורתי:</p>
                    <ul>
                      {card.links.map((l) => (
                        <li key={l.url}>
                          <a href={l.url} target="_blank" rel="noopener noreferrer">{l.label}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {card.primaryLink && (
                  <a href={card.primaryLink.url} target="_blank" rel="noopener noreferrer" className="mc-article-cta">{card.primaryLink.label}</a>
                )}
              </div>
            ) : (
              <div className="mc-article-real">
                {card.description && <p className="mc-article-desc">{card.description}</p>}
                {card.primaryLink && (
                  <a href={card.primaryLink.url} target="_blank" rel="noopener noreferrer" className="mc-article-cta">{card.primaryLink.label}</a>
                )}
                {card.links && card.links.length > 0 && (
                  <div className="mc-article-links">
                    <p className="mc-article-links-title">כיסוי תקשורתי:</p>
                    <ul>
                      {card.links.map((l) => (
                        <li key={l.url}>
                          <a href={l.url} target="_blank" rel="noopener noreferrer">{l.label}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )
          )}
        </div>

        <div className="mc-modal-footer">
          <span className="mc-modal-source">{card.source}{card.date && ` · ${card.date}`}</span>
        </div>
      </div>
      {zoomSrc && (
        <ZoomViewer src={zoomSrc} onClose={() => setZoomSrc(null)} />
      )}
    </div>
  )
}

export default function MediaCards() {
  const [index, setIndex] = useState(0)
  const [slidesPerView, setSlidesPerView] = useState(3)
  const [selected, setSelected] = useState(null)
  const [activeTab, setActiveTab] = useState('video')

  useEffect(() => {
    const update = () => setSlidesPerView(window.innerWidth < 768 ? 1 : 3)
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const maxIndex = Math.max(0, cards.length - slidesPerView)

  useEffect(() => {
    if (index > maxIndex) setIndex(maxIndex)
  }, [maxIndex, index])

  const prev = useCallback(() => setIndex(i => (i <= 0 ? maxIndex : i - 1)), [maxIndex])
  const next = useCallback(() => setIndex(i => (i >= maxIndex ? 0 : i + 1)), [maxIndex])

  const openCard = useCallback((c) => {
    setSelected(c)
    setActiveTab(c.type === 'article' ? 'article' : 'video')
  }, [])
  const closeModal = useCallback(() => setSelected(null), [])

  useEffect(() => {
    if (!selected) return
    const onKey = (e) => { if (e.key === 'Escape') closeModal() }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [selected, closeModal])

  const stepCss = slidesPerView === 1 ? 'calc(100% + 16px)' : 'calc(33.3333% + 5px)'
  const trackStyle = { transform: `translateX(calc(${index} * ${stepCss}))` }

  return (
    <section className="media-cards-section" dir="rtl">
      <p className="mc-section-eyebrow">עדכונים</p>
      <h2 className="mc-section-title">חדשות ועדכונים</h2>
      <div className="mc-section-line" aria-hidden="true" />

      <div className="mc-slider-wrap">
        {cards.length > 1 && (
          <>
            <button className="mc-arr-btn mc-arr-prev" onClick={prev} aria-label="הקודם">&#8594;</button>
            <button className="mc-arr-btn mc-arr-next" onClick={next} aria-label="הבא">&#8592;</button>
          </>
        )}

        <div className="mc-viewport">
          <div className="mc-track" style={trackStyle}>
            {cards.map((c) => (
              <button type="button" key={c.id} className={`mc-card mc-card-${c.type}`} onClick={() => openCard(c)}>
                <div className={`mc-thumb${c.thumbBg ? ' mc-thumb--light' : ''}`} style={c.thumbBg ? { background: c.thumbBg } : undefined}>
                  {c.thumbKind === 'image' ? (
                    <img src={c.thumbnail} alt={c.title} className={`mc-thumb-media${c.thumbBg ? ' mc-thumb-media--contain' : ''}`} />
                  ) : c.thumbKind === 'video' ? (
                    <video src={c.thumbnail} className="mc-thumb-media" muted playsInline preload="metadata" />
                  ) : (
                    <ThumbSvg type={c.type} />
                  )}
                  <div className="mc-thumb-overlay" aria-hidden="true" />
                  <div className="mc-source-badge">
                    <span className="mc-source-dot" aria-hidden="true" />
                    <span>{c.source}</span>
                  </div>
                  <div className="mc-type-badge">
                    {(c.badges || typeBadges[c.type] || []).map((label) => (
                      <span key={label} className="mc-tbadge">{label}</span>
                    ))}
                    {c.duration && <span className="mc-tbadge">{c.duration}</span>}
                  </div>
                  {c.type !== 'article' && (
                    <span className="mc-play-circle" aria-hidden="true">▶</span>
                  )}
                </div>
                <div className="mc-card-body">
                  <p className="mc-card-cat">{c.cat}</p>
                  <h3 className="mc-card-title">{c.title}</h3>
                  {c.description && <p className="mc-card-desc">{c.description}</p>}
                  {(c.date || c.reads) && (
                    <div className="mc-card-meta">
                      {c.date && <span>{c.date}</span>}
                      {c.reads && <span>{c.reads}</span>}
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {cards.length > 1 && (
          <div className="mc-dots">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                className={`mc-dot${i === index ? ' active' : ''}`}
                onClick={() => setIndex(i)}
                aria-label={`עבור לשקף ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {selected && (
        <Modal card={selected} activeTab={activeTab} setActiveTab={setActiveTab} onClose={closeModal} />
      )}
    </section>
  )
}
