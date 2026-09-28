import { Link } from 'react-router-dom'
import { site, whatsappLink } from '../config/site'
import { openCookieSettings } from '../lib/consent'

export default function Footer() {
  return (
    <footer>
      <nav className="footer-linkbar" aria-label="קישורים מהירים">
        <Link to="/about">אודות</Link>
        <span className="footer-linkbar-sep" aria-hidden="true">·</span>
        <Link to="/legal-team">הצוות המשפטי</Link>
        <span className="footer-linkbar-sep" aria-hidden="true">·</span>
        <a href="/#areas">תחומי עיסוק</a>
        <span className="footer-linkbar-sep" aria-hidden="true">·</span>
        <Link to="/privacy">מדיניות פרטיות</Link>
        <span className="footer-linkbar-sep" aria-hidden="true">·</span>
        <Link to="/accessibility">נגישות האתר</Link>
      </nav>
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="fl">{site.legalName}</div>
          <p>{site.address.full}<br />מדורג DUNS 100 ו-BDi CODE — ממשרדי עורכי הדין המובילים בישראל.</p>
        </div>
        <div className="footer-col">
          <h4>תחומים</h4>
          <Link to="/damages">נזיקין כללי</Link>
          <Link to="/medical-malpractice">רשלנות רפואית</Link>
          <Link to="/insurance">ביטוח</Link>
          <Link to="/marine-accidents">תאונות ימיות</Link>
          <Link to="/student-accidents">תאונות תלמידים</Link>
          <Link to="/wills">צוואות וירושות</Link>
          <Link to="/power-of-attorney">ייפוי כוח מתמשך</Link>
        </div>
        <div className="footer-col">
          <h4>צור קשר</h4>
          <a href={site.phones.office.href}>{site.phones.office.display}</a>
          <a href={whatsappLink('')} target="_blank" rel="noopener">{site.phones.whatsapp.display} (וואטסאפ)</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <p>פקס: {site.phones.fax.display}</p>
        </div>
      </div>
      <hr className="footer-divider" />
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} {site.legalName}. כל הזכויות שמורות.</p>
        <p className="footer-legal">
          <Link to="/terms">תנאי שימוש</Link>
          <span className="footer-legal-sep" aria-hidden="true">·</span>
          <button type="button" className="footer-legal-btn" onClick={openCookieSettings}>הגדרות עוגיות</button>
        </p>
        <p><span>DUNS 100 · BDi CODE</span></p>
      </div>
    </footer>
  )
}
