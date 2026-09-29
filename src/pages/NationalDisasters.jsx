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
  lineHeight: 1.95,
  margin: 0,
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

      {/* Section 2 — Event blocks */}
      <section style={sectionLight}>
        <div style={container} className="reveal">
          <div className="disaster-event">
            <h3 className="disaster-event-heading">אסון מירון</h3>
            <p style={bodyLight}>
              המשרד מוביל את ייצוג משפחות הנספים במאבק נזיקין תקדימי, שהוביל לקביעת מנגנוני פיצוי ולהכרה באחריות המדינה וגורמים נוספים, לרבות השגת סכומי פיצוי מהגבוהים שנפסקו בישראל עבור משפחות הנספים הקטינים.
            </p>
          </div>
          <div className="disaster-event">
            <h3 className="disaster-event-heading">תיקי אסונות לאומיים נוספים</h3>
            <p style={bodyLight}>
              המשרד מוביל ייצוג בתיקי אסון רחבי היקף, וביניהם <strong>אסון מות הילדים בנחל התחמסון</strong>, ייצוג בתיקי <strong>אסונות התחשמלות של ילדים כתוצאה מטיפוס על עמודי חשמל</strong>, ייצוג בפרשות מורכבות של <strong>קריסת עצי אקליפטוס</strong> ברחבי הארץ, <strong>אסונות טביעה במערות המוות בחוף אכזיב</strong> ועוד מקרים טראגיים.
            </p>
          </div>
          <div className="disaster-event">
            <h3 className="disaster-event-heading">נפגעי 7 באוקטובר</h3>
            <p style={bodyLight}>
              עו״ד בקר הוביל את ייצוג <strong>משפחות החטופים והנעדרים</strong> מטעם לשכת עורכי הדין בכנסת ישראל. ליווי משפטי הדוק של המשפחות בסוגיות של פיצויים, זכויות ושיקום, לרבות הובלת הליכי חקיקה תקדימיים בכנסת ישראל. עו״ד בקר היה מהגורמים המרכזיים ביותר בחקיקת <strong>חוק תגמולים לבני משפחה של חטופים ונעדרים בפעולת איבה, תשפ״ד-2023</strong>.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
