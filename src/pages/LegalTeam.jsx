import { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import useRevealOnScroll from '../hooks/useRevealOnScroll'
import Breadcrumb from '../components/Breadcrumb'
import CTASection from '../components/CTASection'
import Modal from '../components/Modal'

const attorneys = [
  {
    name: 'עו"ד ערן בקר',
    title: 'מייסד',
    photo: '/pics/03_הצוות_המשפטי/03_dcd181_6838d586917e45cd9c3647aa83459cbe~mv2.jpg',
    shortBio: 'מייסד המשרד בשנת 2003. מתמחה בתחום הרפואה והמשפט — נזיקין, רשלנות רפואית, תאונות דרכים ועבודה, ביטוח לאומי, תאונות ילדים וספורט, וחקירת סיבות מוות. ניסיון של כ-21 שנים.',
    shortRoles: [
      'יו"ר פורום נזיקין, ביטוח וביטוח לאומי',
      'יו"ר פורום ביטוח ארצי',
      'משנה ליו"ר לשכת עוה"ד מחוז חיפה',
    ],
    fullBio: [
      'עורך הדין ערן בקר התמחה ועבד כעו"ד במשרד פרטי שעסק בתחום נזקי גוף בטרם הקים את משרדו.',
      'בשנת 2003 הקים את משרדו שהתפתח וגדל בהתמדה.',
      'ערן בקר מתמחה מזה שנים בתחום הרפואה והמשפט - תביעות נזיקין, תאונות קטלניות, תאונות דרכים, תאונות עבודה, רשלנות רפואית, ביטוח לאומי, נפגעי צבא וכוחות הביטחון, תאונות ילדים / תלמידים, תאונות במתקני ספורט, תביעות נזיקין נגד רשויות מקומיות, דיני ביטוח, ניהול סיכונים ומשברים ברפואה, חקירת סיבות מוות ועוד.',
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
    name: 'עו"ד מורן',
    title: 'שותפה · נזיקין וביטוח',
    photo: '/pics/03_הצוות_המשפטי/04_dcd181_8e95dbbd82644353b358b3e68dc9359c~mv2.jpg',
    shortBio: 'התמחתה ועבדה כ-10 שנים באחד המשרדים המובילים בארץ בייצוג חברות ביטוח. כיום מתמחה בייצוג תובעים בתחום נזקי הגוף בחברת עורכי הדין בקר.',
    shortRoles: ['נזיקין כללי וביטוח לאומי', 'תאונות דרכים ותאונות עבודה', 'רשלנות רפואית וליטיגציה'],
    fullBio: [
      'התמחתה ועבדה כ-10 שנים באחד המשרדים המובילים בארץ בתחום הנזיקין והביטוח בייצוג חברות ביטוח.',
      'בשנים האחרונות עובדת בחברת עורכי הדין בקר ומתמחה בייצוג תובעים בתחום נזקי הגוף.',
    ],
  },
  {
    name: 'עו"ד דנה אהרוני בקי',
    title: 'עורכת דין · ליטיגציה',
    photo: '/pics/03_הצוות_המשפטי/05_dcd181_4e948ccc200a4d6ca548268eac359982~mv2.jpg',
    shortBio: 'התמחתה בפרקליטות המדינה, מחלקה פלילית מחוז צפון. עבדה במשרד פרטי בחיפה בנזקי גוף, תביעות ביטוח ודיני עבודה, ולאחר מכן הצטרפה למשרד בקר.',
    shortRoles: ['נזקי גוף ותביעות ביטוח', 'דיני עבודה וביטוח לאומי', 'ליטיגציה אזרחית ופלילית'],
    fullBio: [
      'התמחתה בפרקליטות המדינה, מחלקה פלילית מחוז צפון.',
      'לאחר מכן עבדה במשרד פרטי בחיפה המתמחה בנזקי גוף, תביעות ביטוח, דיני עבודה וביטוח לאומי, ולאחר מכן הצטרפה לחברת עורכי הדין בקר.',
    ],
  },
  {
    name: 'עו"ד טניה',
    title: 'עורכת דין · ביטוח לאומי',
    photo: '/pics/03_הצוות_המשפטי/06_dcd181_1d8a3bcc45ac4360b80d6d07a644a02c~mv2.jpg',
    shortBio: 'התמחתה בסנגוריה הציבורית. עבדה 9 שנים באחד המשרדים המובילים בארץ בנזיקין וביטוח. כיום עוסקת בייצוג תובעים בתחום נזקי הגוף במשרד בקר.',
    shortRoles: ['תאונות דרכים ותאונות עבודה', 'ביטוח לאומי וקצבאות', 'ליטיגציה וייצוג בבתי משפט'],
    fullBio: [
      'התמחתה בסנגוריה הציבורית.',
      'לאחר מכן עבדה 9 שנים באחד המשרדים המובילים בארץ בתחום הנזיקין והביטוח.',
      'בשנים האחרונות עובדת בחברת עורכי הדין בקר ועוסקת בייצוג תובעים בתחום נזקי הגוף.',
    ],
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
      <Breadcrumb items={[{ label: 'הצוות המשפטי' }]} />

      <section className="hero">
        <div className="hero-inner">
          <p className="hero-eyebrow">הצוות המשפטי</p>
          <h1>עורכי הדין<span className="accent">שנלחמים בשבילכם</span></h1>
          <p className="hero-sub">צוות מנוסה ומסור, עם עשרות שנות ניסיון משולב בייצוג נפגעי גוף.</p>
          <div className="hero-btns">
            <Link to="/#contact" className="btn-teal">קבעו ייעוץ חינם &#8592;</Link>
            <a href="tel:049001056" className="btn-outline-white">&#128222; 04-9001056</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 56 }}>
            <h2 className="section-title">מומחים בייצוג נפגעי גוף</h2>
          </div>

          <img src="/pics/03_הצוות_המשפטי/02_dcd181_0d43c8931f52465fb7cfd6ee3dc39a8b~mv2.png" alt="הצוות המשפטי של ערן בקר" className="team-banner reveal" />

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
