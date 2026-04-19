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
  margin: 0,
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

const tips = [
  'יש לקבל אישור ממשטרת ישראל על תאונת דרכים.',
  'יש לשמור העתק מכל המסמכים הרפואיים הרלוונטיים של תאונת דרכים — דו״ח ביקור בחדר מיון, סיכומי מחלה, תעודות אי כושר מרופא משפחה וכיוצ״ב.',
  'יש לשמור ולתעד הוצאות כספיות עקב תאונת דרכים: קבלות בגין נסיעה במוניות, רכישת תרופות וכיוצ״ב.',
  'המלצתנו הינה לא להסכים להיפגש עם חוקר מטעם חברת הביטוח בטרם היוועצות של הנפגע עם עו״ד מטעמו.',
]

export default function CarAccidents() {
  useRevealOnScroll()

  return (
    <>
      <PageBanner
        crumbs={[
          { label: 'תחומי עיסוק', to: '/#areas' },
          { label: 'תאונות דרכים' }
        ]}
        title="תאונות"
        accent="דרכים"
      />

      {/* Section 1 — Intro */}
      <section style={sectionDark}>
        <div style={container} className="reveal">
          <p style={{ ...bodyDark, fontSize: '1.15rem', lineHeight: 1.9 }}>
            ברחבי המדינה מתרחשות כל יום תאונות דרכים שגורמות לעשרות אלפי נפגעים ומאות הרוגים בכל שנה במדינת ישראל.
          </p>
          <div style={goldCalloutDark}>
            חשוב לדעת כי אדם שנפגע בתאונת דרכים זכאי לפיצוי ללא קשר לשאלת האשם בתאונה!
          </div>
          <p style={experienceLine}>
            לעו״ד ערן בקר ניסיון משפטי של כ-25 שנים בהצלחה בתביעות פיצויים לנפגעי תאונות דרכים כנגד חברות הביטוח!
          </p>
          <p style={ctaPhoneLine}>
            בכדי לברר מהן זכויותיכם התקשרו וקבעו שיחת ייעוץ או פגישה ללא עלות וללא התחייבות{' '}
            <a href="tel:049001056" style={phoneLink}>04-9001056</a>
          </p>
        </div>
      </section>

      {/* Section 2 — חוק הפיצויים */}
      <section style={sectionLight}>
        <div style={container} className="reveal">
          <h2 style={headingGold}>חוק הפיצויים לנפגעי תאונות דרכים</h2>
          <p style={bodyLight}>
            חוק הפיצויים לנפגעי תאונות דרכים התשל״ה - 1975 נחקק על מנת להסדיר את הפיצוי לאדם שנפגע בגופו באירוע המוגדר כ׳תאונת דרכים׳ בחוק.
          </p>
          <div style={goldCalloutLight}>
            העיקרון המרכזי של החוק הינו אחריות מוחלטת, קרי כל נפגע בתאונת דרכים, בין אם הוא נוסע, נהג או הולך רגל, זכאי לפיצוי ללא קשר לשאלה מי אשם בתאונה.
          </div>
          <p style={bodyLight}>
            על פי החוק, תאונת דרכים הנה מאורע שגרם לאדם נזק גוף עקב שימוש ברכב מנועי למטרות תחבורה.
          </p>
          <p style={bodyLight}>
            באופן עקרוני ניתן לומר כי תאונה שארעה תוך כדי נסיעה ברכב, החניית הרכב, כניסה לרכב וירידה ממנו, נחשבת לתאונת דרכים וכך גם חלק ניכר מהמקרים שבהם נפגע אדם תוך כדי טיפול ברכב, פגיעה ממטען שהתנתק מרכב וכדומה.
          </p>
          <p style={bodyLight}>
            תנאי נוסף לקיומה של תאונת דרכים הנו כי הרכב המעורב בתאונה הינו רכב מנועי כהגדרתו בחוק. בפועל חלק ניכר מכלי הרכב נופלים להגדרה זו, למעט חריגים כגון כסאות גלגלים.
          </p>
          <p style={bodyLight}>
            הנטל לפצות את הנפגע מוטל על חברת הביטוח אשר ביטחה את הרכב שבו נהג או נסע הנפגע.
          </p>
          <p style={bodyLight}>
            הולך רגל אשר נפגע, יתבע את חברת הביטוח של הרכב שפגע בו.
          </p>
        </div>
      </section>

      {/* Section 3 — קרנית */}
      <section style={sectionDark}>
        <div style={container} className="reveal">
          <div style={goldCalloutDark}>
            במידה ומדובר בתאונת פגע וברח או כאשר אין לרכב הפוגע ו/או המעורב ביטוח (בין אם הנפגע הינו הולך רגל או נוסע ברכב) הוא יכול להיות זכאי לפיצוי מאת ׳קרנית׳ — שהינה קרן שתפקידה לפצות נפגע הזכאי לפיצויים לפי חוק, שאין לו אפשרות לתבוע את חברת הביטוח.
          </div>
          <p style={bodyDark}>
            כדי לקבוע את גובה הפיצוי, ממנה ביהמ״ש בתביעות אלה, מומחים רפואיים מטעמו, אשר קובעים האם לנפגע נותרה נכות בגין התאונה ומה שיעורה, וגובה הפיצוי מחושב בהתאם לדרגת הנכות שנקבעה ולנתוניו האישיים של התובע — הנפגע.
          </p>
          <p style={bodyDark}>
            באופן טבעי, ככל שפגיעת התובע חמורה וקשה יותר ואחוזי נכותו גבוהים יותר — סכום הפיצוי גבוה יותר.
          </p>
          <p style={bodyDark}>
            התובע, שנאלץ להתמודד עם הטראומה הנפשית והפיזית של התאונה, אינו יכול לגייס בכוחות עצמו את האנרגיה והידע הדרושים להתמודדות מייגעת ומסובכת עם חברות הביטוח וההליכים השונים העומדים לזכות הנפגע למימוש זכויותיו, הואיל והפרוצדורה, כמו גם, המהות, הינם מורכבים.
          </p>
          <p style={bodyDark}>
            מכאן החשיבות הרבה בקבלת סיוע מעורך דין המתמחה בתחום לצורך קבלת הפיצויים. שכר הטרחה בתביעות עפ״י חוק הפיצויים לנפגעי תאונות דרכים הוגדר בחוק, והוא נע בין 8% ל-13% מהפיצוי המושג ללקוח בסיום התיק, נגבה רק במקרה של זכייה. לחילופין ניתן להסכים על שכ״ט קבוע מראש ולא מותנה באחוזים מהזכיה בתיק.
          </p>
        </div>
      </section>

      {/* Section 4 — הנחיות חשובות */}
      <section style={sectionLight}>
        <div style={container} className="reveal">
          <h2 style={headingGold}>הנחיות חשובות לנפגעי תאונות דרכים</h2>
          <ol style={tipsList}>
            {tips.map((tip, i) => (
              <li key={i} style={tipItem}>
                <span style={tipNumber}>{i + 1}</span>
                <p style={tipText}>{tip}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Section 5 — Closing */}
      <section style={sectionDark}>
        <div style={container} className="reveal">
          <div style={goldCalloutDark}>
            אם נפגעת בתאונת דרכים, אתה מוזמן לפנות לפגישת ייעוץ ראשוני במשרדנו, ללא עלות, על מנת שנוכל להעריך את מלוא הזכויות העומדות בפניך.
          </div>
        </div>
      </section>

      <CTASection title="נפגעת בתאונת דרכים?" subtitle="ייעוץ ראשוני ללא עלות וללא התחייבות — פנו אלינו היום" />
    </>
  )
}
