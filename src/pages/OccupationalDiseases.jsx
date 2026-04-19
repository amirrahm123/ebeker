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
const goldCalloutLight = { ...goldCallout, color: '#1a2a4a' }
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
const listGrid = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '8px 24px',
  listStyle: 'none',
  padding: 0,
  margin: '0 0 24px',
}
const listItem = {
  color: '#1a2a4a',
  fontSize: '1rem',
  lineHeight: 1.8,
  paddingRight: 20,
  position: 'relative',
}
const dot = {
  position: 'absolute',
  right: 0,
  top: '0.7em',
  width: 8,
  height: 8,
  borderRadius: '50%',
  background: 'var(--color-accent)',
  display: 'inline-block',
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
const ctaWrap = { textAlign: 'center' }

const diseases = [
  'שחפת',
  'שיתוק ילדים',
  'סרטן עור',
  'מחלות קרינה',
  'מחלות עצבים',
  'מחלות פרקים, גידים, ושרירים',
  'ליקוי שמיעה',
  'הרעלות שונות',
  'צפדת',
  'דלקת כבד',
  'ירוד (קטרקט)',
  'מחלת ריאות, סרטן הריאה ואלרגיה של דרכי הנשימה',
  'מזוטוליומה',
]

export default function OccupationalDiseases() {
  useRevealOnScroll()

  return (
    <>
      <PageBanner
        crumbs={[
          { label: 'תחומי עיסוק', to: '/#areas' },
          { label: 'מחלות מקצוע · ביטוח לאומי' }
        ]}
        title="מחלות מקצוע"
        accent="ביטוח לאומי"
      />

      {/* Section 1 — Intro */}
      <section style={sectionDark}>
        <div style={container} className="reveal">
          <p style={{ ...bodyDark, fontSize: '1.15rem', lineHeight: 1.9 }}>
            אנשים רבים חולים במחלות שונות כתוצאה מתנאי עבודתם. למשרדנו ניסיון עשיר ומוכח בייצוג נפגעים אלה כנגד המוסד לביטוח לאומי בכלל ובבית הדין לעבודה בפרט.
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

      {/* Section 2 — מחלת מקצוע */}
      <section style={sectionLight}>
        <div style={container} className="reveal">
          <h2 style={headingGold}>מחלת מקצוע</h2>
          <p style={bodyLight}>
            לצד פגיעות שמקורן בתאונת עבודה, ישנן פגיעות בעבודה כגון: ירידה בשמיעה, מחלות עור, צרידות ועוד, אשר יכולות להיחשב כמחלת מקצוע. מחלת מקצוע הינה מחלה שהעובד חלה בה עקב תנאי עבודתו. בדומה לתאונת עבודה, גם מחלת מקצוע מקנה זכויות והטבות כלכליות לנפגע המוענקות על ידי המוסד לביטוח לאומי.
          </p>
          <p style={bodyLight}>
            הקביעה אימתי תחשב מחלה כ׳מחלת מקצוע׳, נעשית על פי ׳רשימה סגורה׳ של מחלות מקצוע המפורטות בתקנות הביטוח הלאומי.
          </p>
          <h3 style={subHeadingGold}>דוגמאות למחלות המצויות ברשימה:</h3>
          <ul style={listGrid}>
            {diseases.map((item, i) => (
              <li key={i} style={listItem}>
                <span style={dot} />
                {item}
              </li>
            ))}
          </ul>
          <div style={goldCalloutLight}>
            התקנות מוסיפות וקובעות לצד כל מחלה את המקצוע, תהליך הייצור או חשיפה לחומרים הגורמים למחלה זו — וכדי שאדם יהיה מוכר כחולה ב׳מחלת מקצוע׳ צריך שיתקיימו התנאים המצטברים: מחלה מתוך הרשימה + התקיימות המקצוע, תהליך הייצור או החשיפה המפורטים בתקנות לגבי אותה מחלה.
          </div>
        </div>
      </section>

      {/* Section 3 — מיקרוטראומה */}
      <section style={sectionDark}>
        <div style={container} className="reveal">
          <h2 style={headingGold}>מיקרוטראומה</h2>
          <p style={bodyDark}>
            ישנם מקרים בהם אנשים נפגעים כתוצאה מתנאי עבודתם, אך אין מדובר באירוע תאונתי חד פעמי או במחלה מתוך רשימת מחלות המקצוע. מקרים אלה, יכולים להיחשב כפגיעה בעבודה אם יוכח כי הנזק אירע בשל ׳מיקרו טראומה׳.
          </p>
          <p style={bodyDark}>
            נזק שנגרם כתוצאה ממיקרוטראומה הוא נזק שנגרם מתנועות או פעולות חוזרות ונשנות בעבודתו של אדם שכל אחת מהן תרמה את תרומתה להתהוות הנזק.
          </p>
          <p style={bodyDark}>
            התנועות צריכות להיות זהות או דומות. ככל שהתנועות, במהלך עבודתו של אדם, יהיו רבות ומגוונות יותר, וכן מפוזרות במשך היום ולא מרוכזות — לא יהיה מדובר במיקרוטראומה.
          </p>
          <div style={goldCalloutDark}>
            אדם שנפגע במנגנון של מיקרוטראומה, בדומה לתאונת עבודה ומחלת מקצוע, עשוי להימצא זכאי להטבות כלכליות המוענקות על ידי ענף נפגעי עבודה במוסד לביטוח לאומי.
          </div>
        </div>
      </section>

      <CTASection title="חולה במחלת מקצוע?" subtitle="ייעוץ ראשוני ללא עלות וללא התחייבות — פנו אלינו היום" />
    </>
  )
}
