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

const levels = [
  {
    title: 'נכות מתחת ל-10%',
    text: 'מי שנקבעה לו נכות נמוכה מ-10%, לא יהיה זכאי לקבלת פיצוי כלשהו לפי החוק ולמעשה ייהנה רק מההכרה בפציעה.',
  },
  {
    title: 'נכות 10%–19%',
    text: 'נפגע משרד הביטחון אשר נקבעה לו דרגת נכות בשיעור של 10%-19% לצמיתות, זכאי לקבלת מענק חד פעמי במקום תגמולים וכמו כן טיפולים רפואיים רלוונטיים לפגיעה. בנוסף, יהיו נכים אלו זכאים לקבלת הנחה בתשלום הארנונה, פטור מתשלום אגרת טלויזיה וכיו״ב.',
  },
  {
    title: 'נכות 20% ומעלה',
    text: 'נפגע משרד הביטחון ונפגע צבא אשר נקבעה לו נכות בשיעור של 20% ומעלה, יהיה זכאי לקבלת קצבה חודשית למשך כל חייו. ייתכנו מצבים שבהם עבר זמן רב בין מועד קרות הנזק ובין מועד קביעת הנכות ע״י הועדה הרפואית — במקרים אלו הנכה יוכל לקבל פיצוי רטרואקטיבי החל מיום הפגיעה.',
  },
]

export default function IdfDisabilities() {
  useRevealOnScroll()

  return (
    <>
      <PageBanner
        crumbs={[
          { label: 'תחומי עיסוק', to: '/#areas' },
          { label: 'נכי צה"ל ומשרד הביטחון' }
        ]}
        title='נכי צה"ל'
        accent="ומשרד הביטחון"
      />

      {/* Section 1 — Intro */}
      <section style={sectionDark}>
        <div style={container} className="reveal">
          <h2 style={headingGold}>נפגעי צבא וכוחות הביטחון</h2>
          <div style={goldCalloutDark}>
            חייל בשירות צבאי או אדם בשירות משרד הביטחון אשר נפגע במהלך שירותו או חלה במחלה זכאי לתבוע לפיצוי בגין נכותו במסגרת חוק הנכים (תגמולים ושיקום), תשי״ט - 1959.
          </div>
          <p style={bodyDark}>
            לעניין זה גם אם הפגיעה ארעה מחוץ למחנה מתקיימת עילת תביעה וזאת בתנאי שהשהייה מחוץ למחנה היתה כדין ולא חלו הפסקות או סטיות של ממש שאין להן קשר עם השירות או עם הדרך אל המחנה או ממנו.
          </p>
          <p style={bodyDark}>
            מי שנפגע החל מיום 5.2.1988 בהיותו בחופשה מאושרת מהשירות יהיה זכאי לקבל את הזכויות האמורות בחוק, אם הפגיעה ארעה במסגרת 14 הימים הראשונים של החופשה ובעקבות הפגיעה נגרמה דרגת נכות בשיעור של 20% ומעלה.
          </p>
          <p style={ctaPhoneLine}>
            לברור מהן זכויותיכם התקשרו וקבעו שיחת ייעוץ או פגישה ללא עלות וללא התחייבות{' '}
            <a href="tel:049001056" style={phoneLink}>04-9001056</a>
          </p>
        </div>
      </section>

      {/* Section 2 — תנאי הזכאות */}
      <section style={sectionLight}>
        <div style={container} className="reveal">
          <h2 style={headingGold}>התנאים לקבלת פיצוי</h2>
          <p style={bodyLight}>
            הכרה כנכה היא השלב הראשון אותו על נפגעי משרד הביטחון, לרבות חיילים ושוטרים לעבור כדי להיכנס תחת כנפי החוק וכל הזכויות הנובעות ממנו.
          </p>
          <p style={bodyLight}>
            מסלול ההכרה מתחיל בהגשת התביעה ע״י חייל או שוטר, להכרה בו כנכה צה״ל לקצין התגמולים, שהינו גוף היושב באגף השיקום שבמשרד הביטחון ביחידה לתביעות וקביעת זכאות נכות צה״ל ותפקידו הינו לקבוע האם תובע יוכר כנכה צה״ל או לא.
          </p>
          <p style={bodyLight}>
            אם החליט קצין התגמולים לדחות את תביעתו של התובע, אזי עליו להודיעו על כך ולנמק החלטתו, וכן עליו לצרף להחלטתו את חוות הדעת הרפואית ו/או את פרוטוקול הועדה הרפואית עליה הסתמך בהחלטתו.
          </p>
          <p style={bodyLight}>
            בהחלטת קצין התגמולים תצוין זכותו של התובע לערער על ההחלטה, המועד לערעור וכתובת הועדה אליה עליו להפנות את הערעור.
          </p>
          <div style={goldCalloutLight}>
            במידה וקצין התגמולים הגיע למסקנה כי יש מקום לקבל את התביעה, מופנה הנכה לועדה רפואית לשם קביעת דרגת נכותו.
          </div>
        </div>
      </section>

      {/* Section 3 — ועדה רפואית וערעור */}
      <section style={sectionDark}>
        <div style={container} className="reveal">
          <h2 style={headingGold}>מבנה הועדה הרפואית וערעור על החלטתה</h2>
          <p style={bodyDark}>
            הועדה הרפואית מורכבת מרופאים מומחים, והחלטותיה מתקבלות על סמך בדיקות שערכה לנפגע. הרכב הועדה כולל רופאים בהתאם לתחומי הרפואה השונים שבהם נפגע התובע.
          </p>
          <p style={bodyDark}>
            הן התובע והן קצין התגמולים רשאים להגיש ערר על החלטת הועדה הרפואית והערר יידון בפני ועדה רפואית עליונה שהינה מורכבת משופט, רופא וחבר נוסף.
          </p>
          <p style={bodyDark}>
            על החלטתה הסופית של הועדה הרפואית העליונה ניתן לערער בשאלה של חוק בלבד, לבית המשפט המחוזי.
          </p>
          <p style={bodyDark}>
            פסק דינו של בית המשפט המחוזי ניתן לערעור לפני בית המשפט העליון, אם ניתנה רשות לכך מאת שופט של בית המשפט העליון.
          </p>
        </div>
      </section>

      {/* Section 4 — דרגות נכות */}
      <section style={sectionLight}>
        <div style={container} className="reveal">
          <h2 style={headingGold}>דרגות הנכות המזכות בפיצוי</h2>
          {levels.map((l, i) => (
            <div key={i} style={caseCard}>
              <h3 style={caseTitle}>{l.title}</h3>
              <p style={caseText}>{l.text}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection title='נכי צה"ל ומשרד הביטחון' subtitle="ייעוץ ראשוני ללא עלות וללא התחייבות — פנו אלינו היום" />
    </>
  )
}
