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
  margin: '0 0 18px',
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

const caseTypes = [
  {
    title: 'תביעות נגד חברת חשמל',
    text: 'התחשמלות ומותם של בני אדם כתוצאה מטיפוס על עמודי חשמל.',
  },
  {
    title: 'תביעות נגד רשויות מקומיות ורשויות ציבור',
    text: 'קריסת עצים שגרמו למותם של עוברי אורח ברחובות.',
  },
  {
    title: 'תביעות נגד המדינה ורשויות ציבור',
    text: 'טביעת רוחצים למוות בים בכלל וב׳מערת המוות׳ באכזיב בפרט.',
  },
  {
    title: 'תביעות נגד משרד החינוך ובתי ספר',
    text: 'מוות של תלמיד במהלך טיול שנתי של בית הספר. מתוך הכתבה בערוץ 2: ״הסכום הגבוה ביותר ששולם בישראל להורים שבנם נהרג באסון במסגרת בית ספרית״.',
  },
  {
    title: 'תביעות נגד משרד הבריאות וקופות חולים',
    text: 'מוות כתוצאה מרשלנות רפואית.',
  },
  {
    title: 'תביעות נגד מעסיקים — תאונות עבודה',
    text: 'מוות של עובדים באתרי בנייה, במפעלים, וחשיפה לחומרים מסוכנים, מחלות סרטן, מחלת סרטן מזותוליומה / אסבסט במקומות עבודה.',
  },
  {
    title: 'תביעות נגד מעסיקים — פגיעות אנושות',
    text: 'פגיעות אנושות של עובדים במהלך עבודתם.',
  },
]

export default function CausesOfDeath() {
  useRevealOnScroll()

  return (
    <>
      <PageBanner
        crumbs={[
          { label: 'תחומי עיסוק', to: '/#areas' },
          { label: 'חקירת סיבות מוות' }
        ]}
        title="חקירת"
        accent="סיבות מוות"
      />

      {/* Section 1 — Intro */}
      <section style={sectionDark}>
        <div style={container} className="reveal">
          <p style={{ ...bodyDark, fontSize: '1.15rem', lineHeight: 1.9 }}>
            לצערנו מתרחשות לא פעם ברחבי המדינה תאונות קטלניות שגורמות לנכות קשה ולמוות של נפגעים. תאונות אלה דורשות יידע וטיפול ייחודי בתביעות עיזבון ונפגעים קשים ומתנהלות בערכאות המשפטיות הגבוהות. למשרדנו ניסיון עשיר ומוכח בייצוג תביעות אלה של משפחות שיקיריהם נפגעו או נהרגו בתאונות קטלניות.
          </p>
          <div style={goldCallout}>
            לעו״ד ערן בקר ניסיון משפטי של כ-20 שנים בהצלחה בניהול תיקי תלויים או עזבון עקב תאונות קטלניות.
          </div>
          <p style={ctaPhoneLine}>
            לברור מהן זכויותיכם התקשרו וקבעו שיחת ייעוץ או פגישה ללא עלות וללא התחייבות{' '}
            <a href="tel:049001056" style={phoneLink}>04-9001056</a>
          </p>
          <p style={bodyDark}>
            משרדנו הינו אחד מהמשרדים הבודדים בארץ שייצג במגוון רחב מאוד של תביעות נזיקין נגד גופים, משרדי ממשלה, רשויות מקומיות, רשויות ציבור, חברות ממשלתיות שנתבעו וחוייבו לשלם עשרות מיליוני שקלים כפיצוי למשפחות שאיבדו את יקיריהן בתאונות קטלניות.
          </p>
        </div>
      </section>

      {/* Section 2 — Case types */}
      <section style={sectionLight}>
        <div style={container} className="reveal">
          <h2 style={{ ...headingGold, color: 'var(--color-accent)' }}>תחומי הטיפול שלנו בתביעות קטלניות</h2>
          {caseTypes.map((c, i) => (
            <div key={i} style={caseCard}>
              <h3 style={caseTitle}>{c.title}</h3>
              <p style={caseText}>{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3 — Closing */}
      <section style={sectionDark}>
        <div style={container} className="reveal">
          <div style={goldCallout}>
            אם חלילה איבדתם את יקירכם — אל תהססו לפנות לייעוץ משפטי במשרדנו.
          </div>
          <p style={ctaPhoneLine}>
            לקביעת שיחת ייעוץ או פגישה ללא עלות וללא התחייבות{' '}
            <a href="tel:049001056" style={phoneLink}>04-9001056</a>
          </p>
          <div style={ctaWrap}>
            <a href="#contact" style={ctaBtn}>לייעוץ ראשוני חינם ←</a>
          </div>
        </div>
      </section>

      <CTASection title="רוצים לדעת את האמת?" subtitle="אנחנו לצידכם בהליך הקשה הזה — ייעוץ ראשוני חינם" />
    </>
  )
}
