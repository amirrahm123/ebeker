import { useState, useEffect, useRef, useCallback } from 'react'

const testimonials = [
  {
    quote: 'עו"ד ערן בקר ליווה אותי לאורך כל ההליך המשפטי בתביעת נזיקין מורכבת. המקצועיות, הנחישות והיחס האישי שקיבלתי היו מעל ומעבר. הגענו לתוצאה מעולה שלא חלמתי עליה.',
    name: 'ד.ר',
    location: 'נהריה',
    caseType: 'תאונת עבודה',
  },
  {
    quote: 'אחרי שחברת הביטוח דחתה את התביעה שלי, פניתי לעו"ד בקר. תוך מספר חודשים הצליח להפוך את ההחלטה ולהשיג לי את מלוא הפיצויים. ממליצה בחום!',
    name: 'מ.כ',
    location: 'עכו',
    caseType: 'דחיית תביעת ביטוח',
  },
  {
    quote: 'המשרד הוכיח מקצועיות יוצאת דופן בתיק רשלנות רפואית. הצוות המשפטי היה זמין לכל שאלה, הסביר בסבלנות כל שלב, ובסוף השיגו פיצויים גבוהים שעזרו לי להתאושש.',
    name: 'א.ש',
    location: 'קריית שמונה',
    caseType: 'רשלנות רפואית',
  },
  {
    quote: 'פניתי למשרד לאחר תאונת דרכים קשה. עו"ד בקר לקח את המקרה בשתי ידיים, נלחם בנחישות מול חברת הביטוח, והשיג עבורי פיצוי שאיפשר לי לחזור לשגרה.',
    name: 'י.מ',
    location: 'חיפה',
    caseType: 'תאונת דרכים',
  },
]

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0)
  const total = testimonials.length
  const autoRef = useRef(null)
  const touchStartX = useRef(0)

  const goTo = useCallback((n) => setCurrent(n), [])

  const startAuto = useCallback(() => {
    clearInterval(autoRef.current)
    autoRef.current = setInterval(() => {
      setCurrent(prev => (prev < total - 1 ? prev + 1 : 0))
    }, 6000)
  }, [total])

  useEffect(() => {
    startAuto()
    return () => clearInterval(autoRef.current)
  }, [startAuto])

  const onTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX
    clearInterval(autoRef.current)
  }

  const onTouchEnd = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].screenX
    if (Math.abs(diff) > 50) {
      if (diff > 0) setCurrent(prev => prev < total - 1 ? prev + 1 : 0)
      else setCurrent(prev => prev > 0 ? prev - 1 : total - 1)
    }
    startAuto()
  }

  const t = testimonials[current]

  return (
    <section className="testi-section" id="testimonials">
      <div className="testi-container">
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: 16 }}>לקוחות ממליצים</h2>
        <div
          className="testi-card-wrap"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div className="testi-quote-mark">"</div>
          <p className="testi-quote-text">{t.quote}</p>
          <div className="testi-author-row">
            <div className="testi-author-initial">{t.name.charAt(0)}</div>
            <div className="testi-author-info">
              <span className="testi-author-name">{t.name} מ{t.location}</span>
              <span className="testi-author-case">{t.caseType}</span>
            </div>
          </div>
        </div>
        <div className="testi-nav">
          <button className="testi-nav-btn" onClick={() => { goTo(current > 0 ? current - 1 : total - 1); startAuto() }} aria-label="הקודם">&#8594;</button>
          <div className="testi-indicators">
            {testimonials.map((_, i) => (
              <button key={i} className={`testi-indicator ${i === current ? 'active' : ''}`} onClick={() => { goTo(i); startAuto() }} />
            ))}
          </div>
          <button className="testi-nav-btn" onClick={() => { goTo(current < total - 1 ? current + 1 : 0); startAuto() }} aria-label="הבא">&#8592;</button>
        </div>
      </div>
    </section>
  )
}
