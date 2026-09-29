import useRevealOnScroll from '../hooks/useRevealOnScroll'
import PageBanner from '../components/PageBanner'
import CTASection from '../components/CTASection'
import { site } from '../config/site'

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

export default function NationalDisasters() {
  useRevealOnScroll()

  return (
    <>
      <PageBanner
        crumbs={[
          { label: 'תחומי עיסוק', to: '/#areas' },
          { label: 'אסונות לאומיים' }
        ]}
        title="אסונות"
        accent="לאומיים"
      />

      {/* Section 1 — Intro */}
      <section style={sectionDark}>
        <div style={container} className="reveal">
          <p style={introLeadDark}>
            עו״ד ערן בקר עומד בחזית המאבקים המשפטיים הציבוריים המשמעותיים ביותר בישראל בעשורים האחרונים, תוך התמחות בתיקי אסונות מורכבים ואסונות לאומיים.
          </p>
          <p style={experienceLine}>
            לעו״ד ערן בקר ניסיון משפטי של כ-25 שנים בהצלחה בתביעות נזיקין!
          </p>
          <p style={ctaPhoneLine}>
            בכדי לברר מהן זכויותיכם התקשרו וקבעו שיחת ייעוץ או פגישה ללא התחייבות{' '}
            <a href={site.phones.office.href} style={phoneLink}>{site.phones.office.display}</a>
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section style={sectionLight}>
        <div style={container} className="reveal">
          <p style={bodyLight}>
            <strong>אסון מירון:</strong> המשרד מוביל את ייצוג משפחות הנספים במאבק נזיקין תקדימי, שהוביל לקביעת מנגנוני פיצוי ולהכרה באחריות המדינה וגורמים נוספים, לרבות השגת סכומי פיצוי מהגבוהים שנפסקו בישראל עבור משפחות הנספים הקטינים.
          </p>
          <p style={bodyLight}>
            <strong>תיקי אסונות לאומיים נוספים:</strong> המשרד מוביל ייצוג בתיקי אסון רחבי היקף, וביניהם אסון מות הילדים בנחל התחמסון, ייצוג בתיקי אסונות התחשמלות של ילדים כתוצאה מטיפוס על עמודי חשמל, ייצוג בפרשות מורכבות של קריסת עצי אקליפטוס ברחבי הארץ, אסונות טביעה במערות המוות בחוף אכזיב ועוד מקרים טראגיים.
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section style={sectionDark}>
        <div style={container} className="reveal">
          <p style={bodyDark}>
            <strong>נפגעי 7 באוקטובר:</strong> עו״ד בקר הוביל את ייצוג משפחות החטופים והנעדרים מטעם לשכת עורכי הדין בכנסת ישראל. ליווי משפטי הדוק של המשפחות בסוגיות של פיצויים, זכויות ושיקום, לרבות הובלת הליכי חקיקה תקדימיים בכנסת ישראל. עו״ד בקר היה מהגורמים המרכזיים ביותר בחקיקת חוק תגמולים לבני משפחה של חטופים ונעדרים בפעולת איבה, תשפ״ד-2023.
          </p>
        </div>
      </section>

      <CTASection title="נפגעתם באסון?" />
    </>
  )
}
