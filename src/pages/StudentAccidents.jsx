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
  color: 'rgba(255,255,255,0.85)',
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

const exceptions = [
  'הנכות הקבועה צריכה להיות בשיעור של לפחות 5%.',
  'נכות בגין צלקת — מוחרגת מהפוליסה, אך אפשר, במקרים מסוימים להיבחן בוועדת חריגים.',
]

export default function StudentAccidents() {
  useRevealOnScroll()

  return (
    <>
      <PageBanner
        crumbs={[
          { label: 'תחומי עיסוק', to: '/#areas' },
          { label: 'תאונות תלמידים' }
        ]}
        title="תאונות"
        accent="תלמידים"
      />

      {/* Section 1 — Intro */}
      <section style={sectionDark}>
        <div style={container} className="reveal">
          <h2 style={headingGold}>ביטוח תאונות אישיות תלמידים</h2>
          <div style={goldCalloutDark}>
            רבים לא יודעים זאת, אך תלמידי ישראל מבוטחים, מכוח החוק, בביטוח תאונות אישיות ועשויים להיות זכאים לפיצוי בגין פגיעתם בתאונה גם אם זו אירעה מחוץ לכותלי המוסד הלימודי וללא קשר אליו!
          </div>
          <p style={experienceLine}>
            לעו״ד ערן בקר ניסיון משפטי של כ-20 שנים בהצלחה בתביעות מכוח פוליסת תלמידים כנגד חברות הביטוח!
          </p>
          <p style={ctaPhoneLine}>
            בכדי לברר מהן זכויותיכם התקשרו וקבעו שיחת ייעוץ או פגישה ללא עלות וללא התחייבות{' '}
            <a href="tel:049001056" style={phoneLink}>04-9001056</a>
          </p>
        </div>
      </section>

      {/* Section 2 — כיסוי הביטוח */}
      <section style={sectionLight}>
        <div style={container} className="reveal">
          <h2 style={headingGold}>מי מכוסה בביטוח?</h2>
          <p style={bodyLight}>
            כל תלמיד במדינת ישראל הרשום בגן טרום חובה ועד לסיום לימודיו בגיל 18 מכוסה בביטוח תאונות אישיות תלמידים.
          </p>
          <p style={bodyLight}>
            הביטוח פעיל כל עוד מדובר בתלמיד הלומד בפועל והרשום בבית ספר בכל זמן רלוונטי לתאונה. תלמיד הינו כל: כל תלמידי ביה״ס, תלמידי ישיבה, גן חובה וטרום חובה וכן ילדים קטנים בפעוטונים ומעונות של רשות מקומית כתלמידים מן המניין.
          </p>
          <div style={goldCalloutLight}>
            תוקף הביטוח נפרס, לגבי כל אירוע תאונתי אשר בה מעורב התלמיד, במשך כל שעות היממה — 24 שעות ביממה. גם אם התאונה התרחשה בבית או בכל מקום אחר מחוץ לביה״ס. למעט, תאונות דרכים או נפגעי אירועי איבה שלגביהם יחולו הסדרים מכוח חיקוקים אחרים.
          </div>
          <p style={bodyLight}>
            הביטוח הוא קבוצתי ומשולם ע״י ההורים במסגרת התשלומים השנתיים למוסדות החינוך שברשויות המקומיות מכוח חוק לימוד חובה, התש״ט-1949 הקובע בסעיף 6 (ד1): ׳מי שזכאי לחינוך חינם לפי סעיף זה יהיה מבוטח בביטוח תאונות אישיות, באמצעות רשות החינוך המקומית שבתחום שיפוטה נמצא מוסד החינוך שבו הוא לומד.׳
          </p>
        </div>
      </section>

      {/* Section 3 — מהי תאונה */}
      <section style={sectionDark}>
        <div style={container} className="reveal">
          <h2 style={headingGold}>מהי תאונה?</h2>
          <div style={goldCalloutDark}>
            ׳תאונה׳ מוגדרת בפוליסה כאירוע פיזי, חיצוני, גלוי לעין, בלתי צפוי, הגורם להיזק גופני. מהגדרה זו עולה כי מחלות אינן כלולות בכיסוי הביטוחי עפ״י הפוליסה, אלא רק אירועים של תאונות.
          </div>
          <p style={bodyDark}>
            פוליסת ביטוח תאונות אישיות תלמידים קובעת סכומים וכללים לפיהם יפוצו הנפגעים, ובין היתר, קובעת סכום פיצוי למקרה מוות, סכום ביטוח בסיסי ממנו ייגזר גובה הפיצוי במקרה של נכות, פיצוי ע״ב יומי בתקופת ההיעדרות (כפוף למינימום ומקסימום של ימי היעדרות בפועל), וכן הסדר להחזר בגין הוצאות רפואיות.
          </p>
          <h3 style={subHeadingGold}>חריגים חשובים בפוליסה:</h3>
          <ol style={tipsList}>
            {exceptions.map((exc, i) => (
              <li key={i} style={tipItem}>
                <span style={tipNumber}>{i + 1}</span>
                <p style={tipText}>{exc}</p>
              </li>
            ))}
          </ol>
          <div style={goldCalloutDark}>
            עורך דין הבקיא בתחום יידע להנחות ולהדריך אתכם בניואנסים של הפוליסה, יוכל לייעץ לכם באשר לצורך בהגשת חוות דעת רפואית מטעם הנפגע ועל-כן חשוב להגיע לייעוץ משפטי מוקדם בטרם הפנייה לחברת הביטוח.
          </div>
        </div>
      </section>

      {/* Section 4 — תביעת נזיקין נוספת */}
      <section style={sectionLight}>
        <div style={container} className="reveal">
          <h2 style={headingGold}>הגשת תביעת נזיקין נוספת בגין התאונה</h2>
          <p style={bodyLight}>
            לעתים עומדת לתלמיד שנפגע בתאונה זכות להגיש תביעת נזיקין בגין התאונה נגד הגורם האחראי. למשל, תלמיד שנפגע ממפגע בתוך כותלי ביה״ס, תלמיד שנפגע במהלך טיול עקב ארגון לקוי, תלמיד שנפגע ממתקן שאינו בטיחותי או בלתי תקין, תלמיד שנפל לתוך בור במדרכה ברחוב וכיו״ב.
          </p>
          <p style={bodyLight}>
            חשוב לזכור כי מדובר בתביעת נזיקין והבסיס לה, כמו כל תביעת נזיקין אחרת, הוא בד״כ הטענה כי המזיק התרשל כלפי הנפגע, בין אם מדובר ברשלנות שמקורה בתחזוקה לקויה או במבנה פגום (ואז המזיק יהא בד״כ הרשות המקומית) ובין אם מדובר בסדרי פיקוח לא נאותים מצד גורמי האחראים לניהול ביה״ס (ואז המזיק יהא המדינה).
          </p>
          <div style={goldCalloutLight}>
            לא יבוצע כל ניכוי או הפחתה מהסכומים שיגיעו לתלמיד / הנפגע מפוליסת התלמידים בכל אחד מאפיקי התביעות האחרות בנזיקין מאחר שמדובר בתביעות שהינן נפרדות ועצמאיות לחלוטין.
          </div>
          <div style={ctaWrap}>
            <a href="#contact" style={ctaBtn}>לייעוץ ראשוני חינם ←</a>
          </div>
        </div>
      </section>

      <CTASection title="ילדכם נפגע? אנחנו לצידכם" subtitle="ייעוץ ראשוני ללא עלות וללא התחייבות" />
    </>
  )
}
