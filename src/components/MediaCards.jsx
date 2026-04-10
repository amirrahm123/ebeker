import { useState, useEffect, useCallback } from 'react'

const cards = [
  {
    id: 1,
    cat: 'נזיקין · תאונות עבודה',
    title: 'פיצוי של 6.5 מיליון ₪ לנפגע תאונת עבודה — פסיקה תקדימית',
    source: 'ידיעות אחרונות',
    date: 'מרץ 2024',
    reads: '4,200 קריאות',
    type: 'article',
  },
  {
    id: 2,
    cat: 'רשלנות רפואית · ערוץ 12',
    title: 'ע"ד ערן בקר בראיון על זכויות נפגעי רשלנות רפואית',
    source: 'ערוץ 12',
    date: 'ינואר 2024',
    reads: '8,100 צפיות',
    type: 'video',
    duration: '4:32',
  },
  {
    id: 3,
    cat: 'ביטוח לאומי · כאן 11',
    title: 'אופניים חשמליים — הלכה חדשה שמשנה את כל כללי הפיצוי',
    source: 'כאן 11',
    date: 'פברואר 2024',
    reads: '11,400 צפיות',
    type: 'both',
    duration: '6:15',
  },
  {
    id: 4,
    cat: 'ביטוח · גלי צה"ל',
    title: 'ראיון רדיו — איך חברות הביטוח מונעות פיצויים מנפגעים',
    source: 'גלי צה"ל',
    date: 'דצמבר 2023',
    reads: '2,800 האזנות',
    type: 'audio',
    duration: '12:10',
  },
  {
    id: 5,
    cat: 'נזיקין · ynet',
    title: 'תאונת דרכים קשה — כך תממשו את מלוא זכויותיכם',
    source: 'ynet',
    date: 'נובמבר 2023',
    reads: '6,500 קריאות',
    type: 'article',
  },
  {
    id: 6,
    cat: 'רשלנות רפואית · מako',
    title: 'ניתוח שהשתבש — משפחה קיבלה פיצוי של 3.2 מיליון ₪',
    source: 'מako',
    date: 'אוקטובר 2023',
    reads: '5,100 צפיות',
    type: 'both',
    duration: '3:45',
  },
]

const typeLabels = {
  article: 'כתבה',
  video: 'וידאו',
  audio: 'רדיו',
  both: 'וידאו + כתבה',
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

function Modal({ card, activeTab, setActiveTab, onClose }) {
  const showVideo = card.type === 'video' || card.type === 'audio' || (card.type === 'both' && activeTab === 'video')
  const showArticle = card.type === 'article' || (card.type === 'both' && activeTab === 'article')

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
          {showVideo && (
            <div className="mc-vplayer">
              <div className="mc-vplayer-play" aria-hidden="true">▶</div>
              <div className="mc-vplayer-info">
                <h4>{card.title}</h4>
                <p>{card.source} {card.duration && `· ${card.duration}`}</p>
              </div>
            </div>
          )}
          {showArticle && (
            <div className="mc-article">
              <div className="mc-article-line" />
              <div className="mc-article-line" />
              <div className="mc-article-line short" />
              <blockquote className="mc-pullquote">
                "פסק דין תקדימי שיקבע את הדרך לעתיד בתביעות של נפגעי גוף ויאפשר מימוש זכויות מלא."
              </blockquote>
              <div className="mc-article-line" />
              <div className="mc-article-line" />
              <div className="mc-article-line short" />
            </div>
          )}
        </div>

        <div className="mc-modal-footer">
          <span className="mc-modal-source">{card.source} · {card.date}</span>
          <div className="mc-modal-actions">
            <button type="button">שתף</button>
            <button type="button" className="primary">פתח מקור</button>
          </div>
        </div>
      </div>
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
      <p className="mc-section-eyebrow">MEDIA COVERAGE</p>
      <h2 className="mc-section-title">סיקור תקשורתי</h2>
      <div className="mc-section-line" aria-hidden="true" />

      <div className="mc-slider-wrap">
        <button className="mc-arr-btn mc-arr-prev" onClick={prev} aria-label="הקודם">&#8594;</button>
        <button className="mc-arr-btn mc-arr-next" onClick={next} aria-label="הבא">&#8592;</button>

        <div className="mc-viewport">
          <div className="mc-track" style={trackStyle}>
            {cards.map((c) => (
              <button type="button" key={c.id} className={`mc-card mc-card-${c.type}`} onClick={() => openCard(c)}>
                <div className="mc-thumb">
                  <ThumbSvg type={c.type} />
                  <div className="mc-thumb-overlay" aria-hidden="true" />
                  <div className="mc-source-badge">
                    <span className="mc-source-dot" aria-hidden="true" />
                    <span>{c.source}</span>
                  </div>
                  <div className="mc-type-badge">
                    <span className="mc-tbadge">{typeLabels[c.type]}</span>
                    {c.duration && <span className="mc-tbadge">{c.duration}</span>}
                  </div>
                  {c.type !== 'article' && (
                    <span className="mc-play-circle" aria-hidden="true">▶</span>
                  )}
                </div>
                <div className="mc-card-body">
                  <p className="mc-card-cat">{c.cat}</p>
                  <h3 className="mc-card-title">{c.title}</h3>
                  <div className="mc-card-meta">
                    <span>{c.date}</span>
                    <span>{c.reads}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

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
      </div>

      {selected && (
        <Modal card={selected} activeTab={activeTab} setActiveTab={setActiveTab} onClose={closeModal} />
      )}
    </section>
  )
}
