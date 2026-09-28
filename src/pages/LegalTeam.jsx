/* eslint-disable react/prop-types -- this codebase does not use PropTypes anywhere */
import { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import useRevealOnScroll from '../hooks/useRevealOnScroll'
import PageBanner from '../components/PageBanner'
import Modal from '../components/Modal'
import { site } from '../config/site'

const attorneys = [
  {
    name: 'עו"ד ערן בקר',
    title: 'מייסד',
    photo: '/pics/03_הצוות_המשפטי/eran-beker.webp',
    shortBio: 'מייסד המשרד בשנת 2003. מתמחה בתחום הרפואה והמשפט — נזיקין, רשלנות רפואית, תאונות דרכים ועבודה, ביטוח לאומי, תאונות ילדים וספורט, וחקירת סיבות מוות. ניסיון של כ-25 שנים.',
    shortRoles: [
      'יו"ר ועדת הנזיקין, הביטוח והביטוח הלאומי — מחוז חיפה',
      'מ"מ יו"ר פורום נזיקין ארצי',
      'יו"ר פורום ביטוח ארצי',
      'משנה ליו"ר לשכת עוה"ד מחוז חיפה',
    ],
    fullBio: [
      'עורך הדין ערן בקר התמחה ועבד כעו"ד במשרד פרטי שעסק בתחום נזקי גוף בטרם הקים את משרדו.',
      'בשנת 2003 הקים את משרדו שהתפתח וגדל בהתמדה.',
      'ערן בקר מתמחה מזה שנים בתחום הרפואה והמשפט - תביעות נזיקין, תאונות קטלניות, תאונות דרכים, תאונות עבודה, רשלנות רפואית, ביטוח לאומי, נפגעי צבא וכוחות הביטחון, תאונות ילדים / תלמידים, תאונות במתקני ספורט, תביעות נזיקין נגד רשויות מקומיות, דיני ביטוח, חקירת סיבות מוות ועוד.',
    ],
    education: [
      'תואר ראשון L.L.B במשפטים',
      'לימודי תואר שני במנהל עסקים',
      'חבר לשכת עורכי הדין בישראל',
      'חבר האגודה לרפואה ומשפט בישראל',
      'הכשרה בדיני נזיקין, רשלנות רפואית וביטוח — לשכת עורכי הדין',
      'הכשרה ברפואה ומשפט — לשכת עורכי הדין',
      'הכשרה בדיני הביטוח לאומי — לשכת עורכי הדין',
      'מרצה בפורומים לרפואה ומשפט',
      'מרצה בהשתלמויות מקצועיות — לשכת עורכי הדין',
    ],
    publicRoles: [
      'מ. ליו"ר לשכת עורכי הדין — ועד מחוז חיפה',
      'יו"ר ועדת הנזיקין, הביטוח והביטוח הלאומי לשכת עורכי הדין בישראל — מחוז חיפה',
      'יו"ר פורום ביטוח ארצי — לשכת עורכי הדין',
      'מ"מ יו"ר פורום נזיקין ארצי — לשכת עורכי הדין',
      'יו"ר ועדת ערר ארנונה (לשעבר) — עיריית נהריה',
    ],
    featured: true,
  },
  {
    name: 'עו"ד מורן כהן יונתן',
    title: 'עורכת דין',
    photo: '/pics/03_הצוות_המשפטי/04_dcd181_8e95dbbd82644353b358b3e68dc9359c~mv2.webp',
    shortBio: 'התמחתה ועבדה כ-10 שנים באחד המשרדים המובילים בארץ בייצוג חברות ביטוח. כיום מתמחה בייצוג תובעים בתחום נזקי הגוף בחברת עורכי הדין בקר.',
    shortRoles: ['נזיקין כללי וביטוח לאומי', 'תאונות דרכים ותאונות עבודה', 'רשלנות רפואית וליטיגציה'],
    fullBio: [
      'עו"ד מורן התמחתה ועבדה כ-10 שנים, כעו"ד באחד המשרדים המובילים ביותר בארץ, בתחום הנזיקין והביטוח, בייצוג חברות ביטוח בטרם הצטרפה לחברת עורכי הדין בקר.',
      'בשנים האחרונות עובדת כעו"ד בחברת עורכי הדין בקר ומתמחה בייצוג תובעים בתחום נזקי הגוף: תביעות נזיקין, תאונות דרכים, חבויות, תאונת עבודה, רשלנות רפואית, ביטוח לאומי וליטיגציה.',
    ],
    education: [
      'תואר ראשון L.L.B במשפטים - אוניברסיטת חיפה',
      'חברת לשכת עורכי הדין בישראל',
      'הכשרה בדיני נזיקין וביטוח - לשכת עורכי הדין',
      'הכשרה בדיני הביטוח הלאומי - לשכת עורכי הדין',
      'הכשרה ברשלנות רפואית - לשכת עורכי הדין',
    ],
    contact: { email: 'moran@ebeker.co.il', phone: site.phones.office.display, fax: site.phones.fax.display },
  },
  {
    name: 'עו"ד בלאר חיימוב',
    title: 'עורכת דין',
    photo: '/pics/03_הצוות_המשפטי/bellar-haimov.avif',
    shortBio: 'עורכת הדין בלאר התמחתה במשרד פרטי בתחום האזרחי לרבות נזקי גוף ותביעות ביטוח בטרם הצטרפה לחברת עורכי הדין בקר. בשנים האחרונות עובדת כעו"ד בחברת עורכי הדין בקר ועוסקת בתחום נזקי הגוף בעיקר - תאונות דרכים וביטוח לאומי.',
    shortRoles: ['נזקי גוף ותביעות ביטוח', 'תאונות דרכים', 'ביטוח לאומי'],
    fullBio: [
      'עורכת הדין בלאר התמחתה במשרד פרטי בתחום האזרחי לרבות נזקי גוף ותביעות ביטוח בטרם הצטרפה לחברת עורכי הדין בקר.',
      'בשנים האחרונות עובדת כעו"ד בחברת עורכי הדין בקר ועוסקת בתחום נזקי הגוף בעיקר - תאונות דרכים וביטוח לאומי.',
    ],
    education: [
      'תואר ראשון L.L.B במשפטים - המכללה האקדמית נתניה',
      'חברת לשכת עורכי הדין בישראל',
      'הכשרה בדיני נזיקין וביטוח - לשכת עורכי הדין',
    ],
    contact: { email: 'bellar@ebeker.co.il', phone: site.phones.office.display, fax: site.phones.fax.display },
  },
  {
    name: 'עו"ד קארן יעקב',
    title: 'עורכת דין',
    photo: '/pics/03_הצוות_המשפטי/karen-yaakov.avif',
    shortBio: 'עו"ד קארן התמחתה ועבדה כ-5 שנים במשרדים מובילים בארץ, בתחום הנזיקין והביטוח, בייצוג תובעים וכן יצגה רשות מקומית ממרכז הארץ כנתבעת בתביעות שהוגשו נגדה. בהמשך עברה עו"ד קארן לעבוד כ-7 שנים בשתי חברות ביטוח מהמובילות במשק במחלקת חבויות וחובה.',
    shortRoles: ['נזקי גוף ותביעות ביטוח', 'תאונות דרכים', 'תאונות עבודה וביטוח לאומי'],
    fullBio: [
      'עו"ד קארן התמחתה ועבדה כ-5 שנים במשרדים מובילים בארץ, בתחום הנזיקין והביטוח, בייצוג תובעים וכן יצגה רשות מקומית ממרכז הארץ כנתבעת בתביעות שהוגשו נגדה.',
      'בהמשך עברה עו"ד קארן לעבוד כ-7 שנים בשתי חברות ביטוח מהמובילות במשק במחלקת חבויות וחובה. קארן ניהלה תיקי נזיקין וביטוח מורכבים ומשמעותיים הן כמיישבת תביעות והן כרפרנטית בחברות הביטוח בטרם הצטרפה לחברת עורכי הדין בקר.',
      'בשנים האחרונות עובדת כעו"ד בחברת עורכי הדין בקר ומתמחה בייצוג תובעים בתחום נזקי הגוף: תביעות נזיקין, תאונות דרכים, חבויות, תאונות עבודה וביטוח לאומי.',
    ],
    education: [
      'תואר ראשון L.L.B במשפטים – המסלול האקדמי של המכללה למנהל בראשל"צ',
      'חברת לשכת עורכי הדין בישראל',
      'הכשרה בדיני נזיקין וביטוח - לשכת עורכי הדין',
    ],
    contact: { email: 'karen@ebeker.co.il', phone: site.phones.office.display, fax: site.phones.fax.display },
  },
  {
    name: 'עו"ד דפנה סודרי',
    title: 'עורכת דין',
    photo: '/pics/03_הצוות_המשפטי/dafna.jpg',
    shortBio: 'עורכת הדין סודרי התמחתה בבית משפט השלום עכו בתחום האזרחי. בהמשך עבדה בבית משפט השלום בקריות כעוזרת משפטית ומגשרת בתחום האזרחי לרבות נזקי גוף ותביעות ביטוח בטרם הצטרפה לחברת עורכי הדין בקר. בשנים האחרונות עובדת כעו"ד בחברת עורכי הדין בקר ועוסקת בתחום נזקי הגוף בעיקר - תאונות דרכים וביטוח לאומי.',
    shortRoles: ['נזקי גוף ותביעות ביטוח', 'תאונות דרכים', 'ביטוח לאומי'],
    fullBio: [
      'עורכת הדין סודרי התמחתה בבית משפט השלום עכו בתחום האזרחי.',
      'בהמשך עבדה בבית משפט השלום בקריות כעוזרת משפטית ומגשרת בתחום האזרחי לרבות נזקי גוף ותביעות ביטוח בטרם הצטרפה לחברת עורכי הדין בקר.',
      'בשנים האחרונות עובדת כעו"ד בחברת עורכי הדין בקר ועוסקת בתחום נזקי הגוף בעיקר - תאונות דרכים וביטוח לאומי.',
    ],
    education: [
      'תואר ראשון L.L.B במשפטים- אוניברסיטת רייכמן (הבינתחומי הרצליה)',
      'תואר ראשון B.A במנהל עסקים (התמחות בשיווק)- אוניברסיטת רייכמן (הבינתחומי הרצליה)',
      'תואר שני M.A בלימודי מגדר- אוניברסיטת חיפה.',
      'חברת לשכת עורכי הדין בישראל',
      'קורס גישור בלשכת עורכי הדין בישראל.',
      'הסמכה מטעם משרד המשפטים- האפוטרופוס הכללי - עריכת ייפוי כוח מתמשך, הנחיות מקדימות לצורך מינוי אפוטרופוס ומסמך הבעת רצון על פי חוק.',
      'הכשרה בדיני נזיקין וביטוח - לשכת עורכי הדין',
    ],
    // TODO: Dafna's email – waiting for the client
    contact: { email: '', phone: site.phones.office.display, fax: site.phones.fax.display },
  },
  {
    name: 'עו"ד ריצ\'רד פרדגיים',
    title: 'עורך דין',
    photo: '/pics/03_הצוות_המשפטי/richard-fardgaim.jpg',
    shortBio: 'עורך הדין ריצ\'רד התמחה במשרד פרטי בתחום האזרחי לרבות נזקי גוף ותביעות ביטוח בטרם הצטרף לחברת עורכי הדין בקר. בשנה האחרונה עובד כעו"ד בחברת עורכי הדין בקר ועוסק בתחום נזקי הגוף בעיקר - תאונות דרכים וביטוח לאומי.',
    shortRoles: ['נזקי גוף ותביעות ביטוח', 'תאונות דרכים', 'ביטוח לאומי'],
    fullBio: [
      'עורך הדין ריצ\'רד התמחה במשרד פרטי בתחום האזרחי לרבות נזקי גוף ותביעות ביטוח בטרם הצטרף לחברת עורכי הדין בקר.',
      'בשנה האחרונה עובד כעו"ד בחברת עורכי הדין בקר ועוסק בתחום נזקי הגוף בעיקר - תאונות דרכים וביטוח לאומי.',
    ],
    education: [
      'תואר ראשון L.L.B במשפטים - המרכז האקדמי שערי מדע ומשפט',
      'חבר לשכת עורכי הדין בישראל',
      'הכשרה בדיני נזיקין וביטוח - לשכת עורכי הדין',
    ],
    contact: { email: 'richard@ebeker.co.il', phone: site.phones.office.display, fax: site.phones.fax.display },
  },
]

/** Small inline gold diamond used as a bullet, instead of an emoji glyph. */
function GoldDiamond() {
  return (
    <svg className="team-bullet" width="8" height="8" viewBox="0 0 8 8" aria-hidden="true">
      <rect x="4" y="0" width="5.6" height="5.6" transform="rotate(45 4 4)" fill="currentColor" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M4 4h4l2 5-2.5 1.5a11 11 0 005 5L14 13l5 2v4a1 1 0 01-1 1C9.5 20 4 14.5 4 5a1 1 0 011-1z" />
    </svg>
  )
}

function FaxIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M6 3h9l3 3v4H6z" />
      <rect x="4" y="10" width="16" height="8" rx="1.5" />
      <path d="M8 14h4M8 21h8v-3H8z" />
    </svg>
  )
}

