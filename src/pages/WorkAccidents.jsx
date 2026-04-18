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
const typeCard = {
  background: '#fff',
  border: '1px solid rgba(201,168,76,0.2)',
  borderRight: '4px solid var(--color-accent)',
  borderRadius: 6,
  padding: '20px 24px',
}
const typeTitle = {
  color: '#1a2a4a',
  fontWeight: 800,
  fontSize: '1.05rem',
  margin: '0 0 6px',
}
const typeText = {
  color: '#1a2a4a',
  fontSize: '0.98rem',
  lineHeight: 1.75,
  margin: 0,
}
const cardGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: 16,
  margin: '0 0 24px',
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

export default function WorkAccidents() {
  useRevealOnScroll()

  return (
    <>
      <PageBanner
        crumbs={[
          { label: 'תחומי עיסוק', to: '/#areas' },
          { label: 'תאונות עבודה · ביטוח לאומי' }
        ]}
        title="תאונות עבודה"
        accent="ביטוח לאומי"
      />

      {/* Section 1 — Intro */}
      <section style={sectionDark}>
        <div style={container} className="reveal">
          <p style={{ ...bodyDark, fontSize: '1.15rem', lineHeight: 1.9 }}>
            ברחבי המדינה מתרחשות כל יום תאונות עבודה שגורמות לא פעם לנזקים בלתי הפיכים, לנכות או מוות.
          </p>
          <p style={bodyDark}>
            למשרדנו ניסיון עשיר ומוכח בייצוג נפגעי תאונות עבודה כנגד המוסד לביטוח לאומי בכלל ובבית הדין לעבודה בפרט.
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

      {/* Section 2 — הגדרת תאונת עבודה */}
      <section style={sectionLight}>
        <div style={container} className="reveal">
          <h2 style={headingGold}>מהי תאונת עבודה?</h2>
          <p style={bodyLight}>
            פגיעה / תאונה בעבודה היא אירוע בו נפגע אדם תוך כדי ועקב עבודתו, וכן בדרכו מביתו לעבודה ובחזרתו מן העבודה לביתו.
          </p>
          <h3 style={subHeadingGold}>סוגי תאונות עבודה</h3>
          <div style={cardGrid}>
            <div style={typeCard}>
              <h4 style={typeTitle}>תאונה ברורה להוכחה</h4>
              <p style={typeText}>
                תאונה שעל פניה ניתן להגדירה כ׳תאונת עבודה׳ בשל התרחשותה המיידית הנצפית לעין כל (למשל פועל יצור שנפגע בכף ידו ממכונת חיתוך).
              </p>
            </div>
            <div style={typeCard}>
              <h4 style={typeTitle}>תאונה קשה להוכחה</h4>
              <p style={typeText}>
                תאונה שהאירוע אינו ברור מאליו או שאינו נצפה או שהגורם לו אינו נחזה מיידית ויש להוכיח אירועו של אירוע חריג בעבודה, וכן את הקשר הסיבתי הרפואי. בין התאונות הקשות להוכחה: אירוע מוחי, אוטם שריר הלב, אירוע נפשי, סוכרת, יתר לחץ דם.
              </p>
            </div>
          </div>
          <div style={goldCalloutLight}>
            חשוב לדעת כי ישנן תאונות המתרחשות מחוץ לשעות ולמקום העבודה ויוקרו גם הן, במקרים מסויימים כ׳תאונת עבודה׳, ובין היתר: תאונה במסגרת אירועי גיבוש לעובדים, השתלמויות, ימי ספורט וכדומה.
          </div>
        </div>
      </section>

      {/* Section 3 — הליך התביעה */}
      <section style={sectionDark}>
        <div style={container} className="reveal">
          <h2 style={headingGold}>הליך התביעה מול ביטוח לאומי</h2>
          <p style={bodyDark}>
            במקרה של פגיעה / תאונה בעבודה, זכאי הנפגע לפנות למוסד לביטוח לאומי על מנת שיכיר בתאונה כ׳תאונת עבודה׳.
          </p>
          <p style={bodyDark}>
            נפגע שהוכר ע״י המוסד לביטוח לאומי כ׳נפגע עבודה׳ זכאי לזכויות והטבות כלכליות המוענקות על ידי המוסד לביטוח לאומי.
          </p>
          <div style={goldCalloutDark}>
            בשלב הראשון, בסמוך להתרחשות הפגיעה, יש להגיש למוסד לביטוח לאומי הודעה על פגיעה בעבודה ותביעה לקבלת דמי פגיעה. את התביעה לדמי פגיעה יש למסור למוסד לביטוח לאומי בתוך 12 חודשים מהפגיעה ואי הכושר לעבודה. מומלץ להגיש את התביעה במועד הקרוב ביותר לפגיעה.
          </div>
          <p style={bodyDark}>
            דמי הפגיעה נועדו לפצות את המבוטח על אובדן שכר או הכנסה עקב הפגיעה בעבודה, והם משולמים בעד פרק הזמן שלא עבד בכל עבודה ונזקק לטיפול רפואי, ולכל היותר בעד 91 ימים, הנמנים ממחרת יום הפגיעה וזאת עד לתקרה של 1,114.38 ש״ח ליום.
          </p>
          <p style={bodyDark}>
            לאחר ההכרה בתאונה כ׳תאונת עבודה׳, הנפגע צפוי להיבדק ע״י וועדות רפואיות בתחומי הרפואה הרלוונטיים, שיקבעו האם נותרה לו נכות בגין התאונה ומה שיעורה. קביעה זו תשפיע על זכאותו של הנפגע לקבלת מענק כספי ו/או קצבה חודשית.
          </p>
        </div>
      </section>

      {/* Section 4 — ערעור וזכויות נוספות */}
      <section style={sectionLight}>
        <div style={container} className="reveal">
          <h2 style={headingGold}>ערעור על החלטת ביטוח לאומי</h2>
          <p style={bodyLight}>
            במקרים שבהם הנפגע סבור שביטוח לאומי טעה בקביעתו — למשל, לא הכיר בו כנפגע תאונת עבודה או לא פסק לו אחוזי נכות כראוי — יכול הנפגע להגיש תביעה על אי הכרה בתביעתו כנגד המוסד לביטוח לאומי או לחילופין להגיש ערעור על החלטת הועדה הרפואית לעררים לבית הדין האזורי לעבודה בשאלה משפטית בלבד.
          </p>
          <div style={goldCalloutLight}>
            בנוסף, חשוב לדעת כי לנפגע עומדות, במקרים מסויימים, זכויות נוספות כגון: תקנה 18, תקנה 15, שיקום / קצבה מיוחדת, ניידות, שירותים מיוחדים ועוד.
          </div>
        </div>
      </section>

      {/* Section 5 — Closing */}
      <section style={sectionDark}>
        <div style={container} className="reveal">
          <div style={goldCalloutDark}>
            פניה למשרדנו לצורך ייצוגכם בהליכים מול המוסד לביטוח לאומי (ובמידת הצורך מול ביה״ד לעבודה) מבטיח כי תקבלו ליווי מקצועי ומדוייק, לאורך כל שלבי ההליך, שימקסם את סיכוייכם למיצויי מלוא זכויותיכם בצורה המיטבית.
          </div>
          <div style={ctaWrap}>
            <a href="#contact" style={ctaBtn}>לייעוץ ראשוני חינם ←</a>
          </div>
        </div>
      </section>

      <CTASection title="נפגעת בתאונת עבודה?" subtitle="ייעוץ ראשוני ללא עלות וללא התחייבות — פנו אלינו היום" />
    </>
  )
}
