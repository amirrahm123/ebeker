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
const headingGold = {
  color: 'var(--color-accent)',
  fontSize: 'clamp(1.5rem, 2.6vw, 2rem)',
  fontWeight: 900,
  margin: '0 0 22px',
  letterSpacing: '-0.2px',
  lineHeight: 1.25,
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
const goldCalloutLight = { ...goldCallout, color: '#1a2a4a' }
const experienceLine = {
  color: 'var(--color-accent)',
  fontSize: '1.15rem',
  fontWeight: 800,
  margin: '0 0 18px',
  letterSpacing: '0.1px',
}
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
const tipsList = {
  listStyle: 'none',
  padding: 0,
  margin: '0 0 24px',
}
const tipItem = {
  display: 'flex',
  gap: 16,
  alignItems: 'flex-start',
  marginBottom: 18,
}
const tipNumber = {
  flexShrink: 0,
  width: 32,
  height: 32,
  borderRadius: '50%',
  background: 'rgba(201,168,76,0.15)',
  border: '1px solid var(--color-accent)',
  color: 'var(--color-accent)',
  fontWeight: 900,
  fontSize: '0.95rem',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
}
const tipText = {
  color: '#1a2a4a',
  lineHeight: 1.8,
  fontSize: '1rem',
  margin: 0,
  flex: 1,
}
const ctaBtn = {
  display: 'inline-block',
  padding: '14px 32px',
  background: 'var(--color-accent)',
  color: '#0d1b3e',
  fontWeight: 800,
  fontSize: '1rem',
  textDecoration: 'none',
  borderRadius: 4,
  letterSpacing: '0.2px',
}
const ctaWrap = { textAlign: 'center', marginTop: 8 }

const conditions = [
  'אדם בגיל 18 ועד גיל הפרישה.',
  'שאינו עובד או שהכנסתו נמוכה מ-60% מהשכר הממוצע במשק.',
  'האדם נבדק ע״י רופא מטעם הביטוח הלאומי ונקבעה לו נכות בשיעור 60% לפחות או 40% לפחות אם יש כמה ליקויים רפואיים, ועל אחד מהם נקבעה נכות בשיעור 25% לפחות.',
  'נקבע לגביו שעקב נכותו הוא אינו מסוגל לעבוד או שיכולתו להשתכר ירדה ב-50% לפחות, ונקבעה לו דרגת אי כושר של 60%, 65%, 74% או 100%.',
]

export default function Disabilities() {
  useRevealOnScroll()

  return (
    <>
      <PageBanner
        crumbs={[
          { label: 'תחומי עיסוק', to: '/#areas' },
          { label: ' ביטוח לאומי · נכות כללית וניידות ' }
        ]}
        title="נכות כללית וניידות"
        accent="ביטוח לאומי"
      />

      {/* Section 1 — Intro */}
      <section style={sectionDark}>
        <div style={container} className="reveal">
          <div style={goldCalloutDark}>
            אם מצבך הבריאותי מונע ממך לצאת לעבודה או שנגרמה לך ירידה בשכר בשל מצב בריאותי, ייתכן ואתה זכאי לקצבה והטבות מהמוסד לביטוח לאומי.
          </div>
          <p style={experienceLine}>
            למשרדנו ניסיון משפטי עשיר ומוכח של כ-20 שנה בייצוג לקוחות בהצלחה כנגד המוסד לביטוח לאומי!
          </p>
          <p style={ctaPhoneLine}>
            בכדי לברר מהן זכויותיכם התקשרו וקבעו שיחת ייעוץ או פגישה ללא עלות וללא התחייבות{' '}
            <a href="tel:049001056" style={phoneLink}>04-9001056</a>
          </p>
        </div>
      </section>

      {/* Section 2 — תנאי הזכאות */}
      <section style={sectionLight}>
        <div style={container} className="reveal">
          <h2 style={headingGold}>תנאי הזכאות לקצבת נכות כללית</h2>
          <p style={bodyLight}>
            אדם שלא יכול לעבוד או שיכולתו לעבוד פחתה בגלל מצב בריאותי, עשוי להיות זכאי לקצבת נכות כללית. כדי שאדם יהיה זכאי לקצבה עליו לעמוד במספר תנאים מצטברים, להלן:
          </p>
          <ol style={tipsList}>
            {conditions.map((cond, i) => (
              <li key={i} style={tipItem}>
                <span style={tipNumber}>{i + 1}</span>
                <p style={tipText}>{cond}</p>
              </li>
            ))}
          </ol>
          <div style={goldCalloutLight}>
            כדאי לדעת כי גם עקרת בית יכולה להימצא כזכאית לקצבת נכות כללית, וזאת אם לא עבדה 12 חודשים רצופים או 24 חודשים לא רצופים, ב-48 החודשים שקדמו ליום הגשת התביעה, או שקדמו ליום שבו הפסיקה לעבוד — אם הפסקת העבודה הייתה לאחר הגשת התביעה.
          </div>
        </div>
      </section>

      {/* Section 3 — חשיבות ייצוג משפטי */}
      <section style={sectionDark}>
        <div style={container} className="reveal">
          <h2 style={headingGold}>חשיבות הייצוג המשפטי</h2>
          <p style={bodyDark}>
            ליווי עורך דין המתמחה בתחום חשוב להשגת תוצאה מקסימלית בתביעה לנכות כללית, שכן יש לוודא כי מלוא החומר הרפואי, בתחומים השונים, הועבר לביטוח לאומי, והאדם נבדק בכל התחומים הרלוונטיים לצורך קביעת נכותו הכוללת.
          </p>
          <p style={bodyDark}>
            עורכי הדין של משרדנו יילוו אתכם בכל ההליך, מאיסוף החומר, הגשת התביעה, הכנתכם לקראת הוועדות הרפואיות בפניהם אתם צפויים לעמוד, לווי לוועדה ועד למיצוי כל זכויותיכם.
          </p>
          <div style={ctaWrap}>
            <a href="#contact" style={ctaBtn}>לייעוץ ראשוני חינם ←</a>
          </div>
        </div>
      </section>

      <CTASection title="זקוקים לעזרה במיצוי זכויות?" subtitle="ייעוץ ראשוני ללא עלות וללא התחייבות — פנו אלינו היום" />
    </>
  )
}
