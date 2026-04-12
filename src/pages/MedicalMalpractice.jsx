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
  color: '#fff',
  fontWeight: 700,
  fontSize: '1.1rem',
  lineHeight: 1.7,
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
const listGrid = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '8px 24px',
  listStyle: 'none',
  padding: 0,
  margin: '0 0 8px',
}
const listItem = {
  color: 'rgba(255,255,255,0.82)',
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
const ctaWrap = { textAlign: 'center', marginTop: 8 }

const malpracticeTypes = [
  'רשלנות בייעוץ גנטי',
  'רשלנות רפואית בהריון',
  'רשלנות רפואית בלידה',
  'רשלנות רפואית באבחון (איחור באבחון ואבחון שגוי)',
  'רשלנות רפואית בחדרי מיון (מלר"ד)',
  'רשלנות רפואית בניתוח',
  'רשלנות רפואית ברפואת המשפחה',
  'רשלנות רפואית באונקולוגיה',
  'רשלנות רפואית בקרדיולוגיה',
  'רשלנות רפואית בנוירולוגיה',
  'רשלנות רפואית בגניקולוגיה',
  'רשלנות רפואית באורתופדיה',
  'רשלנות רפואית בטיפול נפשי',
  'רשלנות רפואית בפיענוח בדיקות הדמיה',
  'רשלנות רפואית ברפואת חירום',
  'רשלנות רפואית ברפואה פנימית',
  'רשלנות רפואית בטיפולי שיניים',
  'רשלנות רפואית במתן תרופות ומינון מתאים',
  'רשלנות רפואית בהתאמת טיפול',
]

export default function MedicalMalpractice() {
  useRevealOnScroll()

  return (
    <>
      <PageBanner
        crumbs={[
          { label: 'תחומי עיסוק', to: '/#areas' },
          { label: 'רשלנות רפואית' }
        ]}
        title="רשלנות"
        accent="רפואית"
      />

      {/* Section 1 — Intro */}
      <section style={sectionDark}>
        <div style={container} className="reveal">
          <p style={{ ...bodyDark, fontSize: '1.15rem', lineHeight: 1.9 }}>
            כמה פעמים הרגשתם כי טיפול רפואי שקיבלתם אתם או אחד מקרוביכם ניתן בצורה רשלנית? האם בכל פעם שאנו סבורים כי קיבלנו טיפול רשלני הוא אכן היה כזה? ואם כן, האם מגיע לנו פיצוי?
          </p>
          <div style={goldCallout}>
            לעו״ד ערן בקר ניסיון משפטי של כ-20 שנים בהצלחה בתביעות רשלנות רפואית!
          </div>
          <p style={ctaPhoneLine}>
            בכדי לברר מהן זכויותיכם התקשרו וקבעו שיחת ייעוץ או פגישה ללא עלות וללא התחייבות{' '}
            <a href="tel:049001056" style={phoneLink}>04-9001056</a>
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section style={sectionLight}>
        <div style={container} className="reveal">
          <p style={bodyLight}>
            טיפולים רפואיים כרוכים, לעיתים, בסיכונים, כאשר ברוב המקרים הסיכון קטן ביחס לאיכות החיים שיקבל המטופל לאחר הטיפול.
          </p>
          <p style={bodyLight}>
            יחד עם זאת, כאשר הסיכון מתממש, ולמטופל נגרם נזק תוך כדי או כתוצאה מקבלת שירות רפואי, וניתן להוכיח כי הנזק נגרם בשל סטייה מרמת זהירות סבירה, וכי הנזק לא היה נגרם אלמלא אותה סטייה — ניתן לתבוע את הגורם המטפל בתביעת רשלנות רפואית.
          </p>
          <p style={bodyLight}>
            רמת הזהירות הנדרשת מהרופא נגזרת מהמקובל בעולם הרפואה, ואין כוונה כי מכל רופא נדרשת רמת זהירות מופלגת ומיומנות מעולה, אלא נדרש כי ינהג בזהירות ובמיומנות שרופא סביר אחר היה נוקט.
          </p>
        </div>
      </section>

      {/* Section 3 — Types list */}
      <section style={sectionDark}>
        <div style={container} className="reveal">
          <h2 style={headingGold}>רשלנות רפואית עלולה להתקיים בכל שטחי הרפואה, ובין היתר:</h2>
          <ul style={listGrid}>
            {malpracticeTypes.map((item, i) => (
              <li key={i} style={listItem}>
                <span style={dot} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section 4 */}
      <section style={sectionLight}>
        <div style={container} className="reveal">
          <p style={bodyLight}>
            תביעת רשלנות רפואית היא תביעה לפיצוי בגין נזקי גוף שנגרמו לאדם בעקבות טיפול רפואי רשלני שקיבל. על הנפגע מוטל הנטל להוכיח כי קיים קשר סיבתי בין מעשיו הרשלניים או מחדליו של המטפל לבין הנזק שנגרם. יסוד הקשר הסיבתי מחייב להראות כי הנזק שנגרם למטופל היה צפוי בהינתן אותו טיפול רשלני.
          </p>
          <p style={bodyLight}>
            לעיתים מה שנדמה לנו כמעשה רשלני ברור אינו כך, אלא מצוי במתחם הסבירות. מאידך יש מקרים בהם הופרה חובת הזהירות והייתה רשלנות רפואית מובהקת אך זו לא הולידה נזק גופני ממשי. במקרים כאלו אין טעם כלכלי בהגשת תביעות רשלנות רפואית אם הנזק שנגרם אינו ממשי ולצמיתות.
          </p>
          <p style={bodyLight}>
            לצורך בדיקת היתכנות לתביעה ברשלנות רפואית יש לפנות לעורך דין המתמחה בתחום, אשר ייתן את חוות דעתו בקשר לכדאיות התביעה וכך יוכל הניזוק לגבש החלטה.
          </p>
        </div>
      </section>

      {/* Section 5 — Closing callout */}
      <section style={sectionDark}>
        <div style={container} className="reveal">
          <div style={goldCallout}>
            כדאי לציין כי לרוב ייעוץ ראשוני אצל עורך דין המתמחה ברשלנות רפואית אינו כרוך בתשלום ועל כן כדאי לשקול לפנות במידה ויש חשש שנגרם נזק כתוצאה מרשלנות רפואית.
          </div>
          <p style={bodyDark}>
            ייתכן שבמקרה שלך ההתרשלות ארעה כשהרופא לא שם לב לסימני אזהרה או לא ביצע לך בדיקות שהיה עליך לעבור. משרדנו טיפל בתביעות רשלנות רפואית רבות, ואנחנו מכירים מקרוב את הבלבול והקושי שחווים נפגעים שקיבלו טיפול רפואי כושל. אנחנו יודעים לבדוק כיצד נוהל הטיפול.
          </p>
          <div style={ctaWrap}>
            <a href="#contact" style={ctaBtn}>לייעוץ ראשוני חינם ←</a>
          </div>
        </div>
      </section>

      <CTASection title="נפגעתם מרשלנות רפואית?" subtitle="ייעוץ ראשוני ללא עלות וללא התחייבות — פנו אלינו היום." />
    </>
  )
}
