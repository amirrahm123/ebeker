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
const tipTextDark = {
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

const eligibles = [
  'עיוור, נכה בשיעור של 100%',
  'נכה בשיעור של 90% נכות מפגיעות באיברים לפי חישוב מיוחד',
  'נכה שנקבעה לו נכות צמיתה בשיעור של 89% לפי חישוב מיוחד',
]

export default function TaxExemption() {
  useRevealOnScroll()

  return (
    <>
      <PageBanner
        crumbs={[
          { label: 'תחומי עיסוק', to: '/#areas' },
          { label: 'פטור ממס הכנסה' }
        ]}
        title="פטור ממס"
        accent="הכנסה"
      />

      {/* Section 1 — Intro */}
      <section style={sectionDark}>
        <div style={container} className="reveal">
          <h2 style={headingGold}>פטור מתשלום מס הכנסה</h2>
          <p style={bodyDark}>
            פטור מתשלום מס הכנסה כתוצאה ממחלה או נכות — החל מה-1.7.2003 תוקן סעיף 9(5) לפקודה המקנה פטור ממס עבור הכנסות של אחד מהיחידים הבאים:
          </p>
          <ol style={tipsList}>
            {eligibles.map((item, i) => (
              <li key={i} style={tipItem}>
                <span style={tipNumber}>{i + 1}</span>
                <p style={tipTextDark}>{item}</p>
              </li>
            ))}
          </ol>
          <p style={bodyDark}>
            פטור מס הכנסה יחול על נכות רפואית בלבד ולא על נכות תפקודית.
          </p>
          <div style={goldCalloutDark}>
            לפי התיקון, הפטור ניתן רק אם תקופת הנכות הכוללת, עולה על 184 יום עד לתקרת הכנסה המתעדכנת מידי שנה.
          </div>
        </div>
      </section>

      {/* Section 2 — פרטי הפטור */}
      <section style={sectionLight}>
        <div style={container} className="reveal">
          <h2 style={headingGold}>פרטי הפטור</h2>
          <p style={bodyLight}>
            התקרה שונה אם מדובר בהכנסה מיגיעה אישית כמו משכורת, הכנסה מעסק ועוד או כשמדובר בהכנסה שאינה מיגיעה אישית כמו ריבית, שכר דירה ועוד. יודגש כי מי שתקופת נכותו הכוללת נקבעה בין יום אחד ל-184 יום לא יהיה זכאי לפטור בגין הכנסותיו.
          </p>
          <p style={bodyLight}>
            עפ״י סעיף 9(5) לפקודת מס הכנסה, עיוור ומי שסובל מנכות רפואית של למעלה מ-90%, זכאי לקבלת פטור מתשלום מס הכנסה, על הכנסתו עד לגובה התקרה הקבועה בחוק. תקרה זו משתנה משנה לשנה ואת הפטור ניתן לקבל גם לעתיד וגם רטרואקטיבית עבור 6 שנים אחרונות, בהתאם למועד תחילת הנכות שנקבע על ידי הועדה.
          </p>
          <p style={bodyLight}>
            ההכנסה אשר עליה ניתן לקבל את הפטור, הינה אותה הכנסה שיש לנכה מיגיעה אישית, כלומר מעבודתו. אולם, במקרים בהם הנכה אינו מגיע להכנסה השנתית המינימאלית הקבועה בחוק, יאושר לו פטור מתשלום מס הכנסה, עד לגובה תקרה מסוימת, גם מהכנסה אינה מיגיעה אישית.
          </p>
          <div style={goldCalloutLight}>
            הפטור הינו עד להכנסה של כ-492,000 ₪ לשנה ממשלח יד, דהיינו מיגיעה אישית (משכורת, הכנסה מעסק...), או 64,000 ₪ מהשכרת נכס או תמלוגים. הפטור לא ניתן על הכנסות ממקורות אחרים כמו ריבית. מאחר והפטור החודשי עולה על 40,000 ₪, יש חשיבות לבדיקה אצל מומחים האם מגיע לך פטור זמני או קבוע.
          </div>
        </div>
      </section>

      {/* Section 3 — קביעת נכות */}
      <section style={sectionDark}>
        <div style={container} className="reveal">
          <h2 style={headingGold}>קביעת הנכות לצורך הפטור</h2>
          <p style={bodyDark}>
            חשוב לדעת כי מי שנכותו נקבעה כבר על ידי ועדה רפואית, במסגרת תביעה בגין פגיעה מעבודה, תביעה במסגרת חוק הנכים (תגמולים ושיקום), תביעה במסגרת חוק נכי רדיפות הנאצים, חוק התגמולים לנפגעי פעולות איבה, חוק הפיצויים לנפגעי גזזת וכו׳, יכול להסתמך על קביעה זו גם לצורך תביעתו לקבלת פטור ממס הכנסה. במקרים אחרים, בהם טרם נקבעה נכותו הרפואית של התובע, יהיה עליו להיבדק ע״י ועדה רפואית של ביטוח לאומי.
          </p>
          <div style={goldCalloutDark}>
            חישוב גובה הנכות, נעשה בשקלול סך כל הנכויות הרפואיות שנקבעו בגין הפגיעות באיברי הגוף השונים. כך לדוגמא, אם לתובע נקבעו 10% בגין הגבלות בתנועות עמוד השדרה ו-10% נכות בגין טינטון, אזי נכותו הכוללת תעמוד על 19% ולא על 20% כפי שלעיתים נהוג לחשוב.
          </div>
          <p style={bodyDark}>
            על החלטת הועדה הרפואית הנ״ל ניתן לערער בפני ועדה רפואית לערערים אולם החלטת הועדה הרפואית לערערים הינה סופית ולא ניתן יהיה לערער עליה.
          </p>
        </div>
      </section>

      {/* Section 4 — החמרת מצב */}
      <section style={sectionLight}>
        <div style={container} className="reveal">
          <h2 style={headingGold}>הגשת תביעה במסגרת החמרת מצב</h2>
          <div style={goldCalloutLight}>
            מי שהגיש תביעה לקבלת פטור מתשלום מס הכנסה, ונקבע כי נכותו אינה עוברת את הסף הקבוע בחוק, יהיה רשאי להגיש תביעה במסגרת הליך של החמרת מצב, בחלוף 6 חודשים מהמועד בו נבדק על ידי הועדה הרפואית בפעם האחרונה.
          </div>
          <p style={bodyLight}>
            לצורך פתיחת ההליך מחדש, על התובע להמציא כמובן אישור רפואי המעיד על ההחמרה שחלה במצבו הרפואי. ללא אישור רפואי שכזה לא תתקבל בקשתו לדיון מחדש.
          </p>
          <div style={ctaWrap}>
            <a href="#contact" style={ctaBtn}>לייעוץ ראשוני חינם ←</a>
          </div>
        </div>
      </section>

      <CTASection title="האם אתם זכאים לפטור ממס?" subtitle="ייעוץ ראשוני ללא עלות וללא התחייבות" />
    </>
  )
}
