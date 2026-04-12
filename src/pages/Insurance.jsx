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

export default function Insurance() {
  useRevealOnScroll()

  return (
    <>
      <PageBanner
        crumbs={[
          { label: 'תחומי עיסוק', to: '/#areas' },
          { label: 'ביטוח' }
        ]}
        title="דיני"
        accent="ביטוח"
      />

      {/* Section 1 — Intro */}
      <section style={sectionDark}>
        <div style={container} className="reveal">
          <p style={{ ...bodyDark, fontSize: '1.15rem', lineHeight: 1.9 }}>
            מימושם של ביטוח חיים, ביטוח אובדן כושר עבודה וביטוח נכות מתאונה, נתקל פעמים רבות בחסמים שמערימות חברות הביטוח במטרה להתחמק מתשלום הפיצוי למבוטח. לכן, חשוב שעו״ד עם ניסיון רב בתחום ילווה אתכם בדרככם למיצוי מלוא זכויותיכם בהתאם לפוליסה הרלוונטית.
          </p>
          <div style={goldCalloutDark}>
            לעו״ד ערן בקר ניסיון משפטי של כ-20 שנים בהצלחה במימוש זכויות מכוח פוליסות ביטוח מול חברות הביטוח!
          </div>
          <p style={ctaPhoneLine}>
            בכדי לברר מהן זכויותיכם התקשרו וקבעו שיחת ייעוץ או פגישה ללא עלות וללא התחייבות{' '}
            <a href="tel:049001056" style={phoneLink}>04-9001056</a>
          </p>
        </div>
      </section>

      {/* Section 2 — ביטוח חיים */}
      <section style={sectionLight}>
        <div style={container} className="reveal">
          <h2 style={headingGold}>ביטוח חיים</h2>
          <p style={bodyLight}>
            מטרתו הבסיסית של ביטוח חיים היא להגן על היקרים לנו מפני קשיים כלכליים במקרי מוות (משכנתא, ביטוחי בריאות ועוד), נכויות או מחלות קשות של המפרנס העיקרי — המבוטח, הגורמים לשינויים קיצוניים באורח חיי המשפחה ופוגעים בהכנסותיה.
          </p>
          <p style={bodyLight}>
            קיימים סוגים שונים של ביטוחי חיים המשלבים גם מרכיבי חיסכון ומטרתם, בין היתר, הנה שימור רמת החיים גם לאחר יציאה לגמלאות.
          </p>
          <p style={bodyLight}>
            הדרך לקבלת פיצויים וקצבאות מחברות הביטוח מתחילה בהמצאת הפוליסה. רוב המשפחות שאיבדו את יקיריהן אינן מודעות לקיומו של ביטוח חיים שהותיר אחריו המנוח. לכן, יש לערוך חיפוש מקיף במסמכיו של המנוח ובמאגרים האינטרנטיים, שכן ייתכן וקיימים מסמכים המעידים על כך שהמנוח היה מבוטח בביטוח חיים או בביטוח מנהלים. כמו כן, מומלץ לפנות למעסיק במקום עבודתו של המנוח, סוכן הביטוח של המשפחה, עורכי דין, רואי חשבון, בנקים במקרה של ביטוח משכנתא וכיו״ב, ולבדוק אם ידוע לכל אחד מגורמים אלו על קיומו של ביטוח חיים או מנהלים שהוצא למנוח.
          </p>
          <div style={goldCalloutLight}>
            אם חשבתם כי די בהמצאת פוליסת ביטוח חיים לחברת הביטוח על מנת לקבל את הפיצוי המגיע לכם עקב קרות מקרה הביטוח, הרי שטעות גדולה בידכם!
          </div>
          <p style={bodyLight}>
            חברות הביטוח תמיד דואגות להעלות טענות רבות, לעיתים מופרכות כדי להתחמק מתשלום תגמולי הביטוח.
          </p>
        </div>
      </section>

      {/* Section 3 — ביטוח אובדן כושר עבודה */}
      <section style={sectionDark}>
        <div style={container} className="reveal">
          <h2 style={headingGold}>ביטוח — אובדן כושר עבודה</h2>
          <p style={bodyDark}>
            מדובר בסעיף ביטוח שונה ונפרד הנלווה לפוליסת ביטוח חיים או הנרכש בפוליסה נפרדת בפני עצמה. ייתכן בהחלט כי למבוטח יהיה כיסוי לנכות מתאונה אך לא יהיה מבוטח באובדן כושר עבודה וההיפך.
          </p>
          <p style={bodyDark}>
            ביטוח אובדן כושר עבודה נועד על מנת להבטיח מעין משכורת שוטפת (פיצוי חודשי) למבוטח, אשר בעטייה של תאונה או מחלה איבד את כושרו לעבוד באופן מוחלט. פעמים, ביטוח זה מכסה גם אובדן כושר עבודה חלקי בתנאי שאופציה זו נרכשה בפוליסה.
          </p>
          <div style={goldCalloutDark}>
            מהו אובדן כושר עבודה מוחלט? ברוב הפוליסות, מוגדר אובדן כושר עבודה מוחלט ככזה, אשר מצריך אי יכולת עבודה בשיעור של 75% לפחות.
          </div>
          <div style={goldCalloutDark}>
            מהו אובדן כושר עבודה חלקי? ביטוח זה נועד להבטיח למבוטח תשלום חודשי גם אם לא איבד את כושרו לעבוד באופן מוחלט. תחום הכיסוי בביטוח זה הוא מאובדן כושר עבודה בשיעור 25% ועד 74%.
          </div>
        </div>
      </section>

      {/* Section 4 — ביטוח נכות מתאונה */}
      <section style={sectionLight}>
        <div style={container} className="reveal">
          <h2 style={headingGold}>ביטוח — נכות מתאונה</h2>
          <p style={bodyLight}>
            ׳נכות מתאונה׳ הינו ביטוח הנרכש בדרך כלל כסעיף ביטוחי נוסף הנלווה לפוליסת ביטוח חיים. ביטוח כזה יכול גם להיכנס במסגרת ביטוח ׳תאונות אישיות׳ ויכול הוא להצטרף כביטוח נוסף במכלול גדול של ביטוחים, לרבות ביטוחים קולקטיביים במקומות עבודה כיוצ״ב. ייתכן בהחלט כי למבוטח יהיה כיסוי לנכות מתאונה אך לא יהיה מבוטח באובדן כושר עבודה וההיפך.
          </p>
          <p style={bodyLight}>
            המאפיין ביטוח זה בכל המקרים הוא בכך שהוא משולם כפונקציה של סכום הביטוח שנרכש ואחוז הנכות הצמיתה של המבוטח.
          </p>
          <div style={goldCalloutLight}>
            לדוגמא: אדם שביטח את עצמו בסעיף נכות מתאונה בסכום של 100,000 ₪ ונפסקו לו 10% נכות חושב לתומו ובצדק, כי חברת הביטוח תשלם לו 10,000 ₪. בפועל חב׳ הביטוח מוכנות לשלם לכל היותר 50% דהיינו 5,000 ₪. כך הם פני הדברים באלפי תביעות המוגשות לחברות הביטוח מכח סעיף זה.
          </div>
        </div>
      </section>

      {/* Section 5 — סיכום */}
      <section style={sectionDark}>
        <div style={container} className="reveal">
          <h2 style={headingGold}>סיכום</h2>
          <p style={bodyDark}>
            לרוב ייתקל המבוטח, התובע זכויות מכוח הפוליסות שפורטו לעיל, בבעיות רבות מצד חברות הביטוח ובהתחכמויות שונות ומשונות המלוות בפרשנויות מוזרות ועקומות בהן משתמשות המבטחות לצורך הקטנת התשלום המגיע למבוטח.
          </p>
          <p style={bodyDark}>
            כדי לא ליפול במלכודות שטומנות חברות הביטוח, מומלץ לפנות במהרה לקבלת ייעוץ אצל עורך דין בקיא ובעל ניסיון בדיני ביטוח, אשר מכיר מקרוב את התחום ואת ׳הטריקים׳ של חברות הביטוח, אשר עושות כל שביכולתן על מנת להתחמק מתשלום תגמולי הביטוח.
          </p>
          <div style={ctaWrap}>
            <a href="#contact" style={ctaBtn}>לייעוץ ראשוני חינם ←</a>
          </div>
        </div>
      </section>

      <CTASection title="חברת הביטוח לא משלמת?" subtitle="ייעוץ ראשוני ללא עלות וללא התחייבות — פנו אלינו היום" />
    </>
  )
}
