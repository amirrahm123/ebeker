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
  fontSize: '1rem',
  lineHeight: 1.8,
  paddingRight: 20,
  position: 'relative',
}
const listItemLight = { ...listItem, color: '#1a2a4a' }
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
const caseCard = {
  background: '#fff',
  border: '1px solid rgba(201,168,76,0.2)',
  borderRight: '4px solid var(--color-accent)',
  borderRadius: 6,
  padding: '20px 24px',
  marginBottom: 16,
}
const caseTitle = {
  color: '#1a2a4a',
  fontWeight: 800,
  fontSize: '1.05rem',
  margin: '0 0 6px',
}
const caseText = {
  color: '#1a2a4a',
  fontSize: '0.98rem',
  lineHeight: 1.75,
  margin: 0,
}
const goldBorderedList = {
  border: '1px solid rgba(201,168,76,0.3)',
  background: 'rgba(201,168,76,0.04)',
  padding: '24px 28px',
  borderRadius: 8,
  margin: '0 0 24px',
  listStyle: 'none',
}
const goldBorderedItem = {
  color: 'rgba(255,255,255,0.85)',
  fontSize: '1rem',
  lineHeight: 2,
  paddingRight: 20,
  position: 'relative',
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

const accidentTypes = [
  'פציעה מנפילה למים מסירת מנוע או אופנוע ים',
  'פציעה במהלך שייט מסירת מנוע (סירה שמטלטלת בגלים / סירת טורנדו)',
  'פציעה מסירה או אופנוע ים שפגע ברוחץ ששחה במים',
  'פציעה במהלך גרירת אבוב ע״י סירת מנוע או אופנוע ים',
  'פציעה במהלך גרירת סקי מים ע״י סירת מנוע או אופנוע ים',
  'פציעה במהלך גרירת וויקבורד ע״י סירת מנוע או אופנוע ים',
  'פציעה במהלך גרירת בננה ע״י סירת מנוע',
  'פציעה ממנוע / מדחף הסירה או האופנוע',
  'פציעה מהתנגשות בין כלי שייט',
  'פציעה מהתהפכות כלי שייט',
]

const laws = [
  'תקנות הספנות ימאים (משיט כליי שייט קטנים) תשנ״ח-1998',
  'תקנות הנמלים (בטיחות השייט) התשמ״ג-1982',
  'פקודת הנמלים (נוסח חדש) תשל״א-1971',
  'צו הפיקוח על מצרכים — כלי שייט 1972',
]

const cases = [
  {
    title: 'פציעה במהלך גרירת אבוב',
    text: 'לקוח ממשרדנו שנפגע במהלך גרירת אבוב — במהלך שייט על גבי אבוב נגרר לסירה, ניסה הנפגע לאחוז בשתי ידיו ברצועות המיועדות באבוב. תוך כדי השייט יצר משיט הסירה טלטולים רבים שגרמו לאבוב הנגרר להיטלטל ולהיחבט בים בצורה קשה. כתוצאה מכך נפצע הנפגע בידו. במקרה זה פעל משיט הסירה ברשלנות וכן פעל בניגוד לתקנות הספנות ימאים (משיט כליי שייט קטנים) תשנ״ח-1998.',
  },
  {
    title: 'פגיעה ממדחף סירה בכנרת',
    text: 'לקוח משרדנו נפגע במהלך שחיה בכנרת ממנוע / מדחף הסירה — תובע הוזמן להשתתף עם חבריו בשייט בכנרת בסירת מנוע. לאחר שייט קצר המשיט עצר את הסירה באמצע הכנרת להפסקת רחצה. תוך כדי שהתובע שוחה במים שטה לפתע הסירה ופגעה עם המנוע שלה ברגלו השמאלית של התובע. כתוצאה מכך, נגרמה לו פציעה קשה עד כדי קטיעה של חלק מכף רגלו השמאלית.',
  },
  {
    title: 'שבר בעמוד השדרה בסירת טורנדו',
    text: 'לקוחה ממשרדנו שנפגעה במהלך שייט בסירת טורנדו — התובעת השתתפה ביחד עם חבריה לעבודה ביום גיבוש שכלל הפלגה בסירת טורנדו. הסירה החלה לשייט במהירות גבוהה מאד, בים סוער. במהלך השייט נחבטה לפתע הסירה בגל גדול. כתוצאה מההתנגשות נגרמה לתובעת פגיעה חזקה בגב ונגרם לה שבר בחוליה בעמוד השדרה.',
  },
]

export default function MarineAccidents() {
  useRevealOnScroll()

  return (
    <>
      <PageBanner
        crumbs={[
          { label: 'תחומי עיסוק', to: '/#areas' },
          { label: 'תאונות ימיות' }
        ]}
        title="תאונות"
        accent="ימיות"
      />

      {/* Section 1 — Intro */}
      <section style={sectionDark}>
        <div style={container} className="reveal">
          <p style={{ ...bodyDark, fontSize: '1.15rem', lineHeight: 1.9 }}>
            לצערנו מתרחשות לא פעם בים ו/או בכנרת תאונות קשות כתוצאה מכלי שייט או מעורבות כלי שיט וספורט ימי. תאונות אלה, אומנם אינן שכיחות כמו תאונות דרכים, אך לצערנו הן מתרחשות וגורמות לא פעם לנכות קשה ולעיתים אף גורמות למוות. תאונות אלה דורשות יידע וטיפול ייחודי.
          </p>
          <div style={goldCalloutDark}>
            לעו״ד ערן בקר ניסיון משפטי של כ-25 שנים בהצלחה בניהול תיקים של נפגעים מתאונות בים כתוצאה מכלי שייט.
          </div>
          <p style={ctaPhoneLine}>
            לברור מהן זכויותיכם התקשרו וקבעו שיחת ייעוץ או פגישה ללא עלות וללא התחייבות{' '}
            <a href="tel:049001056" style={phoneLink}>04-9001056</a>
          </p>
        </div>
      </section>

      {/* Section 2 — סוגי תאונות */}
      <section style={sectionLight}>
        <div style={container} className="reveal">
          <h2 style={headingGold}>סוגי תאונות ימיות</h2>
          <p style={bodyLight}>
            פציעה מסירה ו/או מאופנוע ים ובכלל מקרה ביטוח ו/או אירוע נזיקי בים יכול להיגרם מ:
          </p>
          <ul style={listGrid}>
            {accidentTypes.map((item, i) => (
              <li key={i} style={listItemLight}>
                <span style={dot} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section 3 — חובות חקוקות */}
      <section style={sectionDark}>
        <div style={container} className="reveal">
          <h2 style={headingGold}>חובות חקוקות בתביעות ימיות</h2>
          <p style={bodyDark}>
            בתביעות בהם הניזוק נפגע מכלי שייט בנוסף לעוולת הרשלנות לפי פקודת הנזיקין אותה יש להוכיח כמו במקרה של תביעת נזיקין כללית יש חובות חקוקות נוספות כגון:
          </p>
          <ul style={goldBorderedList}>
            {laws.map((law, i) => (
              <li key={i} style={goldBorderedItem}>
                <span style={dot} />
                {law}
              </li>
            ))}
          </ul>
          <p style={bodyDark}>
            משרדנו הינו אחד מהמשרדים הבודדים והמובילים בארץ שייצג במגוון רחב מאוד של תביעות נזיקין המתרחשות בים בהם הניזוק/הנפגע נפגע מכלי שייט וזכה לפיצויים משמעותיים!
          </p>
        </div>
      </section>

      {/* Section 4 — תיקים לדוגמה */}
      <section style={sectionLight}>
        <div style={container} className="reveal">
          <h2 style={headingGold}>דוגמאות לתיקים שטופלו בהצלחה</h2>
          {cases.map((c, i) => (
            <div key={i} style={caseCard}>
              <h3 style={caseTitle}>{c.title}</h3>
              <p style={caseText}>{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5 — חשוב לדעת */}
      <section style={sectionDark}>
        <div style={container} className="reveal">
          <h2 style={headingGold}>חשוב לדעת</h2>
          <div style={goldCalloutDark}>
            מקום אירוע התאונה יכול להשפיע באופן מהותי על שאלת האחריות לפי תקנה 68 לתקנות הנמלים (בטיחות השייט) תשמ״ג-1983, אשר קובעת כי אסור להשיט סירת מנוע בתחום של 300 מ׳ מהחוף.
          </div>
          <div style={goldCalloutDark}>
            תאונה המתרחשת עם אופנוע ים — תקנות הימאים מחייבות כי אופנוע ים יישלט כל עת ע״י אדם המחזיק ברישיון תקף להשטתו.
          </div>
          <div style={goldCalloutDark}>
            חשוב לדעת, שבמהלך גרירת אבוב, סקי מים, בננה, וויקבורד וכו׳ ע״י סירה או אופנוע ים חובה למנות ׳צופה׳ שישהה בכלי השייט בנוסף למשיט כלי השייט.
          </div>
          <div style={ctaWrap}>
            <a href="#contact" style={ctaBtn}>לייעוץ ראשוני חינם ←</a>
          </div>
        </div>
      </section>

      <CTASection title="נפגעתם בתאונה ימית?" subtitle="ייעוץ ראשוני ללא עלות וללא התחייבות — פנו אלינו היום." />
    </>
  )
}
