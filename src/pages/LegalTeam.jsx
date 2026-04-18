import { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import useRevealOnScroll from '../hooks/useRevealOnScroll'
import PageBanner from '../components/PageBanner'
import CTASection from '../components/CTASection'
import Modal from '../components/Modal'

const attorneys = [
  {
    name: 'עו"ד ערן בקר',
    title: 'מייסד',
    photo: '/pics/03_הצוות_המשפטי/eran.jpg',
    shortBio: 'מייסד המשרד בשנת 2003. מתמחה בתחום הרפואה והמשפט — נזיקין, רשלנות רפואית, תאונות דרכים ועבודה, ביטוח לאומי, תאונות ילדים וספורט, וחקירת סיבות מוות. ניסיון של כ-25 שנים.',
    shortRoles: [
      'יו"ר פורום נזיקין, ביטוח וביטוח לאומי',
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
    title: 'עורכת דין · נזיקין וביטוח',
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
    contact: { email: 'moran@ebeker.co.il', phone: '04-9001056', fax: '04-9001057' },
  },
  {
    name: 'עו"ד בלאר חיימוב',
    title: 'עורכת דין · נזיקין וביטוח',
    photo: '/pics/בלאר חיימוב.avif',
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
    contact: { email: 'bellar@ebeker.co.il', phone: '04-9001056', fax: '04-9001057' },
  },
  {
    name: 'עו"ד טניה ברנר',
    title: 'עורכת דין · ביטוח לאומי',
    photo: '/pics/03_הצוות_המשפטי/06_dcd181_1d8a3bcc45ac4360b80d6d07a644a02c~mv2.webp',
    shortBio: 'התמחתה בסנגוריה הציבורית. עבדה 9 שנים באחד המשרדים המובילים בארץ בנזיקין וביטוח. כיום עוסקת בייצוג תובעים בתחום נזקי הגוף במשרד בקר.',
    shortRoles: ['תאונות דרכים ותאונות עבודה', 'ביטוח לאומי וקצבאות', 'ליטיגציה וייצוג בבתי משפט'],
    fullBio: [
      'עו"ד טניה התמחתה בסנגוריה הציבורית ומיד לאחר מכן החלה לעבוד, 9 שנים, כעו"ד באחד המשרדים המובילים ביותר בארץ, בתחום הנזיקין והביטוח, בייצוג חברות ביטוח בטרם הצטרפה לחברת עורכי הדין בקר.',
      'בשנים האחרונות עובדת כעו"ד בחברת עורכי הדין בקר ועוסקת בייצוג תובעים בתחום נזקי הגוף: תביעות נזיקין, תאונות דרכים, חבויות, תאונת עבודה, ביטוח לאומי וליטיגציה.',
    ],
    education: [
      'תואר L.L.B במשפטים - האוניברסיטה העברית ירושלים',
      'חברת לשכת עורכי הדין בישראל',
      'הכשרה בדיני נזיקין וביטוח - לשכת עורכי הדין',
      'הכשרה בדיני ביטוח לאומי - לשכת עורכי הדין',
    ],
    contact: { email: 'tanya@ebeker.co.il', phone: '04-9001056', fax: '04-9001057' },
  },
]

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

      <section className="section">
        <div className="container">
          <div className="team-grid">
            {/* Featured — Eran Beker */}
            <div className="attorney-card-featured reveal" onClick={() => setPopup(eran)}>
              <img src={eran.photo} alt={eran.name} className="attorney-card-photo" />
              <div className="attorney-card-body">
                <div className="attorney-name">{eran.name}</div>
                <div className="attorney-title">{eran.title}</div>
                <div className="attorney-divider"></div>
                <p className="attorney-bio">{eran.shortBio}</p>
                <div className="attorney-roles">
                  {eran.shortRoles.map((r, i) => <div className="role" key={i}>{r}</div>)}
                </div>
                <div className="attorney-card-more">&#8592; לחצו לפרופיל המלא</div>
              </div>
            </div>

            {/* Team members */}
            {team.map((a, i) => (
              <div className="attorney-card reveal" key={i} onClick={() => setPopup(a)}>
                <img src={a.photo} alt={a.name} className="attorney-card-photo" />
                <div className="attorney-card-body">
                  <div className="attorney-name">{a.name}</div>
                  <div className="attorney-title">{a.title}</div>
                  <div className="attorney-divider"></div>
                  <p className="attorney-bio">{a.shortBio}</p>
                  <div className="attorney-card-more">&#8592; לפרופיל המלא</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Attorney Popup */}
      <Modal isOpen={popup !== null} onClose={closePopup} className={popup?.featured ? 'attorney-modal-wide' : ''}>
        {popup && (
          <div>
            <div className="attorney-popup-layout">
              <img src={popup.photo} alt={popup.name} className="attorney-popup-photo" />
              <div className="attorney-popup-info">
                <div className="attorney-name">{popup.name}</div>
                <div className="attorney-title">{popup.title}</div>
                <div className="attorney-divider" style={{ margin: '0 0 14px' }}></div>
                {popup.fullBio.map((p, i) => (
                  <p key={i} className="team-modal-bio">{p}</p>
                ))}
              </div>
            </div>

            {popup.education && (
              <>
                <div className="attorney-popup-section">השכלה וניסיון מקצועי</div>
                <ul className="modal-points">
                  {popup.education.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </>
            )}

            {popup.publicRoles && (
              <>
                <div className="attorney-popup-section">פעילות ציבורית</div>
                <ul className="modal-points">
                  {popup.publicRoles.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </>
            )}

            {popup.shortRoles && !popup.featured && (
              <>
                <div className="attorney-popup-section">תחומי התמחות</div>
                <ul className="modal-points">
                  {popup.shortRoles.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </>
            )}

            {popup.contact && (
              <div className="attorney-contact-line">
                <span>מייל: <a href={`mailto:${popup.contact.email}`}>{popup.contact.email}</a></span>
                <span className="attorney-contact-sep">|</span>
                <span>טל: {popup.contact.phone}</span>
                <span className="attorney-contact-sep">|</span>
                <span>פקס: {popup.contact.fax}</span>
              </div>
            )}

            <div className="modal-actions">
              <Link to="/#contact" className="btn-teal" onClick={closePopup}>קבעו ייעוץ &#8592;</Link>
              <a href="tel:049001056" className="btn-outline-dark">&#128222; 04-9001056</a>
            </div>
          </div>
        )}
      </Modal>

      <CTASection title="רוצים לדבר עם עורך דין?" subtitle="ייעוץ ראשוני חינם — ללא עלות וללא התחייבות" />
    </>
  )
}