function TeamCard({ attorney, onOpen }) {
  return (
    <button type="button" className="team-card reveal" onClick={() => onOpen(attorney)}>
      <div className="team-card-photo-wrap">
        <img src={attorney.photo} alt={attorney.name} className="team-card-photo" />
      </div>
      <div className="team-card-body">
        <div className="team-card-name">{attorney.name}</div>
        <div className="team-card-title">{attorney.title}</div>
        <span className="team-rule" aria-hidden="true" />
        <p className="team-card-bio">{attorney.shortBio}</p>
        <span className="team-card-more">לפרופיל המלא ←</span>
      </div>
    </button>
  )
}

export default function LegalTeam() {
  useRevealOnScroll()
  const [popup, setPopup] = useState(null)
  const closePopup = useCallback(() => setPopup(null), [])

  const eran = attorneys[0]
  const team = attorneys.slice(1)

  return (
    <>
      <PageBanner
        crumbs={[{ label: 'הצוות המשפטי' }]}
        title="עורכי הדין"
        accent="שנלחמים בשבילכם"
      />

      {/* Founder */}
      <section className="team-section team-founder-section">
        <div className="team-founder reveal">
          <div className="team-founder-photo-col">
            <div className="team-founder-photo-frame">
              <img src={eran.photo} alt={eran.name} className="team-founder-photo" />
            </div>
          </div>
          <div className="team-founder-info">
            <span className="team-eyebrow">מייסד המשרד</span>
            <h2 className="team-founder-name">{eran.name}</h2>
            <div className="team-founder-title">{eran.title}</div>
            <span className="team-rule" aria-hidden="true" />
            <p className="team-founder-bio">{eran.shortBio}</p>
            <ul className="team-founder-roles">
              {eran.shortRoles.map((r, i) => (
                <li key={i}><GoldDiamond />{r}</li>
              ))}
            </ul>
            <button type="button" className="team-btn-navy" onClick={() => setPopup(eran)}>
              לפרופיל המלא ←
            </button>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="team-section team-dark-section">
        <div className="team-heading reveal">
          <h2>צוות עורכי הדין</h2>
          <span className="team-rule" aria-hidden="true" />
          <p className="team-subhead">לחצו על כרטיס כדי לקרוא את הפרופיל המלא, ההשכלה ופרטי הקשר</p>
        </div>
        <div className="team-cards">
          {team.map((a, i) => (
            <TeamCard key={i} attorney={a} onOpen={setPopup} />
          ))}
        </div>
      </section>

      {/* Attorney Popup */}
      <Modal isOpen={popup !== null} onClose={closePopup} className="team-modal">
        {popup && (
          <div className="team-modal-layout">
            <div className="team-modal-side">
              <div className="team-modal-photo-wrap">
                <img src={popup.photo} alt={popup.name} className="team-modal-photo" />
              </div>
              <div className="team-modal-contact">
                <div className="team-modal-contact-title">פרטי קשר</div>
                {popup.contact?.email && (
                  <a className="team-modal-contact-line" href={`mailto:${popup.contact.email}`}>
                    <MailIcon />{popup.contact.email}
                  </a>
                )}
                {popup.contact?.phone && (
                  <a className="team-modal-contact-line" href={site.phones.office.href}>
                    <PhoneIcon />{popup.contact.phone}
                  </a>
                )}
                {popup.contact?.fax && (
                  <span className="team-modal-contact-line">
                    <FaxIcon />{popup.contact.fax}
                  </span>
                )}
              </div>
            </div>

            <div className="team-modal-main">
              <h2 className="team-modal-name">{popup.name}</h2>
              <div className="team-modal-title">{popup.title}</div>
              <span className="team-rule" aria-hidden="true" />

              {popup.fullBio.map((p, i) => (
                <p key={i} className="team-modal-bio">{p}</p>
              ))}

              {popup.shortRoles && (
                <>
                  <div className="team-modal-section">תחומי התמחות</div>
                  <div className="team-pills">
                    {popup.shortRoles.map((item, i) => <span className="team-pill" key={i}>{item}</span>)}
                  </div>
                </>
              )}

              {popup.publicRoles && (
                <>
                  <div className="team-modal-section">פעילות ציבורית</div>
                  <ul className="team-modal-points">
                    {popup.publicRoles.map((item, i) => <li key={i}><GoldDiamond />{item}</li>)}
                  </ul>
                </>
              )}

              {popup.education && (
                <>
                  <div className="team-modal-section">השכלה וניסיון מקצועי</div>
                  <ul className="team-modal-points">
                    {popup.education.map((item, i) => <li key={i}><GoldDiamond />{item}</li>)}
                  </ul>
                </>
              )}

              <div className="team-modal-actions">
                <Link to="/#contact" className="team-btn-navy" onClick={closePopup}>קבעו ייעוץ ←</Link>
                <a href={site.phones.office.href} className="team-btn-navy-outline">{site.phones.office.display}</a>
              </div>
            </div>
          </div>
        )}
      </Modal>

      {/* Closing CTA */}
      <section className="team-section team-cream-section">
        <div className="team-cta reveal">
          <h2>ייעוץ ראשוני אישי ללא התחייבות</h2>
          <span className="team-rule" aria-hidden="true" />
          <p>צרו עימנו קשר עוד היום ונשמח לסייע לכם לקבל את הפיצוי המקסימלי מהגורמים הרלוונטיים.</p>
          <div className="team-cta-buttons">
            <a className="team-btn-navy" href={site.phones.office.href} dir="ltr">{site.phones.office.display}</a>
            <a className="team-btn-navy-outline" href="/#contact">פנו אלינו עכשיו ←</a>
          </div>
        </div>
      </section>
    </>
  )
}
