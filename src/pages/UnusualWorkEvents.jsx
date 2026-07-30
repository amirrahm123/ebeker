import useRevealOnScroll from '../hooks/useRevealOnScroll'
import PageBanner from '../components/PageBanner'
import CTASection from '../components/CTASection'

const sectionDark = {
  background: '#0d1b3e',
  padding: '60px 40px',
  direction: 'rtl',
  textAlign: 'right',
}
const sectionLight = {
  background: '#f8f6f1',
  padding: '60px 40px',
  direction: 'rtl',
  textAlign: 'right',
}
const container = {
  maxWidth: 860,
  margin: '0 auto',
}
const subHeadingGold = {
  color: 'var(--color-accent)',
  fontSize: 'clamp(1.15rem, 2vw, 1.45rem)',
  fontWeight: 800,
  margin: '28px 0 16px',
  lineHeight: 1.3,
}
const bodyDark = {
  color: 'rgba(255,255,255,0.82)',
  fontSize: '1.02rem',
  lineHeight: 1.85,
  margin: '0 0 18px',
}
const bodyLight = {
  color: '#1a2a4a',
  fontSize: '1.02rem',
  lineHeight: 1.85,
  margin: '0 0 18px',
}
const goldCallout = {
  borderRight: '4px solid var(--color-accent)',
  background: 'rgba(201,168,76,0.08)',
  padding: '20px 24px',
  borderRadius: 4,
  margin: '24px 0',
  fontWeight: 700,
  fontSize: '1.1rem',
  lineHeight: 1.7,
}
const goldCalloutDark = { ...goldCallout, color: '#fff' }
const ctaPhoneLine = {
  color: 'rgba(255,255,255,0.78)',
  fontSize: '1rem',
  lineHeight: 1.8,
  margin: '0',
}
const phoneLink = {
  color: 'var(--color-accent)',
  fontWeight: 800,
  textDecoration: 'none',
  borderBottom: '1px solid rgba(201,168,76,0.4)',
  paddingBottom: 1,
}
const typeCard = {
  background: '#fff',
  border: '1px solid rgba(201,168,76,0.2)',
  borderRight: '4px solid var(--color-accent)',
  borderRadius: 6,
  padding: '20px 24px',
}
const typeTitle = {
  color: '#1a2a4a',
  fontWeight: 800,
  fontSize: '1.05rem',
  margin: '0 0 6px',
}
const typeText = {
  color: '#1a2a4a',
  fontSize: '0.98rem',
  lineHeight: 1.75,
  margin: 0,
}
const cardGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: 16,
  margin: '0 0 24px',
}

const eventTypes = [
  {
    title: 'עימות או ויכוח',
    text: 'חילופי דברים חריפים עם מנהל, עמית לעבודה או לקוח.',
  },
  {
    title: 'לחץ נפשי',
    text: 'התרחשות חריגה המעוררת מתח, פחד או סערת רגשות משמעותית.',
  },
  {
    title: 'מאמץ פיזי',
    text: 'ביצוע פעולה גופנית מאומצת שאינה חלק מהפעילות השגרתית במסגרת העבודה.',
  },
]

export default function UnusualWorkEvents() {
  useRevealOnScroll()

  return (
    <>
      <PageBanner
        crumbs={[
          { label: 'תחומי עיסוק', to: '/#areas' },
          { label: 'אירועים חריגים בעבודה · ביטוח לאומי' }
        ]}
        title="אירועים חריגים בעבודה"
        accent="ביטוח לאומי"
      />

      {/* Section 1 — Intro */}
      <section style={sectionDark}>
        <div style={container} className="reveal">
          <p style={{ ...bodyDark, fontSize: '1.15rem', lineHeight: 1.9 }}>
            אנשים רבים לוקים בהתקף לב ו/או באירוע מוחי ו/או באירוע נפשי ועוד כתוצאה מתנאי עבודתם. למשרדנו ניסיון עשיר ומוכח בייצוג נפגעים אלה כנגד המוסד לביטוח לאומי בכלל ובבית הדין לעבודה בפרט.
          </p>
          <div style={goldCalloutDark}>
            לעו״ד ערן בקר ניסיון משפטי של כ-25 שנים בהצלחה בתביעות ביטוח לאומי!
          </div>
          <p style={ctaPhoneLine}>
            בכדי לברר מהן זכויותיכם התקשרו וקבעו שיחת ייעוץ או פגישה ללא עלות וללא התחייבות{' '}
            <a href="tel:049001056" style={phoneLink}>04-9001056</a>
          </p>
        </div>
      </section>

      {/* Section 2 — אירוע חריג בעבודה */}
      <section style={sectionLight}>
        <div style={container} className="reveal">
          <p style={bodyLight}>
            אירוע חריג במקום העבודה הוא מצב יוצא דופן שאינו חלק משגרת העבודה, כגון ויכוח רציני בעבודה, עימות משמעותי, לחץ בלתי צפוי שגרמו לאירוע סטרסוגני או מאמץ פיזי חריג.
          </p>
          <p style={bodyLight}>
            כאשר אירוע כזה מוביל לפגיעה גופנית (לדוגמא: אוטם בשריר הלב, אירוע מוחי) או נפשית, ייתכן שהוא יוכר כתאונת עבודה על ידי המוסד לביטוח לאומי.
          </p>
          <h3 style={subHeadingGold}>סוגים של אירועים חריגים</h3>
          <div style={cardGrid}>
            {eventTypes.map((item, i) => (
              <div key={i} style={typeCard}>
                <h4 style={typeTitle}>{item.title}</h4>
                <p style={typeText}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="נפגעתם באירוע חריג בעבודה?" subtitle="ייעוץ ראשוני ללא עלות וללא התחייבות — פנו אלינו היום" />
    </>
  )
}
