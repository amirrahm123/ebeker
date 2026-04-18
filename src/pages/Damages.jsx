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
const introLeadDark = {
  ...bodyDark,
  fontSize: '1.15rem',
  lineHeight: 1.9,
  textAlign: 'center',
  maxWidth: 760,
  margin: '0 auto 28px',
}
const goldCalloutDark = {
  borderRight: '4px solid var(--color-accent)',
  background: 'rgba(201,168,76,0.08)',
  padding: '22px 26px',
  borderRadius: 4,
  margin: '0 auto 28px',
  maxWidth: 760,
  color: '#fff',
  fontWeight: 700,
  fontSize: '1.1rem',
  lineHeight: 1.7,
  textAlign: 'center',
}
const experienceLine = {
  color: 'var(--color-accent)',
  fontSize: '1.15rem',
  fontWeight: 800,
  textAlign: 'center',
  margin: '0 auto 18px',
  letterSpacing: '0.1px',
}
const ctaPhoneLine = {
  color: 'rgba(255,255,255,0.78)',
  fontSize: '1rem',
  textAlign: 'center',
  margin: 0,
  lineHeight: 1.8,
}
const phoneLink = {
  color: 'var(--color-accent)',
  fontWeight: 800,
  textDecoration: 'none',
  borderBottom: '1px solid rgba(201,168,76,0.4)',
  paddingBottom: 1,
}
const tipsBox = {
  border: '1px solid rgba(201,168,76,0.3)',
  background: 'rgba(201,168,76,0.05)',
  padding: '36px 40px',
  borderRadius: 8,
  maxWidth: 860,
  margin: '0 auto',
}
const tipsHeading = {
  color: 'var(--color-accent)',
  fontSize: '1.35rem',
  fontWeight: 900,
  margin: '0 0 22px',
  letterSpacing: '-0.1px',
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
const closingCallout = {
  ...bodyDark,
  fontSize: '1.08rem',
  lineHeight: 1.9,
  textAlign: 'center',
  maxWidth: 780,
  margin: '0 auto 32px',
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
  transition: 'transform .2s ease, background .2s ease',
}
const ctaWrap = {
  textAlign: 'center',
}

const tips = [
  'לצלם ולתעד את מקום אירוע התאונה (הן בצילום קרוב של המפגע עצמו והן את סביבתו, כך שניתן יהיה לזהות בבירור את המקום המדובר).',
  'בפגישה הראשונה עם עורך דין המתמחה בתביעות נזיקין מעין אלה, יש להציג בפניו את התמונות בצירוף תיאור מפורט בכתב של נסיבות התאונה ופרטי העדים לאירוע, אם יש כאלה.',
  'אם מתנהלת תכתובת כלשהי עם הרשות המקומית לפני ההגעה לעורך דין יש למסור לו כמובן גם את העתקי המכתבים.',
  'כדי לקבוע אומדן לשם פיצוי וקביעת הנזקים יש להמציא כל חומר רלוונטי לרבות מסמכים רפואיים, אישורים וקבלות על הוצאות, תלושי שכר או דוחות שומה ומע"מ אצל עצמאיים וצילום כל החומר שהוגש לביטוח לאומי.',
]

export default function Damages() {
  useRevealOnScroll()

  return (
    <>
      <PageBanner
        crumbs={[
          { label: 'תחומי עיסוק', to: '/#areas' },
          { label: 'נזיקין כללי' }
        ]}
        title="נזיקין"
        accent="כללי"
      />

      {/* Section 1 — Intro */}
      <section style={sectionDark}>
        <div style={container} className="reveal">
          <p style={introLeadDark}>
            ברחבי המדינה מתרחשות כל יום תאונות במסגרתן אנשים נפגעים בנפילה ברחוב, במהלך העבודה, או במהלך כל פעולה יום יומית כמו משחק במגרש ספורט, ירידה בגרם מדרגות או הליכה במקום רטוב.
          </p>
          <div style={goldCalloutDark}>
            אם נפגעת בתאונה בשל מפגע שהיה קיים במקום – אתה עשוי להיות זכאי לפיצוי בגין הנזק שנגרם לך.
          </div>
          <p style={experienceLine}>
            לעו״ד ערן בקר ניסיון משפטי של כ-25 שנים בהצלחה בתביעות נזיקין!
          </p>
          <p style={ctaPhoneLine}>
            בכדי לברר מהן זכויותיכם התקשרו וקבעו שיחת ייעוץ או פגישה ללא עלות וללא התחייבות{' '}
            <a href="tel:049001056" style={phoneLink}>04-9001056</a>
          </p>
        </div>
      </section>

      {/* Section 2 — תביעת נזיקין נגד המעביד וחברת הביטוח */}
      <section style={sectionLight}>
        <div style={container} className="reveal">
          <h2 style={headingGold}>תביעת נזיקין נגד המעביד וחברת הביטוח</h2>
          <p style={bodyLight}>
            חובתו של המעביד להגן על עובדיו מפני פגיעה בעבודה, מעוגנת היטב בפסיקת בתי המשפט, ומעביד שלא הדריך את עובדיו כראוי, לא הזהיר אותם מפני הסיכונים הכרוכים בעבודה ולא סיפק להם אמצעי מיגון בהתאם- התרשל במילוי חובתו זו.
          </p>
          <p style={bodyLight}>
            על פניו, ניתן לומר, כי נפגע תאונת עבודה יכול למצות זכויותיו בביטוח הלאומי.
          </p>
          <p style={bodyLight}>
            אולם, כאשר תאונת עבודה מקורה באחריות או אשם מצד המעביד, זכאי הנפגע לפנות לבית המשפט בהליך של תביעת נזיקין נגד המעביד.
          </p>
          <p style={bodyLight}>
            הגשתה של תביעת נזיקין כזו אינה מאיינת את זכויותיהם של נפגעי תאונות עבודה אל מול ביטוח לאומי, אולם בכל זאת, חשוב להדגיש, כי הנפגע לא יזכה בכפל פיצוי.
          </p>
          <p style={bodyLight}>
            במקרה של תאונת עבודה, יש להגיש תביעה נגד המעביד ובתביעה זו יש להוכיח כי התאונה ארעה עקב רשלנותו של המעביד, רשלנות אשר יכולה להתבטא בהיעדר הדרכה מתאימה, באי אספקת ציוד מגן, בהוראה לעובד לעבוד עם מכונה שאינה מגודרת כחוק ואשר מהווה סביבת עבודה מסוכנת וכו'.
          </p>
          <p style={bodyLight}>
            לצורך הגשת תביעה נגד מעביד בגין תאונת עבודה בה נגרם נזק גוף, יש לצרף לכתב התביעה חוות דעת רפואית (ככל ויש טענה לנזק בלתי הפיך / טענה לנכות) הקובעת את שיעור הנכות לצמיתות אשר נותרה בעקבות תאונת העבודה.
          </p>
        </div>
      </section>

      {/* Section 3 — תביעות נזיקין נגד רשויות מקומיות */}
      <section style={sectionDark}>
        <div style={container} className="reveal">
          <h2 style={headingGold}>תביעות נזיקין נגד רשויות מקומיות — החלקה / נפילה ברחוב</h2>
          <p style={bodyDark}>
            כידוע, הרשות המקומית אחראית לתחזוקה השוטפת של המדרכות והכבישים בשטח שיפוטה באופן שאלה יהיו בטיחותיים וראויים לשימוש ע"י המשתמשים בהם. לא פעם הרשות נכשלת בחובתה זאת ואנו יכולים להבחין במדרכות וגם בכבישים העשויים טלאי על גבי טלאי, חוסר במרצפות, מרצפות בולטות או הפרשי גובה בין המרצפות, בורות, תעלות וכו'. מפגעים אלו גורמים לאנשים העוברים בדרך, בעיקר למבוגרים, להיכשל וליפול. לא אחת מסתיימת נפילה כזאת בפציעה ובחבלה של ממש, אפילו שברים הנגרמים בעיקר בגפיים העליונות והתחתונות. פגיעה כזאת עלולה לגרום להוצאות רפואיות כספיות ניכרות, לאובדן ממושך של ימי עבודה, צורך בתקופת שיקום ממושכת עוד.
          </p>
          <p style={bodyDark}>
            במקרים אלה ניתן להגיש תביעת נזיקין נגד הרשות המקומית. חשוב לזכור כי מדובר בתביעת נזיקין והבסיס לה, כמו כל תביעת נזיקין אחרת, הוא הטענה כי הרשות המקומית התרשלה כלפי הנפגע, בין אם מדובר ברשלנות שמקורה בתחזוקה לקויה או במבנה פגום.
          </p>
          <p style={bodyDark}>
            בכל מקרה, יש לבחון בקפידה כל מקרה לגופו ולשים דגש על שאלת האחריות מכל היבטיה כסוגיה מרכזית, שכן כישלון בהוכחת הרשלנות מצד הנתבע יוביל לכישלון ודחייה של התביעה כולה.
          </p>
        </div>
      </section>

      {/* Section 4 — Tips box */}
      <section style={sectionLight}>
        <div className="reveal">
          <div style={tipsBox}>
            <h3 style={tipsHeading}>העצות המומלצות לנפגע:</h3>
            <ol style={tipsList}>
              {tips.map((tip, i) => (
                <li key={i} style={tipItem}>
                  <span style={tipNumber}>{i + 1}</span>
                  <p style={tipText}>{tip}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Section 5 — Closing callout */}
      <section style={sectionDark}>
        <div style={container} className="reveal">
          <p style={closingCallout}>
            רבים הם הנפגעים שאינם מתלוננים ואינם תובעים בתביעות מהסוג הנ"ל וזאת מתוך מחשבה מוטעית כי אין מה לעשות ו'נפילות קורות תמיד'. אולם זאת יש לדעת, כי אם הנפילה נגרמה כתוצאה ממפגע כמתואר לעיל – יש בהחלט מקום לתבוע ולחייב את העירייה או המועצה לשלם פיצויים עפ"י חומרת הפגיעה.
          </p>
          <div style={ctaWrap}>
            <a href="#contact" style={ctaBtn}>לייעוץ ראשוני חינם ←</a>
          </div>
        </div>
      </section>

      <CTASection title="נפגעתם? תנו לנו להילחם בשבילכם" subtitle="ייעוץ ראשוני ללא עלות וללא התחייבות" />
    </>
  )
}
